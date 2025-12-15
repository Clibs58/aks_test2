import { motion } from "framer-motion";

export function CaseStudies() {
  return (
    <section id="about" className="py-32 bg-black/30">
      <div className="container px-6 mx-auto">

        {/* Heading */}
        <motion.div
          className="mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About 4D Process</h2>
          <p className="text-gray-400 text-lg">
            Product leadership. Founder-first. Built for real impact.
          </p>
        </motion.div>

        {/* WHOLE CARD = HOVER TRIGGER */}
        <motion.div
          className="group overflow-hidden border border-white/5 bg-card rounded-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row min-h-[360px]">

            {/* PURPOSE */}
            <div className="relative w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">

              {/* Accent Bar (animated by group hover) */}
              <div className="absolute top-0 left-0 w-1 h-full bg-accent origin-top
                transition-all duration-300
                group-hover:scale-y-[1.15]
                group-hover:shadow-[0_0_18px_rgba(65,90,119,0.9)]
              " />

              <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
                Purpose
              </span>

              {/* Heading with underline */}
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="relative inline-block">
                  <span className="relative z-10">
                    Building Products That Matter
                  </span>

                  {/* Underline */}
                  <span
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-accent
                    shadow-[0_0_10px_rgba(65,90,119,0.8)]
                    origin-left scale-x-0
                    transition-transform duration-300
                    group-hover:scale-x-100"
                  />
                </span>
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">
                Explain AKS identity, positioning, and long-term vision.
              </p>
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10">
              <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
                Who We Are
              </span>

              <p className="text-lg text-white leading-relaxed mb-6">
                AKS is a product leadership ecosystem helping student-led startups
                build real products with clarity and structure.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                We work as an embedded product team, supporting strategy,
                execution, and go-to-market, while also building AKS-owned SaaS
                products and connecting founders with industry experts.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
