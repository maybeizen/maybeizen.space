const Banner = () => {
  return (
    <div
      data-banner
      className="fixed top-0 left-0 right-0 z-50 bg-[#87ceeb]/10 border-b border-[#87ceeb]/20 py-3"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 text-center">
            <span className="font-medium mr-2 text-[#87ceeb]">⚡ New:</span>
            <span className="text-[#a0a0a0]">
              Check out my new hosting provider{" "}
              <a
                href="https://orvex.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#87ceeb] hover:text-[#b0e0ff] transition-colors"
              >
                Orvex
              </a>{" "}
              for budget-friendly and reliable Minecraft servers!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

