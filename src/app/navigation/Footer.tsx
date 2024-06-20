"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Ironclad Watch</title>
        <link rel="preload" href="/fonts/ZenDots-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/BakbakOne-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </Head>

      {showFooter && (
        <footer className="bg-neutral-950 text-white max-w-full max-h-full mx-auto my-auto py-5 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Image src="/static/logo/ironcladwatcheslogo-01-white-01-01.png" alt="Logo" width={50} height={50} />
              </div>
            </Link>
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 mt-4 md:mt-0">
              <Link href="/">
                <div className="text-xs lg:text-lg text-white font-BakbakOne tracking-wide hover:underline cursor-pointer">
                  HOME
                </div>
              </Link>
              <Link href="/product">
                <div className="text-xs lg:text-lg text-white font-BakbakOne tracking-wide hover:underline cursor-pointer">
                  PRODUCTS
                </div>
              </Link>
              <Link href="/about">
                <div className="text-xs lg:text-lg text-white font-BakbakOne tracking-wide hover:underline cursor-pointer">
                  ABOUT
                </div>
              </Link>
              <Link href="/team">
                <div className="text-xs lg:text-lg text-white font-BakbakOne tracking-wide hover:underline cursor-pointer">
                  TEAM
                </div>
              </Link>
            </nav>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
