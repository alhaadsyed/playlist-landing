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
    // 1. Updated Container: Matches the home page gradient, spacing, and mobile-friendly background scaling
    <div
      className="flex flex-col items-center justify-between min-h-screen p-6 font-sans bg-gradient-to-b from-white via-white to-[#F9F6F0] bg-[length:100%_auto] md:bg-cover bg-top md:bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/back.jpeg')" }}
    >
      {/* Hide Webkit Scrollbar globally for this page */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* TOP: BRAND LOGO */}
      <div className="pt-4 w-full flex justify-center">
        <img 
          src="/images/logo.jpeg" 
          alt="The Breakup Re//Set" 
          className="w-full max-w-[200px] object-contain mix-blend-multiply"
        />
      </div>

      {/* MIDDLE: The Translucent Playlist Card (Added 'my-auto' to center it in the available space) */}
      <div className="bg-white/70 backdrop-blur-2xl border border-[#F2EDE4] shadow-[0_20px_50px_-12px_rgba(197,160,89,0.1)] rounded-3xl p-8 w-full max-w-xl flex flex-col relative my-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col shrink-0 border-b border-[#DCCAAD] pb-6 mb-4">
          <Link href="/" className="text-[#AF8C4F] text-xs tracking-widest uppercase mb-4 hover:opacity-70 transition flex items-center">
            ← Back to Home
          </Link>
          <h1 className="text-2xl uppercase tracking-[0.25em] text-[#AF8C4F] font-medium text-center">
            The Rebirth Kit
          </h1>
        </div>

        {/* Swipe Indicator */}
        <p className="text-center text-[10px] uppercase tracking-widest text-gray-400 mb-4">
          <span className="md:hidden">← Swipe to browse tracks →</span>
          <span className="hidden md:inline">Hover & use arrows to browse tracks</span>
        </p>

        {/* HORIZONTAL SWIPE WRAPPER WITH ARROWS */}
        <div className="relative group">
          
          {/* Left Desktop Arrow */}
          <button 
            onClick={() => scroll("left")} 
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-md border border-[#F2EDE4] rounded-full items-center justify-center text-[#AF8C4F] shadow-lg z-10 hover:bg-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
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
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-white/50 border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">1. Letting go...</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[0] = el; }} onPlay={() => handlePlay(0)}>
                <source src="/songs/letting-go.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 2 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-white/50 border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">2. Loneliness can feel so loud sometimes</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[1] = el; }} onPlay={() => handlePlay(1)}>
                <source src="/songs/loneliness-can-feel-so-loud-sometimes.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 3 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-white/50 border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">3. Missing them hurts sometimes, doesn&apos;t it</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[2] = el; }} onPlay={() => handlePlay(2)}>
                <source src="/songs/missing-them-hurts-sometimes-doesnt-it.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 4 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-white/50 border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">4. Nights feel heavier, don&apos;t they</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[3] = el; }} onPlay={() => handlePlay(3)}>
                <source src="/songs/nights-feel-heavier-dont-they.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 5 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-white/50 border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">5. Sometimes heartbreak</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[4] = el; }} onPlay={() => handlePlay(4)}>
                <source src="/songs/sometimes-heartbreak.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 6 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-white/50 border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">6. So...When you feel like going back</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[5] = el; }} onPlay={() => handlePlay(5)}>
                <source src="/songs/so-when-you-feel-like-going-back.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 7 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-white/50 border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">7. Stop Overthinking</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[6] = el; }} onPlay={() => handlePlay(6)}>
                <source src="/songs/stop-overthinking.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 8 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-white/50 border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">8. Today feels heavy</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[7] = el; }} onPlay={() => handlePlay(7)}>
                <source src="/songs/today-feels-heavy.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 9 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-white/50 border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">9. You Deserve Better</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[8] = el; }} onPlay={() => handlePlay(8)}>
                <source src="/songs/you-deserve-better.mp3" type="audio/mpeg" />
              </audio>
            </div>

            {/* Track 10 */}
            <div className="snap-center shrink-0 w-full sm:w-[95%] bg-white/50 border border-[#F2EDE4] rounded-2xl p-6 shadow-sm flex flex-col justify-center">
              <h2 className="text-[#1C1C1C] text-sm font-semibold tracking-wide mb-4">10. You&apos;re Rebuilding</h2>
              <audio controls className="w-full h-10 rounded-md outline-none" ref={(el) => { audioRefs.current[9] = el; }} onPlay={() => handlePlay(9)}>
                <source src="/songs/youre-rebuilding.mp3" type="audio/mpeg" />
              </audio>
            </div>

          </div>

          {/* Right Desktop Arrow */}
          <button 
            onClick={() => scroll("right")} 
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-md border border-[#F2EDE4] rounded-full items-center justify-center text-[#AF8C4F] shadow-lg z-10 hover:bg-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Scroll Right"
          >
            →
          </button>

        </div>
      </div>

      {/* BOTTOM: Elegant Footer Quote to anchor the screen */}
      <div className="w-full text-center pb-2">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[#AF8C4F] opacity-80 font-medium">
          Take a deep breath. You are exactly where you need to be.
        </p>
      </div>
      
    </div>
  );
}