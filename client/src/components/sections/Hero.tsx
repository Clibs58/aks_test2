import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/dark_metallic_blue_abstract_hero_background.png";

export function Hero() {
  return (
    <section className="relative min-h-[760px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        {/* Noise overlay */}
        <div className="absolute inset-0 noise-bg opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container relative z-10 px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-[1.1] tracking-tight mb-6"
        >
          Future-Ready <br />
          <span className="text-gradient-blue">Digital Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We craft premium interfaces for forward-thinking brands.
          Elevate your digital presence with precision engineering and aesthetic mastery.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg"
              className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-lg shadow-[0_0_20px_rgba(27,38,59,0.4)] hover:shadow-[0_0_30px_rgba(65,90,119,0.5)] transition-all duration-300"
            >
              Start a Project
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="h-14 px-8 text-lg border-accent text-white hover:bg-accent/10 hover:text-white rounded-lg backdrop-blur-sm transition-all duration-300"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent/0 via-accent to-accent/0" />
      </motion.div>
    </section>
  );
}