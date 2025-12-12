import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import cs1 from "@assets/generated_images/modern_office_architecture_for_case_study.png";
import cs2 from "@assets/generated_images/futuristic_data_center_for_case_study.png";
import cs3 from "@assets/generated_images/team_collaboration_for_case_study.png";

const cases = [
  {
    title: "FinTech Evolution",
    category: "Banking Platform",
    kpi: "+45% User Retention",
    image: cs1,
  },
  {
    title: "Data Core",
    category: "Cloud Infrastructure",
    kpi: "3x Faster Processing",
    image: cs2,
  },
  {
    title: "Global Connect",
    category: "Enterprise SaaS",
    kpi: "2M+ Active Users",
    image: cs3,
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="py-32 bg-black/30">
      <div className="container px-6 mx-auto">
        {/* Title Row */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
            <p className="text-gray-400">Impactful results for global brands.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-accent hover:text-white transition-colors">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal Cards */}
        <div className="flex flex-col gap-12">
          {cases.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden border-white/5 bg-card hover:border-accent/50 transition-all duration-500">
                <CardContent className="p-0">
                  {/* Horizontal Layout */}
                  <div className="flex flex-row h-full min-h-[300px] md:min-h-[400px]">

                    {/* LEFT TEXT SIDE */}
                    <div className="p-8 md:p-12 w-1/2 flex flex-col justify-center relative">
                      <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500 ease-in-out" />

                      <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
                        {project.category}
                      </span>

                      <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>

                      <div className="mt-auto pt-8 border-t border-white/10">
                        <p className="text-lg font-medium text-white">
                          Impact: <span className="text-gray-400">{project.kpi}</span>
                        </p>
                      </div>

                      <div className="mt-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                        <button className="flex items-center gap-2 text-white font-medium">
                          View Case Study <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* RIGHT IMAGE SIDE */}
                    <div className="relative w-1/2 h-64 md:h-full overflow-hidden">
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-12 md:hidden text-center">
          <button className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}