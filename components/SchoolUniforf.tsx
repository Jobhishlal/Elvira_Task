import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function AboutCategories() {
  return (
    <section className="relative bg-white py-16 z-10 overflow-hidden">
      {/* 1. Top Content Section */}
      <div className="max-w-2xl mx-auto text-center mb-10 px-6">
        <p className="text-lg md:text-xl text-gray-800 leading-snug font-light italic">
          At Elvira, we don't just make clothes – we craft attire that inspires confidence 
          and comfort. With you in every chapter, our collections celebrate 
          each milestone of your journey.
        </p>
        
        <button className="mt-6 group flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all mx-auto">
          <span className="text-xs font-medium uppercase tracking-wider">Read more</span>
          <div className="bg-[#facc15] text-black rounded-full p-1 group-hover:translate-x-1 transition-transform">
            <ChevronRight size={14} strokeWidth={3} />
          </div>
        </button>
      </div>

      {/* 2. Middle Label */}
      <div className="flex items-center justify-center gap-2 mb-8 text-gray-400 text-[10px] uppercase tracking-[0.2em]">
        <span>✦</span>
        <span>More from this categories</span>
      </div>

      {/* 3. Static Categories Container (No Scrolling) */}
      <div className="relative w-full flex justify-center items-center px-4 overflow-hidden">
        
        {/* Left Peeking Card */}
         <div className="hidden lg:block absolute left-[-150px] w-[350px] h-[450px] rounded-[60px] overflow-hidden scale-90">
  <Image
    src="/unipart1.png"
    alt="Left"
    fill
    className="object-cover"
  />
</div>


        {/* Main Center Card - This is the primary focus */}
        <div className="relative w-full max-w-[850px] h-[400px] md:h-[500px] rounded-[50px] md:rounded-[80px] overflow-hidden shadow-2xl z-20 mx-auto">
          <Image 
              src="/studentuni.png" 
              alt="School uniforms" 
              fill 
              className="object-cover"
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
          
          {/* Card Text Content */}
          <div className="absolute bottom-10 left-0 right-0 text-center px-8 md:px-16 text-white">
            <h3 className="text-2xl md:text-4xl font-semibold mb-3">School uniforms</h3>
            <p className="text-[11px] md:text-sm opacity-80 max-w-lg mx-auto font-light leading-relaxed">
              Give your students a smart, comfortable look that stands up to daily wear. 
              We design and manufacture durable, easy-care school uniforms for pre-primary to senior secondary.
            </p>
            
            {/* Floating Yellow Action Button */}
            <div className="absolute bottom-[-10px] right-6 md:right-12">
               <button className="bg-[#facc15] p-3 md:p-5 rounded-full text-black hover:scale-110 transition-transform shadow-lg">
                  <ChevronRight size={24} strokeWidth={3} />
               </button>
            </div>
          </div>
        </div>

        {/* Right Peeking Card */}
     <div className="hidden lg:block absolute right-[-150px] w-[350px] h-[450px] rounded-[60px] overflow-hidden scale-90">
  <Image
    src="/unipart3.png"
    alt="Right"
    fill
    className="object-cover"
  />
</div>


      </div>
    </section>
  );
}