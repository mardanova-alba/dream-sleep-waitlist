
const MoneyCloudBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-sky-100 via-sky-50 to-blue-100">
      {/* Large Prominent Cloud - Center Left */}
      <div className="absolute top-20 left-16 transform">
        <div className="relative">
          <svg width="320" height="220" viewBox="0 0 320 220" className="drop-shadow-xl">
            <defs>
              <radialGradient id="cloudGradient1" cx="0.3" cy="0.3" r="0.8">
                <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                <stop offset="70%" stopColor="rgba(248,250,252,0.95)" />
                <stop offset="100%" stopColor="rgba(241,245,249,0.9)" />
              </radialGradient>
              <filter id="cloudShadow1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="4" stdDeviation="6" floodOpacity="0.1"/>
              </filter>
            </defs>
            <path
              d="M60,160 C25,160 15,125 35,105 C30,75 65,55 95,70 C115,40 175,50 190,85 C220,70 255,100 240,130 C265,145 250,160 210,160 Z"
              fill="url(#cloudGradient1)"
              stroke="rgba(203,213,225,0.3)"
              strokeWidth="1"
              filter="url(#cloudShadow1)"
            />
            {/* Deep fold with dollar sign */}
            <path
              d="M140,90 C135,85 145,80 155,85 C160,90 150,95 140,90"
              fill="rgba(241,245,249,0.8)"
            />
          </svg>
          {/* Integrated dollar sign emerging from cloud fold */}
          <div className="absolute top-16 left-32 text-yellow-500 text-2xl font-serif opacity-70 transform rotate-8 drop-shadow-sm" style={{ 
            textShadow: '0 1px 3px rgba(0,0,0,0.2)',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>$</div>
        </div>
      </div>

      {/* Large Background Cloud - Top Right */}
      <div className="absolute top-8 right-20">
        <div className="relative">
          <svg width="280" height="190" viewBox="0 0 280 190" className="drop-shadow-lg">
            <defs>
              <radialGradient id="cloudGradient2" cx="0.4" cy="0.2" r="0.9">
                <stop offset="0%" stopColor="rgba(255,255,255,0.98)" />
                <stop offset="60%" stopColor="rgba(248,250,252,0.92)" />
                <stop offset="100%" stopColor="rgba(241,245,249,0.85)" />
              </radialGradient>
            </defs>
            <path
              d="M50,140 C20,140 12,110 28,95 C25,70 55,50 80,60 C100,35 145,42 155,70 C180,58 210,80 195,105 C215,115 200,140 170,140 Z"
              fill="url(#cloudGradient2)"
              stroke="rgba(203,213,225,0.25)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-12 left-20 text-yellow-500 text-xl font-serif opacity-60 transform -rotate-5" style={{ 
            textShadow: '0 1px 2px rgba(0,0,0,0.15)',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>$</div>
        </div>
      </div>

      {/* Medium Cloud - Left Center */}
      <div className="absolute top-64 left-8">
        <div className="relative">
          <svg width="240" height="160" viewBox="0 0 240 160" className="drop-shadow-md">
            <defs>
              <radialGradient id="cloudGradient3" cx="0.5" cy="0.3" r="0.7">
                <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                <stop offset="80%" stopColor="rgba(248,250,252,0.88)" />
                <stop offset="100%" stopColor="rgba(241,245,249,0.82)" />
              </radialGradient>
            </defs>
            <path
              d="M40,120 C18,120 12,95 25,82 C22,62 42,48 62,55 C78,38 110,44 118,65 C138,58 158,75 148,90 C163,98 153,120 128,120 Z"
              fill="url(#cloudGradient3)"
              stroke="rgba(203,213,225,0.2)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-10 right-12 text-yellow-500 text-lg font-serif opacity-55 transform rotate-12" style={{ 
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>$</div>
        </div>
      </div>

      {/* Large Cloud - Bottom Right */}
      <div className="absolute bottom-40 right-12">
        <div className="relative">
          <svg width="300" height="200" viewBox="0 0 300 200" className="drop-shadow-xl">
            <defs>
              <radialGradient id="cloudGradient4" cx="0.2" cy="0.4" r="0.8">
                <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                <stop offset="65%" stopColor="rgba(248,250,252,0.95)" />
                <stop offset="100%" stopColor="rgba(241,245,249,0.88)" />
              </radialGradient>
            </defs>
            <path
              d="M55,150 C22,150 14,115 32,98 C28,68 58,48 88,58 C108,33 158,40 170,75 C200,62 235,88 220,118 C245,128 228,150 188,150 Z"
              fill="url(#cloudGradient4)"
              stroke="rgba(203,213,225,0.3)"
              strokeWidth="1"
            />
            {/* Cloud fold detail */}
            <path
              d="M180,85 C175,80 185,75 195,80 C200,85 190,90 180,85"
              fill="rgba(241,245,249,0.7)"
            />
          </svg>
          <div className="absolute top-14 left-28 text-yellow-500 text-2xl font-serif opacity-65 transform -rotate-8" style={{ 
            textShadow: '0 1px 3px rgba(0,0,0,0.2)',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>$</div>
        </div>
      </div>

      {/* Medium Cloud - Top Center */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <svg width="220" height="145" viewBox="0 0 220 145" className="drop-shadow-lg">
            <defs>
              <radialGradient id="cloudGradient5" cx="0.3" cy="0.25" r="0.75">
                <stop offset="0%" stopColor="rgba(255,255,255,0.96)" />
                <stop offset="70%" stopColor="rgba(248,250,252,0.9)" />
                <stop offset="100%" stopColor="rgba(241,245,249,0.84)" />
              </radialGradient>
            </defs>
            <path
              d="M35,110 C15,110 10,88 22,75 C20,58 38,45 55,50 C70,32 100,37 108,58 C125,52 142,67 135,80 C148,86 140,110 115,110 Z"
              fill="url(#cloudGradient5)"
              stroke="rgba(203,213,225,0.25)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-8 left-16 text-yellow-500 text-lg font-serif opacity-58 transform rotate-6" style={{ 
            textShadow: '0 1px 2px rgba(0,0,0,0.12)',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>$</div>
        </div>
      </div>

      {/* Small Atmospheric Cloud - Bottom Left */}
      <div className="absolute bottom-20 left-1/4">
        <div className="relative">
          <svg width="180" height="120" viewBox="0 0 180 120" className="drop-shadow-sm">
            <defs>
              <radialGradient id="cloudGradient6" cx="0.4" cy="0.3" r="0.6">
                <stop offset="0%" stopColor="rgba(255,255,255,0.92)" />
                <stop offset="85%" stopColor="rgba(248,250,252,0.85)" />
                <stop offset="100%" stopColor="rgba(241,245,249,0.78)" />
              </radialGradient>
            </defs>
            <path
              d="M30,90 C15,90 12,72 20,62 C18,50 28,42 38,45 C46,35 62,38 66,48 C75,46 82,52 80,58 C87,61 83,90 75,90 Z"
              fill="url(#cloudGradient6)"
              stroke="rgba(203,213,225,0.2)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-6 right-8 text-yellow-500 text-sm font-serif opacity-50 transform -rotate-10" style={{ 
            textShadow: '0 1px 1px rgba(0,0,0,0.08)',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>$</div>
        </div>
      </div>

      {/* Additional Medium Cloud - Right Center */}
      <div className="absolute top-80 right-1/4">
        <div className="relative">
          <svg width="200" height="135" viewBox="0 0 200 135" className="drop-shadow-md">
            <defs>
              <radialGradient id="cloudGradient7" cx="0.35" cy="0.35" r="0.7">
                <stop offset="0%" stopColor="rgba(255,255,255,0.94)" />
                <stop offset="75%" stopColor="rgba(248,250,252,0.87)" />
                <stop offset="100%" stopColor="rgba(241,245,249,0.8)" />
              </radialGradient>
            </defs>
            <path
              d="M32,102 C16,102 11,82 21,70 C19,55 32,45 45,48 C55,35 75,38 80,52 C90,48 98,56 95,63 C103,66 99,102 89,102 Z"
              fill="url(#cloudGradient7)"
              stroke="rgba(203,213,225,0.22)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute top-7 left-12 text-yellow-500 text-base font-serif opacity-52 transform rotate-15" style={{ 
            textShadow: '0 1px 2px rgba(0,0,0,0.1)',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>$</div>
        </div>
      </div>
    </div>
  );
};

export default MoneyCloudBackground;
