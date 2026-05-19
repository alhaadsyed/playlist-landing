"use client";
import Link from "next/link";
import { useRef } from "react";

export default function FolderPage() {
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePlay = (currentIndex: number) => {
    audioRefs.current.forEach((audio, index) => {
      if (audio && index !== currentIndex) {
        audio.pause();
      }
    });
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    // Clean, premium off-white background. NO image.
    <div className="flex flex-col items-center justify-center min-h-screen p-6 font-sans bg-[#FCFBF9]">
      {/* Hide Webkit Scrollbar globally for this page */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* TOP: BRAND LOGO */}
      <img 
        src="/images/logo.jpeg" 
        alt="The Breakup Re//Set" 
        className="w-full max-w-[240px] md:max-w-[280px] mb-8 object-contain mix-blend-multiply shrink-0"
      />

      {/* MIDDLE: The Playlist Card (Crisp solid white) */}
      <div className="bg-white border border-[#F2EDE4] shadow-[0_20px_50px_-12px_rgba(197,160,89,0.15)] rounded-2xl p-8 w-full max-w-xl flex flex-col items-center relative overflow-hidden mb-8">
        
        {/* Faint decorative top border accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-50"></div>

        {/* HEADER SECTION */}
        <div className="flex flex-col items-center w-full shrink-0 pb-2 mb-4">
          
          <div className="w-full flex justify-start mb-2">
            <Link href="/" className="text-[#AF8C4F] text-[10px] tracking-widest uppercase hover:opacity-70 transition flex items-center">
              ← Back
            </Link>
          </div>
          
          {/* Elegant Icon Container */}
          <div className="w-16 h-16 rounded-full border border-[#DCCAAD] mb-6 flex items-center justify-center bg-[#FCFBF9]">
            <span className="text-2xl" style={{ color: '#C5A059' }}>🎧</span>
          </div>

          <h1 className="text-lg uppercase tracking-[0.25em] text-[#AF8C4F] font-medium text-center mb-6">
            The Playlist
          </h1>
          
          {/* Subtle divider line */}
          <div className="w-16 h-[1px] bg-[#DCCAAD] mb-4"></div>
        </div>

        {/* Swipe Indicator */}
        <p className="text-center text-[10px] uppercase tracking-widest text-[#5A5A5A] mb-4 w-full">
          <span className="md:hidden">← Swipe to browse tracks →</span>
          <span className="hidden md:inline">Hover & use arrows to browse tracks</span>
        </p>

        {/* HORIZONTAL SWIPE WRAPPER WITH ARROWS */}
        <div className="relative group w-full">
          
          {/* Left Desktop Arrow */}
          <button 
            onClick={() => scroll("left")} 
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 border border-[#F2EDE4] rounded-full items-center justify-center text-[#AF8C4F] shadow-lg z-10 hover:bg-[#FCFBF9] transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Scroll Left"
          >
            ←
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Track 1 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-[#FCFBF9] border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">1. Letting go...</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[0] = el; }} onPlay={() => handlePlay(0)}>
                <source src="/songs/letting-go.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 2 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-[#FCFBF9] border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">2. Loneliness can feel so loud sometimes</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[1] = el; }} onPlay={() => handlePlay(1)}>
                <source src="/songs/loneliness-can-feel-so-loud-sometimes.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 3 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-[#FCFBF9] border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">3. Missing them hurts sometimes, doesn&apos;t it</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[2] = el; }} onPlay={() => handlePlay(2)}>
                <source src="/songs/missing-them-hurts-sometimes-doesnt-it.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 4 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-[#FCFBF9] border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">4. Nights feel heavier, don&apos;t they</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[3] = el; }} onPlay={() => handlePlay(3)}>
                <source src="/songs/nights-feel-heavier-dont-they.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 5 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-[#FCFBF9] border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">5. Sometimes heartbreak</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[4] = el; }} onPlay={() => handlePlay(4)}>
                <source src="/songs/sometimes-heartbreak.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 6 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-[#FCFBF9] border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">6. So...When you feel like going back</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[5] = el; }} onPlay={() => handlePlay(5)}>
                <source src="/songs/so-when-you-feel-like-going-back.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 7 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-[#FCFBF9] border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">7. Stop Overthinking</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[6] = el; }} onPlay={() => handlePlay(6)}>
                <source src="/songs/stop-overthinking.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 8 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-[#FCFBF9] border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">8. Today feels heavy</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[7] = el; }} onPlay={() => handlePlay(7)}>
                <source src="/songs/today-feels-heavy.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 9 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-[#FCFBF9] border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">9. You Deserve Better</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[8] = el; }} onPlay={() => handlePlay(8)}>
                <source src="/songs/you-deserve-better.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 10 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-[#FCFBF9] border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">10. You&apos;re Rebuilding</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[9] = el; }} onPlay={() => handlePlay(9)}>
                <source src="/songs/youre-rebuilding.mp3" type="audio/mpeg" />
              </audio>
            </div>

          </div>

          {/* Right Desktop Arrow */}
          <button 
            onClick={() => scroll("right")} 
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 border border-[#F2EDE4] rounded-full items-center justify-center text-[#AF8C4F] shadow-lg z-10 hover:bg-[#FCFBF9] transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Scroll Right"
          >
            →
          </button>

        </div>
      </div>

      {/* BOTTOM: Elegant Footer Quote */}
      <div className="w-full text-center pb-2 mt-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[#AF8C4F] opacity-80 font-medium">
          Take a deep breath. You are exactly where you need to be.
        </p>
      </div>
      
    </div>
  );
}