import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-8xl md:text-9xl font-semibold mb-6 text-[#87ceeb]">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-[#a0a0a0] mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-[#87ceeb] text-[#0a0a0a] font-medium rounded hover:bg-[#b0e0ff] transition-colors"
          >
            Return Home
          </Link>
          <Link
            to="/#projects"
            className="px-6 py-3 border border-[#1a1a1a] text-[#e5e5e5] font-medium rounded hover:border-[#87ceeb] transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

