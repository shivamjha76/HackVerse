import TeamsHeader from "@/components/teams/TeamsHeader";
import TeamsToolbar from "@/components/teams/TeamsToolbar";
import TeamList from "@/components/teams/TeamList";

export default function TeamsPage() {
  return (
    <div>
      <TeamsHeader />
      <TeamsToolbar />
      <TeamList />
    </div>
  );
}