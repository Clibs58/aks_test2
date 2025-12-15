import { motion } from "framer-motion";
import { Activity, Box, Circle, Hexagon, Triangle, Zap } from "lucide-react";

const logos = [Hexagon, Zap, Circle, Triangle, Activity, Box];

export function ClientLogos() {
  return (
    <section className="py-24 border-y border-white/5 bg-black/50 backdrop-blur-sm overflow-hidden">
      <div className="container px-6 mx-auto">
        <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-12">
          Trusted by Industry Leaders
        </p>

        {/* Marquee wrapper */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((Icon, i) => (
              <div
                key={i}
                className="group flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <Icon
                  className="w-10 h-10 text-white group-hover:text-accent transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
