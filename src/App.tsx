import React, { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import Pricing from "./components/Pricing";
import FeaturesPage from "./components/FeaturesPage";
import Docs from "./components/Docs";
import { GripVertical, Moon, Sun } from "lucide-react";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="docs" element={<Docs />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  const [splitPosition, setSplitPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileTheme, setMobileTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    // Only prevent default for mouse events to allow touch scrolling
    if (e.type === 'mousedown') {
      e.preventDefault();
    }
    setIsDragging(true);
  };
  
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    let clientX;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSplitPosition(percentage);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove, { passive: false });
      window.addEventListener("touchmove", handleMouseMove, { passive: false });
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
      document.body.style.cursor = "ew-resize";
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
      document.body.style.cursor = "default";
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
      document.body.style.cursor = "default";
    };
  }, [isDragging]);

  if (isMobile) {
    return (
      <div className={`relative w-full min-h-screen overflow-x-hidden ${mobileTheme === 'dark' ? 'dark bg-[#0A0A0A] text-white' : 'light bg-[#F8F9FA] text-slate-900'}`}>
        <AppRoutes />
        
        {/* Mobile Theme Toggle */}
        <button 
          onClick={() => setMobileTheme(prev => prev === 'dark' ? 'light' : 'dark')}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass-panel flex items-center justify-center shadow-2xl border border-white/20 dark:border-black/10 bg-white/80 dark:bg-black/80 backdrop-blur-xl transition-all hover:scale-110 active:scale-95"
        >
          {mobileTheme === 'dark' ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-brand-purple" />
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      <div ref={containerRef} className="relative w-full">
        {/* Light Mode (Base) */}
        <div className="w-full light bg-[#F8F9FA] text-slate-900 min-h-screen">
          <AppRoutes />
        </div>

        {/* Dark Mode (Clipped Overlay) */}
        <div
          className="absolute top-0 left-0 w-full h-full dark bg-[#0A0A0A] text-white pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - splitPosition}% 0 0)` }}
        >
          <div className="pointer-events-auto h-full">
            <AppRoutes />
          </div>
        </div>
      </div>

      {/* Fixed Splitter Handle */}
      <div
        className="fixed top-0 bottom-0 w-1 bg-white/20 backdrop-blur-md cursor-ew-resize z-50 flex items-center justify-center shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:bg-white/40 transition-colors"
        style={{ left: `${splitPosition}%`, transform: "translateX(-50%)" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="w-8 h-12 bg-black/50 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-xl">
          <GripVertical className="w-4 h-4 text-white" />
        </div>
        <div className="absolute top-6 bg-black/80 text-white text-xs px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md whitespace-nowrap font-medium tracking-wide shadow-lg">
          Dark ↔ Light
        </div>
      </div>
    </div>
  );
}
