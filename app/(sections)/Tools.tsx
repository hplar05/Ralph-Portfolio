"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiFigma,
  SiFlutter,
  SiReactivex,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiGithub,
  SiPhp,
  SiMysql,
  SiAnthropic,
  SiGooglegemini,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Database, Zap, Mail, Bell, Workflow, Target, Orbit, Bot, Sparkles, Layers } from "lucide-react";

interface Tool {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const tools: Tool[] = [
  { name: "React", icon: <SiReact className="w-6 h-6 md:w-8 md:h-8" />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 md:w-8 md:h-8" />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 md:w-8 md:h-8" />, category: "Language" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 md:w-8 md:h-8" />, category: "Styling" },
  { name: "HTML", icon: <SiHtml5 className="w-6 h-6 md:w-8 md:h-8" />, category: "Language" },
  { name: "CSS", icon: <SiCss3 className="w-6 h-6 md:w-8 md:h-8" />, category: "Styling" },
  { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 md:w-8 md:h-8" />, category: "Language" },
  { name: "PHP", icon: <SiPhp className="w-6 h-6 md:w-8 md:h-8" />, category: "Language" },
  { name: "MySQL", icon: <SiMysql className="w-6 h-6 md:w-8 md:h-8" />, category: "Database" },
  { name: "Supabase", icon: <SiSupabase className="w-6 h-6 md:w-8 md:h-8" />, category: "Backend" },
  { name: "Neon", icon: <Database className="w-6 h-6 md:w-8 md:h-8" />, category: "Database" },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 md:w-8 md:h-8" />, category: "Database" },
  { name: "Prisma", icon: <Database className="w-6 h-6 md:w-8 md:h-8" />, category: "ORM" },
  { name: "Git", icon: <SiGit className="w-6 h-6 md:w-8 md:h-8" />, category: "Version Control" },
  { name: "GitHub", icon: <SiGithub className="w-6 h-6 md:w-8 md:h-8" />, category: "Version Control" },
  { name: "VS Code", icon: <VscVscode className="w-6 h-6 md:w-8 md:h-8" />, category: "IDE" },
  { name: "Antigravity IDE", icon: <Orbit className="w-6 h-6 md:w-8 md:h-8" />, category: "AI IDE" },
  { name: "Claude Code", icon: <SiAnthropic className="w-6 h-6 md:w-8 md:h-8" />, category: "AI & CLI" },
  { name: "Gemini", icon: <SiGooglegemini className="w-6 h-6 md:w-8 md:h-8" />, category: "AI & LLM" },
  { name: "OpenClaw", icon: <Bot className="w-6 h-6 md:w-8 md:h-8" />, category: "Automation" },
  { name: "Google Stitch", icon: <Layers className="w-6 h-6 md:w-8 md:h-8" />, category: "Integration" },
  { name: "GoHighLevel", icon: <Workflow className="w-6 h-6 md:w-8 md:h-8" />, category: "CRM & Automation" },
  { name: "DitLead", icon: <Target className="w-6 h-6 md:w-8 md:h-8" />, category: "Lead Gen" },
  { name: "Flutter", icon: <SiFlutter className="w-6 h-6 md:w-8 md:h-8" />, category: "Mobile" },
  { name: "React Native", icon: <SiReactivex className="w-6 h-6 md:w-8 md:h-8" />, category: "Mobile" },
  { name: "Expo Router", icon: <SiReactivex className="w-6 h-6 md:w-8 md:h-8" />, category: "Mobile" },
  { name: "Figma", icon: <SiFigma className="w-6 h-6 md:w-8 md:h-8" />, category: "Design" },
  { name: "N8N", icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />, category: "Automation" },
  { name: "Resend", icon: <Mail className="w-6 h-6 md:w-8 md:h-8" />, category: "Email" },
  { name: "Knock API", icon: <Bell className="w-6 h-6 md:w-8 md:h-8" />, category: "Notifications" },
];

export default function ToolsSection() {
  return (
    <section id="tools" className="w-full min-h-screen py-16 px-4 bg-transparent text-[var(--fg-color)]">
      <div className="max-w-5xl mx-auto retro-window p-6 md:p-8">
        <div className="retro-window-header mb-8">
          <span>SYSTEM_TOOLS.CFG</span>
          <span className="cursor-default">X</span>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-['VT323'] uppercase tracking-widest sm:text-5xl text-[var(--accent-color)]">
            &gt; LOADED MODULES
          </h2>
          <p className="font-['Space_Mono'] max-w-[600px] text-lg">
            Dependencies injected and ready for execution.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 font-['Space_Mono']">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center justify-center p-4 border border-[var(--border-color)] hover:bg-[var(--border-color)] hover:text-[var(--window-bg)] transition-colors cursor-crosshair bg-[var(--window-bg)]"
            >
              <div className="mb-3 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-xs md:text-sm font-bold text-center uppercase">
                {tool.name}
              </h3>
              <p className="text-[10px] md:text-xs opacity-70 mt-1 uppercase">
                [{tool.category}]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
