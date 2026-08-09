"use client";

import { useEffect, useState } from "react";

import ProfileHeader from "@/components/profile/ProfileHeader";
import PersonalInformation from "@/components/profile/PersonalInformation";
import AccountInformation from "@/components/profile/AccountInformation";
import SocialAccounts from "@/components/profile/SocialAccounts";
import Security from "@/components/profile/Security";
import Preferences from "@/components/profile/Preferences";
import DangerZone from "@/components/profile/DangerZone";
import FutureFeatures from "@/components/profile/FutureFeatures";
import EditProfileModal from "@/components/profile/EditProfileModal";

import {
  getProfile,
  type UserProfile,
} from "@/services/profile";

export default function ProfilePage() {
  const [profile, setProfile] =
    useState<UserProfile | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await getProfile();

        console.log("Profile:", data);

        setProfile(data);
      } catch (error) {
        console.error(
          "Failed to load profile:",
          error
        );

        setError(
          error instanceof Error
            ? error.message
            : "Failed to load profile."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-sm text-slate-500">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <p className="text-sm font-medium text-red-600">
            {error}
          </p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="p-8 text-sm text-slate-500">
        Profile not found.
      </div>
    );
  }

  return (
    <>
      <div>
        <h1 className="mb-5 text-lg font-medium text-slate-900">
          Profile
        </h1>

        <ProfileHeader
          fullName={profile.full_name}
          email={profile.email}
          onEdit={() => setEditOpen(true)}
        />

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <PersonalInformation
            fullName={profile.full_name}
            email={profile.email}
            phone={profile.phone}
            bio={profile.bio}
          />

          <AccountInformation />

          <SocialAccounts
            github={profile.github}
            linkedin={profile.linkedin}
            instagram={profile.instagram}
            website={profile.website}
            onManage={() => setEditOpen(true)}
          />

          <Security />

          <Preferences />

          <DangerZone />

          <FutureFeatures />
        </div>
      </div>

      {profile && (
        <EditProfileModal
          open={editOpen}
          profile={profile}
          onClose={() => setEditOpen(false)}
          onUpdated={(updatedProfile) => {
            setProfile(updatedProfile);
          }}
        />
      )}
    </>
  );
}