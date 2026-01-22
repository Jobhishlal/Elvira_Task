import React from 'react';
import Link from 'next/link';
import Image from "next/image";
export default function Navbar() {
    return (
        <nav style={{ height: '3cm' }} className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 border-b border-white/20 bg-transparent text-white font-samsung">
            <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center w-12 h-12 border-2 border-yellow-400 rounded-full overflow-hidden">
                    <Image
                        src="/elvira logo.svg"
                        alt="Elvira icon"
                        fill
                        className="object-contain p-2"
                    />
                </div>

                <span className="mt-1 text-xs font-bold tracking-widest text-yellow-400">
                    elvira
                </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-200">
                <Link href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">Home</Link>
                <Link href="#" className="hover:text-white transition-colors">About us</Link>
                <Link href="#" className="hover:text-white transition-colors">Categories</Link>
                <Link href="#" className="hover:text-white transition-colors">Why choose us</Link>
                <Link href="#" className="hover:text-white transition-colors">Infrastructure</Link>
                <Link href="#" className="hover:text-white transition-colors">Contact us</Link>
            </div>

            {/* Call to Action */}
            <div>
  <button className="
    group flex items-center
    bg-white text-black rounded-full
    h-[44px] px-1
    overflow-hidden
    hover:bg-gray-100
    transition-colors
  ">
    {/* ICON */}
    <div
      className="
        flex items-center justify-center
        w-[36px] h-[36px]
        bg-yellow-400 rounded-full
        text-black
        transition-all duration-700 ease-in-out
        group-hover:order-1
        group-hover:translate-x-2
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    </div>

    {/* TEXT */}
    <span
      className="
        px-5 text-sm font-bold
        transition-all duration-700 ease-in-out
        group-hover:-translate-x-2
      "
    >
      Call us now
    </span>
  </button>
</div>

        </nav>
    );
}
