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
      <head>
        <meta
          name="title"
          content="Bartłomiej Perucki – Senior Frontend Developer Specializing in High-Performance Web Solutions"
        />
        <meta
          name="description"
          content="Discover the portfolio of Bartłomiej Perucki, a Senior Frontend Developer with expertise in React.js, TypeScript, and modern web technologies. Passionate about delivering high-performance web solutions."
        />
        <meta
          name="keywords"
          content="Bartłomiej Perucki, Senior Frontend Developer, React.js, TypeScript, Next.js, Web Development, Portfolio"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.perucki.be/" />

        <meta
          property="og:title"
          content="Bartłomiej Perucki – Senior Frontend Developer"
        />
        <meta
          property="og:description"
          content="Explore the work of Bartłomiej Perucki, specializing in React.js and TypeScript for high-performance web solutions."
        />
        <meta property="og:url" content="https://www.perucki.be/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bartłomiej Perucki – Senior Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Frontend development portfolio focused on React.js, TypeScript, and high-performance applications."
        />
      </head>
      <body
        className={`${josefin.variable} ${cardo.variable} ${kalam.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
