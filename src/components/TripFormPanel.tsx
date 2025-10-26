import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Plane, MapPin, Brain } from "lucide-react";
import { useState } from "react";

const interests = ["Nature", "Culture", "Food", "Adventure", "Wildlife", "History"];

export function TripFormPanel({ onGenerate }: { onGenerate: () => void }) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="h-full p-8 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] rounded-xl border border-white/10 backdrop-blur-sm">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-cyan-400 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Trip Configuration
          </h3>
          <p className="text-muted-foreground">
            Plan your perfect multi-stop journey
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="source" className="text-white/90">
              Source City
            </Label>
            <Input
              id="source"
              placeholder="e.g., Delhi"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500/50 focus:ring-cyan-500/20"
              defaultValue="Delhi"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination" className="text-white/90">
              Destination City
            </Label>
            <Input
              id="destination"
              placeholder="e.g., Jaipur"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500/50 focus:ring-cyan-500/20"
              defaultValue="Jaipur"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="days" className="text-white/90">
                Number of Days
              </Label>
              <Input
                id="days"
                type="number"
                placeholder="5"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                defaultValue="5"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="text-white/90">
                Total Budget (₹)
              </Label>
              <Input
                id="budget"
                type="number"
                placeholder="50000"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                defaultValue="50000"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-white/90">Interests</Label>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge
                  key={interest}
                  variant={selectedInterests.includes(interest) ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedInterests.includes(interest)
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/20"
                      : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => toggleInterest(interest)}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Button
          onClick={onGenerate}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-xl shadow-cyan-500/30 transition-all duration-300 hover:shadow-cyan-500/50 hover:scale-[1.02]"
        >
          <Brain className="w-5 h-5 mr-2" />
          Generate Itinerary
        </Button>

        <div className="pt-4 border-t border-white/10">
          <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-cyan-500/20">
            <Brain className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <p className="text-cyan-300">AI-Powered Planning</p>
              <p className="text-white/60">
                Our intelligent system optimizes routes, suggests attractions, and finds the best accommodations within your budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
