export default function LuxuryPlaylistLinksWithBackground() {
  return (
    <div
      // FIX 1: Changed "p-6" to "px-6 pb-6 pt-2" to pull the whole page up slightly
      className="flex flex-col items-center justify-between min-h-screen px-6 pb-6 pt-2 font-sans bg-gradient-to-b from-white via-white to-[#F9F6F0] bg-[length:100%_auto] md:bg-cover bg-top md:bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/back.jpeg')" }} 
    >
      
      {/* TOP: BRAND LOGO */}
      {/* FIX 2: Removed top padding here to let the logo sit at the very top */}
      <div className="w-full flex justify-center">
        <img 
          src="/images/logo.jpeg" 
          alt="The Breakup Re//Set" 
          // FIX 3: Made max-w-[220px] on mobile so it fits the wreath, normal size on desktop
          className="w-full max-w-[220px] md:max-w-[280px] object-contain mix-blend-multiply"
        />
      </div>

      {/* MIDDLE: The Translucent Card */}
      {/* Added mt-8 to keep the card nicely separated from the logo */}
      <div className="bg-white/80 backdrop-blur-2xl border border-[#F2EDE4] shadow-[0_20px_50px_-12px_rgba(197,160,89,0.1)] rounded-2xl p-10 w-full max-w-sm flex flex-col items-center relative overflow-hidden my-auto mt-8">
        
        {/* Faint decorative top border accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-50"></div>

        {/* Elegant Icon Container */}
        <div className="w-20 h-20 rounded-full border border-[#DCCAAD] mb-6 flex items-center justify-center bg-[#FCFBF9]">
          <span className="text-3xl" style={{ color: '#C5A059' }}>🎧</span>
        </div>

        {/* Typography */}
        <h1 className="text-lg uppercase tracking-[0.25em] mb-3 text-[#AF8C4F] text-center font-medium">
          The Playlist
        </h1>
        
        {/* Subtle description */}
        <p className="text-center text-[#5A5A5A] text-xs font-medium tracking-wide px-2 mb-6 leading-relaxed">
          Step into your healing era. Choose your preferred listening experience.
        </p>

        {/* Subtle divider line */}
        <div className="w-16 h-[1px] bg-[#DCCAAD] mb-8"></div>
        
        {/* Buttons */}
        <div className="space-y-5 w-full">
          {/* App Link */}
          <a 
            href="/folder"
            className="block w-full py-4 text-center bg-gradient-to-r from-[#D4B271] via-[#C5A059] to-[#AF8C4F] text-white rounded-none border border-[#AF8C4F] font-light uppercase tracking-wider text-xs transition-all duration-300 hover:opacity-90 hover:shadow-[0_10px_20px_rgba(197,160,89,0.2)]"
          >
            GUIDED RESET AUDIOS
          </a>

          {/* Spotify Link */}
          <a 
            href="https://open.spotify.com/user/31ypzsn4oehgxzrkacwcexxbsrhm?si=vyUoDa7bRC6FzJcTEKQ0oQ" 
            className="block w-full py-4 text-center bg-white text-[#AF8C4F] rounded-none border border-[#DCCAAD] font-light uppercase tracking-wider text-xs transition-all duration-300 hover:bg-[#FCFBF9] hover:border-[#AF8C4F]"
          >
            SPOTIFY RESET PLAYLIST
          </a>
        </div>
      </div>

      {/* BOTTOM: Elegant Footer Quote */}
      <div className="w-full text-center pb-2">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[#AF8C4F] opacity-80 font-medium">
          Take a deep breath. You are exactly where you need to be.
        </p>
      </div>
    </div>
  );
}