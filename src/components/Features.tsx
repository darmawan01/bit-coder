import { Infinity, Zap, DollarSign } from "lucide-react";

export default function Features() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
      <div
        className="glass-panel p-8 rounded-3xl animate-float"
        style={{ animationDelay: "0s" }}
      >
        <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 dark:bg-brand-purple/20 flex items-center justify-center mb-6 border border-brand-purple/20 dark:border-brand-purple/30">
          <Infinity className="w-8 h-8 text-brand-purple" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
          Truly Unlimited
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Never see a "rate limit exceeded" message again. Code as much as you
          want, whenever you want.
        </p>
      </div>

      <div
        className="glass-panel p-8 rounded-3xl animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 dark:bg-brand-cyan/20 flex items-center justify-center mb-6 border border-brand-cyan/20 dark:border-brand-cyan/30">
          <Zap className="w-8 h-8 text-brand-cyan" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
          Shared Power Instances
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Backed by massive H100 clusters. You get enterprise-grade speed
          without the enterprise price tag.
        </p>
      </div>

      <div
        className="glass-panel p-8 rounded-3xl animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/20 dark:border-emerald-500/30">
          <DollarSign className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
          Cheaper or Same Price
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Why pay $20/mo for 50 messages when you can pay $20/mo for infinite
          messages?
        </p>
      </div>
    </div>
  );
}
