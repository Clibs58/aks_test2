"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// word-by-word animation
const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

export function Hero() {
  const heroBg = "/hero_bg.png";

  /* ---------- Enable parallax only on desktop ---------- */
  const [enableParallax, setEnableParallax] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)"); // md breakpoint
    setEnableParallax(mq.matches);

    const listener = (e: MediaQueryListEvent) => setEnableParallax(e.matches);
    mq.addEventListener("change", listener);

    return () => mq.removeEventListener("change", listener);
  }, []);

  /* ---------- Parallax Background Motion (desktop only) ---------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const bgX = useTransform(springX, [0, typeof window !== "undefined" ? window.innerWidth : 0], [-12, 12]);
  const bgY = useTransform(springY, [0, typeof window !== "undefined" ? window.innerHeight : 0], [-12, 12]);

  useEffect(() => {
    if (!enableParallax) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [enableParallax, mouseX, mouseY]);

  /* ---------- Split words but keep same formatting ---------- */
  const line1 = "Turning Student".split(" ");
  const line2 = "Ideas into Real Products".split(" ");

  return (
    <section
      id="home"
      className="relative min-h-[760px] flex items-center justify-center overflow-hidden pt-20 pb-32"
    >
      {/* Background */}
      <motion.div
        /* Only apply parallax if desktop */
        style={enableParallax ? { x: bgX, y: bgY } : {}}
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
      <div className="container relative z-10 px-6 text-center max-w-5xl mx-auto">
        {/* ======= HEADING (word by word) ======= */}
        <motion.h1
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-5xl lg:text-8xl font-bold font-heading leading-[1.1] tracking-tight mb-6"
        >
          {/* first line */}
          {line1.map((word, i) => (
            <motion.span
              key={`l1_${i}`}
              variants={wordVariants}
              custom={i}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}

          <br />

          {/* second line w/ blue gradient span like before */}
          {line2.map((word, i) => (
            <motion.span
              key={`l2_${i}`}
              variants={wordVariants}
              custom={i + line1.length}
              className={`inline-block mr-2 ${
                word === "Ideas" || word === "Products"
                  ? "text-gradient-blue"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* ======= SUBTITLE (unchanged style) ======= */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A product ecosystem built for early-stage founders.
        </motion.p>

        {/* ======= BUTTON (unchanged) ======= */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-lg shadow-[0_0_20px_rgba(27,38,59,0.4)] hover:shadow-[0_0_30px_rgba(65,90,119,0.5)] transition-all duration-300"
          >
            Let's Build
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-xs text-gray-500 uppercase tracking-widest"
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ opacity: [0.2, 1, 0.2], scaleY: [0.9, 1.2, 0.9] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-accent/0 via-accent to-accent/0"
        />
      </motion.div>
    </section>
  );
}
