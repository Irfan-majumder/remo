
import { SpeedInsights } from "@vercel/speed-insights/next"

import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Remo AI",
    template: "%s | Remo AI"
  },
  description: "AI-powered text-to-speech and voice cloning platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <ClerkProvider>
        <html lang="en">
          <body
            className={`${inter.variable} ${geistMono.variable} antialiased`}
          >
            
              {children}
           
            <Toaster />
            <SpeedInsights />
          </body>
        </html>
      
    </ClerkProvider>
  );
}