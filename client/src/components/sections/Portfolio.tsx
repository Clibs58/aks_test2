import { ClientLogos } from "@/components/sections/ClientLogos";
import { Process } from "@/components/sections/Process";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden">
      {/* Client Logos FIRST */}
      <ClientLogos />

      {/* Process SECOND */}
      <Process />
    </section>
  );
}
