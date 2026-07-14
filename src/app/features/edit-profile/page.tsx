import { PageHeader } from "@/components/ui";
import { EditProfileForm } from "./EditProfileForm";

export default function EditProfilePage() {
  return (
    <div>
      <PageHeader
        title="Edit Profile"
        subtitle="Update your profile information"
      />
      <EditProfileForm />
    </div>
  );
}
