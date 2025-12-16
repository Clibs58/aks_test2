import { motion } from "framer-motion";

const mentors = [
  {
    id: "01",
    name: "Abhishek R",
    role: "CEO @ Neoviz Technologies Pvt. Ltd.",
    image: "/Abhishek.jpg",
    
    profile: "#",
  },
  {
    id: "02",
    name: "John Edwards",
    role: "Founder @ Calvaryrobe Regals",
    image: "/mentors/john.jpg",
    quote: "Execution beats ideas. Build fast, learn faster.",
    profile: "#",
  },
  {
    id: "03",
    name: "Rachit Kumar",
    role: "Head — GTM & Payments AI @ LinkedIn",
    image: "/mentors/rachit.jpg",
    quote: "Clarity in thinking leads to speed in execution.",
    profile: "#",
  },
  {
    id: "04",
    name: "Partho Ghosh",
    role: "Scientist @ ISRO",
    image: "/mentors/partho.jpg",
    quote: "Precision, patience, and persistence define success.",
    profile: "#",
  },
  {
    id: "05",
    name: "Josh Praveen",
    role: "VP @ SnapMenu",
    image: "/mentors/josh.jpg",
    quote: "Scale comes from systems, not heroics.",
    profile: "#",
  },
  {
    id: "06",
    name: "Lalit Mohan",
    role: "ICF CFA — IRS",
    image: "/mentors/lalit.jpg",
    quote: "Discipline compounds faster than motivation.",
    profile: "#",
  },
];

export function Mentors() {
  return (
    <section id="mentors" className="relative py-32 bg-black">
      <div className="container px-6 mx-auto">

        {/* Heading */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Mentors
          </h2>
          <p className="text-gray-400 text-lg">
            Guidance from industry leaders shaping the next generation of builders.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Quote Card */}
              <div
                className="
                  absolute -top-32 w-72
                  opacity-0 translate-y-4
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300
                  pointer-events-none
                  z-20
                "
              >
                <div className="relative rounded-xl bg-[#0b1220] border border-white/10 p-4 text-sm text-gray-200 shadow-xl">
                  “{mentor.quote}”
                  <div className="absolute left-1/2 -bottom-2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#0b1220] border-r border-b border-white/10" />
                </div>
              </div>

              {/* Index */}
              <div className="absolute -top-6 flex items-center gap-3 text-gray-500 text-sm">
                <span className="h-[1px] w-10 bg-white/20" />
                {mentor.id}
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

              {/* Name */}
              <h3 className="text-2xl font-semibold text-white mb-2">
                {mentor.name}
              </h3>

              {/* Role */}
              <p className="text-gray-400 mb-4">
                {mentor.role}
              </p>

              {/* Profile */}
              <a
                href={mentor.profile}
                className="text-sm text-gray-400 inline-flex items-center gap-2 transition-colors group-hover:text-white"
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
