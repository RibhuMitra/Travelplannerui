import { useState } from "react";
import { TripFormPanel } from "./components/TripFormPanel";
import { MapSection } from "./components/MapSection";
import { StatsCards } from "./components/StatsCards";
import { DayCard } from "./components/DayCard";
import { AIAssistant } from "./components/AIAssistant";
import { MapPin, Plane, Brain, Calendar } from "lucide-react";
import { ScrollArea } from "./components/ui/scroll-area";

const mockItinerary = [
  {
    day: 1,
    route: "Delhi → Agra",
    distance: "233 km",
    duration: "4h 30m",
    cost: "₹8,500",
    hotel: {
      name: "Taj View Heritage Hotel",
      price: "₹3,500/night",
      rating: 4,
    },
    attractions: [
      { name: "Taj Mahal - Iconic monument of love", emoji: "🕌" },
      { name: "Agra Fort - Mughal architectural marvel", emoji: "🏰" },
      { name: "Mehtab Bagh - Sunset views of Taj", emoji: "🌅" },
    ],
  },
  {
    day: 2,
    route: "Exploring Agra",
    distance: "Local",
    duration: "Full Day",
    cost: "₹4,200",
    hotel: {
      name: "Taj View Heritage Hotel",
      price: "₹3,500/night",
      rating: 4,
    },
    attractions: [
      { name: "Fatehpur Sikri - Ancient city ruins", emoji: "🏛️" },
      { name: "Itmad-ud-Daulah - Baby Taj", emoji: "✨" },
      { name: "Local markets and cuisine", emoji: "🍛" },
    ],
  },
  {
    day: 3,
    route: "Agra → Jaipur",
    distance: "240 km",
    duration: "5h 15m",
    cost: "₹9,800",
    hotel: {
      name: "Pink City Palace Resort",
      price: "₹4,200/night",
      rating: 5,
    },
    attractions: [
      { name: "Amber Fort - Hilltop fortress", emoji: "🏔️" },
      { name: "City Palace - Royal heritage", emoji: "👑" },
      { name: "Hawa Mahal - Palace of Winds", emoji: "🏰" },
    ],
  },
  {
    day: 4,
    route: "Exploring Jaipur",
    distance: "Local",
    duration: "Full Day",
    cost: "₹5,350",
    hotel: {
      name: "Pink City Palace Resort",
      price: "₹4,200/night",
      rating: 5,
    },
    attractions: [
      { name: "Jantar Mantar - Astronomical observatory", emoji: "🔭" },
      { name: "Albert Hall Museum - Art & culture", emoji: "🎨" },
      { name: "Jal Mahal - Water palace", emoji: "💧" },
    ],
  },
  {
    day: 5,
    route: "Jaipur → Delhi",
    distance: "280 km",
    duration: "5h 30m",
    cost: "₹6,000",
    hotel: {
      name: "Journey's End",
      price: "-",
      rating: 0,
    },
    attractions: [
      { name: "Nahargarh Fort - Panoramic views", emoji: "🌄" },
      { name: "Local handicraft shopping", emoji: "🛍️" },
      { name: "Return journey with memories", emoji: "📸" },
    ],
  },
];

export default function App() {
  const [showItinerary, setShowItinerary] = useState(true);

  const handleGenerate = () => {
    setShowItinerary(true);
  };

  return (
    <div className="min-h-screen bg-black dark">
      {/* Animated background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 bg-black/40 backdrop-blur-xl sticky top-0 z-40">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50" />
                  <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-white flex items-center gap-2">
                    Intelligent Multi-Stop Travel Planner
                  </h1>
                  <p className="text-white/60">AI-Powered Journey Optimization</p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                  <Plane className="w-4 h-4 text-cyan-400" />
                  <span className="text-white/80">Smart Routes</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                  <Brain className="w-4 h-4 text-blue-400" />
                  <span className="text-white/80">AI Assistant</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
            {/* Left Panel - Form */}
            <div className="lg:col-span-2">
              <TripFormPanel onGenerate={handleGenerate} />
            </div>

            {/* Right Panel - Map */}
            <div className="lg:col-span-3 space-y-6">
              <MapSection />
              <StatsCards />
            </div>
          </div>

          {/* Itinerary Section */}
          {showItinerary && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-3 rounded-xl border border-cyan-500/30">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-white">Day-by-Day Itinerary</h2>
                  <p className="text-white/60">Your personalized travel schedule</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockItinerary.map((day) => (
                  <DayCard key={day.day} {...day} />
                ))}
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl mt-16">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between text-white/60">
              <p>Powered by AI • Material Design 3</p>
              <p>© 2025 Intelligent Travel Planner</p>
            </div>
          </div>
        </footer>
      </div>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
}
