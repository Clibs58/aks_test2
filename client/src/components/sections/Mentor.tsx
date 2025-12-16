import { motion } from "framer-motion";

const mentors = [
  {
    id: "01",
    name: "Rodick J",
    role: "CEO @ PayirCorp",
    image: "/mentors/rodick.jpg",
    profile: "#",
  },
  {
    id: "02",
    name: "John Edwards",
    role: "Founder @ Calvaryrobe Regals",
    image: "/mentors/john.jpg",
    profile: "#",
  },
  {
    id: "03",
    name: "Rachit Kumar",
    role: "Head — GTM & Payments AI @ LinkedIn",
    image: "/mentors/rachit.jpg",
    profile: "#",
  },
  {
    id: "04",
    name: "Partho Ghosh",
    role: "Scientist @ ISRO",
    image: "/mentors/partho.jpg",
    profile: "#",
  },
  {
    id: "05",
    name: "Josh Praveen",
    role: "VP @ SnapMenu",
    image: "/mentors/josh.jpg",
    profile: "#",
  },
  {
    id: "06",
    name: "Lalit Mohan",
    role: "ICF CFA — IRS",
    image: "/mentors/lalit.jpg",
    profile: "#",
  },
];

export function Mentors() {
  return (
    <section
      id="mentors"
      className="relative py-32 bg-black overflow-hidden"
    >
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4, // staggered levitation
              }}
              whileHover={{ y: -18 }}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Top index line */}
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
                  className="relative z-10 h-28 w-28 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-semibold text-white mb-2 transition-colors group-hover:text-white">
                {mentor.name}
              </h3>

              {/* Role */}
              <p className="text-gray-400 mb-4">
                {mentor.role}
              </p>

              {/* Profile link */}
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
