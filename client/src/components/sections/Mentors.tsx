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

export function Mentors() {
  return (
    <section id="mentors" className="relative py-32 bg-black overflow-hidden">
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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-6 w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {[...mentors, ...mentors].map((mentor, i) => (
            <div
              key={i}
              className="
                w-64 rounded-3xl bg-white/5 border border-white/10
                px-6 py-8 text-center flex-shrink-0
              "
            >
              <div className="relative mb-5 flex justify-center">
                <div className="absolute inset-0 rounded-full blur-xl bg-accent/30" />
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="relative z-10 h-20 w-20 rounded-full object-cover border border-white/20"
                />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {mentor.name}
              </h3>
              <p className="text-sm text-gray-400 mt-1 mb-4">
                {mentor.role}
              </p>

              <a
                href={mentor.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-white/20
                  bg-white/5
                  px-4 py-1.5
                  text-sm font-medium text-white
                  transition-colors duration-150 ease-out
                  hover:bg-[#0B1F33]
                  hover:border-[#0B1F33]
                "
              >
                View Profile →
              </a>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden md:block container px-6 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-32">
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="
                h-[420px]
                rounded-3xl
                bg-white/5
                border border-white/10
                flex flex-col items-center
                pt-10 px-8
                transition-transform duration-150 ease-out
              "
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full blur-xl bg-accent/30" />
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="relative z-10 h-28 w-28 rounded-full object-cover border border-white/20"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-2 text-center">
                {mentor.name}
              </h3>
              <p className="text-gray-400 text-center mb-6">
                {mentor.role}
              </p>

              <a
                href={mentor.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-auto mb-8
                  inline-flex items-center gap-2
                  rounded-full
                  border border-white/20
                  bg-white/5
                  px-6 py-2
                  text-sm font-medium text-white
                  transition-colors duration-150 ease-out
                  hover:bg-[#0B1F33]
                  hover:border-[#0B1F33]
                "
              >
                View Profile →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
