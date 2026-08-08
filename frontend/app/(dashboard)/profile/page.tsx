import ProfileHeader from "@/components/profile/ProfileHeader";
import PersonalInformation from "@/components/profile/PersonalInformation";
import AccountInformation from "@/components/profile/AccountInformation";
import SocialAccounts from "@/components/profile/SocialAccounts";
import Security from "@/components/profile/Security";
import Preferences from "@/components/profile/Preferences";
import DangerZone from "@/components/profile/DangerZone";
import FutureFeatures from "@/components/profile/FutureFeatures";

export default function ProfilePage() {
  return (
    <div>
      <h1>Profile</h1>

      <ProfileHeader />
<div className="mt-5 grid gap-5 lg:grid-cols-2">
  <PersonalInformation />
  <AccountInformation />
</div>

<div className="mt-5 grid gap-5 lg:grid-cols-2">
  <SocialAccounts />
  <Security />
</div>

<div className="mt-5 grid gap-5 lg:grid-cols-2">
  <Preferences />
  <DangerZone />
</div>

<FutureFeatures />

    </div>
  );
}