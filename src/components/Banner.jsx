import React, { useState } from "react";

const Banner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-green-500 text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-1 text-center">
            <span className="font-bold mr-2">⚡ New:</span>
            <span>
              Check out my new hosting provider{" "}
              <a
                href="https://solarnodes.net"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline hover:text-blue-200 transition-colors"
              >
                Solar Nodes
              </a>{" "}
              for budget-friendly EU Minecraft hosting!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
