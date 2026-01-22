import React from 'react';
import Image from 'next/image';

export default function OurVision() {
  return (
    <section className="relative bg-[#f3f3f3] py-24 px-6 md:px-20 overflow-hidden min-h-screen flex items-center">

      {/* 1️⃣ FADED BACKGROUND SCALE (CENTER, DIAGONAL) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] rotate-[25deg] opacity-[0.05] pointer-events-none z-0">
        <Image 
          src="/scale.png" 
          alt="background scale" 
          width={4000} 
          height={200} 
          className="w-full h-auto"
        />
      </div>

      {/* 2️⃣ TOP-LEFT COLORED SCALE (ORIGINAL COLOR) */}
      <div className="absolute top-[-50px] left-[-140px] w-[650px] rotate-[25deg] z-10 pointer-events-none">
        <div className="overflow-hidden h-[90px]">
          <Image
            src="/scale.png"
            alt="highlight scale"
            width={1300}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-20">

        {/* LEFT: IMAGES */}
        <div className="relative w-full aspect-[4/5] md:aspect-square lg:h-[600px]">

          {/* TOP IMAGE */}
          <div className="absolute top-0 left-0 w-[80%] h-[65%] rounded-[40px] overflow-hidden shadow-lg z-10">
            <Image 
              src="/secondmain.png" 
              alt="Industrial production" 
              fill 
              className="object-cover"
            />
          </div>

          {/* BOTTOM IMAGE */}
          <div className="absolute bottom-4 right-0 w-[70%] h-[55%] rounded-[40px] overflow-hidden shadow-2xl z-20 border-[12px] border-[#f3f3f3]">
            <Image 
              src="/mainphoto.png" 
              alt="Fabric samples" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT: TEXT */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 text-gray-500 text-[11px] uppercase tracking-[0.3em] font-bold">
            <span className="text-[#facc15] text-lg">✦</span>
            <span>Our vision</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-[1.15] tracking-tight">
            Our vision is to be the most trusted one-stop solution for all garment needs,
            bringing fabric, design, and production together under one roof.
          </h2>

          <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-xl font-light">
            We strive to deliver innovation, quality, and value with every order, making
            the process seamless for our customers. Our goal is to build long-lasting
            relationships by consistently exceeding expectations.
          </p>
        </div>

      </div>
    </section>
  );
}
