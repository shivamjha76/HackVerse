type BadgeProps = {
  status: "published" | "draft" | "closed";
};

export default function Badge({
  status,
}: BadgeProps) {
  const styles = {
    published:
      "bg-green-100 text-green-700",

    draft:
      "bg-amber-100 text-amber-700",

    closed:
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${styles[status]}`}
    >
      {status}
    </span>
  );
}