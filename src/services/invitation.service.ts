import { prisma } from "@/lib/prisma";
import { NotFoundError, ConflictError, UnauthorizedError } from "@/utils/errors";
import * as notificationService from "@/services/notification.service";

export async function createInvitation(organizationId: string, email: string, inviterId: string) {
  // Davet eden admin mi?
  const inviterMember = await prisma.organizationMember.findUnique({
    where: { organizationId_userId: { organizationId, userId: inviterId } },
  });
  if (!inviterMember || inviterMember.role !== "ADMIN") {
    throw new UnauthorizedError("Sadece adminler davet gönderebilir");
  }

  // Email ile kullanıcı var mı?
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new NotFoundError("Bu email ile kayıtlı kullanıcı bulunamadı");

  // Zaten üye mi?
  const existing = await prisma.organizationMember.findUnique({
    where: { organizationId_userId: { organizationId, userId: user.id } },
  });
  if (existing) throw new ConflictError("Bu kullanıcı zaten organizasyon üyesi");

  // Zaten bekleyen davet var mı?
  const pending = await prisma.invitation.findFirst({
    where: { organizationId, inviteeEmail: email, status: "PENDING" },
  });
  if (pending) throw new ConflictError("Bu kullanıcıya zaten bekleyen bir davet var");

  const org = await prisma.organization.findUnique({
    where: { id: organizationId },
    select: { name: true },
  });

  // Daveti oluştur
  const invitation = await prisma.invitation.create({
    data: {
      organizationId,
      inviterId,
      inviteeEmail: email,
      status: "PENDING",
    },
  });

  // Bildirim gönder
  await notificationService.createNotification({
    userId: user.id,
    type: "ORG_INVITE",
    message: `"${org?.name ?? "Organizasyon"}" organizasyonuna davet edildiniz`,
    invitationId: invitation.id,
  });

  return invitation;
}

export async function acceptInvitation(invitationId: string, userId: string) {
  const invitation = await prisma.invitation.findUnique({
    where: { id: invitationId },
    include: { organization: { select: { name: true } } },
  });
  if (!invitation) throw new NotFoundError("Davet bulunamadı");

  if (invitation.status !== "PENDING") {
    throw new ConflictError("Bu davet zaten işleme alınmış");
  }

  // Kullanıcının email'i davetteki email ile eşleşiyor mu?
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user || user.email !== invitation.inviteeEmail) {
    throw new UnauthorizedError("Bu davet size ait değil");
  }

  // Daveti kabul et
  const updated = await prisma.invitation.update({
    where: { id: invitationId },
    data: { status: "ACCEPTED" },
  });

  // Kullanıcıyı organizasyona ekle
  await prisma.organizationMember.create({
    data: {
      organizationId: invitation.organizationId,
      userId,
      role: "MEMBER",
    },
  });

  return updated;
}

export async function declineInvitation(invitationId: string, userId: string) {
  const invitation = await prisma.invitation.findUnique({ where: { id: invitationId } });
  if (!invitation) throw new NotFoundError("Davet bulunamadı");

  if (invitation.status !== "PENDING") {
    throw new ConflictError("Bu davet zaten işleme alınmış");
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user || user.email !== invitation.inviteeEmail) {
    throw new UnauthorizedError("Bu davet size ait değil");
  }

  const updated = await prisma.invitation.update({
    where: { id: invitationId },
    data: { status: "DECLINED" },
  });

  return updated;
}

export async function getPendingInvitations(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new NotFoundError("Kullanıcı");

  const invitations = await prisma.invitation.findMany({
    where: { inviteeEmail: user.email, status: "PENDING" },
    include: {
      organization: { select: { id: true, name: true } },
      inviter: { select: { id: true, name: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return invitations;
}
