"use client";

import { useState } from "react";

import EditBasicInfo from "./components/EditBasicInfo";
import EditSchedule from "./components/EditSchedule";
import EditAdditionalInfo from "./components/EditAdditionalInfo";

type Props = {
  hackathon: any;
  onSubmit: (data: any) => void;
};

export default function EditHackathonForm({
  hackathon,
  onSubmit,
}: Props) {

  const [formData, setFormData] = useState({
    title: hackathon?.title ?? "",
    short_description: hackathon?.short_description ?? "",
    description: hackathon?.description ?? "",

    organizer: hackathon?.organizer ?? "",

    mode: hackathon?.mode ?? "online",

    status: hackathon?.status ?? "draft",

    start_date: hackathon?.start_date ?? "",
    end_date: hackathon?.end_date ?? "",
    registration_deadline: hackathon?.registration_deadline ?? "",

    max_team_size: hackathon?.max_team_size ?? 0,

    registration_link: hackathon?.registration_link ?? "",

    prize_pool: hackathon?.prize_pool ?? "",
    category: hackathon?.category ?? "Web Development",
    location: hackathon?.location ?? "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <form
  id="edit-hackathon-form"
  className="space-y-8"
  onSubmit={(e) => {
    e.preventDefault();
    handleSubmit();
  }}
>
      <EditBasicInfo formData={formData} handleChange={handleChange}/>
      <EditSchedule formData={formData} handleChange={handleChange}/>
      <EditAdditionalInfo formData={formData} handleChange={handleChange}/>

</form>
);
}