"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import Brand from "@/components/branding/Brand";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth";
import { loginSchema, LoginSchema } from "@/lib/validators";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const response = await login(data);

      localStorage.setItem(
        "access_token",
        response.access_token
      );

      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
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
                  onClick={() => setShowPassword(!showPassword)}
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