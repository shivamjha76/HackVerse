import { Trash2 } from "lucide-react";

type Props = {
  title: string;
};

export default function DeleteHeader({ title }: Props) {
  return (
    <>
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
        <Trash2 size={38} className="text-red-600" />
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Delete Hackathon?
        </h2>

        <p className="mt-6 text-xl leading-9 text-slate-600">
          Are you sure you want to delete
          <span className="font-semibold text-slate-900">
            {" "}
            "{title}"
          </span>
          ?
          <br />
          This action cannot be undone.
        </p>
      </div>
    </>
  );
}