import { prisma } from "@/lib/prisma";
import type { ActivityType, Prisma } from "@prisma/client";

type ActivityInput = {
  projectId: string;
  cardId?: string;
  userId: string;
  type: ActivityType;
  data?: Prisma.InputJsonValue;
};

/**
 * Aktivite loglama yardımcısı.
 * Her önemli olay (kart oluşturma, taşıma, atama vb.) bu fonksiyonla kaydedilir.
 * Haftalık özet ve aktivite akışı bu verilerden üretilir.
 */
export async function logActivity(input: ActivityInput): Promise<void> {
  await prisma.activity.create({
    data: {
      projectId: input.projectId,
      cardId: input.cardId,
      userId: input.userId,
      type: input.type,
      data: input.data ?? Prisma.DbNull,
    },
  });
}
