import { z } from "zod";

export const changePasswordSchema = z
  .object({
    old_password: z.string().min(1, "Old Password is required"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),

    password_confirmation: z.string().min(1, "ConfirmPassword is required"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

export type ChangePasswordType = z.infer<typeof changePasswordSchema>;
