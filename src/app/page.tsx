export default function LuxuryPlaylistLinksWithBackground() {
  return (
    // Outer container with the background image
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 font-sans bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/back.jpeg')" }} 
    >
      
      
      {/* BRAND LOGO - Positioned Top Center */}
      <img 
        src="/images/logo.jpeg" 
        alt="The Breakup Re//Set" 
        className="w-full max-w-[280px] sm:max-w-sm mb-10 object-contain mix-blend-multiply"
      />
      {/* The Translucent Card */}
      <div className="bg-white/70 backdrop-blur-2xl border border-[#F2EDE4] shadow-[0_20px_50px_-12px_rgba(197,160,89,0.1)] rounded-2xl p-10 w-full max-w-sm flex flex-col items-center relative overflow-hidden">
        
        {/* Faint decorative top border accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-50"></div>

        {/* Elegant Icon Container */}
        <div className="w-20 h-20 rounded-full border border-[#DCCAAD] mb-8 flex items-center justify-center bg-[#FCFBF9]">
          <span className="text-3xl" style={{ color: '#C5A059' }}>🎧</span>
        </div>

        {/* Typography: Gold, widely spaced matching the background theme */}
        <h1 className="text-lg uppercase tracking-[0.25em] mb-2 text-[#AF8C4F] text-center font-medium">
          The Playlist
        </h1>
        
        {/* Subtle divider line */}
        <div className="w-16 h-[1px] bg-[#DCCAAD] mb-8"></div>
        
        {/* Buttons */}
        <div className="space-y-5 w-full">
          {/* App Link */}
          <a 
            href="/folder"
            className="block w-full py-4 text-center bg-gradient-to-r from-[#D4B271] via-[#C5A059] to-[#AF8C4F] text-white rounded-none border border-[#AF8C4F] font-light uppercase tracking-wider text-sm transition-all duration-300 hover:opacity-90 hover:shadow-[0_10px_20px_rgba(197,160,89,0.2)]"
          >
            LISTEN ON OUR FOLDER
          </a>

          {/* Spotify Link */}
          <a 
            href="https://open.spotify.com/user/31ypzsn4oehgxzrkacwcexxbsrhm?si=vyUoDa7bRC6FzJcTEKQ0oQ" 
            className="block w-full py-4 text-center bg-white text-[#AF8C4F] rounded-none border border-[#DCCAAD] font-light uppercase tracking-wider text-sm transition-all duration-300 hover:bg-[#FCFBF9] hover:border-[#AF8C4F]"
          >
            LISTEN ON SPOTIFY
          </a>
        </div>

      </div>
    </div>
  );
}