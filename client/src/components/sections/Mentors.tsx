import { motion } from "framer-motion";

const mentors = [
  {
    id: "01",
    name: "Saiprasad Pandilwar",
    role: "Founder @ MyPerro",
    image: "sai_perro.jpg",
    quote: "Great products are built by teams who care deeply about users.",
    profile: "https://www.linkedin.com/in/abhishekrana", // example
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mentors</h2>
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
          className="flex gap-16 w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...mentors, ...mentors].map((mentor, i) => (
            <div key={i} className="relative group flex-shrink-0 w-56 text-center">
              {/* Quote */}
              <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                <div className="rounded-xl bg-[#0b1220] border border-white/10 p-4 text-sm text-gray-200 shadow-xl">
                  “{mentor.quote}”
                </div>
              </div>

              {/* Avatar */}
              <div className="relative mb-6 flex justify-center">
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-accent/40" />
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="relative z-10 h-24 w-24 rounded-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-white">{mentor.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{mentor.role}</p>

              <a
                href={mentor.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm text-accent"
              >
                View Profile →
              </a>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden md:block container px-6 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-20">
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Quote */}
              <div className="absolute -top-32 w-72 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-20">
                <div className="rounded-xl bg-[#0b1220] border border-white/10 p-4 text-sm text-gray-200 shadow-xl">
                  “{mentor.quote}”
                </div>
              </div>

              {/* Avatar */}
              <div className="relative mb-8">
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-accent/40" />
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="relative z-10 h-28 w-28 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-2">
                {mentor.name}
              </h3>
              <p className="text-gray-400">{mentor.role}</p>

              <a
                href={mentor.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm text-accent
                           opacity-0 translate-y-2
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-300"
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
