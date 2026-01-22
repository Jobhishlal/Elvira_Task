


import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className="relative w-full min-h-screen bg-black">
       
        <div className="absolute inset-0">
          <Image
            src="/tailer.png"
            alt="Sewing machine background"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <h2 className="
          absolute top-[120px] left-1/2 -translate-x-1/2
          text-lg md:text-2xl lg:text-3xl
          font-light text-white max-w-4xl text-center
        ">
          Your trusted partner in fashion, from
          <br className="hidden md:block" />
          classrooms to careers
        </h2>

        <div className="absolute bottom-0 left-0 w-full flex flex-col items-center pointer-events-none top-[400]">
          <h1 className="
            relative text-[32vw] leading-[0.6]
            font-bold text-[#facc15] tracking-tighter z-10
          ">
            elvira
          </h1>

          <div className="absolute bottom-[-10vw] left-0 w-full z-20">
            <Image
  src="/scale.png"
  alt="Tape measure"
  width={1920}
  height={220}
  className="w-full h-auto object-contain rotate-[-6deg]"
/>

          </div>
        </div>
      </div>

      <div className="h-[180px] md:h-[220px] bg-white" />
    </>
  );
}
