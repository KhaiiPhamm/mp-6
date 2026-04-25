import { auth } from "../auth";
import { redirect } from "next/navigation";
import LandingView from "./components/LandingView";

export default async function HomePage() {
  const session = await auth();
  if (session?.user) redirect("/profile");

  return <LandingView />;
}