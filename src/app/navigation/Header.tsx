"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between max-w-full px-4 sm:px-6 py-5 bg-black text-white">
      <Head>
        <title>Ironclad Watch</title>
        <link rel="preload" href="/fonts/ZenDots-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/BakbakOne-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </Head>
      
      <Link href="/" className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsOpen(false)}>
        <Image src="/static/logo/ironcladwatcheslogo-01-white-01-01.png" alt="Logo" width={50} height={50} priority />
        <h1 className="text-xl font-ZenDots">IRONCLAD</h1>
      </Link>

      {/* Hamburger */}
      <button
        onClick={toggleMenu}
        className="block lg:hidden text-white focus:outline-none p-3"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {/* Menu */}
      <nav className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? "block" : "hidden"} w-full lg:w-auto lg:bg-transparent bg-black absolute lg:static top-16 left-0 right-0 lg:top-auto lg:left-auto lg:right-auto z-40`}>
        <Link href="/" onClick={toggleMenu}>
          <div className="text-white font-BakbakOne tracking-wide hover:underline hover:text-white cursor-pointer py-2 px-4 lg:px-0">
            HOME
          </div>
        </Link>
        <Link href="/product" onClick={toggleMenu}>
          <div className="text-white font-BakbakOne tracking-wide hover:underline hover:text-white cursor-pointer py-2 px-4 lg:px-0">
            PRODUCTS
          </div>
        </Link>
        <Link href="/about" onClick={toggleMenu}>
          <div className="text-white font-BakbakOne tracking-wide hover:underline hover:text-white cursor-pointer py-2 px-4 lg:px-0">
            ABOUT
          </div>
        </Link>
        <Link href="/team" onClick={toggleMenu}>
          <div className="text-white font-BakbakOne tracking-wide hover:underline hover:text-white cursor-pointer py-2 px-4 lg:px-0">
            TEAM
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
