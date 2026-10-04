import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Engineering from "@/components/Engineering";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import { site, engineering } from "@/data/content";

export const metadata: Metadata = {
  title: `Engineering — ${site.name}`,
  description: `${engineering.title}: how this site is architected, the decisions behind the stack, and the release branching strategy it ships with.`,
};

export default function EngineeringPage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <Engineering />
      <Footer />
    </main>
  );
}
