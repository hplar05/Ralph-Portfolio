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
} from "react-icons/si";
import { Database, Zap, Mail, Bell } from "lucide-react";

interface Tool {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const tools: Tool[] = [
  {
    name: "React",
    icon: <SiReact className="w-8 h-8" />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-8 h-8" />,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-8 h-8" />,
    category: "Language",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-8 h-8" />,
    category: "Styling",
  },
  { name: "HTML", icon: <SiHtml5 className="w-8 h-8" />, category: "Language" },
  { name: "CSS", icon: <SiCss3 className="w-8 h-8" />, category: "Styling" },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-8 h-8" />,
    category: "Language",
  },

  {
    name: "Supabase",
    icon: <SiSupabase className="w-8 h-8" />,
    category: "Backend",
  },
  {
    name: "Neon",
    icon: <Database className="w-8 h-8" />,
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-8 h-8" />,
    category: "Database",
  },
  { name: "Prisma", icon: <Database className="w-8 h-8" />, category: "ORM" },

  {
    name: "Flutter",
    icon: <SiFlutter className="w-8 h-8" />,
    category: "Mobile",
  },
  {
    name: "React Native",
    icon: <SiReactivex className="w-8 h-8" />,
    category: "Mobile",
  },
  {
    name: "Expo Router",
    icon: <SiReactivex className="w-8 h-8" />,
    category: "Mobile",
  },

  { name: "Figma", icon: <SiFigma className="w-8 h-8" />, category: "Design" },

  { name: "N8N", icon: <Zap className="w-8 h-8" />, category: "Automation" },
  { name: "Resend", icon: <Mail className="w-8 h-8" />, category: "Email" },
  {
    name: "Knock API",
    icon: <Bell className="w-8 h-8" />,
    category: "Notifications",
  },
];

const categories = [
  "Frontend",
  "Language",
  "Styling",
  "Backend",
  "Database",
  "ORM",
  "Mobile",
  "Design",
  "Automation",
  "Email",
  "Notifications",
];

export default function ToolsSection() {
  return (
    <section id="tools" className="w-full min-h-screen  py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Tools
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-[600px] max-sm:text-base text-lg max-md:text-justify  tracking-tighter text-center">
              The tools and technologies I use to build.
            </p>
          </div>
        </div>
        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center justify-center p-6  hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              <div className="text-primary group-hover:scale-110 transition-transform duration-300 mb-3">
                {tool.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {tool.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
