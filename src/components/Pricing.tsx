import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="w-full pt-32 pb-20 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white">
        Simple, <span className="text-gradient">Unlimited</span> Pricing.
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-2xl">
        Stop counting tokens. One flat rate for unlimited access to our shared H100 clusters.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Free Tier */}
        <div className="glass-panel p-8 rounded-3xl text-left border border-black/5 dark:border-white/10 flex flex-col">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Starter</h3>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-4xl font-black text-slate-900 dark:text-white">$0</span>
            <span className="text-slate-500">/ forever</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-8">Perfect for trying out BIT Coder on small projects.</p>
          
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <Check className="w-5 h-5 text-brand-cyan" />
              <span>Unlimited standard queries</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <Check className="w-5 h-5 text-brand-cyan" />
              <span>Shared standard instances</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <Check className="w-5 h-5 text-brand-cyan" />
              <span>Community support</span>
            </li>
          </ul>
          
          <button className="w-full py-3 rounded-xl glass-panel font-semibold text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors border border-black/10 dark:border-white/20">
            Get Started Free
          </button>
        </div>

        {/* Pro Tier */}
        <div className="glass-panel p-8 rounded-3xl text-left border-2 border-brand-purple relative overflow-hidden shadow-[0_0_30px_rgba(107,78,255,0.2)] flex flex-col">
          <div className="absolute top-0 right-0 bg-gradient-brand text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
            MOST POPULAR
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Pro Unlimited</h3>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-4xl font-black text-slate-900 dark:text-white">$20</span>
            <span className="text-slate-500">/ month</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-8">For professional developers who need maximum speed.</p>
          
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <Check className="w-5 h-5 text-brand-purple" />
              <span className="font-medium">Priority H100 access</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <Check className="w-5 h-5 text-brand-purple" />
              <span>Unlimited complex reasoning</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <Check className="w-5 h-5 text-brand-purple" />
              <span>Unlimited context window</span>
            </li>
            <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <Check className="w-5 h-5 text-brand-purple" />
              <span>Early access to new models</span>
            </li>
          </ul>
          
          <button className="w-full py-3 rounded-xl bg-gradient-brand text-white font-semibold shadow-[0_0_20px_rgba(107,78,255,0.4)] hover:shadow-[0_0_30px_rgba(107,78,255,0.6)] transition-all">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}
