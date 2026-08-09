import {
  User,
  Mail,
  Phone,
  Building2,
  FileText,
  type LucideIcon,
} from "lucide-react";

type PersonalInformationProps = {
  fullName: string;
  email: string;
  phone: string | null;
  bio: string | null;
};

export default function PersonalInformation({
  fullName,
  email,
  phone,
  bio,
}: PersonalInformationProps) {
  const items: [string, string, LucideIcon][] = [
    ["Full Name", fullName, User],
    ["Email", email, Mail],
    ["Phone", phone || "Not provided", Phone],
    ["Organization", "HackVerse", Building2],
    [
      "Bio",
      bio || "No bio added.",
      FileText,
    ],
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <User size={18} />
        </div>

        <h2 className="text-lg font-semibold text-slate-900">
          Personal Information
        </h2>
      </div>

      <div>
        {items.map(([label, value, Icon], index) => (
          <div
            key={label}
            className={`flex items-start justify-between gap-6 py-3 text-sm ${
              index !== items.length - 1
                ? "border-b border-slate-100"
                : ""
            }`}
          >
            <div className="flex items-center gap-2 text-slate-500">
              <Icon size={15} />
              <span>{label}</span>
            </div>

            <span className="max-w-[60%] text-right text-slate-700">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}