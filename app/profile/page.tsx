import { auth } from "../../auth";
import { redirect } from "next/navigation";
import ProfileView from "../components/ProfileView";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) redirect("/");

  const { name, email, image } = session.user;

  return (
    <ProfileView
      name={name ?? ""}
      email={email ?? ""}
      image={image ?? ""}
    />
  );
}