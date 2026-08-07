import { apiFetch } from "./api";

import { HackathonSchema } from "@/lib/validators/hackathon";

export async function createHackathon(
  data: HackathonSchema
) {
  return apiFetch("/hackathons", {
    method: "POST",
    body: JSON.stringify(data),
  });
}