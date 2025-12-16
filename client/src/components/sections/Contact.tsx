import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Who can work with AKS?",
    a: "We work with student founders, early-stage startups, and builders who want to ship real products.",
  },
  {
    q: "Do you provide mentorship or execution?",
    a: "Both. We act as an embedded product team — from strategy to execution and launch.",
  },
  {
    q: "Is this suitable for first-time founders?",
    a: "Absolutely. AKS is built founder-first and is especially helpful for first-time builders.",
  },
  {
    q: "How do I get started?",
    a: "Reach out to us via email or socials, and we’ll take it from there.",
  },
];

export function Contact() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
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
