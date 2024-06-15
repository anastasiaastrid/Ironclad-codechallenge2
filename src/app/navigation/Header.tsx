import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between py-4 px-10 bg-black text-white">
      <Link href="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image src="/static/logo/ironcladwatcheslogo-01-white-01.svg" alt="Ironclad Watches" width={50} height={50} />
          <h1 className="text-xl font-bold">Ironclad Watches</h1>
        </div>
      </Link>
      <nav className="flex items-center space-x-4 pr-10">
        <Link href="/">
          <div className="text-white flex items-center hover:underline hover:text-white hover:font-semibold cursor-pointer">
            Home
          </div>
        </Link>
        <Link href="/services">
          <div className="text-white flex items-center hover:underline hover:text-white hover:font-semibold cursor-pointer">
            Services
          </div>
        </Link>
        <Link href="/about">
          <div className="text-white flex items-center hover:underline hover:text-white hover:font-semibold cursor-pointer">
            About Us
          </div>
        </Link>
        <Link href="/team">
          <div className="text-white flex items-center hover:underline hover:text-white hover:font-semibold cursor-pointer">
            Our Team
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
