import { Copy, Terminal } from 'lucide-react';

export default function Docs() {
  return (
    <div className="w-full pt-32 pb-20 flex flex-col items-start text-left max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white">
        Documentation
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
        Get started with BIT Coder in less than 60 seconds.
      </p>

      <div className="w-full space-y-12">
        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">1. Installation</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Install the BIT Coder CLI globally using npm:
          </p>
          <div className="glass-panel rounded-2xl p-4 flex items-center justify-between border border-black/5 dark:border-white/10">
            <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-mono text-sm">
              <Terminal className="w-4 h-4 text-brand-cyan" />
              <span>npm install -g bit-coder-cli</span>
            </div>
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors">
              <Copy className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">2. Authentication</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Login to your account via the CLI to authenticate your machine:
          </p>
          <div className="glass-panel rounded-2xl p-4 flex items-center justify-between border border-black/5 dark:border-white/10">
            <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-mono text-sm">
              <Terminal className="w-4 h-4 text-brand-purple" />
              <span>bit login</span>
            </div>
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors">
              <Copy className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">3. Usage</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Start an interactive coding session in your current directory:
          </p>
          <div className="glass-panel rounded-2xl p-4 flex items-center justify-between border border-black/5 dark:border-white/10 mb-4">
            <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-mono text-sm">
              <Terminal className="w-4 h-4 text-emerald-500" />
              <span>bit start</span>
            </div>
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors">
              <Copy className="w-4 h-4 text-slate-500" />
            </button>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Or execute a single prompt directly:
          </p>
          <div className="glass-panel rounded-2xl p-4 flex items-center justify-between border border-black/5 dark:border-white/10">
            <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-mono text-sm">
              <Terminal className="w-4 h-4 text-slate-500" />
              <span>bit ask "refactor the auth middleware to use JWT"</span>
            </div>
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors">
              <Copy className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
