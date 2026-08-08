import DeleteHeader from "./components/DeleteHeader";
import DeleteWarning from "./components/DeleteWarning";
import DeleteActions from "./components/DeleteActions";
import { deleteHackathon } from "@/services/hackathon";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {
  open: boolean;
  onClose: () => void;
  hackathon: any;
};

export default function DeleteHackathonModal({
  open,
  onClose,
  hackathon
}: Props) {

const router = useRouter();
  const handleDelete = async () => {
    try {
      await deleteHackathon(hackathon.id);
      toast.success("Hackathon deleted successfully!");
      onClose();
      router.push("/hackathons");
    } catch (error) {
      toast.error("Failed to delete hackathon.");
      console.error(error);
    }
  };


  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
      <div className="w-full max-w-xl rounded-xl bg-white p-8 shadow-2xl">
        <DeleteHeader title={hackathon.title} />
        <DeleteWarning />
        <DeleteActions onClose={onClose} onDelete={handleDelete} />
      </div>
    </div>
  );
}