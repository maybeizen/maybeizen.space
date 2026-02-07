import ButtonLink from "../components/ui/link-button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-8xl md:text-9xl font-semibold mb-6 text-blue-400">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-[#a0a0a0] mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <ButtonLink to="/" variant="default" size="lg">
            Return Home
          </ButtonLink>
          <ButtonLink to="/#projects" variant="outline" size="lg">
            View Projects
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
