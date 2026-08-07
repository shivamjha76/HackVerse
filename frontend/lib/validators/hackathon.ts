import { z } from "zod";

export const hackathonSchema = z.object({
  title: z
    .string()
    .min(5, "Hackathon name must be at least 5 characters"),

  organizer: z
    .string()
    .min(3, "Organizer name is required"),

  short_description: z
    .string()
    .min(20, "Short description must be at least 20 characters"),

  description: z
    .string()
    .min(50, "Full description must be at least 50 characters"),

  registration_deadline: z
    .string()
    .min(1, "Registration deadline is required"),

  start_date: z
    .string()
    .min(1, "Start date is required"),

  end_date: z
    .string()
    .min(1, "End date is required"),

  mode: z.enum([
    "online",
    "offline",
    "hybrid",
  ]),

  location: z
    .string()
    .min(3, "Location is required"),

  prize_pool: z
    .string()
    .min(1, "Prize pool is required"),

  max_team_size: z.coerce
    .number()
    .min(1, "Minimum team size is 1")
    .max(20, "Maximum team size is 20"),

  registration_link: z
    .string()
    .url("Enter a valid registration URL"),

  status: z.enum([
    "draft",
    "published",
  ]),
});

export type HackathonSchema = z.infer<
  typeof hackathonSchema
>;