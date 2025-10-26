import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Navigation, Hotel, Star, Wallet } from "lucide-react";

interface Attraction {
  name: string;
  emoji: string;
}

interface DayCardProps {
  day: number;
  route: string;
  distance: string;
  duration: string;
  cost: string;
  hotel: {
    name: string;
    price: string;
    rating: number;
  };
  attractions: Attraction[];
}

export function DayCard({ day, route, distance, duration, cost, hotel, attractions }: DayCardProps) {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] border-white/10 hover:border-cyan-500/30 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="p-6 space-y-4 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
                Day {day}
              </Badge>
              <div className="h-1 w-1 rounded-full bg-white/40" />
              <span className="text-white/60">{duration}</span>
            </div>
            <h4 className="text-white flex items-center gap-2">
              <Navigation className="w-4 h-4 text-cyan-400" />
              {route}
            </h4>
          </div>
          
          <div className="text-right">
            <div className="flex items-center gap-1 text-white/60 mb-1">
              <MapPin className="w-3 h-3" />
              <span>{distance}</span>
            </div>
            <div className="flex items-center gap-1 text-green-400">
              <Wallet className="w-3 h-3" />
              <span>{cost}</span>
            </div>
          </div>
        </div>
        
        {/* Hotel */}
        <div className="p-4 bg-white/5 rounded-lg border border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-white/60 mb-2">
            <Hotel className="w-4 h-4" />
            <span>Recommended Hotel</span>
          </div>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <p className="text-white">{hotel.name}</p>
              <div className="flex items-center gap-1">
                {Array.from({ length: hotel.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
                {Array.from({ length: 5 - hotel.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-white/20" />
                ))}
              </div>
            </div>
            <div className="text-cyan-400">{hotel.price}</div>
          </div>
        </div>
        
        {/* Attractions */}
        <div className="space-y-3">
          <p className="text-white/60 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Top Attractions
          </p>
          <div className="space-y-2">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-200"
              >
                <span className="text-xl">{attraction.emoji}</span>
                <span className="text-white/80">{attraction.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Card>
  );
}
