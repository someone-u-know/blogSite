import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#8d8ec7] px-12 pt-4 pb-2">
      <span className="text-xl text-[#2a293d] font-bold">blogSite</span>
      <ul className="flex items-center gap-8 text-gray-900">
        {/* Theme toggle placeholder */}
        <li>
          <button
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-4 border border-[#2a293d]"
          >
            <span className="block w-3 h-3 bg-green-400 rounded-full" aria-hidden="true"></span>
          </button>
        </li>
        <li>
          <Link href="/" className="text-green-900 font-semibold">Home</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;