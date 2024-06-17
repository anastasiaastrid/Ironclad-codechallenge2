import type { Metadata } from "next";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ironclad Watches - Timeless Toughness",
  description: "Luxury watches in Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/static/logo/ironcladwatcheslogo-01-01.png" />
      </head>

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
