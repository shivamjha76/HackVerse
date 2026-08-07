export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-10 dark:bg-slate-900"
      style={{ backgroundColor: "lab(97 0 -0.01)" }}
    >
      {children}
    </main>
  );
}