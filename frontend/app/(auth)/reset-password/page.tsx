"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

import Brand from "@/components/branding/Brand";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!token) {
      toast.error("Invalid reset link", {
        description:
          "This password reset link is missing or invalid.",
      });
      return;
    }

    if (!password || !confirmPassword) {
      toast.warning("Password required", {
        description:
          "Please enter and confirm your new password.",
      });
      return;
    }

    if (password.length < 8) {
      toast.warning("Password too short", {
        description:
          "Your password must be at least 8 characters long.",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        description:
          "Please make sure both passwords are the same.",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${BASE_URL}/auth/reset-password?token=${encodeURIComponent(
          token
        )}&new_password=${encodeURIComponent(password)}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Unable to reset password."
        );
      }

      setSuccess(true);

      toast.success("Password reset successful!", {
        description:
          "Your password has been updated. You can now log in.",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Password reset failed", {
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

        {!success ? (
          <>
            <div className="mb-10 text-center">

              <h1 className="text-[42px] font-bold tracking-tight text-slate-900">
                Reset your password
              </h1>

              <p className="mt-3 text-base text-slate-500">
                Create a new password for your HackVerse account.
              </p>

            </div>

            <form
              onSubmit={handleResetPassword}
              className="space-y-6"
            >

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  New password
                </label>

                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your new password"
                  leftIcon={<Lock size={18} />}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="cursor-pointer text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  }
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Confirm password
                </label>

                <Input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm your new password"
                  leftIcon={<Lock size={18} />}
                  rightIcon={
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      className="cursor-pointer text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  }
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                />
              </div>

              <p className="text-sm text-slate-500">
                Password must be at least 8 characters long.
              </p>

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading
                  ? "Resetting password..."
                  : "Reset Password"}
              </Button>

            </form>
          </>
        ) : (
          <div className="py-6 text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <Lock
                size={24}
                className="text-green-600"
              />
            </div>

            <h1 className="text-2xl font-bold text-slate-900">
              Password reset successful
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Your password has been updated successfully.
              You can now log in using your new password.
            </p>

            <Button
              type="button"
              className="mt-7 w-full"
              onClick={() => router.push("/login")}
            >
              Go to Login
            </Button>

          </div>
        )}

        {!success && (
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
        )}

      </Card>

    </div>
  );
}