import React from 'react';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';

export default function MainFooter() {
  return (
    <div className="bg-black ">
      {/* 1. Our Ideology Section */}



      <footer className="relative bg-black text-white pt-0 pb-0 px-6 md:px-20 mt-0">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 mb-20 border-t border-gray-800 pt-5">

          {/* Social Media */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-medium">Social media</h4>
            <div className="flex gap-4">
              <Instagram size={18} className="cursor-pointer hover:text-[#facc15] transition-colors" />
              <Facebook size={18} className="cursor-pointer hover:text-[#facc15] transition-colors" />
              <Twitter size={18} className="cursor-pointer hover:text-[#facc15] transition-colors" />
              <Linkedin size={18} className="cursor-pointer hover:text-[#facc15] transition-colors" />
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-[250px] font-light">
              At Paruthis Uniforms our ideology is simple every thread carries a promise. We design and deliver
            </p>
            <p className="text-[10px] text-gray-500 mt-4">©All Rights Reserved by elvira- 2025</p>
          </div>


          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-medium">Company</h4>
            <nav className="flex flex-col gap-3 text-gray-400 text-sm font-light">
              {['Home', 'About us', 'Why choose us', 'Infrastructure', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </nav>
          </div>


          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-medium">Products</h4>
            <nav className="flex flex-col gap-3 text-gray-400 text-sm font-light">
              {['School', 'Corporate', 'Customized'].map((link) => (
                <a key={link} href="#" className="hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </nav>
          </div>


          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-medium">Location</h4>
            <div className="text-gray-400 text-[11px] leading-relaxed flex flex-col gap-6 font-light">
              <p>Registered Office - MIG No.306, TNHB Phase II, 3rd Main road, Nolambur, Chennai, Tamilnadu – 600037</p>
              <p>Registered Office - MIG No.306, TNHB Phase II, 3rd Main road, Nolambur, Chennai, Tamilnadu – 600037</p>
            </div>
          </div>
        </div>


        <div className="w-full h-px bg-white/20 mt-16" />


        <div className="relative w-full overflow-hidden h-[24vw] flex items-center justify-center bg-black">
          <h1
            className="
      text-[32vw]
      font-bold
      text-[#facc15]
      tracking-tighter
      lowercase
      leading-[0.7]
      select-none
      translate-y-[28%]
    "
          >
            elvira
          </h1>
        </div>


        {/* ===== DIVIDER LINE (BOTTOM) ===== */}
        <div className="w-full h-px bg-white/20" />


      </footer>
    </div>
  );
}