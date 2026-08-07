import { apiFetch } from "./api";

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  full_name: string;
  email: string;
  password: string;
  confirm_password: string;
  role: "participant" | "organizer";
};

export async function login(data: LoginData) {
  const formData = new URLSearchParams();

  formData.append("username", data.email);
  formData.append("password", data.password);

  return apiFetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });
}

export async function register(data: RegisterData) {
  return apiFetch("/auth/register", {
    method: "POST",
    body: JSON.stringify({
      full_name: data.full_name,
      email: data.email,
      password: data.password,
      role: data.role,
    }),
  });
}