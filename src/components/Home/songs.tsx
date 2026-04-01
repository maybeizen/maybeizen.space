import { favoriteSongs } from "../../data/songs";

const Songs = () => {
  return (
    <section id="songs" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-center">
          On Repeat
        </h2>
        <p className="text-[#a0a0a0] text-center mb-16 text-sm">
          Some of my favorite songs right now
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {favoriteSongs.map((song, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-[#1a1a1a] rounded-lg hover:border-red-500/30 transition-colors group flex overflow-hidden"
            >
              <span className="w-10 shrink-0 flex items-center justify-center text-lg font-semibold text-[#2a2a2a] group-hover:text-red-500/40 transition-colors select-none">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <img
                src={song.cover}
                alt={song.album}
                className="w-28 h-28 sm:w-32 sm:h-32 object-cover shrink-0"
              />
              <div className="p-4 min-w-0 flex flex-col justify-center gap-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-[#e5e5e5] truncate">
                    {song.title}
                  </h3>
                  <span className="text-xs text-[#555] shrink-0">
                    {song.duration}
                  </span>
                </div>
                <p className="text-xs text-[#a0a0a0]">
                  {song.artist} &middot; {song.album}
                </p>
                <p className="text-xs text-[#666] italic leading-relaxed mt-1 line-clamp-2">
                  "{song.lyric}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Songs;
