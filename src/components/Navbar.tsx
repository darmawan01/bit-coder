import { Code2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center justify-between glass-panel rounded-2xl mt-6 px-6 animate-morph">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-[0_0_15px_rgba(107,78,255,0.5)]">
          <Code2 className="text-white w-6 h-6" />
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          BIT Coder
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600 dark:text-slate-300">
        <a
          href="#"
          className="hover:text-brand-purple dark:hover:text-white transition-colors"
        >
          Pricing
        </a>
        <a
          href="#"
          className="hover:text-brand-purple dark:hover:text-white transition-colors"
        >
          Features
        </a>
        <a
          href="#"
          className="hover:text-brand-purple dark:hover:text-white transition-colors"
        >
          Docs
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors hidden sm:block">
          Login
        </button>
        <button className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-brand text-white text-sm font-semibold shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all">
          <span className="sm:hidden">Get Access</span>
          <span className="hidden sm:inline">Get Unlimited Access</span>
        </button>
      </div>
    </nav>
  );
}
