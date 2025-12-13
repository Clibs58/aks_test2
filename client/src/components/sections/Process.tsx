import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "In depth insights into market, constraints, assumptions and goals owing to crystal clear clarity",
  },
  {
    num: "02",
    title: "Define",
    desc: "Translating insights into clear product direction, thus defining what should be built and prioritised",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Aligning teams around execution by structuring work,planning iterations and ensuring execution of product strategy",
  },
  {
    num: "04",
    title: "Deploy",
    desc: "Ensuring successful launch of product with consequent and swift action on costumer feedbacks",
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-gray-400 text-lg">
            A streamlined approach to delivering excellence, from concept to launch.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-white/10 w-full -z-10" />
          <motion.div 
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-accent w-full -z-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="relative pt-4 md:pt-12"
              >
                <div className="hidden md:block absolute top-10 left-0 w-4 h-4 bg-black border-2 border-accent rounded-full -translate-y-1/2" />
                
                <span className="text-6xl font-bold text-white/5 absolute top-0 left-0 -translate-y-1/4 md:translate-y-0 z-0 select-none">
                  {step.num}
                </span>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}