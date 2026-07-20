import { prisma } from "@/lib/prisma";
import { NotFoundError, ConflictError, UnauthorizedError } from "@/utils/errors";
import type { CreateOrganizationInput, UpdateOrganizationInput, AddMemberInput } from "@/schemas/organization.schema";
import type { Role } from "@prisma/client";

// Kullanıcının bir organizasyonda üye olup olmadığını kontrol et
async function checkMembership(organizationId: string, userId: string) {
  const member = await prisma.organizationMember.findUnique({
    where: { organizationId_userId: { organizationId, userId } },
  });
  return member;
}

// Kullanıcının ADMIN olup olmadığını kontrol et
async function checkAdmin(organizationId: string, userId: string) {
  const member = await checkMembership(organizationId, userId);
  return member?.role === "ADMIN";
}

// --- CRUD ---

export async function createOrganization(input: CreateOrganizationInput, userId: string) {
  const org = await prisma.organization.create({
    data: {
      name: input.name,
      description: input.description,
      ownerId: userId,
      members: {
        create: { userId, role: "ADMIN" },
      },
    },
    include: {
      members: {
        include: { user: { select: { id: true, name: true, email: true } } },
      },
    },
  });

  return org;
}

export async function getMyOrganizations(userId: string) {
  const memberships = await prisma.organizationMember.findMany({
    where: { userId },
    include: {
      organization: {
        include: {
          _count: { select: { members: true, projects: true } },
        },
      },
    },
    orderBy: { joinedAt: "desc" },
  });

  return memberships.map((m) => ({
    ...m.organization,
    role: m.role,
    memberCount: m.organization._count.members,
    projectCount: m.organization._count.projects,
  }));
}

export async function getOrganizationById(organizationId: string, userId: string) {
  const member = await checkMembership(organizationId, userId);
  if (!member) throw new UnauthorizedError("Bu organizasyona erişim yetkiniz yok");

  const org = await prisma.organization.findUnique({
    where: { id: organizationId },
    include: {
      members: {
        include: { user: { select: { id: true, name: true, email: true } } },
      },
      projects: {
        select: { id: true, name: true, description: true, createdAt: true },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!org) throw new NotFoundError("Organizasyon");

  return { ...org, myRole: member.role };
}

export async function updateOrganization(organizationId: string, input: UpdateOrganizationInput, userId: string) {
  const isAdmin = await checkAdmin(organizationId, userId);
  if (!isAdmin) throw new UnauthorizedError("Sadece adminler organizasyonu düzenleyebilir");

  const org = await prisma.organization.update({
    where: { id: organizationId },
    data: input,
  });

  return org;
}

export async function deleteOrganization(organizationId: string, userId: string) {
  const org = await prisma.organization.findUnique({ where: { id: organizationId } });
  if (!org) throw new NotFoundError("Organizasyon");
  if (org.ownerId !== userId) throw new UnauthorizedError("Sadece kurucu organizasyonu silebilir");

  await prisma.organization.delete({ where: { id: organizationId } });
}

// --- ÜYE YÖNETİMİ ---

export async function addMember(organizationId: string, input: AddMemberInput, userId: string) {
  const isAdmin = await checkAdmin(organizationId, userId);
  if (!isAdmin) throw new UnauthorizedError("Sadece adminler üye ekleyebilir");

  // Email ile kullanıcıyı bul
  const user = await prisma.user.findUnique({ where: { email: input.email } });
  if (!user) throw new NotFoundError("Bu email ile kayıtlı kullanıcı bulunamadı");

  // Zaten üye mi?
  const existing = await checkMembership(organizationId, user.id);
  if (existing) throw new ConflictError("Bu kullanıcı zaten organizasyon üyesi");

  const member = await prisma.organizationMember.create({
    data: {
      organizationId,
      userId: user.id,
      role: (input.role ?? "MEMBER") as Role,
    },
    include: {
      user: { select: { id: true, name: true, email: true } },
    },
  });

  return member;
}

export async function removeMember(organizationId: string, memberUserId: string, userId: string) {
  const isAdmin = await checkAdmin(organizationId, userId);
  if (!isAdmin) throw new UnauthorizedError("Sadece adminler üye çıkarabilir");

  // Kurucu çıkarılamaz
  const org = await prisma.organization.findUnique({ where: { id: organizationId } });
  if (org?.ownerId === memberUserId) throw new UnauthorizedError("Kurucu organizasyondan çıkarılamaz");

  // Kendini çıkarmaya çalışıyorsa admin de olsa izin ver (ayrılma)
  const member = await checkMembership(organizationId, memberUserId);
  if (!member) throw new NotFoundError("Üye");

  await prisma.organizationMember.delete({
    where: { organizationId_userId: { organizationId, userId: memberUserId } },
  });
}
