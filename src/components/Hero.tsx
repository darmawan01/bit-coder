import { Play } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full pt-32 pb-20 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs font-semibold tracking-wide uppercase mb-8 border border-brand-cyan/30 text-brand-cyan shadow-[0_0_15px_rgba(0,245,255,0.2)]">
        <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
        Unlimited AI Coding. Zero Limits.
      </div>

      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight text-slate-900 dark:text-white">
        No Tokens.
        <br />
        No Limits.
        <br />
        <span className="text-gradient">Just Pure AI Coding.</span>
      </h1>

      <p className="text-lg md:text-xl max-w-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
        Shared high-performance instances. Unlimited usage at the same or lower
        price. Built for developers who hate rate limits.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <button className="px-8 py-4 rounded-2xl bg-gradient-brand text-white text-lg font-bold shadow-[0_0_30px_rgba(107,78,255,0.4)] hover:shadow-[0_0_50px_rgba(107,78,255,0.6)] hover:scale-105 transition-all duration-300">
          Start Free (Really Unlimited)
        </button>
        <button className="px-8 py-4 rounded-2xl glass-panel text-lg font-semibold flex items-center gap-3 text-slate-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300">
          <Play className="w-5 h-5" />
          Watch 47s Demo
        </button>
      </div>
    </div>
  );
}
