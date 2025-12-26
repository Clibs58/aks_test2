import { motion } from "framer-motion";

const logos = [
  "/logos/TeamLambda_logo.jpg",
  "/logos/xibotix_logo.jpg",
  "/logos/layoverindia_logo.jpg",
  "/logos/kwikcut_company_logo.jpg",
  "/logos/guardifyx_logo.jpg",
];

export function ClientLogos() {
  // duplicate 3× for seamless infinite loop
  const marquee = [...logos, ...logos, ...logos];

  return (
    <section
      id="portfolio"
      className="relative py-24 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden"
    >
      <div className="container px-6 mx-auto">
        <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-12">
          Student-Led Startups
        </p>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-52 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-52 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex items-center gap-20 w-max"
          animate={{ x: ["-33.333%", "0%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marquee.map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={src}
                alt="Client logo"
                className="h-20 md:h-28 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
