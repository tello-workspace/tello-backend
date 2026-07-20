import { prisma } from "@/lib/prisma";
import { NotFoundError, ForbiddenError } from "@/utils/errors";
import type { CreateCardInput, UpdateCardInput } from "@/schemas/card.schema";
import type { Priority } from "@prisma/client";

// Kolonun projesine ve organizasyonuna erişim kontrolü
async function checkColumnAccess(columnId: string, userId: string) {
  const column = await prisma.column.findUnique({
    where: { id: columnId },
    select: { projectId: true, project: { select: { organizationId: true } } },
  });
  if (!column) throw new NotFoundError("Sütun");

  const member = await prisma.organizationMember.findUnique({
    where: {
      organizationId_userId: {
        organizationId: column.project.organizationId,
        userId,
      },
    },
  });
  if (!member) throw new ForbiddenError("Bu projeye erişim yetkiniz yok");

  return { role: member.role };
}

// Fraksiyonel pozisyon hesapla
// Verilen kolonda en sondaki position'ı bulup +1 verir
async function getNextPosition(columnId: string): Promise<number> {
  const lastCard = await prisma.card.findFirst({
    where: { columnId },
    orderBy: { position: "desc" },
    select: { position: true },
  });
  return (lastCard?.position ?? 0) + 1;
}

// Atanan kişinin organizasyon üyesi olduğunu doğrula
async function validateAssignee(columnId: string, assigneeId: string) {
  const column = await prisma.column.findUnique({
    where: { id: columnId },
    select: { project: { select: { organizationId: true } } },
  });
  if (!column) throw new NotFoundError("Sütun");

  const member = await prisma.organizationMember.findUnique({
    where: {
      organizationId_userId: {
        organizationId: column.project.organizationId,
        userId: assigneeId,
      },
    },
  });
  if (!member) throw new ForbiddenError("Atanan kişi bu organizasyonun üyesi değil");
}

export async function createCard(columnId: string, input: CreateCardInput, userId: string) {
  await checkColumnAccess(columnId, userId);

  if (input.assigneeId) {
    await validateAssignee(columnId, input.assigneeId);
  }

  const position = input.position ?? (await getNextPosition(columnId));

  const card = await prisma.card.create({
    data: {
      columnId,
      title: input.title,
      description: input.description,
      creatorId: userId,
      assigneeId: input.assigneeId,
      priority: (input.priority as Priority) ?? "MEDIUM",
      dueDate: input.dueDate ? new Date(input.dueDate) : undefined,
      position,
      lastActivityAt: new Date(),
    },
    include: {
      assignee: { select: { id: true, name: true, email: true } },
    },
  });

  return card;
}

export async function getCards(columnId: string, userId: string) {
  await checkColumnAccess(columnId, userId);

  const cards = await prisma.card.findMany({
    where: { columnId },
    orderBy: { position: "asc" },
    include: {
      assignee: { select: { id: true, name: true, email: true } },
      _count: { select: { comments: true } },
    },
  });

  return cards;
}

export async function getCardById(cardId: string, userId: string) {
  const card = await prisma.card.findUnique({
    where: { id: cardId },
    include: {
      assignee: { select: { id: true, name: true, email: true } },
      column: { select: { id: true, name: true, projectId: true } },
      comments: {
        orderBy: { createdAt: "desc" },
        include: { author: { select: { id: true, name: true, email: true } } },
      },
      labels: { include: { label: true } },
      blocking: {
        include: { blocked: { select: { id: true, title: true } } },
      },
      blockedBy: {
        include: { blocker: { select: { id: true, title: true } } },
      },
    },
  });

  if (!card) throw new NotFoundError("Kart");

  // Yetki kontrolü: kartın kolonunun projesine erişim var mı?
  await checkColumnAccess(card.columnId, userId);

  return card;
}

export async function updateCard(cardId: string, input: UpdateCardInput, userId: string) {
  const card = await prisma.card.findUnique({ where: { id: cardId } });
  if (!card) throw new NotFoundError("Kart");

  await checkColumnAccess(card.columnId, userId);

  // Kolon değişikliği varsa hedef kolonun da erişilebilir olduğunu kontrol et
  const isColumnChange = input.columnId && input.columnId !== card.columnId;
  if (isColumnChange) {
    await checkColumnAccess(input.columnId, userId);
  }

  const updateData: Record<string, unknown> = {};
  if (input.title !== undefined) updateData.title = input.title;
  if (input.description !== undefined) updateData.description = input.description;
  if (input.priority !== undefined) updateData.priority = input.priority as Priority;
  if (input.assigneeId !== undefined) {
    // null ise atamayı kaldır, değilse üyeliği doğrula
    if (input.assigneeId !== null) {
      const colId = input.columnId ?? card.columnId;
      await validateAssignee(colId, input.assigneeId);
    }
    updateData.assigneeId = input.assigneeId;
  }
  if (input.dueDate !== undefined) updateData.dueDate = input.dueDate ? new Date(input.dueDate) : null;
  if (input.columnId !== undefined) updateData.columnId = input.columnId;
  if (input.position !== undefined) updateData.position = input.position;

  // Kolon değişikliği var ama position verilmemişse sona ekle
  if (isColumnChange && input.position === undefined) {
    const lastCard = await prisma.card.findFirst({
      where: { columnId: input.columnId },
      orderBy: { position: "desc" },
      select: { position: true },
    });
    updateData.position = (lastCard?.position ?? 0) + 1;
  }

  // Kartta değişiklik var → lastActivityAt güncelle
  if (Object.keys(updateData).length > 0) {
    updateData.lastActivityAt = new Date();
  }

  const updated = await prisma.card.update({
    where: { id: cardId },
    data: updateData,
    include: {
      assignee: { select: { id: true, name: true, email: true } },
    },
  });

  return updated;
}

export async function deleteCard(cardId: string, userId: string) {
  const card = await prisma.card.findUnique({ where: { id: cardId } });
  if (!card) throw new NotFoundError("Kart");

  await checkColumnAccess(card.columnId, userId);

  await prisma.card.delete({ where: { id: cardId } });
}
