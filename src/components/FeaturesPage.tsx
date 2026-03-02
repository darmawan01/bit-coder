import { Terminal, Cpu, Shield, Zap, Globe, Code2 } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: <Terminal className="w-6 h-6 text-brand-cyan" />,
      title: "CLI Native",
      description: "Control everything from your terminal. No need to context switch to a browser."
    },
    {
      icon: <Cpu className="w-6 h-6 text-brand-purple" />,
      title: "Shared H100 Clusters",
      description: "We pool resources to give you enterprise-grade inference speeds at a fraction of the cost."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Privacy First",
      description: "Your code is never used to train our models. Enterprise-grade encryption at rest and in transit."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Zero Rate Limits",
      description: "Literally zero. Code for 24 hours straight if you want. We'll never stop you."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: "Global Edge Network",
      description: "Connect to the closest inference node for sub-50ms latency anywhere in the world."
    },
    {
      icon: <Code2 className="w-6 h-6 text-pink-500" />,
      title: "Multi-Language Support",
      description: "Expert-level understanding of Rust, Go, Python, TypeScript, and 40+ other languages."
    }
  ];

  return (
    <div className="w-full pt-32 pb-20 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-slate-900 dark:text-white">
        Built for <span className="text-gradient">Power Users</span>.
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-2xl">
        Everything you need to ship faster, without the artificial constraints of traditional AI assistants.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {features.map((feature, i) => (
          <div key={i} className="glass-panel p-8 rounded-3xl text-left flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/10">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
