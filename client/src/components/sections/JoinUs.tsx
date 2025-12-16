import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function JoinUs() {
  return (
    <section id="joinus" className="py-32 bg-muted/20">
      <div className="container px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Team</h2>
          <p className="text-gray-400 text-lg mb-10">
            We are always looking for exceptional talent to help us build the future.
            Explore our open positions and internship programs.
          </p>
          
          <a 
            href="#" 
            className="group inline-flex items-center text-xl font-semibold text-white relative"
          >
            <span className="relative z-10">View Open Roles</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_10px_rgba(65,90,119,0.8)] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}