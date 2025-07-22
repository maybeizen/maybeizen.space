import React from "react";

const Banner = () => {
  return (
    <div
      data-banner
      className="fixed top-0 left-0 right-0 z-50 bg-green-700 text-white py-3"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 text-center">
            <span className="font-bold mr-2">⚡ New:</span>
            <span>
              Check out my new hosting provider{" "}
              <a
                href="https://orvex.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline hover:text-blue-200 transition-colors"
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
