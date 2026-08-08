"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Users,
  Building2,
} from "lucide-react";

import Brand from "@/components/branding/Brand";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { register as registerUser } from "@/services/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import {
  registerSchema,
  RegisterSchema,
} from "@/lib/validators";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("participant");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),

    defaultValues: {
    role: "participant",
    },
    });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: RegisterSchema) => {
    console.log("Step 1: Form Submitted");
    console.log(data);

    try {
      setLoading(true);
        console.log("Step 2: Calling API");

      const response = await registerUser(data);
        console.log("Step 3: API Success");
        console.log(response);
          alert("Account created successfully!");

        router.push("/login");
      } catch (error) {
          console.log("Step 4: API Error");
          console.error(error);

        if (error instanceof Error) {
             alert(error.message);
            }
      } finally {
          console.log("Step 5: Finally Block");
              setLoading(false);
          }
    };

  return (
    <div className="flex w-full flex-col items-center">

      <div className="mb-10"><Brand /></div>

      <Card className="w-full max-w-[600px] rounded-3xl border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/60">

        <div className="mb-10 text-center">
          <h1 className="text-[42px] font-bold tracking-tight text-slate-900">
            Create your account
          </h1>

          <p className="mt-3 text-base text-slate-500">
            Join HackVerse and start your journey.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>

            <Input
              type="text"
              placeholder="Enter your full name"
              leftIcon={<User size={18} />}
              {...register("full_name")}
            />
            {errors.full_name && (
              <p className="mt-1 text-sm text-red-600">
                {errors.full_name.message}
              </p>
            )}
          </div>

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
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              leftIcon={<Lock size={18} />}
              {...register("password")}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              }
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Confirm Password
            </label>

            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              leftIcon={<Lock size={18} />}
              {...register("confirm_password")}
              rightIcon={
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="cursor-pointer text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              }
            />
            {errors.confirm_password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirm_password.message} 
              </p>
            )}
          </div>

          <div>
            <label className="mb-4 block text-sm font-medium text-slate-700">
                Register As
            </label>

            <div className="grid grid-cols-2 gap-4">
                    {/* Participant */}
              <button
                type="button"
                onClick={() => {
                setRole("participant");
                setValue("role", "participant");
                }}
                className={`cursor-pointer relative rounded-2xl border p-5 text-left transition-all ${
                role === "participant"
                ? "border-blue-600 bg-blue-50"
                : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {role === "participant" && (
                  <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                   ✓
                  </div>
                  )}

            <div className="mb-4">
              <Users
                size={32}
                strokeWidth={2}
                className={
                role === "participant"
                ? "text-blue-600"
                : "text-slate-500"
                }
              />
            </div>

          <h3 className="font-semibold text-slate-900">
              Participant
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Join hackathons and collaborate with teams.
          </p>
        </button>

           {/* Organizer */}
        <button
          type="button"
          onClick={() => {
          setRole("organizer");
          setValue("role", "organizer");
          }}
          className={`cursor-pointer relative rounded-2xl border p-5 text-left transition-all ${
          role === "organizer"
          ? "border-blue-600 bg-blue-50"
          : "border-slate-200 hover:border-slate-300"
         }`}
        >
         {role === "organizer" && (
            <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
              ✓
            </div>
            )}

      <div className="mb-4">
          <Building2
          size={32}
          strokeWidth={2}
          className={
            role === "organizer"
              ? "text-blue-600"
              : "text-slate-500"
          }
        />
      </div>

      <h3 className="font-semibold text-slate-900">
        Organizer
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        Create and manage hackathons.
      </p>
    </button>

  </div>
</div>

<Button
  type="submit"
  className="mt-4 w-full"
  disabled={loading}
>
  {loading ? "Creating..." : "Create Account"}
</Button>

        </form>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-center text-sm text-slate-600">
            Already have an account?{" "}
<button
  type="button"
  onClick={() => router.push("/login")}
  className="cursor-pointer font-medium text-blue-600 hover:text-blue-700"
>
  Sign In
</button>
          </p>
        </div>

      </Card>

    </div>
  );
}