import { aboutCards } from "../../data/about";

const About = () => {
  return (
    <section id="about" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-[#1a1a1a] border border-[#1a1a1a] p-6 rounded-lg hover:border-blue-400/30 transition-colors">
            <div className="mb-4 flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-400/10 text-blue-400 rounded-lg">
                <i className="fa-solid fa-code text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold">Full-stack Development</h3>
            </div>
            <p className="text-[#a0a0a0] leading-relaxed text-sm">
              Building robust full-stack systems and APIs with clean, scalable
              architecture. I craft elegant solutions that power the web, from
              backend services to frontend interfaces.
            </p>
          </div>
          <div className="bg-[#1a1a1a] border border-[#1a1a1a] p-6 rounded-lg hover:border-blue-400/40 transition-colors">
            <div className="mb-4 flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-400/10 text-blue-400 rounded-lg">
                <i className="fa-solid fa-user text-lg"></i>
              </div>
              <h3 className="text-lg font-semibold">Who I Am</h3>
            </div>
            <p className="text-[#a0a0a0] leading-relaxed text-sm">
              A full-stack developer, musician, and anime enthusiast. I find
              that coding and music share something beautiful: both require
              precision, creativity, and building something greater than the sum
              of their parts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-[#1a1a1a] p-6 rounded-lg hover:border-blue-400/30 transition-colors"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-400/10 text-blue-400 rounded-lg">
                  <i className={`text-lg ${card.icon}`}></i>
                </div>
                <h4 className="text-lg font-semibold">{card.title}</h4>
              </div>
              <p className="text-[#a0a0a0] text-sm mb-4 leading-relaxed">
                {card.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-[#0a0a0a] border border-[#1a1a1a] rounded-md text-xs text-[#a0a0a0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
