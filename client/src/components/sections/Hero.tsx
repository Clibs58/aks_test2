"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

// Text reveal variants
const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

export function Hero() {
  const heroBg = "/hero_bg.png";

  /* ---------- Parallax Background Motion ---------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const bgX = useTransform(springX, [0, window.innerWidth], [-50, 50]);
  const bgY = useTransform(springY, [0, window.innerHeight], [-50, 50]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  /* ---------- Heading words ---------- */
  const title = "Turning Student Ideas into Real Products".split(" ");

  return (
    <section
      id="home"
      className="relative min-h-[760px] flex items-center justify-center overflow-hidden pt-20 pb-32"
    >
      {/* Background w/ motion */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 noise-bg opacity-20 mix-blend-overlay pointer-events-none" />
      </motion.div>

      {/* CONTENT */}
      <div className="container relative z-10 px-6 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-5xl lg:text-8xl font-bold font-heading leading-[1.1] tracking-tight mb-6 flex flex-wrap gap-x-2"
        >
          {title.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              custom={i}
              className={
                word === "Ideas" || word === "Products"
                  ? "bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent"
                  : ""
              }
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle floating gently */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A product ecosystem built for early-stage founders.
        </motion.p>

        {/* Button with magnetic hover */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-lg shadow-[0_0_20px_rgba(27,38,59,0.4)] hover:shadow-[0_0_30px_rgba(65,90,119,0.5)] transition-all duration-300"
            >
              Let's Build
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator w/ pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-xs text-gray-500 uppercase tracking-widest"
        >
          Scroll
        </motion.span>

        <motion.div
          animate={{ opacity: [0.2, 1, 0.2], scaleY: [0.8, 1.2, 0.8] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-blue-400/0 via-blue-400 to-blue-400/0"
        />
      </motion.div>
    </section>
  );
}
