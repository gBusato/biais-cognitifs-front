import Image from "next/image";
import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <header className="relative py-2">
      <div className="flex px-5 h-20 mx-auto max-w-7xl justify-between">
        <Link href="/">
          <a className="relative flex items-center w-auto font-black leading-none select-none text-lg">
            <Image src="/logo-brain.svg" width={20} height={20} />
            <span className="mx-2">Les biais cognitifs</span>
          </a>
        </Link>
        <nav className="md:flex justify-center items-center space-x-5 lg:space-x-8">
          <Link href="/about">
            <a className="px-1 text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900">
              A propos
            </a>
          </Link>
          <Link href="/contact">
            <a className="px-1 text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900">
              Contact
            </a>
          </Link>
          <Link href="/">
            <a className="px-1 text-base font-bold text-gray-700 uppercase transition duration-150 ease hover:text-gray-900">
              La liste des biais
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
