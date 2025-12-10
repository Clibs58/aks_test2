import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "h-16 bg-black/90 backdrop-blur-md border-white/5"
          : "h-20 bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto h-full px-6 flex items-center justify-between">
        <Link href="/" className="cursor-pointer">
          <img 
            src="client/src/components/layout/logo.png" 
            alt="Logo" 
            className="h-10 w-auto"
          />
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Work", "Process", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 font-medium shadow-[0_0_15px_rgba(27,38,59,0.5)] hover:shadow-[0_0_25px_rgba(65,90,119,0.6)] transition-all duration-300 cursor-pointer"
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {["Work", "Process", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-gray-300 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="w-full bg-primary text-white mt-4">
                Let's Talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}