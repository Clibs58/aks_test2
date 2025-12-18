import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { useEffect } from "react";

/* ================= MENTORS DATA ================= */
const mentors = [
  {
    id: "01",
    name: "Saiprasad Pandilwar",
    role: "Founder @ MyPerro",
    image: "sai_perro.jpg",
    profile: "https://www.linkedin.com/in/saiprasadpandilwar/",
  },
  {
    id: "02",
    name: "Vineet Yadav"",
    role: "Founder @ SleekandPeek",
    image: "vineet.jpg",
    profile: "https://www.linkedin.com/in/vineet-yadav-1b86771b7",
  },
  {
    id: "03",
    name: "Rachit Kumar",
    role: "Head — GTM & Payments AI @ LinkedIn",
    image: "/mentors/rachit.jpg",
    profile: "https://www.linkedin.com/in/rachit-kumar",
  },
  {
    id: "04",
    name: "Partho Ghosh",
    role: "Scientist @ ISRO",
    image: "/mentors/partho.jpg",
    profile: "https://www.linkedin.com/in/partho-ghosh",
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

/* ================= PARTICLES ================= */
const particles = Array.from({ length: 22 });

export function Mentors() {
  /* ================= CURSOR ================= */
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

  /* ================= BACKGROUND GLOWS ================= */
  const spotlight = useMotionTemplate`
    radial-gradient(
      520px circle at ${mouseX}px ${mouseY}px,
      rgba(8,26,43,0.45),
      transparent 65%
    )
  `;

  const ambientGlow = useMotionTemplate`
    radial-gradient(
      900px circle at ${ambientX}% ${ambientY}%,
      rgba(8,26,43,0.28),
      transparent 70%
    )
  `;

  return (
    <section id="mentors" className="relative py-32 bg-black overflow-hidden">
      {/* ================= LIVE WALLPAPER ================= */}
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

      {/* ================= SHIMMER PARTICLES ================= */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {particles.map((_, i) => {
          const size = Math.random() * 3 + 2;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const duration = Math.random() * 10 + 12;

          return (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                background: "#081A2B",
                left: `${x}%`,
                top: `${y}%`,
                opacity: 0.6,
              }}
              animate={{
                y: ["0%", "-120%"],
                opacity: [0.2, 0.8, 0.2],
                x: [
                  0,
                  (i % 2 === 0 ? 1 : -1) * 30,
                  0,
                ],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          );
        })}
      </div>

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
            {mentors.map((mentor) => (
              <motion.div
                key={mentor.id}
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
                  className="mt-auto mb-8 inline-flex rounded-md border border-white/20 bg-white/5 px-6 py-2 text-sm text-white hover:bg-[#081A2B] hover:border-[#081A2B] transition-colors duration-150"
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
