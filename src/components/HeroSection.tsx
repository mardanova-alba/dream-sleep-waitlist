
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating sparkles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300/60 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/80 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-yellow-200/70 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10 w-full">
        {/* Main headline with dreamy typography */}
        <div className="mb-8 lg:mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-light text-white/95 mb-4 sm:mb-6 leading-tight tracking-wide drop-shadow-lg">
            we're building something
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-extralight text-yellow-200/90 leading-tight tracking-wide drop-shadow-md">
            magical
          </h2>
        </div>

        {/* Glassmorphic waitlist form plate */}
        <div className="animate-fade-in px-4 sm:px-6 flex justify-center" style={{ animationDelay: '0.3s' }}>
          <div className="w-full max-w-md">
            {/* Glassmorphic plate */}
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-500">
              {/* Header text */}
              <h3 className="text-xl sm:text-2xl font-light text-white/95 mb-6 lowercase tracking-wide">
                join the waitlist
              </h3>
              
              {/* Simple email form inline */}
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="your email address"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/25 transition-all duration-300 text-center lowercase"
                />
                <Button
                  onClick={onJoinWaitlist}
                  className="w-full bg-gradient-to-r from-purple-200/80 to-blue-200/80 hover:from-purple-300/90 hover:to-blue-300/90 text-gray-800 font-light text-lg py-3 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 lowercase tracking-wide"
                >
                  dream with us
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle below the form */}
        <p className="text-sm sm:text-base lg:text-lg mt-8 max-w-lg mx-auto leading-relaxed text-white/70 font-light lowercase tracking-wide drop-shadow-md animate-fade-in" style={{ animationDelay: '0.6s' }}>
          sign up to be the first to experience autonomous trading that works while you sleep
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
