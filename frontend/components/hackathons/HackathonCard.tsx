import Card from "@/components/ui/Card";
import Link from "next/link";

type HackathonCardProps = {
  id: number;
  title: string;
  short_description: string;
  organizer: string;
  mode: string;
  status: string;
  start_date: string;
};

export default function HackathonCard({
  id,
  title,
  short_description,
  organizer,
  mode,
  status,
  start_date,
}: HackathonCardProps) {
  return (
    <Link href={`/hackathons/${id}`}>
      <Card className="cursor-pointer rounded-2xl p-6 transition-shadow hover:shadow-lg">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              {title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {organizer}
            </p>
          </div>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            {status}
          </span>
        </div>

        <p className="mb-5 line-clamp-2 text-slate-600">
          {short_description}
        </p>

        <div className="flex items-center justify-between border-t pt-4 text-sm text-slate-500">
          <span>{mode}</span>

          <span>
            {new Date(start_date).toLocaleDateString()}
          </span>
        </div>
      </Card>
    </Link>
  );
}