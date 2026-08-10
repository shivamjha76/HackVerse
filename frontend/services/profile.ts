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

export type ActiveSession = {
  id: number;
  device: string | null;
  ip_address: string | null;
  created_at: string;
  last_active_at: string;
  expires_at: string;
  is_current: boolean;
};

export type LoginActivity = {
  id: number;
  user_id: number;
  device: string | null;
  ip_address: string | null;
  login_at: string;
  success: boolean;
};

export async function getProfile(): Promise<UserProfile> {
  return apiFetch<UserProfile>("/users/me");
}

export async function updateProfile(
  data: ProfileUpdateData
) {
  return apiFetch<UserProfile>("/users/me", {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function changePassword(
  currentPassword: string,
  newPassword: string
) {
  return apiFetch("/users/me/password", {
    method: "PUT",
    body: JSON.stringify({
      current_password: currentPassword,
      new_password: newPassword,
    }),
  });
}

export async function getActiveSessions(): Promise<ActiveSession[]> {
  return apiFetch<ActiveSession[]>("/users/me/sessions");
}

export async function revokeSession(sessionId: number) {
  return apiFetch(`/users/me/sessions/${sessionId}`, {
    method: "DELETE",
  });
}

export async function getLoginActivity(): Promise<LoginActivity[]> {
  return apiFetch<LoginActivity[]>("/users/me/login-activity");
}