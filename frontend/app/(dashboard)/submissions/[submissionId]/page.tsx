import SubmissionDetailsHeader from "@/components/submissions/SubmissionDetailsHeader";
import ProjectInformation from "@/components/submissions/ProjectInformation";
import SubmissionMetadata from "@/components/submissions/SubmissionMetadata";
import SubmissionReviewPanel from "@/components/submissions/SubmissionReviewPanel";
import ReviewHistory from "@/components/submissions/ReviewHistory";

type SubmissionDetailsPageProps = {
  params: Promise<{
    submissionId: string;
  }>;
};

export default async function SubmissionDetailsPage({
  params,
}: SubmissionDetailsPageProps) {
  const { submissionId } = await params;

  return (
    <div>
      <SubmissionDetailsHeader />

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <ProjectInformation />
        <SubmissionMetadata />
        <SubmissionReviewPanel />
        <ReviewHistory />
      </div>
    </div>
  );
}