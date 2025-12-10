import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Gradient Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[4000ms]" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Let's build <br />
              <span className="text-gray-500">something</span> <br />
              <span className="text-white">extraordinary.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-md mt-8">
              Ready to transform your digital presence? We're here to help you succeed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl"
          >
           <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <Input className="bg-white/5 border-white/10 focus:border-accent text-white h-12" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <Input className="bg-white/5 border-white/10 focus:border-accent text-white h-12" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <Textarea className="bg-white/5 border-white/10 focus:border-accent text-white min-h-[150px]" placeholder="Tell us about your project..." />
              </div>

              <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white text-lg font-medium shadow-lg shadow-primary/20">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}