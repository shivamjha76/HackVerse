import TeamDetailsHeader from "@/components/teams/TeamDetailsHeader";
import TeamMembers from "@/components/teams/TeamMembers";
import TeamOverview from "@/components/teams/TeamOverview";
import TeamSettings from "@/components/teams/TeamSettings";
import TeamSubmission from "@/components/teams/TeamSubmission";

type TeamDetailsPageProps = {
  params: Promise<{
    teamId: string;
  }>;
};

export default async function TeamDetailsPage({
  params,
}: TeamDetailsPageProps) {
  const { teamId } = await params;

  return (
    <div>
      <TeamDetailsHeader />

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <TeamOverview />
        <TeamMembers />
      </div>
<div className="mt-5">
  <TeamSettings />
</div>
<div className="mt-5">
  <TeamSubmission />
</div>
    </div>
  );
}