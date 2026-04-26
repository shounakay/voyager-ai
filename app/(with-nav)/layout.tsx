import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "../globals.css";

export const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const playfair = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Voyager AI",
  description: "Trip Planner Agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans w-full bg-linear-to-r from-[#FFF8F1] to-[#FFF2D9]">
      {children}</body>
    </html>
  );
}
