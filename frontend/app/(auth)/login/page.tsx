"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import Brand from "@/components/branding/Brand";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth";
import { loginSchema, LoginSchema } from "@/lib/validators";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showResend, setShowResend] = useState(false);
  const [resending, setResending] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      setShowResend(false);

      const response = (await login(data)) as {
        access_token: string;
      };

      localStorage.setItem(
        "access_token",
        response.access_token
      );

      toast.success("Login successful!", {
        description: "Welcome back to HackVerse.",
      });

      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        if (
          error.message
            .toLowerCase()
            .includes("verify your email")
        ) {
          setShowResend(true);

          toast.warning("Email not verified", {
            description:
              "Please verify your email before logging in.",
          });

          return;
        }

        toast.error("Login failed", {
          description: error.message,
        });
      }
    }
  };

  const handleResendVerification = async () => {
    const email = getValues("email");

    if (!email) {
      toast.warning("Email required", {
        description: "Please enter your email first.",
      });
      return;
    }

    try {
      setResending(true);

      const response = await fetch(
        `${BASE_URL}/auth/resend-verification?email=${encodeURIComponent(email)}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Unable to resend verification email."
        );
      }

      toast.success("Verification email sent!", {
        description:
          "Please check your inbox and verify your email.",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Unable to send email", {
          description: error.message,
        });
      }
    } finally {
      setResending(false);
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
            Welcome back
          </h1>

          <p className="mt-3 text-base text-slate-500">
            Sign in to continue to HackVerse
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6"
        >

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>

            <Input
              type="email"
              placeholder="Enter your email"
              leftIcon={<Mail size={18} />}
              {...register("email")}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700">
                Password
              </label>

              <button
                type="button"
                onClick={() => router.push("/forgot-password")}
                className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                  Forgot password?
              </button>
            </div>

            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              leftIcon={<Lock size={18} />}
              rightIcon={
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="cursor-pointer text-slate-400 transition-colors hover:text-slate-600"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              }
              {...register("password")}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="mt-4 w-full"
          >
            Sign In
          </Button>

        </form>

        {showResend && (
          <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">

            <p className="text-sm text-blue-800">
              Your email is not verified yet.
            </p>

            <button
              type="button"
              onClick={handleResendVerification}
              disabled={resending}
              className="mt-2 cursor-pointer text-sm font-semibold text-blue-600 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {resending
                ? "Sending..."
                : "Resend verification email"}
            </button>

          </div>
        )}

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-center text-sm text-slate-600">
            New to HackVerse?{" "}
            <button
              type="button"
              onClick={() => router.push("/register")}
              className="cursor-pointer font-medium text-blue-600 hover:text-blue-700"
            >
              Create an account
            </button>
          </p>
        </div>

      </Card>

    </div>
  );
}