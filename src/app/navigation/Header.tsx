"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between p-7
    lg:py-5 lg:px-20 bg-black text-white"
    >
      <Link href="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image src="/static/logo/ironcladwatcheslogo-01-white-01-01.png" alt="Logo" width={50} height={50} />
          <h1 className="text-xl font-ZenDots">IRONCLAD</h1>
          <h1 className="text-xl font-BakbakOne hidden md:block sm:block lg:block ">TIMELESS TOUGHNESS</h1>
        </div>
      </Link>

      {/* Hamburger menu */}
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none p-3" // increased padding for better touch target
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
      </div>

      {/* Menu items */}
      <nav className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? "block" : "hidden"}`}>
        <Link href="/">
          <div
            onClick={toggleMenu}
            className="text-white font-BakbakOne tracking-wide flex items-center hover:underline hover:text-white cursor-pointer py-2"
          >
            HOME
          </div>
        </Link>
        <Link href="/product">
          <div
            onClick={toggleMenu}
            className="text-white font-BakbakOne tracking-wide flex items-center hover:underline hover:text-white cursor-pointer py-2"
          >
            PRODUCTS
          </div>
        </Link>
        <Link href="/about">
          <div
            onClick={toggleMenu}
            className="text-white font-BakbakOne tracking-wide flex items-center hover:underline hover:text-white cursor-pointer py-2"
          >
            ABOUT
          </div>
        </Link>
        <Link href="/team">
          <div
            onClick={toggleMenu}
            className="text-white font-BakbakOne tracking-wide flex items-center hover:underline hover:text-white cursor-pointer py-2"
          >
            TEAM
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
