import { prisma } from "@/lib/prisma";
import { NotFoundError, ForbiddenError } from "@/utils/errors";
import type { NotificationType } from "@prisma/client";

interface CreateNotificationInput {
  userId: string;
  type: NotificationType;
  message: string;
  cardId?: string;
}

export async function createNotification(input: CreateNotificationInput) {
  const notification = await prisma.notification.create({
    data: {
      userId: input.userId,
      type: input.type,
      message: input.message,
      cardId: input.cardId,
    },
    include: {
      card: { select: { id: true, title: true } },
    },
  });

  return notification;
}

export async function getNotifications(userId: string, unreadOnly?: boolean) {
  const where: Record<string, unknown> = { userId };
  if (unreadOnly) where.read = false;

  const notifications = await prisma.notification.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: 50,
    include: {
      card: { select: { id: true, title: true } },
    },
  });

  return notifications;
}

export async function getUnreadCount(userId: string) {
  const count = await prisma.notification.count({
    where: { userId, read: false },
  });

  return count;
}

export async function markAsRead(notificationId: string, userId: string) {
  const notification = await prisma.notification.findUnique({
    where: { id: notificationId },
  });

  if (!notification) throw new NotFoundError("Bildirim");
  if (notification.userId !== userId) throw new ForbiddenError("Bu bildirimi okuma yetkiniz yok");

  const updated = await prisma.notification.update({
    where: { id: notificationId },
    data: { read: true },
  });

  return updated;
}

export async function markAllAsRead(userId: string) {
  await prisma.notification.updateMany({
    where: { userId, read: false },
    data: { read: true },
  });

  return { success: true };
}

export async function broadcastToOrganization(
  organizationId: string,
  type: NotificationType,
  message: string,
  excludeUserId?: string,
) {
  const members = await prisma.organizationMember.findMany({
    where: { organizationId },
    select: { userId: true },
  });

  const filtered = excludeUserId
    ? members.filter((m) => m.userId !== excludeUserId)
    : members;

  if (filtered.length === 0) return;

  await prisma.notification.createMany({
    data: filtered.map((m) => ({
      userId: m.userId,
      type,
      message,
    })),
  });
}
