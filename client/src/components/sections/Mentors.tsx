"use client";

import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react"; // for arrow icon

/* ================= MENTOR DATA ================= */
const mentors = [
  { id: "01", name: "Sheikh Yameen", role: "CEO & Co-Founder @ Curve Electric", image: "/mentors/sheikh_yameen.jpg", profile: "https://www.linkedin.com/in/sheikh-yameen-835a06133/" },
  { id: "02", name: "Isha Jhawar", role: "Founder & CEO @ Repeat GUD", image: "/mentors/isha_jhawar.jpg", profile: "https://www.linkedin.com/in/isha-jhawar-19268b121/" },
  { id: "03", name: "Rohan Kashyap", role: "Founder @ Burger Bae", image: "/mentors/rohan_kashyap.jpg", profile: "https://www.linkedin.com/in/rohan-kashyap-8b242582/" },
  { id: "04", name: "Rahul Shah", role: "Founder @ Yaan Man", image: "/mentors/rahul_shah.jpg", profile: "https://www.linkedin.com/in/rahul-shah-0a725b84/" },
  { id: "05", name: "Ketan Seth", role: "Founder & Personal Branding Strategist @ Branding Over Coffee | Founder @ Digital Screw", image: "/mentors/ketan.jpg", profile: "https://www.linkedin.com/in/sethi-ketan/" },
  { id: "06", name: "Aditya Amar", role: "Founder & CEO @ Logic Bloom", image: "/mentors/aditya_amar.jpg", profile: "https://www.linkedin.com/in/aditya-amar-8aab07200/" },
  { id: "07", name: "Nikhil Raizada", role: "Founder @ Raizzify", image: "/mentors/nikhil_raiziffy.jpg", profile: "https://www.linkedin.com/in/nikhil-raizada-651730161/" },
  { id: "08", name: "Harshita Mittal", role: "Founder @ Rulenine Studio | Ex-Brand Designer @ Creativfish | Ex-Brand Strategist @ Creativano", image: "/mentors/harshita_mittal.jpg", profile: "https://www.linkedin.com/in/harshitaa-mittal/" },
  { id: "09", name: "Vineet Yadav", role: "Founder @ SleekandPeek", image: "/mentors/vineet.jpg", profile: "https://www.linkedin.com/in/vineet-yadav-1b86771b7/" },
  { id: "10", name: "Saiprasad Pandilwar", role: "Founder @ MyPerro", image: "/mentors/sai_perro.jpg", profile: "https://www.linkedin.com/in/saiprasadpandilwar/" },
  { id: "11", name: "Shrey Baldev", role: "Founder & Student Entrepreneur @ Moon Finance | Startup Incubatee @ NSRCEL IIM Bangalore", image: "/mentors/shrey.jpg", profile: "https://www.linkedin.com/in/shreybaldev/" },
  { id: "12", name: "Havish Karanam", role: "Founder & CEO @ XIBOTIX Pvt. Ltd. | Ex-CTO @ Awlam Innovations Pvt. Ltd.", image: "/mentors/havish.jpg", profile: "https://www.linkedin.com/in/havish-karanam-91590a1b9/" },
  { id: "13", name: "Ajith Sunny", role: "Co-Founder @ MetaShot | CMO @ Craste", image: "/mentors/ajith.jpg", profile: "https://www.linkedin.com/in/ajith-sunny-39b12456/" },
];

/* ========= CATEGORY SPLIT ========= */
const sharkTankMentors = mentors.filter(m => ["01","02","03","04","13"].includes(m.id));
const industryMentors   = mentors.filter(m => ["05","06","07","08","09"].includes(m.id));
const vitMentors        = mentors.filter(m => ["10","11","12"].includes(m.id));

