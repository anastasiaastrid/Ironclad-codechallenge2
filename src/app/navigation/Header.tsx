import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between py-4 px-10 bg-black text-white">
      <Link href="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image src="/static/logo/ironcladwatcheslogo-01-white-01.svg" alt="Ironclad Watches" width={50} height={50} />
          <h1 className="text-xl font-ZenDots">IRONCLAD</h1>
          <h1 className="text-xl font-BakbakOne">TIMELESS TOUGHNESS</h1>
          
        </div>
      </Link>
      <nav className="flex items-center space-x-4 pr-10">
        <Link href="/">
          <div className="text-white font-BakbakOne tracking-wide flex items-center hover:underline hover:text-white  cursor-pointer">
            HOME
          </div>
        </Link>
        <Link href="/services">
          <div className="text-white font-BakbakOne tracking-wide flex items-center hover:underline hover:text-white  cursor-pointer">
            SERVICES
          </div>
        </Link>
        <Link href="/about">
          <div className="text-white font-BakbakOne tracking-wide flex items-center hover:underline hover:text-white  cursor-pointer">
            ABOUT
          </div>
        </Link>
        <Link href="/team">
          <div className="text-white font-BakbakOne tracking-wide flex items-center hover:underline hover:text-white  cursor-pointer">
            TEAM
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
