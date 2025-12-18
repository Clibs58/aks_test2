import { motion } from "framer-motion";

const mentors = [
  {
    id: "01",
    name: "Abhishek R",
    role: "CEO @ Neoviz Technologies Pvt. Ltd.",
    image: "Abhishek.jpg",
    quote: "Great products are built by teams who care deeply about users.",
    profile: "https://www.linkedin.com/in/abhishekrana",
  },
  {
    id: "02",
    name: "John Edwards",
    role: "Founder @ Calvaryrobe Regals",
    image: "/mentors/john.jpg",
    quote: "Execution beats ideas. Build fast, learn faster.",
    profile: "https://www.linkedin.com/in/johnedwards",
  },
  {
    id: "03",
    name: "Rachit Kumar",
    role: "Head — GTM & Payments AI @ LinkedIn",
    image: "/mentors/rachit.jpg",
    quote: "Clarity in thinking leads to speed in execution.",
    profile: "https://www.linkedin.com/in/rachit-kumar",
  },
  {
    id: "04",
    name: "Partho Ghosh",
    role: "Scientist @ ISRO",
    image: "/mentors/partho.jpg",
    quote: "Precision, patience, and persistence define success.",
    profile: "https://www.linkedin.com/in/partho-ghosh",
  },
  {
    id: "05",
    name: "Josh Praveen",
    role: "VP @ SnapMenu",
    image: "/mentors/josh.jpg",
    quote: "Scale comes from systems, not heroics.",
    profile: "https://www.linkedin.com/in/josh-praveen",
  },
  {
    id: "06",
    name: "Lalit Mohan",
    role: "ICF CFA — IRS",
    image: "/mentors/lalit.jpg",
    quote: "Discipline compounds faster than motivation.",
    profile: "https://www.linkedin.com/in/lalit-mohan",
  },
];

export function Mentors() {
  return (
    <section id="mentors" className="relative py-32 bg-black overflow-hidden">
      <div className="container px-6 mx-auto">
        {/* Heading */}
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-32">
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative h-[420px] flex justify-center group overflow-hidden"
            >
              {/* ===== CARD (hidden until hover) ===== */}
              <div
                className="
                  absolute bottom-0
                  w-[320px] h-[360px]
                  rounded-3xl
                  bg-white/5 border border-white/10
                  opacity-0 scale-95 translate-y-6
                  group-hover:opacity-100
                  group-hover:scale-100
                  group-hover:translate-y-0
                  transition-all duration-300 ease-out
                  shadow-[0_0_40px_rgba(255,255,255,0.12)]
                  flex flex-col items-center
                  pt-24 pb-10
                "
              >
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {mentor.name}
                </h3>
                <p className="text-gray-400 text-center px-6">
                  {mentor.role}
                </p>

                <a
                  href={mentor.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6 inline-flex items-center gap-2
                    rounded-full border border-white/20
                    bg-white/5 px-5 py-2
                    text-sm font-medium text-white
                    hover:bg-white/10 hover:border-white/40 transition
                  "
                >
                  View Profile →
                </a>
              </div>

              {/* ===== AVATAR (always visible) ===== */}
              <div
                className="
                  relative z-10
                  transition-transform duration-300
                  group-hover:-translate-y-4
                "
              >
                <div className="absolute inset-0 rounded-full blur-xl bg-accent/30 opacity-0 group-hover:opacity-100 transition" />
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="h-32 w-32 rounded-full object-cover border border-white/20"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= MOBILE MARQUEE (UNCHANGED) ================= */}
      {/* keep your existing mobile marquee code exactly as-is */}
    </section>
  );
}
