import {Outfit, Ovo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  
});
const ovo = Ovo({
  variable: '--font-ovo',
  subsets: ['latin'],
  weight: ['400',],
})
const outfit = Outfit({
  variable: '--font-outfit',
  subsets:['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Olya Jean",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ovo.variable} ${outfit.variable} antialiased bg-[url('/bg1.jpg')] bg-cover m-0 bg-center h-screen w-screen bg-fixed top-0 bottom-0 left-0 right-0 -z-10 leading-8 overflow-x-hidden text-slate-700  dark:text-white  dark:bg-[url('/dark_bg.jpg')]`}
      >
        {children}
      </body>
    </html>
  );
}
