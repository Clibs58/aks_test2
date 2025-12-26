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

        {/* Wider grid — spreads logos across the full container */}
        <div className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
          gap-y-10 gap-x-16
          justify-items-center
          max-w-6xl mx-auto
        ">
          {logos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Client logo"
              className="h-20 md:h-28 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
