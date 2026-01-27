import Image from "next/image";
import Projects from "./(sections)/Projects";
import About from "./(sections)/About";
import Home from "./(sections)/Home";
import { FloatingButton } from "@/components/ui/FloatingButton";
import ToolsSection from "./(sections)/Tools";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center dark:bg-gray-950 scroll-smooth">
      <div>
        <Home />
        <ToolsSection />
        <Projects />

        <FloatingButton />
      </div>
    </main>
  );
}
