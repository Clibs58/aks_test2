import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ---------------- Tabs ---------------- */
const tabs = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact", id: "contact" },
];

/* ---------------- Segmented Tabs ---------------- */
function SegmentedTabs({ onNavigate }) {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);
  const [pill, setPill] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const activeBtn = buttonRefs.current[active];
    const container = containerRef.current;
    if (!activeBtn || !container) return;

    const btnRect = activeBtn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setPill({
      width: btnRect.width,
      left: btnRect.left - containerRect.left,
    });
  }, [active]);

  return (
    <div
      ref={containerRef}
      role="tablist"
      aria-label="Primary navigation"
      className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md"
    >
      <motion.div
        animate={pill}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute top-1 bottom-1 rounded-full bg-white/10"
      />

      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          ref={(el) => (buttonRefs.current[i] = el)}
          onClick={() => {
            setActive(i);
            onNavigate(tab.id);
          }}
          className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors ${
            active === i
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab.label}
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

  /* -------- Smooth scroll handler -------- */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "min-h-[72px] py-2 bg-black/90 backdrop-blur-md border-white/5"
          : "min-h-[96px] py-3 bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between md:grid md:grid-cols-3">
        {/* Logo */}
        <div className="flex justify-start">
          <img
            src="/aks_logo_website.svg"
            alt="Logo"
            className="h-20 w-auto cursor-pointer"
            onClick={() => scrollToSection("home")}
          />
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex justify-center">
          <SegmentedTabs onNavigate={scrollToSection} />
        </div>

        {/* Right side */}
        <div className="flex justify-end items-center gap-4">
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("joinus")}
              className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 font-medium transition-all"
            >
              Join Us
            </Button>
          </div>

          {/* Mobile toggle */}
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
            className="md:hidden bg-black/80 backdrop-blur-md border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className="text-left text-lg font-medium text-gray-300 hover:text-white"
                >
                  {tab.label}
                </button>
              ))}

              <Button
                onClick={() => scrollToSection("joinus")}
                className="w-full bg-primary text-white mt-4"
              >
                Join Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
