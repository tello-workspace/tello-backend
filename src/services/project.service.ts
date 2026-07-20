import { prisma } from "@/lib/prisma";
import { NotFoundError, ForbiddenError } from "@/utils/errors";
import type { CreateProjectInput, UpdateProjectInput } from "@/schemas/project.schema";

// Organization üyeliğini kontrol et
async function checkMembership(organizationId: string, userId: string) {
  const member = await prisma.organizationMember.findUnique({
    where: { organizationId_userId: { organizationId, userId } },
  });
  return member;
}

// ADMIN mi kontrol et
async function checkAdmin(organizationId: string, userId: string) {
  const member = await checkMembership(organizationId, userId);
  return member?.role === "ADMIN";
}

export async function createProject(organizationId: string, input: CreateProjectInput, userId: string) {
  const member = await checkMembership(organizationId, userId);
  if (!member) throw new ForbiddenError("Bu organizasyonda proje oluşturma yetkiniz yok");

  const project = await prisma.project.create({
    data: {
      name: input.name,
      description: input.description,
      organizationId,
      ownerId: userId,
      columns: {
        create: [
          { name: "To Do", position: 1 },
          { name: "In Progress", position: 2 },
          { name: "Done", position: 3, isDone: true },
        ],
      },
    },
    include: {
      columns: { orderBy: { position: "asc" } },
    },
  });

  return project;
}

export async function getProjects(organizationId: string, userId: string) {
  const member = await checkMembership(organizationId, userId);
  if (!member) throw new ForbiddenError("Bu organizasyona erişim yetkiniz yok");

  const projects = await prisma.project.findMany({
    where: { organizationId },
    include: {
      _count: { select: { columns: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return projects;
}

export async function getProjectById(organizationId: string, projectId: string, userId: string) {
  const member = await checkMembership(organizationId, userId);
  if (!member) throw new ForbiddenError("Bu organizasyona erişim yetkiniz yok");

  const project = await prisma.project.findFirst({
    where: { id: projectId, organizationId },
    include: {
      columns: {
        orderBy: { position: "asc" },
        include: {
          _count: { select: { cards: true } },
        },
      },
      _count: { select: { columns: true } },
    },
  });

  if (!project) throw new NotFoundError("Proje");

  return project;
}

export async function updateProject(organizationId: string, projectId: string, input: UpdateProjectInput, userId: string) {
  const member = await checkMembership(organizationId, userId);
  if (!member) throw new ForbiddenError("Bu organizasyona erişim yetkiniz yok");

  const project = await prisma.project.findFirst({
    where: { id: projectId, organizationId },
  });
  if (!project) throw new NotFoundError("Proje");

  const updated = await prisma.project.update({
    where: { id: projectId },
    data: input,
  });

  return updated;
}

export async function deleteProject(organizationId: string, projectId: string, userId: string) {
  const isAdmin = await checkAdmin(organizationId, userId);
  if (!isAdmin) throw new ForbiddenError("Sadece adminler proje silebilir");

  const project = await prisma.project.findFirst({
    where: { id: projectId, organizationId },
  });
  if (!project) throw new NotFoundError("Proje");

  await prisma.project.delete({ where: { id: projectId } });
}
