import { prisma } from "@/lib/prisma";
import { NotFoundError, ForbiddenError } from "@/utils/errors";
import type { CreateCommentInput, UpdateCommentInput } from "@/schemas/comment.schema";

// Kartın kolonuna → projesine → organizasyonuna erişim kontrolü
async function checkCardAccess(cardId: string, userId: string) {
  const card = await prisma.card.findUnique({
    where: { id: cardId },
    select: { column: { select: { project: { select: { organizationId: true } } } } },
  });
  if (!card) throw new NotFoundError("Kart");

  const member = await prisma.organizationMember.findUnique({
    where: {
      organizationId_userId: {
        organizationId: card.column.project.organizationId,
        userId,
      },
    },
  });
  if (!member) throw new ForbiddenError("Bu karta erişim yetkiniz yok");

  return { role: member.role };
}

export async function getComments(cardId: string, userId: string) {
  await checkCardAccess(cardId, userId);

  const comments = await prisma.comment.findMany({
    where: { cardId },
    orderBy: { createdAt: "asc" },
    include: {
      author: { select: { id: true, name: true, email: true } },
    },
  });

  return comments;
}

export async function createComment(cardId: string, input: CreateCommentInput, userId: string) {
  await checkCardAccess(cardId, userId);

  const comment = await prisma.comment.create({
    data: {
      cardId,
      authorId: userId,
      text: input.text,
    },
    include: {
      author: { select: { id: true, name: true, email: true } },
    },
  });

  return comment;
}

export async function getCommentById(commentId: string, userId: string) {
  const comment = await prisma.comment.findUnique({
    where: { id: commentId },
    include: {
      author: { select: { id: true, name: true, email: true } },
    },
  });
  if (!comment) throw new NotFoundError("Yorum");

  // Yorumun ait olduğu karta erişim yetkisini kontrol et
  await checkCardAccess(comment.cardId, userId);

  return comment;
}

export async function updateComment(commentId: string, input: UpdateCommentInput, userId: string) {
  const comment = await prisma.comment.findUnique({ where: { id: commentId } });
  if (!comment) throw new NotFoundError("Yorum");

  // Sadece yazarı düzenleyebilir
  if (comment.authorId !== userId) throw new ForbiddenError("Sadece kendi yorumunuzu düzenleyebilirsiniz");

  // Kart erişim kontrolü
  await checkCardAccess(comment.cardId, userId);

  const updated = await prisma.comment.update({
    where: { id: commentId },
    data: { text: input.text },
    include: {
      author: { select: { id: true, name: true, email: true } },
    },
  });

  return updated;
}

export async function deleteComment(commentId: string, userId: string) {
  const comment = await prisma.comment.findUnique({ where: { id: commentId } });
  if (!comment) throw new NotFoundError("Yorum");

  // Sadece yazarı silebilir
  if (comment.authorId !== userId) throw new ForbiddenError("Sadece kendi yorumunuzu silebilirsiniz");

  // Kart erişim kontrolü
  await checkCardAccess(comment.cardId, userId);

  await prisma.comment.delete({ where: { id: commentId } });
}
