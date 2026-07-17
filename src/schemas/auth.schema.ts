import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(1, "İsim gerekli")
    .max(100, "İsim en fazla 100 karakter olabilir"),
  email: z
    .string()
    .email("Geçerli bir email adresi girin"),
  password: z
    .string()
    .min(6, "Şifre en az 6 karakter olmalı"),
});

export const loginSchema = z.object({
  email: z
    .string()
    .email("Geçerli bir email adresi girin"),
  password: z
    .string()
    .min(1, "Şifre gerekli"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
