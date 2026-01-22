


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
          absolute top-[230px] left-1/2 -translate-x-1/2
          text-3xl md:text-4xl
          font-bold text-center max-w-4xl
          bg-gradient-to-r from-white via-yellow-400 to-white bg-[length:200%_100%] bg-clip-text text-transparent
          font-samsung
        ">
          Your trusted partner in fashion, from
          <br className="hidden md:block" />
          classrooms to careers
        </h2>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 flex items-end w-full justify-center overflow-hidden pointer-events-none">
          {['e', 'l', 'v', 'i', 'r', 'a'].map((letter, index) => (
            <h1
              key={index}
              className="font-samsung font-bold text-yellow-400 leading-none block translate-y-[17%]"
              style={{ fontSize: 'clamp(2rem, 32vw, 30rem)' }}
            >
              {letter}
            </h1>
          ))}
        </div>

        <div className="absolute bottom-[-15] left-1/2 -translate-x-1/2 w-[100vw] z-20 translate-y-[30%]">
          <Image
            src="/scalefullsize.svg"
            alt="Tape measure"
            width={2000}
            height={240}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </>
  );
}
