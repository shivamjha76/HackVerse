"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import Brand from "@/components/branding/Brand";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

type ForgotPasswordForm = {
  email: string;
};

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordForm) => {
    try {
      setLoading(true);

      const response = await fetch(
        `${BASE_URL}/auth/forgot-password?email=${encodeURIComponent(
          data.email
        )}`,
        {
          method: "POST",
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.detail || "Something went wrong."
        );
      }

      setSent(true);

      toast.success("Reset email sent!", {
        description:
          "Please check your inbox for the password reset link.",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Unable to send reset email", {
          description: error.message,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-center">

      <div className="mb-10">
        <Brand />
      </div>

      <Card className="w-full max-w-[560px] rounded-3xl border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/60">

        <div className="mb-10 text-center">

          <h1 className="text-[42px] font-bold tracking-tight text-slate-900">
            Forgot password?
          </h1>

          <p className="mt-3 text-base text-slate-500">
            Enter your email and we'll send you a link to reset your password.
          </p>

        </div>

        {!sent ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>

              <Input
                type="email"
                placeholder="Enter your email"
                leftIcon={<Mail size={18} />}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email",
                  },
                })}
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading
                ? "Sending..."
                : "Send reset link"}
            </Button>

          </form>
        ) : (
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center">

            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Mail
                size={22}
                className="text-blue-600"
              />
            </div>

            <h2 className="text-lg font-semibold text-slate-900">
              Check your inbox
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              If an account exists with this email,
              we've sent you a password reset link.
            </p>

          </div>
        )}

        <div className="mt-10 border-t border-slate-200 pt-6">

          <button
            type="button"
            onClick={() => router.push("/login")}
            className="mx-auto flex cursor-pointer items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft size={16} />
            Back to login
          </button>

        </div>

      </Card>

    </div>
  );
}