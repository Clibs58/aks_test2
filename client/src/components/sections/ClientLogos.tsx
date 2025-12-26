import { motion } from "framer-motion";

const logos = [
  "/logos/TeamLambda_logo.jpg",
  "/logos/xibotix_logo.jpg",
  "/logos/layoverindia_logo.jpg",
  "/logos/kwikcut_company_logo.jpg",
  "/logos/guardifyx_logo.jpg",
];

export function ClientLogos() {
  return (
    <section
      id="portfolio"
      className="relative py-24 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden"
    >
      <div className="container px-6 mx-auto">
        <p className="text-center text-sm text-gray-300 uppercase tracking-widest mb-12">
          <span className="font-semibold">Our Clients:</span> Student-Led Startups
        </p>
      </div>

      {/* simple horizontal layout */}
      <div className="flex items-center justify-center gap-12 flex-wrap px-6">
        {logos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Client logo"
            className="h-20 md:h-28 w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
}
