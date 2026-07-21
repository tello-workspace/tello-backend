import { prisma } from "@/lib/prisma";
import { NotFoundError, ConflictError, UnauthorizedError } from "@/utils/errors";
import * as notificationService from "@/services/notification.service";
import * as invitationService from "@/services/invitation.service";
import { getIO, broadcastToOrganization, SocketEvents } from "@/server/socket";
import type { CreateOrganizationInput, UpdateOrganizationInput, AddMemberInput, UpdateMemberRoleInput } from "@/schemas/organization.schema";
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
  // Davet oluştur (invitationService email ile davet oluşturup bildirim gönderir)
  const invitation = await invitationService.createInvitation(organizationId, input.email, userId);
  return invitation;
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

  // Bildirimi silme işlemi öncesinde gönder
  const removedUser = await prisma.user.findUnique({
    where: { id: memberUserId },
    select: { id: true, name: true, email: true },
  });
  await notificationService.createNotification({
    userId: memberUserId,
    type: "ORG_REMOVED",
    message: `"${org?.name ?? "Organizasyon"}" organizasyonundan çıkarıldınız`,
  });

  // Socket.io emit — üye çıkarıldı
  if (removedUser) {
    broadcastToOrganization(organizationId, SocketEvents.ORG_MEMBER_REMOVED, {
      organizationId,
      userId: memberUserId,
      userName: removedUser.name,
      removedBy: "admin",
    });
  }

  await prisma.organizationMember.delete({
    where: { organizationId_userId: { organizationId, userId: memberUserId } },
  });
}

export async function updateMemberRole(organizationId: string, input: UpdateMemberRoleInput, userId: string) {
  const isAdmin = await checkAdmin(organizationId, userId);
  if (!isAdmin) throw new UnauthorizedError("Sadece adminler rol değiştirebilir");

  const org = await prisma.organization.findUnique({ where: { id: organizationId } });
  if (!org) throw new NotFoundError("Organizasyon");

  if (org.ownerId === input.userId) {
    throw new UnauthorizedError("Kurucunun rolü değiştirilemez");
  }

  const member = await checkMembership(organizationId, input.userId);
  if (!member) throw new NotFoundError("Üye");

  const updated = await prisma.organizationMember.update({
    where: { organizationId_userId: { organizationId, userId: input.userId } },
    data: { role: input.role as Role },
    include: {
      user: { select: { id: true, name: true, email: true } },
    },
  });

  // Sadece admin yapılınca bildirim git
  if (input.role === "ADMIN") {
    await notificationService.createNotification({
      userId: input.userId,
      type: "ROLE_CHANGED",
      message: `"${org.name}" organizasyonunda yönetici yapıldınız`,
    });
  }

  // Socket.io emit — rol değişti
  broadcastToOrganization(organizationId, SocketEvents.ORG_MEMBER_ROLE_CHANGED, {
    organizationId,
    userId: input.userId,
    userName: updated.user.name,
    role: input.role,
    changedBy: "admin",
  });

  return updated;
}
