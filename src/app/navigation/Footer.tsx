import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <header className="flex items-center justify-between py-20 px-10 bg-neutral-950 text-white">
      <Link href="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image src="/static/logo/ironcladwatcheslogo-01-white-01.svg" alt="Ironclad Watches" width={50} height={50} />
          <h1 className="text-xl font-bold">Ironclad Watches</h1>
          <h1 className="pl-10 text-sm font-semibold">© 2024 Ironclad Watches. All rights reserved.</h1>
        </div>
      </Link>
      <nav className="flex items-center space-x-4 pr-10">
        <Link href="/">
          <div className="text-white font-BakbakOne tracking-wide flex items-center hover:underline hover:text-white  cursor-pointer">
            HOME
          </div>
        </Link>
        <Link href="/product">
          <div className="text-white font-BakbakOne tracking-wide flex items-center hover:underline hover:text-white  cursor-pointer">
            PRODUCTS
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

export default Footer;
