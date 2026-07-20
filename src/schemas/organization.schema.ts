import { z } from "zod";

export const createOrganizationSchema = z.object({
  name: z.string().min(1, "Organizasyon adı zorunludur").max(100),
  description: z.string().max(500).optional(),
});

export const updateOrganizationSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  description: z.string().max(500).optional(),
});

export const addMemberSchema = z.object({
  email: z.string().email("Geçerli bir email adresi giriniz"),
  role: z.enum(["ADMIN", "MEMBER"]).optional(),
});

export const updateMemberRoleSchema = z.object({
  userId: z.string(),
  role: z.enum(["ADMIN", "MEMBER"]),
});

export type CreateOrganizationInput = z.infer<typeof createOrganizationSchema>;
export type UpdateOrganizationInput = z.infer<typeof updateOrganizationSchema>;
export type AddMemberInput = z.infer<typeof addMemberSchema>;
export type UpdateMemberRoleInput = z.infer<typeof updateMemberRoleSchema>;
