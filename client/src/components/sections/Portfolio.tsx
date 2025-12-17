import { ClientLogos } from "@/components/sections/ClientLogos";
import { Process } from "@/components/sections/Process";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden">
      {/* Optional Portfolio Heading */}
      <div className="container px-6 mx-auto pt-32 pb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Portfolio
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          Trusted by industry leaders and executed through a proven delivery framework.
        </p>
      </div>

      {/* Client Logos FIRST */}
      <ClientLogos />

      {/* Process SECOND */}
      <Process />
    </section>
  );
}
