import { z } from "zod";

export const createColumnSchema = z.object({
  name: z.string().min(1, "Sütun adı zorunludur").max(100),
  position: z.number().optional(),
  wipLimit: z.number().int().min(1).optional(),
  isDone: z.boolean().optional(),
});

export const updateColumnSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  position: z.number().optional(),
  wipLimit: z.number().int().min(1).nullable().optional(),
  isDone: z.boolean().optional(),
});

export type CreateColumnInput = z.infer<typeof createColumnSchema>;
export type UpdateColumnInput = z.infer<typeof updateColumnSchema>;
