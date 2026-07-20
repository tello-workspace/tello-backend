import { z } from "zod";

const hexColor = z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Geçerli bir hex renk girin (örn: #EF4444)");

export const createLabelSchema = z.object({
  name: z.string().min(1, "Etiket adı zorunludur").max(50, "Etiket adı çok uzun"),
  color: hexColor,
});

export const updateLabelSchema = z.object({
  name: z.string().min(1).max(50).optional(),
  color: hexColor.optional(),
});

export const attachLabelSchema = z.object({
  labelId: z.string().min(1, "Label ID zorunludur"),
});

export type CreateLabelInput = z.infer<typeof createLabelSchema>;
export type UpdateLabelInput = z.infer<typeof updateLabelSchema>;
export type AttachLabelInput = z.infer<typeof attachLabelSchema>;
