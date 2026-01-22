import React from 'react';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';

export default function MainFooter() {
  return (
    <div className="bg-white">
      {/* 1. Our Ideology Section */}
      <section className="relative py-20 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">
              <span>✦</span>
              <span>Our Ideology</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
              At Paruthis Uniforms our ideology is simple every thread carries a promise. We design and deliver uniforms that do three things – respect the wearer, represent the institution, and reduce environmental impact.
            </h2>
            
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-lg font-light">
              We envision a future where every uniform we create not only enhances identity and confidence but also reflects a commitment to comfort, durability, and responsibility towards our people and the planet.
            </p>
          </div>

          {/* Right Side: Overlapping Images */}
          <div className="relative h-[450px] md:h-[550px] w-full">
            {/* Top-Right Image */}
            <div className="absolute top-0 right-0 w-[80%] h-[60%] rounded-[40px] overflow-hidden shadow-lg">
              <Image 
                src="/footerdress1.png" 
                alt="Clothing display" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Bottom-Left Image (overlapping) */}
            <div className="absolute bottom-0 left-0 w-[75%] h-[55%] rounded-[40px] overflow-hidden shadow-2xl z-10 border-[10px] border-white">
              <Image 
                src="/footerdress2.png" 
                alt="Textile machinery" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

     
      <footer className="relative bg-black text-white pt-48 pb-0 px-6 md:px-20 mt-32">
        
      
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[99%]">
          <svg 
            viewBox="0 0 1440 320" 
            className="relative block w-full h-[120px] md:h-[180px]" 
            preserveAspectRatio="none"
          >
            <path 
              fill="#000000" 
              d="M0,320 L1440,320 L1440,150 Q720,-80 0,150 Z"
            ></path>
          </svg>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[85%] w-[90%] max-w-4xl bg-[#facc15] rounded-[40px] p-8 md:p-14 shadow-2xl z-30">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-4xl font-bold text-black mb-3 italic">
                Contact Paruthis Ltd Today..!
            </h3>
            <p className="text-black text-[11px] md:text-sm opacity-90 max-w-lg mx-auto leading-relaxed">
              We believe uniforms do more than cover — they connect people to purpose, protect dignity, and reflect responsibility.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Please enter the mail address" 
              className="flex-grow bg-black text-white placeholder:text-gray-500 px-8 py-5 rounded-full text-sm outline-none"
            />
            <button className="bg-white text-black font-bold px-12 py-5 rounded-full hover:bg-gray-100 transition-all text-sm shadow-md active:scale-95">
              Send mail
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 mb-20 border-t border-gray-800 pt-16">
          
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