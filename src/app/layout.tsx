import type { Metadata } from "next";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import "./globals.css";

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
        <link rel="icon" href="/static/logo/favicon.png" />
      </head>

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
