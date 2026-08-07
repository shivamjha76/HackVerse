import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    full_name: z
      .string()
      .min(3, "Full name must be at least 3 characters"),

    email: z
      .email("Please enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    confirm_password: z
      .string()
      .min(8, "Please confirm your password"),

    role: z.enum(["participant", "organizer"]),
  })
  .refine(
    (data) => data.password === data.confirm_password,
    {
      message: "Passwords do not match",
      path: ["confirm_password"],
    }
  );

export type RegisterSchema = z.infer<typeof registerSchema>;