export function Footer() {
  return (
    <footer
      id="contact"
      className="pt-40 pb-12 border-t border-white/10 bg-black"
    >
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
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

          <div>
            <h4 className="text-white font-semibold mb-4">Sitemap</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#process"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Socials</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/aksproductmanagement/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

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
