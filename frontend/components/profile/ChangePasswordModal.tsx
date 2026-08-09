"use client";

import { changePassword } from "@/services/profile";
import { useState } from "react";
import {
  X,
  Eye,
  EyeOff,
} from "lucide-react";

type ChangePasswordModalProps = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function ChangePasswordModal({
  open,
  onClose,
  onSuccess,
}: ChangePasswordModalProps) {
  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

const [showCurrentPassword, setShowCurrentPassword] =
  useState(false);

const [showNewPassword, setShowNewPassword] =
  useState(false);

const [showConfirmPassword, setShowConfirmPassword] =
  useState(false);

const [error, setError] = useState("");

  if (!open) return null;

async function handleSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();

  setError("");

  if (newPassword !== confirmPassword) {
    setError(
      "New password and confirm password do not match."
    );
    return;
  }

  try {
    await changePassword(currentPassword, newPassword);

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    onSuccess();
    onClose();
  } catch (error: unknown) {
    setError(
      error instanceof Error
        ? error.message
        : "Current password is incorrect."
    );
  }
}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Change Password
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Update your account password.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg cursor-pointer p-2 text-slate-400 transition hover:bg-slate-100"
          >
            <X size={19} />
          </button>
        </div>

        {/* Form */}
        <form
  onSubmit={handleSubmit}
  className="px-6 py-5"
>
  <div className="space-y-4">
    {/* Current Password */}
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        Current Password
      </label>

      <div className="relative">
        <input
          type={showCurrentPassword ? "text" : "password"}
          value={currentPassword}
          onChange={(e) =>
            setCurrentPassword(e.target.value)
          }
          required
          className="w-full rounded-lg border border-slate-200 px-3 py-2.5 pr-10 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

        <button
          type="button"
          onClick={() =>
            setShowCurrentPassword(!showCurrentPassword)
          }
          className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
        >
          {showCurrentPassword ? (
            <EyeOff size={17} />
          ) : (
            <Eye size={17} />
          )}
        </button>
      </div>
    </div>

    {/* New Password */}
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        New Password
      </label>

      <div className="relative">
        <input
          type={showNewPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) =>
            setNewPassword(e.target.value)
          }
          required
          className="w-full rounded-lg border border-slate-200 px-3 py-2.5 pr-10 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

        <button
          type="button"
          onClick={() =>
            setShowNewPassword(!showNewPassword)
          }
          className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
        >
          {showNewPassword ? (
            <EyeOff size={17} />
          ) : (
            <Eye size={17} />
          )}
        </button>
      </div>
    </div>

    {/* Confirm New Password */}
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        Confirm New Password
      </label>

      <div className="relative">
        <input
          type={
            showConfirmPassword
              ? "text"
              : "password"
          }
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          required
          className="w-full rounded-lg border border-slate-200 px-3 py-2.5 pr-10 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

        <button
          type="button"
          onClick={() =>
            setShowConfirmPassword(
              !showConfirmPassword
            )
          }
          className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
        >
          {showConfirmPassword ? (
            <EyeOff size={17} />
          ) : (
            <Eye size={17} />
          )}
        </button>
      </div>
    </div>
  </div>

  {/* Error Message */}
  {error && (
    <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-600">
      {error}
    </div>
  )}

  {/* Actions */}
  <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-4">
    <button
      type="button"
      onClick={onClose}
      className="rounded-lg cursor-pointer border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
    >
      Cancel
    </button>

    <button
      type="submit"
      className="rounded-lg cursor-pointer bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
    >
      Change Password
    </button>
  </div>
</form>
      </div>
    </div>
  );
}