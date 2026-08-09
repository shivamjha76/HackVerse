"use client";

import { useState } from "react";
import { X } from "lucide-react";

import {
  updateProfile,
  type UserProfile,
} from "@/services/profile";

type EditProfileModalProps = {
  open: boolean;
  profile: UserProfile;
  onClose: () => void;
  onUpdated: (profile: UserProfile) => void;
};

export default function EditProfileModal({
  open,
  profile,
  onClose,
  onUpdated,
}: EditProfileModalProps) {
  const [fullName, setFullName] = useState(
    profile.full_name
  );

  const [phone, setPhone] = useState(
    profile.phone || ""
  );

  const [bio, setBio] = useState(
    profile.bio || ""
  );

  const [github, setGithub] = useState(
    profile.github || ""
  );

  const [linkedin, setLinkedin] = useState(
    profile.linkedin || ""
  );

const [instagram, setInstagram] = useState(
  profile.instagram || ""
);

const [website, setWebsite] = useState(
  profile.website || ""
);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSaving(true);
    setError("");

    try {
      const updatedProfile = await updateProfile({
        full_name: fullName,
        phone,
        bio,
        github,
        linkedin,
        instagram,
        website,
      });

      onUpdated(updatedProfile);
      onClose();
    } catch (error) {
      console.error(
        "Failed to update profile:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Failed to update profile."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Edit Profile
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Update your personal information.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg cursor-pointer p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={19} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-h-[75vh] overflow-y-auto px-6 py-5"
        >
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                value={fullName}
                onChange={(e) =>
                  setFullName(e.target.value)
                }
                required
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                value={profile.email}
                disabled
                className="w-full cursor-not-allowed rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-400 outline-none"
              />

              <p className="mt-1 text-xs text-slate-400">
                Email cannot be changed here.
              </p>
            </div>

            {/* Phone */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Phone
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                placeholder="+91 98765 43210"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Bio
              </label>

              <textarea
                rows={4}
                value={bio}
                onChange={(e) =>
                  setBio(e.target.value)
                }
                placeholder="Tell us a little about yourself..."
                className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* GitHub */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                GitHub
              </label>

              <input
                type="text"
                value={github}
                onChange={(e) =>
                  setGithub(e.target.value)
                }
                placeholder="https://github.com/username"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

{/* Instagram */}
<div>
  <label className="mb-1.5 block text-sm font-medium text-slate-700">
    Instagram
  </label>

  <input
    type="text"
    value={instagram}
    onChange={(e) => setInstagram(e.target.value)}
    placeholder="https://instagram.com/username"
    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
  />
</div>

{/* Website */}
<div>
  <label className="mb-1.5 block text-sm font-medium text-slate-700">
    Website
  </label>

  <input
    type="text"
    value={website}
    onChange={(e) => setWebsite(e.target.value)}
    placeholder="https://yourwebsite.com"
    className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
  />
</div>

            {/* LinkedIn */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                LinkedIn
              </label>

              <input
                type="text"
                value={linkedin}
                onChange={(e) =>
                  setLinkedin(e.target.value)
                }
                placeholder="https://linkedin.com/in/username"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Error */}
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
              disabled={saving}
              className="rounded-lg cursor-pointer border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="rounded-lg cursor-pointer bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}