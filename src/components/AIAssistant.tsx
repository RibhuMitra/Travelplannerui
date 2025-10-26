import { Brain, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function AIAssistant() {
  return (
    <div className="fixed bottom-6 right-6 max-w-md z-50">
      <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] rounded-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm overflow-hidden">
        {/* Animated header */}
        <div className="relative bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-md animate-pulse" />
              <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-full">
                <Brain className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <h4 className="text-white flex items-center gap-2">
                AI Travel Assistant
                <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              </h4>
              <p className="text-white/60">Ask me anything about your trip</p>
            </div>
          </div>
          
          {/* Animated particles */}
          <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
          <div className="absolute bottom-2 right-8 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="space-y-2">
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
              <p className="text-cyan-300">💡 Try asking:</p>
              <ul className="mt-2 space-y-1 text-white/70">
                <li className="pl-4">• "Show me scenic stops along the route"</li>
                <li className="pl-4">• "Find budget-friendly hotels in Agra"</li>
                <li className="pl-4">• "What are the best local restaurants?"</li>
              </ul>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Input
              placeholder="Ask AI for suggestions..."
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500/50 focus:ring-cyan-500/20"
            />
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg shadow-cyan-500/30">
              <Sparkles className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
