import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { useEffect } from "react";

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
    image: "vineet.jpg",
    profile: "https://www.linkedin.com/in/vineet-yadav-1b86771b7/",
  },
  {
    id: "03",
    name: "Shrey Baldev",
    role: "Founder @ Moon Finance",
    image: "mentors/shrey.jpg",
    profile: "https://www.linkedin.com/in/shreybaldev/",
  },
  {
    id: "04",
    name: "Havish Karanam",
    role: "Founder @ XIBOTIX",
    image: "havish.jpg",
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
];

export function Mentors() {
  /* ================= CURSOR VALUES ================= */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* Ambient drift */
  const ambientX = useMotionValue(50);
  const ambientY = useMotionValue(50);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    animate(ambientX, [20, 80, 20], {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    });

    animate(ambientY, [30, 70, 30], {
      duration: 22,
      repeat: Infinity,
      ease: "easeInOut",
    });

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY, ambientX, ambientY]);

  /* ================= BACKGROUND LAYERS ================= */

  // Strong cursor spotlight
  const spotlight = useMotionTemplate`
    radial-gradient(
      500px circle at ${mouseX}px ${mouseY}px,
      rgba(11,31,51,0.45),
      transparent 65%
    )
  `;

  // Ambient breathing glow
  const ambientGlow = useMotionTemplate`
    radial-gradient(
      800px circle at ${ambientX}% ${ambientY}%,
      rgba(11,31,51,0.25),
      transparent 70%
    )
  `;

  return (
    <section id="mentors" className="relative py-32 bg-black overflow-hidden">
      {/* ================= EXPRESSIVE LIVE WALLPAPER ================= */}
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

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">
        <div className="container px-6 mx-auto">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Mentors
            </h2>
            <p className="text-gray-400 text-lg">
              Guidance from industry leaders shaping the next generation of builders.
            </p>
          </div>
        </div>

        {/* ================= MOBILE MARQUEE ================= */}
        <div className="md:hidden relative">
          <motion.div
            className="flex gap-6 w-max px-6"
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
                  alt={mentor.name}
                  className="mx-auto mb-4 h-20 w-20 rounded-full object-cover border border-white/20"
                />
                <h3 className="text-lg font-semibold text-white">
                  {mentor.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {mentor.role}
                </p>
                <a
                  href={mentor.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-md border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white hover:bg-[#0B1F33] transition-colors duration-150"
                >
                  View Profile →
                </a>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:block container px-6 mx-auto">
          <div
            className="
              grid gap-x-20 gap-y-32
              justify-items-center
              [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]
              max-w-[1200px] mx-auto
            "
          >
            {mentors.map((mentor, i) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="h-[400px] w-full max-w-[320px] rounded-xl bg-white/5 border border-white/10 flex flex-col items-center pt-8 px-8"
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="mb-6 h-28 w-28 rounded-full object-cover border border-white/20"
                />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {mentor.name}
                </h3>
                <p className="text-gray-400 mb-6 text-center">
                  {mentor.role}
                </p>
                <a
                  href={mentor.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto mb-8 inline-flex rounded-md border border-white/20 bg-white/5 px-6 py-2 text-sm text-white hover:bg-[#0B1F33] transition-colors duration-150"
                >
                  View Profile →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