/* ========= COMPONENT ========= */
export function Mentors() {
  const [showAll, setShowAll] = useState(false);

  /* ===== background animations (unchanged) ===== */
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

    animate(ambientX, [10, 80, 10], { duration: 18, repeat: Infinity, ease: "easeInOut" });
    animate(ambientY, [20, 70, 20], { duration: 22, repeat: Infinity, ease: "easeInOut" });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  const spotlight = useMotionTemplate`
    radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(11,31,51,0.45), transparent 65%)
  `;
  const ambientGlow = useMotionTemplate`
    radial-gradient(800px circle at ${ambientX}% ${ambientY}%, rgba(11,31,51,0.25), transparent 70%)
  `;

  /* ===== batching logic only if showAll = false ===== */
  const BATCH_SIZE = 6;
  const INTERVAL = 8000;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (showAll) return; // disable rotation when showing full list
    const timer = setInterval(() => setIndex(prev => (prev + BATCH_SIZE) % mentors.length), INTERVAL);
    return () => clearInterval(timer);
  }, [showAll]);

  const visibleMentors =
    mentors.slice(index, index + BATCH_SIZE).length === BATCH_SIZE
      ? mentors.slice(index, index + BATCH_SIZE)
      : [...mentors.slice(index), ...mentors.slice(0, (index + BATCH_SIZE) % mentors.length)];

  /* ===== GRID RENDER FUNCTION ===== */
  const MentorGrid = ({ list }: { list: typeof mentors }) => (
    <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      {list.map(mentor => (
        <motion.div
          key={mentor.id}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.25 }}
          className="h-[400px] w-full max-w-[320px] rounded-xl bg-white/5 border border-white/10 flex flex-col items-center pt-8 px-8"
        >
          <img src={mentor.image} className="mb-6 h-28 w-28 rounded-full object-cover border border-white/20" />
          <h3 className="text-2xl font-semibold text-white mb-2">{mentor.name}</h3>
          <p className="text-gray-400 mb-6 text-center">{mentor.role}</p>
          <a href={mentor.profile} target="_blank" className="mt-auto mb-8 inline-flex rounded-md border border-white/20 bg-white/5 px-6 py-2 text-sm text-white hover:bg-[#0B1F33]">
            View Profile →
          </a>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="mentors" className="relative py-32 bg-black overflow-hidden">
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block" style={{ background: ambientGlow }} />
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block mix-blend-screen" style={{ background: spotlight }} />

      {/* ======== HEADER ======== */}
      <div className="relative z-10 container px-6 mx-auto mb-20 flex items-center justify-between">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">Our Mentors</h2>
          <p className="text-gray-400 text-lg max-w-xl">Guidance from industry leaders shaping the next generation of builders.</p>
        </div>

        {/* arrow to expand */}
        <button
          onClick={() => setShowAll(prev => !prev)}
          className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 mt-6 md:mt-0"
        >
          {showAll ? "Show Less" : "View All"}
          <ChevronRight className={`transition-transform ${showAll ? "rotate-90" : ""}`} />
        </button>
      </div>

      {/* ======== MOBILE MARQUEE remains unchanged ======== */}
      {!showAll && (
        <div className="md:hidden relative mb-16 px-6">
          <motion.div className="flex gap-6 w-max" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 28, ease: "linear", repeat: Infinity }}>
            {[...mentors, ...mentors].map((mentor, i) => (
              <div key={i} className="w-64 rounded-xl bg-white/5 border border-white/10 px-6 py-6 text-center flex-shrink-0">
                <img src={mentor.image} className="mx-auto mb-4 h-20 w-20 rounded-full object-cover border border-white/20" />
                <h3 className="text-lg font-semibold text-white">{mentor.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{mentor.role}</p>
                <a href={mentor.profile} target="_blank" className="inline-flex rounded-md border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white hover:bg-[#0B1F33]">
                  View Profile →
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* ======== DESKTOP ======== */}
      <div className="hidden md:block container px-6 mx-auto flex justify-center">
        {/* when showAll = false → show rotating */}
        {!showAll && (
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="grid gap-x-20 gap-y-32 justify-items-center [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] max-w-[1200px] mx-auto"
            >
              {visibleMentors.map(m => <MentorGrid key={m.id} list={[m]} />)}
            </motion.div>
          </AnimatePresence>
        )}

        {/* ===== FULL VIEW WITH CATEGORIES ===== */}
        {showAll && (
          <div className="space-y-24 max-w-[1200px] mx-auto">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-10">Shark Tank Mentors</h3>
              <MentorGrid list={sharkTankMentors} />
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-white mb-10">Industry Mentors</h3>
              <MentorGrid list={industryMentors} />
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-white mb-10">VIT Mentors</h3>
              <MentorGrid list={vitMentors} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
