import { motion } from "framer-motion";

const mentors = [
  {
    id: "01",
    name: "Abhishek R",
    role: "CEO @ Neoviz Technologies Pvt. Ltd.",
    image: "Abhishek.jpg",
    profile: "https://www.linkedin.com/in/abhishekrana",
  },
  {
    id: "02",
    name: "John Edwards",
    role: "Founder @ Calvaryrobe Regals",
    image: "/mentors/john.jpg",
    profile: "https://www.linkedin.com/in/johnedwards",
  },
  {
    id: "03",
    name: "Rachit Kumar",
    role: "Head — GTM & Payments AI @ LinkedIn",
    image: "/mentors/rachit.jpg",
    profile: "https://www.linkedin.com/in/rachit-kumar",
  },
];

export function Mentors() {
  return (
    <section id="mentors" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-20">
          Our Mentors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex justify-center h-[420px]"
            >
              {/* ================= CARD (expands UP only) ================= */}
              <div
                className="
                  absolute bottom-0
                  w-[320px] h-[360px]
                  rounded-3xl
                  bg-gradient-to-b from-black to-black/90
                  border border-white/10
                  opacity-0 translate-y-8 scale-95
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  group-hover:scale-100
                  transition-all duration-300 ease-out
                  shadow-[0_0_60px_rgba(255,255,255,0.12)]
                  flex flex-col items-center justify-end
                  pb-10
                  pointer-events-none
                "
              >
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {mentor.name}
                </h3>
                <p className="text-gray-400 text-center px-6 mb-6">
                  {mentor.role}
                </p>

                <a
                  href={mentor.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    pointer-events-auto
                    inline-flex items-center gap-2
                    rounded-full
                    border border-white/20
                    bg-white/5
                    px-6 py-2
                    text-sm font-medium text-white
                    hover:bg-white/10 transition
                  "
                >
                  View Profile →
                </a>
              </div>

              {/* ================= AVATAR (anchor point) ================= */}
              <div className="relative z-10 group">
                <div className="absolute inset-0 rounded-full blur-xl bg-white/20 opacity-0 group-hover:opacity-100 transition" />
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="
                    relative
                    h-32 w-32
                    rounded-full
                    object-cover
                    border border-white/20
                    transition-transform duration-300
                    group-hover:-translate-y-4
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
