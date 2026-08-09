import { apiFetch } from "./api";

export type UserProfile = {
  id: number;
  full_name: string;
  email: string;
  phone: string | null;
  bio: string | null;
  github: string | null;
  linkedin: string | null;
  instagram: string | null;
  website: string | null;
};

export type ProfileUpdateData = {
  full_name: string;
  phone: string;
  bio: string;
  github: string;
  linkedin: string;
  instagram: string;
  website: string;
};

export async function getProfile(): Promise<UserProfile> {
  return apiFetch("/users/me");
}

export async function updateProfile(
  data: ProfileUpdateData
): Promise<UserProfile> {
  return apiFetch("/users/me", {
    method: "PUT",
    body: JSON.stringify(data),
  });
}