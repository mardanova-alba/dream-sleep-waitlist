
const MoneyCloudBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Starry sky background */}
      <div className="absolute inset-0">
        {/* Small scattered stars */}
        <div className="absolute top-[15%] left-[12%] w-1 h-1 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-[25%] right-[20%] w-0.5 h-0.5 bg-yellow-100 rounded-full opacity-40"></div>
        <div className="absolute top-[35%] left-[25%] w-1.5 h-1.5 bg-yellow-200 rounded-full opacity-50"></div>
        <div className="absolute top-[45%] right-[35%] w-0.5 h-0.5 bg-yellow-100 rounded-full opacity-30"></div>
        <div className="absolute top-[55%] left-[15%] w-1 h-1 bg-yellow-200 rounded-full opacity-45 animate-pulse"></div>
        <div className="absolute top-[65%] right-[15%] w-0.5 h-0.5 bg-yellow-100 rounded-full opacity-35"></div>
        <div className="absolute top-[8%] left-[60%] w-1 h-1 bg-yellow-200 rounded-full opacity-55"></div>
        <div className="absolute top-[18%] right-[45%] w-0.5 h-0.5 bg-yellow-100 rounded-full opacity-25"></div>
        <div className="absolute top-[75%] left-[40%] w-1 h-1 bg-yellow-200 rounded-full opacity-40"></div>
        <div className="absolute top-[85%] right-[25%] w-1.5 h-1.5 bg-yellow-200 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-[12%] left-[80%] w-0.5 h-0.5 bg-yellow-100 rounded-full opacity-30"></div>
        <div className="absolute top-[40%] left-[70%] w-1 h-1 bg-yellow-200 rounded-full opacity-45"></div>
      </div>

      {/* Large Background Cloud 1 - Top Left */}
      <div className="absolute top-4 left-8 transform -translate-x-1/4">
        <div className="relative">
          <svg width="200" height="140" viewBox="0 0 200 140" className="drop-shadow-lg">
            <path
              d="M40,105 C20,105 10,85 25,70 C25,50 45,35 70,45 C85,25 125,35 135,55 C155,45 175,65 165,80 C180,90 170,105 150,105 Z"
              fill="rgba(255,255,255,0.95)"
              stroke="rgba(200,200,200,0.2)"
              strokeWidth="1"
            />
          </svg>
          {/* Refined dollar sign with soft curves */}
          <div className="absolute top-6 left-12 text-yellow-400 text-2xl font-light opacity-50 transform rotate-12" style={{ fontFamily: 'serif' }}>$</div>
        </div>
      </div>

      {/* Large Background Cloud 2 - Top Center */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <svg width="240" height="160" viewBox="0 0 240 160" className="drop-shadow-lg">
            <path
              d="M50,120 C25,120 15,95 35,80 C30,55 60,40 90,55 C110,30 155,40 165,70 C190,60 215,85 200,105 C220,115 205,120 180,120 Z"
              fill="rgba(255,255,255,0.9)"
              stroke="rgba(200,200,200,0.2)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-8 right-16 text-yellow-400 text-3xl font-light opacity-40 transform -rotate-6" style={{ fontFamily: 'serif' }}>$</div>
        </div>
      </div>

      {/* Large Background Cloud 3 - Top Right */}
      <div className="absolute top-6 right-12">
        <div className="relative">
          <svg width="180" height="120" viewBox="0 0 180 120" className="drop-shadow-lg">
            <path
              d="M35,90 C18,90 12,70 22,60 C22,45 40,35 55,40 C70,25 95,30 100,50 C115,45 130,60 120,70 C135,75 125,90 110,90 Z"
              fill="rgba(255,255,255,0.95)"
              stroke="rgba(200,200,200,0.2)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-4 left-10 text-yellow-400 text-xl font-light opacity-45 transform rotate-8" style={{ fontFamily: 'serif' }}>$</div>
        </div>
      </div>

      {/* Medium Cloud 4 - Mid Left */}
      <div className="absolute top-48 left-16">
        <div className="relative">
          <svg width="160" height="110" viewBox="0 0 160 110" className="drop-shadow-md">
            <path
              d="M30,85 C18,85 14,70 22,62 C22,52 32,45 42,48 C52,38 72,42 76,52 C86,48 96,58 91,65 C101,68 96,85 88,85 Z"
              fill="rgba(255,255,255,0.85)"
              stroke="rgba(200,200,200,0.2)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-5 right-8 text-yellow-400 text-lg font-light opacity-40 transform -rotate-12" style={{ fontFamily: 'serif' }}>$</div>
        </div>
      </div>

      {/* Medium Cloud 5 - Mid Right */}
      <div className="absolute top-44 right-20">
        <div className="relative">
          <svg width="170" height="115" viewBox="0 0 170 115" className="drop-shadow-md">
            <path
              d="M35,88 C20,88 15,73 25,65 C25,55 35,48 45,51 C55,41 75,45 79,55 C89,51 99,61 94,68 C104,71 99,88 91,88 Z"
              fill="rgba(255,255,255,0.9)"
              stroke="rgba(200,200,200,0.2)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-6 left-14 text-yellow-400 text-xl font-light opacity-50 transform rotate-15" style={{ fontFamily: 'serif' }}>$</div>
        </div>
      </div>

      {/* Small clouds for depth - Upper layer */}
      <div className="absolute top-32 left-1/3">
        <div className="relative">
          <svg width="120" height="80" viewBox="0 0 120 80" className="drop-shadow-sm">
            <path
              d="M25,62 C15,62 12,50 18,45 C18,38 26,33 34,35 C40,28 52,30 55,38 C62,36 68,42 65,47 C71,49 68,62 62,62 Z"
              fill="rgba(255,255,255,0.75)"
              stroke="rgba(200,200,200,0.2)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-3 left-8 text-yellow-400 text-sm font-light opacity-35 transform rotate-5" style={{ fontFamily: 'serif' }}>$</div>
        </div>
      </div>

      <div className="absolute top-60 right-1/3">
        <div className="relative">
          <svg width="110" height="75" viewBox="0 0 110 75" className="drop-shadow-sm">
            <path
              d="M22,58 C13,58 10,48 16,43 C16,36 24,31 32,33 C38,26 50,28 53,36 C60,34 66,40 63,45 C69,47 66,58 60,58 Z"
              fill="rgba(255,255,255,0.8)"
              stroke="rgba(200,200,200,0.2)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-3 right-7 text-yellow-400 text-sm font-light opacity-40 transform -rotate-8" style={{ fontFamily: 'serif' }}>$</div>
        </div>
      </div>

      {/* Bottom layer clouds for full coverage */}
      <div className="absolute bottom-32 left-12">
        <div className="relative">
          <svg width="190" height="130" viewBox="0 0 190 130" className="drop-shadow-lg">
            <path
              d="M38,98 C22,98 16,80 28,70 C28,55 45,45 65,52 C80,35 115,42 122,65 C140,58 158,75 150,88 C165,95 158,98 140,98 Z"
              fill="rgba(255,255,255,0.9)"
              stroke="rgba(200,200,200,0.2)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-7 left-16 text-yellow-400 text-2xl font-light opacity-45 transform rotate-10" style={{ fontFamily: 'serif' }}>$</div>
        </div>
      </div>

      <div className="absolute bottom-28 right-16">
        <div className="relative">
          <svg width="210" height="145" viewBox="0 0 210 145" className="drop-shadow-lg">
            <path
              d="M42,110 C24,110 18,88 32,76 C32,60 50,48 72,56 C88,38 125,46 135,72 C155,64 175,82 165,98 C182,106 174,110 152,110 Z"
              fill="rgba(255,255,255,0.95)"
              stroke="rgba(200,200,200,0.2)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-9 right-18 text-yellow-400 text-3xl font-light opacity-50 transform -rotate-5" style={{ fontFamily: 'serif' }}>$</div>
        </div>
      </div>

      {/* Additional small clouds for atmospheric depth */}
      <div className="absolute top-72 left-1/4">
        <div className="relative">
          <svg width="100" height="70" viewBox="0 0 100 70" className="drop-shadow-sm">
            <path
              d="M20,54 C12,54 9,45 14,41 C14,36 20,32 26,34 C30,29 40,31 42,36 C47,35 51,39 49,42 C54,44 52,54 47,54 Z"
              fill="rgba(255,255,255,0.7)"
              stroke="rgba(200,200,200,0.2)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-2 left-6 text-yellow-400 text-xs font-light opacity-30 transform rotate-12" style={{ fontFamily: 'serif' }}>$</div>
        </div>
      </div>

      <div className="absolute bottom-48 left-2/3">
        <div className="relative">
          <svg width="130" height="90" viewBox="0 0 130 90" className="drop-shadow-sm">
            <path
              d="M26,68 C16,68 12,56 20,50 C20,43 28,38 36,40 C42,33 54,35 57,43 C64,41 70,47 67,52 C73,54 70,68 64,68 Z"
              fill="rgba(255,255,255,0.8)"
              stroke="rgba(200,200,200,0.2)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-4 right-9 text-yellow-400 text-sm font-light opacity-35 transform -rotate-15" style={{ fontFamily: 'serif' }}>$</div>
        </div>
      </div>
    </div>
  );
};

export default MoneyCloudBackground;
