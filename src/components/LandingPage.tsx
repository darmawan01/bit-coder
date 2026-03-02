import Hero from "./Hero";
import Features from "./Features";
import CodeEditor from "./CodeEditor";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <div className="w-full py-20 flex justify-center">
        <CodeEditor />
      </div>
    </>
  );
}
