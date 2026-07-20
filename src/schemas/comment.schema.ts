import { z } from "zod";

export const createCommentSchema = z.object({
  text: z.string().min(1, "Yorum boş olamaz").max(1000, "Yorum çok uzun"),
});

export const updateCommentSchema = z.object({
  text: z.string().min(1, "Yorum boş olamaz").max(1000, "Yorum çok uzun"),
});

export type CreateCommentInput = z.infer<typeof createCommentSchema>;
export type UpdateCommentInput = z.infer<typeof updateCommentSchema>;
