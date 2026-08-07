import { apiFetch } from "./api";

type LoginData = {
  email: string;
  password: string;
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

