import { z } from "zod";

export const createInvitationSchema = z.object({
  email: z.string().email("Geçerli bir e-posta adresi girin"),
});

export type CreateInvitationInput = z.infer<typeof createInvitationSchema>;

export const invitationResponseSchema = z.object({
  id: z.string(),
  organizationId: z.string(),
  inviterId: z.string(),
  inviteeEmail: z.string(),
  status: z.enum(["PENDING", "ACCEPTED", "DECLINED"]),
  createdAt: z.date(),
});

export type InvitationResponse = z.infer<typeof invitationResponseSchema>;
