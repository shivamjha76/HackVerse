import HackathonDetails from "@/components/hackathons/HackathonDetails";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function HackathonDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  return <HackathonDetails id={id} />;
}