import Particles from "@/components/particles";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sean Gray",
  description: "Sean Gray's development portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} dark relative flex h-full flex-col`}
      >
        {children}
        <Particles
          className="absolute inset-0 -z-10 hidden h-full animate-fade-in md:block"
          quantity={5000}
        />
        <Toaster />
      </body>
    </html>
  );
}
