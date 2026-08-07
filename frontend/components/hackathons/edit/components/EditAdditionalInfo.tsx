import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Select from "@/components/ui/Select";

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

export default function EditAdditionalInfo({
  formData,
  handleChange,
}: Props) {

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label required>Prize Pool</Label>
          <Input name="prize_pool" value={formData.prize_pool} onChange={handleChange} />
        </div>

        <div>
          <Label required>Category</Label>
          <Select name="category" value={formData.category} onChange={handleChange}>
            <option>Web Development</option>
            <option>AI / ML</option>
            <option>Cyber Security</option>
            <option>Open Innovation</option>
          </Select>
        </div>
      </div>

      <div>
        <Label required>Location</Label>
        <Input name="location" value={formData.location} onChange={handleChange} />
      </div>
    </div>
  );
}