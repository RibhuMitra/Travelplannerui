import { Card } from "./ui/card";
import { Route, Clock, Wallet } from "lucide-react";

const stats = [
  {
    icon: Route,
    label: "Total Distance",
    value: "658 km",
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Clock,
    label: "Total Duration",
    value: "5 Days",
    gradient: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Wallet,
    label: "Estimated Cost",
    value: "₹47,850",
    gradient: "from-green-500 to-emerald-500",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={index}
            className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <div className="p-6 relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`${stat.iconBg} p-3 rounded-xl`}>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              
              <div className="space-y-1">
                <p className="text-white/60">{stat.label}</p>
                <p className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </p>
              </div>
            </div>
            
            {/* Animated background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            {/* Glow effect */}
            <div className={`absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />
          </Card>
        );
      })}
    </div>
  );
}
