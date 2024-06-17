import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-neutral-950 text-white py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" passHref>
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/static/logo/ironcladwatcheslogo-01-white-01.svg"
              alt="Ironclad Watches"
              width={50}
              height={50}
            />
            <h1 className="text-xl font-bold">Ironclad Watches</h1>
          </div>
        </Link>
        <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 mt-4 md:mt-0">
          <Link href="/" passHref>
            <div className="text-white font-BakbakOne tracking-wide hover:underline hover:text-white cursor-pointer">
              HOME
            </div>
          </Link>
          <Link href="/product" passHref>
            <div className="text-white font-BakbakOne tracking-wide hover:underline hover:text-white cursor-pointer">
              PRODUCTS
            </div>
          </Link>
          <Link href="/about" passHref>
            <div className="text-white font-BakbakOne tracking-wide hover:underline hover:text-white cursor-pointer">
              ABOUT
            </div>
          </Link>
          <Link href="/team" passHref>
            <div className="text-white font-BakbakOne tracking-wide hover:underline hover:text-white cursor-pointer">
              TEAM
            </div>
          </Link>
        </nav>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm font-semibold">© 2024 Ironclad Watches. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
