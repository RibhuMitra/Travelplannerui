import { MapPin, Navigation } from "lucide-react";

export function MapSection() {
  return (
    <div className="relative h-[400px] bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] rounded-xl border border-white/10 overflow-hidden group">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Route simulation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-4/5 h-3/5">
          {/* Route path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            
            <path
              d="M 50 150 Q 150 50, 250 150 T 350 150"
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="3"
              strokeDasharray="8 4"
              className="animate-[dash_20s_linear_infinite]"
            />
            
            {/* Route markers */}
            <circle cx="50" cy="150" r="8" fill="#22c55e" className="animate-pulse" />
            <circle cx="250" cy="150" r="6" fill="#06b6d4" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="350" cy="150" r="8" fill="#ef4444" className="animate-pulse" style={{ animationDelay: '1s' }} />
          </svg>
          
          {/* Location labels */}
          <div className="absolute top-[45%] left-[8%] transform -translate-x-1/2 -translate-y-full">
            <div className="bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg px-3 py-1 text-green-400">
              Delhi
            </div>
          </div>
          
          <div className="absolute top-[45%] left-[62%] transform -translate-x-1/2 -translate-y-full">
            <div className="bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-1 text-cyan-400">
              Agra
            </div>
          </div>
          
          <div className="absolute top-[45%] right-[8%] transform translate-x-1/2 -translate-y-full">
            <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-lg px-3 py-1 text-red-400">
              Jaipur
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom caption */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2 text-cyan-400/80">
          <Navigation className="w-4 h-4" />
          <span>Interactive route visualization • Total Distance: 658 km</span>
        </div>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/30 rounded-br-xl" />
    </div>
  );
}
