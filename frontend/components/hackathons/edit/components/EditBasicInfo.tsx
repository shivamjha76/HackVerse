import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";

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

export default function EditBasicInfo({
  formData,
  handleChange,
}: Props) {

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label required>Hackathon Title</Label>
          <Input name="title" value={formData.title} onChange={handleChange} />
        </div>

        <div>
          <Label required>Mode</Label>
          <Select name="mode" value={formData.mode} onChange={handleChange}>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="hybrid">Hybrid</option>
          </Select>
        </div>
      </div>

      <div>
        <Label required>Short Description</Label>
        <Input name="short_description" value={formData.short_description} onChange={handleChange} />
      </div>

      <div>
        <Label required>Detailed Description</Label>
        <Textarea name="description" value={formData.description} onChange={handleChange} />
      </div>
    </div>
  );
}
