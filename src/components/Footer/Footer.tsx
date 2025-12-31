const Footer = () => {
  return (
    <footer className="px-4 py-20 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-[#e5e5e5]">
              maybeizen
            </h2>
            <p className="text-sm text-[#a0a0a0] leading-relaxed mb-6">
              Full-stack developer passionate about building robust, scalable
              systems and APIs.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/maybeizen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center text-[#a0a0a0] hover:text-blue-400 transition-colors rounded-lg hover:bg-[#1a1a1a]"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center text-[#a0a0a0] hover:text-blue-400 transition-colors rounded-lg hover:bg-[#1a1a1a]"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="mailto:me@maybeizen.space"
                className="w-9 h-9 flex items-center justify-center text-[#a0a0a0] hover:text-blue-400 transition-colors rounded-lg hover:bg-[#1a1a1a]"
                aria-label="Email"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#e5e5e5] uppercase tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Skills", "Projects"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[#a0a0a0] hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#e5e5e5] uppercase tracking-wide">
              Contact
            </h3>
            <p className="text-sm text-[#a0a0a0] leading-relaxed mb-4">
              Want to collaborate or have questions? I'm always open to chat.
            </p>
            <a
              href="mailto:me@maybeizen.space"
              className="inline-block text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              me@maybeizen.space
            </a>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="text-sm text-[#a0a0a0]">
            &copy; {new Date().getFullYear()} maybeizen. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
