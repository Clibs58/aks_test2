import { useEffect } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Mentors } from "@/components/sections/Mentors";
import { JoinUs } from "@/components/sections/JoinUs";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <ClientLogos />
        <Process />
        <Mentors />
        <JoinUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
