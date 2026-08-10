const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8000";

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem("access_token");

  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    {
      ...options,

      headers: {
        "Content-Type": "application/json",

        ...(token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : {}),

        ...(options.headers || {}),
      },
    }
  );

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({}));

    throw new Error(
      error.detail || "Something went wrong."
    );
  }

  if (response.status === 204) {
  return null as T;
}

return response.json();
}