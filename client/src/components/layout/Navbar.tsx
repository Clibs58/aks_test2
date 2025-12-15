import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ---------------- Tabs ---------------- */
const tabs = ["Home", "About", "Portfolio", "Contact"];

/* ---------------- Segmented Tabs (GitHub-accurate) ---------------- */
function SegmentedTabs() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);

  const [pill, setPill] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const activeBtn = buttonRefs.current[active];
    const container = containerRef.current;

    if (activeBtn && container) {
      const btnRect = activeBtn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setPill({
        width: btnRect.width,
        left: btnRect.left - containerRect.left,
      });
    }
  }, [active]);

  return (
    <div
      ref={containerRef}
      role="tablist"
      aria-label="Primary navigation"
      className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md"
    >
      {/* Accurate sliding pill */}
      <motion.div
        animate={pill}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute top-1 bottom-1 rounded-full bg-white/10"
      />

      {tabs.map((tab, i) => (
        <button
          key={tab}
          ref={(el) => (buttonRefs.current[i] = el)}
          role="tab"
          aria-selected={active === i}
          onClick={() => setActive(i)}
          className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors ${
            active === i
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

/* ---------------- Navbar ---------------- */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
          ? "min-h-[72px] py-2 bg-black/20 backdrop-blur-md border-white/5"
          : "min-h-[96px] py-3 bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between md:grid md:grid-cols-3">
        {/* Left: Logo */}
        <div className="flex justify-start">
          <Link href="/" className="cursor-pointer flex items-center">
            <img
              src="/aks_logo_website.svg"
              alt="Logo"
              className="h-20 w-auto"
            />
          </Link>
        </div>

        {/* Center: Segmented Tabs */}
        <div className="hidden md:flex justify-center">
          <SegmentedTabs />
        </div>

        {/* Right: CTA + Mobile toggle */}
        <div className="flex justify-end items-center gap-4">
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 font-medium transition-all">
              Join Us
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-md border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {tabs.map((item) => (
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
                Join Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
