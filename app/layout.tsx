import type { Metadata } from "next";
import { VT323, Space_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/ui/Navbar";
import BootUp from "@/components/ui/BootUp";
import Footer from "@/components/ui/Footer";

const vt323 = VT323({ weight: "400", subsets: ["latin"], variable: "--font-vt323" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });

export const metadata: Metadata = {
  title: "Ralph Saladino - Portfolio OS",
  description: "My Personal Portfolio - Retro Edition!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${vt323.variable} ${spaceMono.variable} font-mono`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <BootUp />
          <div className="flex flex-col min-h-screen">
            <Toaster 
              toastOptions={{
                className: 'retro-window !rounded-none',
              }}
            />
            <Navbar />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
