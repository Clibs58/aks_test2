import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const logos = [
  "/logos/ey.jpg",
  "/logos/ford.jpg",
  "/logos/infosys.jpg",
  "/logos/mercadolibre.jpg",
  "/logos/mercedes.jpg",
  "/logos/shopify.jpg",
];

export function ClientLogos() {
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const halfWidth = el.scrollWidth / 2;

    const controls = animate(x, [-halfWidth, 0], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
    });

    return controls.stop;
  }, [x]);

  return (
    <section className="relative py-24 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden">
      <div className="container px-6 mx-auto">
        {/* ✅ KEPT EXACTLY AS REQUESTED */}
        <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-12">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex items-center gap-20 w-max"
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
