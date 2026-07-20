import { z } from "zod";

export const markReadSchema = z.object({
  read: z.literal(true),
});

export const getNotificationsQuerySchema = z.object({
  unreadOnly: z.coerce.boolean().optional(),
});
