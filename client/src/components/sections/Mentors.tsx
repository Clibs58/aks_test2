"use client";

import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";

const mentors = [
  {
    id: "01",
    name: "Saiprasad Pandilwar",
    role: "Founder @ MyPerro",
    image: "/mentors/sai_perro.jpg",
    profile: "https://www.linkedin.com/in/saiprasadpandilwar/",
  },
  {
    id: "02",
    name: "Vineet Yadav",
    role: "Founder @ SleekandPeek",
    image: "/mentors/vineet.jpg",
    profile: "https://www.linkedin.com/in/vineet-yadav-1b86771b7/",
  },
  {
    id: "03",
    name: "Shrey Baldev",
    role: "Founder @ Moon Finance",
    image: "/mentors/shrey.jpg",
    profile: "https://www.linkedin.com/in/shreybaldev/",
  },
  {
    id: "04",
    name: "Havish Karanam",
    role: "Founder @ XIBOTIX",
    image: "/mentors/havish.jpg",
    profile: "https://www.linkedin.com/in/havish-karanam-91590a1b9/",
  },
  {
    id: "05",
    name: "Josh Praveen",
    role: "VP @ SnapMenu",
    image: "/mentors/josh.jpg",
    profile: "https://www.linkedin.com/in/josh-praveen",
  },
  {
    id: "06",
    name: "Lalit Mohan",
    role: "ICF CFA — IRS",
    image: "/mentors/lalit.jpg",
    profile: "https://www.linkedin.com/in/lalit-mohan",
  },
  {
    id: "07",
    name: "New Mentor A",
    role: "Something",
    image: "/mentors/placeholder.jpg",
    profile: "#",
  },
  {
    id: "08",
    name: "New Mentor B",
    role: "Something",
    image: "/mentors/placeholder.jpg",
    profile: "#",
  },
  {
    id: "09",
    name: "New Mentor C",
    role: "Something",
    image: "/mentors/placeholder.jpg",
    profile: "#",
  },
  {
    id: "10",
    name: "New Mentor D",
    role: "Something",
    image: "/mentors/placeholder.jpg",
    profile: "#",
  },
  {
    id: "11",
    name: "New Mentor E",
    role: "Something",
    image: "/mentors/placeholder.jpg",
    profile: "#",
  },
  {
    id: "12",
    name: "New Mentor F",
    role: "Something",
    image: "/mentors/placeholder.jpg",
    profile: "#",
  },
  {
    id: "13",
    name: "New Mentor G",
    role: "Something",
    image: "/mentors/placeholder.jpg",
    profile: "#",
  },
];

export function Mentors() {
  /* ================= CURSOR VALUES ================= */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ambientX = useMotionValue(50);
  const ambientY = useMotionValue(50);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);

    animate(ambientX, [10, 80, 10], {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    });
    animate(ambientY, [20, 70, 20], {
      duration: 22,
      repeat: Infinity,
      ease: "easeInOut",
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  const spotlight = useMotionTemplate`
    radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(11,31,51,0.45), transparent 65%)
  `;
  const ambientGlow = useMotionTemplate`
    radial-gradient(800px circle at ${ambientX}% ${ambientY}%, rgba(11,31,51,0.25), transparent 70%)
  `;

  /* ============== CYCLING BATCHES OF 6 ============== */
  const BATCH_SIZE = 6;
  const INTERVAL = 8000;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + BATCH_SIZE) % mentors.length),
      INTERVAL
    );
    return () => clearInterval(timer);
  }, []);

  const visibleMentors =
    mentors.slice(index, index + BATCH_SIZE).length === BATCH_SIZE
      ? mentors.slice(index, index + BATCH_SIZE)
      : [
          ...mentors.slice(index),
          ...mentors.slice(0, (index + BATCH_SIZE) % mentors.length),
        ];

  return (
    <section id="mentors" className="relative py-32 bg-black overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{ background: ambientGlow }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block mix-blend-screen"
        style={{ background: spotlight }}
      />

      {/* ================= HEADING (LEFT) ================= */}
      <div className="relative z-10 container px-6 mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Our Mentors
        </h2>
        <p className="text-gray-400 text-lg max-w-xl">
          Guidance from industry leaders shaping the next generation of builders.
        </p>
      </div>

      {/* ================= MOBILE MARQUEE ================= */}
      <div className="md:hidden relative mb-16 px-6">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {[...mentors, ...mentors].map((mentor, i) => (
            <div
              key={i}
              className="w-64 rounded-xl bg-white/5 border border-white/10 px-6 py-6 text-center flex-shrink-0"
            >
              <img
                src={mentor.image}
                className="mx-auto mb-4 h-20 w-20 rounded-full object-cover border border-white/20"
              />
              <h3 className="text-lg font-semibold text-white">{mentor.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{mentor.role}</p>
              <a
                href={mentor.profile}
                target="_blank"
                className="inline-flex rounded-md border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white hover:bg-[#0B1F33]"
              >
                View Profile →
              </a>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================= DESKTOP CYCLING GRID (CENTERED) ================= */}
      <div className="hidden md:block container px-6 mx-auto flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="
              grid gap-x-20 gap-y-32 justify-items-center
              [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]
              max-w-[1200px] mx-auto
            "
          >
            {visibleMentors.map((mentor) => (
              <motion.div
                key={mentor.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
                className="h-[400px] w-full max-w-[320px] rounded-xl bg-white/5 border border-white/10 flex flex-col items-center pt-8 px-8"
              >
                <img
                  src={mentor.image}
                  className="mb-6 h-28 w-28 rounded-full object-cover border border-white/20"
                />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {mentor.name}
                </h3>
                <p className="text-gray-400 mb-6 text-center">{mentor.role}</p>
                <a
                  href={mentor.profile}
                  target="_blank"
                  className="mt-auto mb-8 inline-flex rounded-md border border-white/20 bg-white/5 px-6 py-2 text-sm text-white hover:bg-[#0B1F33]"
                >
                  View Profile →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
