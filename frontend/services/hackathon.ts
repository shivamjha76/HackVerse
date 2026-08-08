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

export async function getHackathons() {
  return apiFetch("/hackathons");
}

export async function getHackathonById(
  id: number | string
) {
  return apiFetch(`/hackathons/${id}`);
}

export async function updateHackathon(
  id: string,
  data: any
) {
  return apiFetch(`/hackathons/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteHackathon(id: number) {
  return apiFetch(`/hackathons/${id}`, {
    method: "DELETE",
  });
}