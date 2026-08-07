import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

type Props = {
  formData: any;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => void;
};

export default function EditSchedule({
  formData,
  handleChange,
}: Props) {

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label required>Start Date</Label>
          <Input
            type="datetime-local"
            name="start_date"
            value={formData.start_date?.slice(0, 16)}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label required>End Date</Label>
          <Input
            type="datetime-local"
            name="end_date"
            value={formData.end_date?.slice(0, 16)}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label required>Registration Deadline</Label>
          <Input
            type="datetime-local"
            name="registration_deadline"
            value={formData.registration_deadline?.slice(0, 16)}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label required>Team Size</Label>
          <Input
            type="number"
            name="max_team_size"
            value={formData.max_team_size}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}