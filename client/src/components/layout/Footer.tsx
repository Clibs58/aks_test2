export function Footer() {
  return (
    <footer
      id="contact"
      className="pt-40 pb-12 border-t border-white/10 bg-black"
    >
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* LOGO + DESCRIPTION */}
          <div className="col-span-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-32 w-auto mb-4"
            />

            <p className="text-gray-400 max-w-sm">
              Premium digital product studio crafting experiences for the modern web.
            </p>
          </div>

          {/* SITEMAP */}
          <div>
            <h4 className="text-white font-semibold mb-4">Sitemap</h4>
            <ul className="space-y-2">
              {["Process", "About"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`} // → #processes, #about
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Socials</h4>
            <ul className="space-y-2">
              {["Twitter", "LinkedIn", "Instagram"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} AKS. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
