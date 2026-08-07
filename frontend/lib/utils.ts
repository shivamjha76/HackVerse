export function cn(...classes: (string | undefined |false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );
}