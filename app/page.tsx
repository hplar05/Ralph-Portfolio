import Image from "next/image";
import Projects from "./(sections)/Projects";
import About from "./(sections)/About";
import Home from "./(sections)/Home";
import { FloatingButton } from "@/components/ui/FloatingButton";
import ToolsSection from "./(sections)/Tools";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-transparent z-10 relative scroll-smooth">
      <div className="w-full">
        <Home />
        <About />
        <ToolsSection />
        <Projects />

        <FloatingButton />
      </div>
    </main>
  );
}
