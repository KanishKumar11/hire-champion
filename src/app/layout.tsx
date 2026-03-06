import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HireChampion | Joyful Remote Talent",
  description: "Hire outperforming engineers, designers, and marketers globally. Experience the future of team building with our 15-Day Risk-Free Trial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sans.variable} ${playfair.variable} font-sans antialiased text-[#28282B] bg-[#FCFAEF] selection:bg-orange-200 selection:text-orange-900 min-h-screen relative`}
      >
        {/* Global Ambient Aurora Background (Creamy / Joyful base) */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[70%] bg-orange-100/40 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] bg-purple-100/40 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] bg-emerald-50/50 rounded-full blur-[120px] mix-blend-multiply" />
          {/* Noise overlay to give it texture */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {children}
      </body>
    </html>
  );
}
