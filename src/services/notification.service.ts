import { prisma } from "@/lib/prisma";
import { NotFoundError, ForbiddenError } from "@/utils/errors";
import type { NotificationType } from "@prisma/client";
import { getIO, broadcastToUser, SocketEvents } from "@/server/socket";

interface CreateNotificationInput {
  userId: string;
  type: NotificationType;
  message: string;
  cardId?: string;
  invitationId?: string;
}

export async function createNotification(input: CreateNotificationInput) {
  const notification = await prisma.notification.create({
    data: {
      userId: input.userId,
      type: input.type,
      message: input.message,
      cardId: input.cardId,
      invitationId: input.invitationId,
    },
    include: {
      card: { select: { id: true, title: true } },
      invitation: { select: { id: true, status: true } },
    },
  });

  // Emit real-time notification via Socket.io
  const io = getIO();
  console.log(`[NOTIFICATION] Creating notification for user ${input.userId}, type: ${input.type}, message: ${input.message}`);
  if (io) {
    console.log(`[NOTIFICATION] Socket.io available, emitting ${SocketEvents.NOTIFICATION_NEW} to user:${input.userId}`);
    broadcastToUser(input.userId, SocketEvents.NOTIFICATION_NEW, notification);
  } else {
    console.log(`[NOTIFICATION] Socket.io NOT available (io is null), skipping real-time emit`);
  }

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
      invitation: { select: { id: true, status: true } },
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

  // Emit real-time read event
  const io = getIO();
  if (io) {
    broadcastToUser(userId, SocketEvents.NOTIFICATION_READ, { notificationId, read: true });
  }

  return updated;
}

export async function markAllAsRead(userId: string) {
  await prisma.notification.updateMany({
    where: { userId, read: false },
    data: { read: true },
  });

  // Emit real-time all-read event
  const io = getIO();
  if (io) {
    broadcastToUser(userId, SocketEvents.NOTIFICATION_ALL_READ, { success: true });
  }

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

  // Create notifications in DB
  await prisma.notification.createMany({
    data: filtered.map((m) => ({
      userId: m.userId,
      type,
      message,
    })),
  });

  // Emit real-time notification via socket to each member
  const io = getIO();
  if (io) {
    for (const member of filtered) {
      const notification = {
        userId: member.userId,
        type,
        message,
        createdAt: new Date().toISOString(),
        read: false,
      };
      broadcastToUser(member.userId, SocketEvents.NOTIFICATION_NEW, notification);
    }
  }
}