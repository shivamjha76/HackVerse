"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { hackathonSchema } from "@/lib/validators/hackathon";
import { createHackathon } from "@/services/hackathon";

export default function CreateHackathonForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(hackathonSchema),
    defaultValues: {
      mode: "online",
      status: "draft",
    },
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      await createHackathon(data);
      alert("Hackathon created successfully!");
      router.push("/hackathons");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="rounded-3xl p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Hackathon Name</label>
            <Input {...register("title")} placeholder="Hackathon Name" />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Organizer</label>
            <Input {...register("organizer")} placeholder="Organizer Name" />
            {errors.organizer && (
              <p className="mt-1 text-sm text-red-600">{errors.organizer.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Short Description</label>
          <textarea
            rows={3}
            {...register("short_description")}
            className="w-full rounded-xl border border-slate-300 p-3"
          />
          {errors.short_description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.short_description.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Full Description</label>
          <textarea
            rows={6}
            {...register("description")}
            className="w-full rounded-xl border border-slate-300 p-3"
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium">Registration Deadline</label>
            <Input type="date" {...register("registration_deadline")} />
            {errors.registration_deadline && (
              <p className="mt-1 text-sm text-red-600">
                {errors.registration_deadline.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Start Date</label>
            <Input type="date" {...register("start_date")} />
            {errors.start_date && (
              <p className="mt-1 text-sm text-red-600">{errors.start_date.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">End Date</label>
            <Input type="date" {...register("end_date")} />
            {errors.end_date && (
              <p className="mt-1 text-sm text-red-600">{errors.end_date.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium">Mode</label>
          <div className="grid gap-4 md:grid-cols-3">
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 p-4">
              <input type="radio" value="online" {...register("mode")} />
              Online
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 p-4">
              <input type="radio" value="offline" {...register("mode")} />
              Offline
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 p-4">
              <input type="radio" value="hybrid" {...register("mode")} />
              Hybrid
            </label>
          </div>
          {errors.mode && (
            <p className="mt-1 text-sm text-red-600">{errors.mode.message}</p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Location</label>
            <Input {...register("location")} placeholder="Jaipur, Rajasthan" />
            {errors.location && (
              <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Prize Pool</label>
            <Input {...register("prize_pool")} placeholder="₹50,000" />
            {errors.prize_pool && (
              <p className="mt-1 text-sm text-red-600">{errors.prize_pool.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Max Team Size</label>
            <Input type="number" {...register("max_team_size")} placeholder="4" />
            {errors.max_team_size && (
              <p className="mt-1 text-sm text-red-600">{errors.max_team_size.message}</p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Registration Link</label>
            <Input {...register("registration_link")} placeholder="https://..." />
            {errors.registration_link && (
              <p className="mt-1 text-sm text-red-600">
                {errors.registration_link.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-3 block text-sm font-medium">Status</label>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 p-4">
              <input type="radio" value="draft" {...register("status")} />
              Draft
            </label>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-300 p-4">
              <input type="radio" value="published" {...register("status")} />
              Published
            </label>
          </div>
          {errors.status && (
            <p className="mt-1 text-sm text-red-600">{errors.status.message}</p>
          )}
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" className="bg-slate-200 text-slate-800 hover:bg-slate-300">
            Save Draft
          </Button>

          <Button type="submit" disabled={loading}>
            {loading ? "Publishing..." : "Publish Hackathon"}
          </Button>
        </div>
      </form>
    </Card>
  );
}