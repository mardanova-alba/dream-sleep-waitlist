
const MoneyCloudBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Cloud 1 - Top Left */}
      <div className="absolute top-8 left-12 transform -translate-x-1/2">
        <div className="relative">
          <svg width="120" height="80" viewBox="0 0 120 80" className="drop-shadow-sm">
            <path
              d="M25,60 C10,60 5,45 15,35 C15,25 25,15 40,20 C50,10 70,15 75,25 C85,20 95,30 90,40 C100,45 95,60 85,60 Z"
              fill="rgba(255,255,255,0.9)"
              stroke="rgba(200,200,200,0.3)"
              strokeWidth="1"
            />
          </svg>
          {/* Dollar sign peeking out */}
          <div className="absolute top-3 left-8 text-yellow-500 text-lg font-bold opacity-60">$</div>
        </div>
      </div>

      {/* Cloud 2 - Top Center */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <svg width="140" height="90" viewBox="0 0 140 90" className="drop-shadow-sm">
            <path
              d="M30,70 C15,70 8,50 20,40 C18,25 35,15 50,25 C60,10 85,15 90,30 C105,25 115,40 105,50 C115,55 110,70 95,70 Z"
              fill="rgba(255,255,255,0.85)"
              stroke="rgba(200,200,200,0.3)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-4 right-8 text-yellow-500 text-xl font-bold opacity-50">$</div>
        </div>
      </div>

      {/* Cloud 3 - Top Right */}
      <div className="absolute top-12 right-16">
        <div className="relative">
          <svg width="100" height="70" viewBox="0 0 100 70" className="drop-shadow-sm">
            <path
              d="M20,55 C8,55 5,40 12,32 C12,22 22,15 32,18 C40,8 55,12 58,22 C68,18 75,28 70,35 C78,38 75,55 68,55 Z"
              fill="rgba(255,255,255,0.9)"
              stroke="rgba(200,200,200,0.3)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-2 left-6 text-yellow-500 text-lg font-bold opacity-60">$</div>
        </div>
      </div>

      {/* Cloud 4 - Mid Left */}
      <div className="absolute top-32 left-8">
        <div className="relative">
          <svg width="110" height="75" viewBox="0 0 110 75" className="drop-shadow-sm">
            <path
              d="M22,58 C12,58 8,45 16,38 C16,28 26,20 36,23 C44,13 59,17 62,27 C72,23 79,33 74,40 C82,43 79,58 72,58 Z"
              fill="rgba(255,255,255,0.8)"
              stroke="rgba(200,200,200,0.3)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-3 right-7 text-yellow-500 text-lg font-bold opacity-55">$</div>
        </div>
      </div>

      {/* Cloud 5 - Mid Right */}
      <div className="absolute top-28 right-12">
        <div className="relative">
          <svg width="130" height="85" viewBox="0 0 130 85" className="drop-shadow-sm">
            <path
              d="M28,65 C13,65 10,50 18,43 C18,33 28,25 38,28 C46,18 61,22 64,32 C74,28 81,38 76,45 C84,48 81,65 74,65 Z"
              fill="rgba(255,255,255,0.85)"
              stroke="rgba(200,200,200,0.3)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-4 left-9 text-yellow-500 text-xl font-bold opacity-50">$</div>
        </div>
      </div>

      {/* Additional smaller clouds for depth */}
      <div className="absolute top-20 left-1/3">
        <div className="relative">
          <svg width="80" height="55" viewBox="0 0 80 55" className="drop-shadow-sm">
            <path
              d="M18,42 C10,42 7,32 13,28 C13,22 20,18 27,20 C32,14 42,16 44,22 C50,20 54,26 51,30 C57,32 55,42 50,42 Z"
              fill="rgba(255,255,255,0.7)"
              stroke="rgba(200,200,200,0.3)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-2 left-5 text-yellow-500 text-sm font-bold opacity-40">$</div>
        </div>
      </div>

      <div className="absolute top-40 right-1/3">
        <div className="relative">
          <svg width="90" height="60" viewBox="0 0 90 60" className="drop-shadow-sm">
            <path
              d="M20,45 C11,45 8,35 14,31 C14,25 21,21 28,23 C33,17 43,19 45,25 C51,23 55,29 52,33 C58,35 56,45 51,45 Z"
              fill="rgba(255,255,255,0.75)"
              stroke="rgba(200,200,200,0.3)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-2 right-6 text-yellow-500 text-sm font-bold opacity-45">$</div>
        </div>
      </div>
    </div>
  );
};

export default MoneyCloudBackground;
