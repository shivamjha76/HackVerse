"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, Loader2, ArrowRight } from "lucide-react";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function VerifyEmailPage() {
  const [status, setStatus] = useState("Verifying your email...");
  const [state, setState] = useState<"loading" | "success" | "error">(
    "loading"
  );

  const verificationStarted = useRef(false);

  useEffect(() => {
    if (verificationStarted.current) return;

    verificationStarted.current = true;

    const verifyEmail = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      if (!token) {
        setState("error");
        setStatus("Invalid verification link.");
        return;
      }

      try {
        const response = await fetch(
          `${BASE_URL}/auth/verify-email?token=${encodeURIComponent(token)}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.detail || "Email verification failed."
          );
        }

        setState("success");
        setStatus("Your email has been verified successfully!");
      } catch (error) {
        setState("error");

        setStatus(
          error instanceof Error
            ? error.message
            : "Email verification failed."
        );
      }
    };

    verifyEmail();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">

      <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center">

        <div className="w-full">

          {/* Brand */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              HackVerse
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Your hackathon journey starts here.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg shadow-slate-200/60">

            {/* Loading */}
            {state === "loading" && (
              <div className="py-6">

                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                  <Loader2
                    size={30}
                    className="animate-spin text-blue-600"
                  />
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Verifying your email
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Please wait while we verify your email address.
                </p>

              </div>
            )}

            {/* Success */}
            {state === "success" && (
              <div className="py-6">

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle2
                    size={42}
                    className="text-green-600"
                  />
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Email Verified!
                </h2>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
                  Your email address has been successfully verified.
                  Your HackVerse account is now ready to use.
                </p>

                <Link
                  href="/login"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Go to Login
                  <ArrowRight size={17} />
                </Link>

              </div>
            )}

            {/* Error */}
            {state === "error" && (
              <div className="py-6">

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
                  <XCircle
                    size={42}
                    className="text-red-600"
                  />
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Verification Failed
                </h2>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
                  {status}
                </p>

                <Link
                  href="/login"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Go to Login
                  <ArrowRight size={17} />
                </Link>

              </div>
            )}

          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-slate-400">
            © 2026 HackVerse. All rights reserved.
          </p>

        </div>
      </div>
    </div>
  );
}