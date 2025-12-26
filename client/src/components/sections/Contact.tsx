import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "What exactly does AKS do?",
    a: "AKS helps student-led and early-stage startups turn ideas into real, usable products. AKS works on product strategy, execution, and go-to-market as an embedded product team rather than an external consultancy.",
  },
  {
    q: "Is AKS a consultancy or a startup studio?",
    a: "AKS is neither a traditional consultancy nor a startup studio. AKS operates as a product leadership ecosystem, embedding with teams to build products while also developing AKS-owned products alongside founder collaborations.",
  },
  {
    q: "What stage startups does AKS usually work with?",
    a: "AKS primarily works with idea-stage to early-revenue startups, especially where product direction lacks clarity or execution needs strong structure.",
  },
  {
    q: "Does AKS build products end-to-end?",
    a: "Yes. Depending on the engagement, AKS supports the entire product lifecycle—from discovery and strategy to execution and launch—working closely with founders and internal tech teams.",
  },
  {
    q: "How is AKS different from agencies or freelancers?",
    a: "Agencies focus on task delivery and freelancers focus on feature delivery. AKS takes ownership of product direction and execution outcomes, operating with a product leadership mindset rather than a vendor approach.",
  },
  {
    q: "Can students join AKS as interns?",
    a: "Yes. AKS offers internships for students seeking hands-on experience working on real products, real teams, and real decision-making—not theoretical or classroom-style assignments.",
  },
];

export function Contact() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Let's build <br />
              <span className="text-white">something</span><br />
              <span className="text-gray-500">extraordinary</span>.
            </h2>

            <p className="text-xl text-gray-400 max-w-md mt-8">
              Ready to transform your digital presence?  
              We’re here to help you succeed.
            </p>
          </motion.div>

          {/* ================= RIGHT SIDE (FAQs CARD) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = open === i;

                return (
                  <div
                    key={i}
                    className="border border-white/10 rounded-xl bg-white/5"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                    >
                      <span className="text-white font-medium">
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xl text-gray-400"
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
