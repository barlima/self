import type { Metadata } from "next";
import "normalize.css";

import "@/styles/global.css";

import { Josefin_Sans, Poppins, Kalam } from "next/font/google";

const josefin = Josefin_Sans({
  weight: ["600", "500"],
  subsets: ["latin-ext"],
  variable: "--font-josefin",
});
const cardo = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-cardo",
});
const kalam = Kalam({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-kalam",
});

export const metadata: Metadata = {
  title: "Bartłomiej Perucki",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.variable} ${cardo.variable} ${kalam.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
