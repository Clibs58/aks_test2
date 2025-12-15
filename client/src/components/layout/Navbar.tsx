import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ---------------- Tabs ---------------- */
const tabs = ["Home", "About", "Portfolio", "Contact"];

/* ---------------- Segmented Tabs (GitHub style) ---------------- */
function SegmentedTabs() {
  const [active, setActive] = useState(0);

  return (
    <div
      role="tablist"
      aria-label="Primary navigation"
      className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md"
    >
      {/* Sliding pill */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute top-1 bottom-1 rounded-full bg-white/10"
        style={{
          width: `${100 / tabs.length}%`,
          left: `${(100 / tabs.length) * active}%`,
        }}
      />

      {tabs.map((tab, i) => (
        <button
          key={tab}
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
          ? "h-16 bg-black/90 backdrop-blur-md border-white/5"
          : "h-20 bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto h-full px-6 grid grid-cols-3 items-center">
        {/* Left: Logo */}
        <div className="flex justify-start">
          <Link href="/" className="cursor-pointer flex items-center">
            <img
              src="/aks_logo_website.svg"
              alt="Logo"
              className="h-10 w-auto"
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
            <Button
              className="bg-primary hover:bg-primary/90 text-white rounded-lg px-6 font-medium shadow-[0_0_15px_rgba(27,38,59,0.5)] hover:shadow-[0_0_25px_rgba(65,90,119,0.6)] transition-all duration-300"
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
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
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
