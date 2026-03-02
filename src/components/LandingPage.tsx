import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import CodeEditor from "./CodeEditor";

export default function LandingPage({ theme }: { theme: "light" | "dark" }) {
  return (
    <div className="w-full min-h-screen flex flex-col relative overflow-hidden transition-colors duration-300">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-purple/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-cyan/20 blur-[120px]" />
        {/* Subtle grid */}
        <div
          className={`absolute inset-0 opacity-[0.05] dark:opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMSkiLz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMSkiLz48L3N2Zz4=')]`}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto px-6">
        <Navbar />
        <Hero />
        <Features />
        <div className="w-full py-20 flex justify-center">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
}
