import { motion } from "framer-motion";

const logos = [
  "/logos/ey.jpg",
  "/logos/ford.jpg",
  "/logos/infosys.jpg",
  "/logos/mercadolibre.jpg",
  "/logos/mercedes.jpg",
  "/logos/shopify.jpg",
];

export function ClientLogos() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Marquee container */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-20 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 10,      // speed (lower = faster)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={src}
                alt="Client logo"
                className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
