import TeamCard from "./TeamCard";

const teams = [
  {
    name: "Code Warriors",
    description:
      "A passionate team building innovative solutions for the next generation.",
    members: 4,
    hackathon: "HackVerse 2026",
    status: "Active" as const,
  },
  {
    name: "Byte Builders",
    description:
      "Working together to create scalable and impactful technology.",
    members: 3,
    hackathon: "TechSprint 2026",
    status: "Active" as const,
  },
  {
    name: "Pixel Pioneers",
    description:
      "Designers and developers creating meaningful digital experiences.",
    members: 5,
    hackathon: "Design Hack 2026",
    status: "Completed" as const,
  },
  {
    name: "AI Innovators",
    description:
      "Exploring new ideas and building practical technology solutions.",
    members: 4,
    hackathon: "FutureHack 2026",
    status: "Draft" as const,
  },
];

export default function TeamList() {
  return (
    <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {teams.map((team) => (
        <TeamCard
          key={team.name}
          {...team}
        />
      ))}
    </div>
  );
}