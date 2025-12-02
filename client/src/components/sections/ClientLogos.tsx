import { motion } from "framer-motion";
import { Activity, Box, Circle, Hexagon, Triangle, Zap } from "lucide-react";

const logos = [
  { name: "Vortex", icon: Hexagon },
  { name: "Lumina", icon: Zap },
  { name: "Sphere", icon: Circle },
  { name: "Apex", icon: Triangle },
  { name: "Pulse", icon: Activity },
  { name: "Cube", icon: Box },
];

export function ClientLogos() {
  return (
    <section className="py-24 border-y border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="container px-6 mx-auto">
        <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-12">Trusted by Industry Leaders</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              <logo.icon className="w-8 h-8 text-white group-hover:text-accent transition-colors" strokeWidth={1.5} />
              <span className="text-lg font-semibold text-white hidden md:block">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}