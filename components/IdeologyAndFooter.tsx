import React from 'react';
import Image from 'next/image';

export default function IdeologyAndFooter() {
  return (
    <div className="bg-white">

      <section className="relative py-20 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

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

          <div className="relative h-[450px] md:h-[550px]">
            <div className="absolute top-0 right-0 w-[80%] h-[60%] rounded-[40px] overflow-hidden shadow-lg">
              <Image src="/footerdress1.png" alt="Clothing rack" fill className="object-cover" />
            </div>

            <div className="absolute bottom-0 left-0 w-[75%] h-[55%] rounded-[40px] overflow-hidden shadow-2xl z-10 border-[10px] border-white">
              <Image src="/footerdress2.png" alt="Knitting machine" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>


      <footer className="relative bg-black text-white pt-24 pb-10 px-6 md:px-20 mt-20">

        <div className="absolute top-[40] left-0 w-full overflow-hidden leading-[0] -translate-y-[75%]">

          <svg
            viewBox="0 0 1440 320"
            className="relative block w-full h-[150px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#000000"
              d="M0,320 L1440,320 L1440,150 Q720,-50 0,150 Z"
            ></path>
          </svg>
        </div>

        <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-[60%]
                w-[88%] max-w-3xl
                bg-[#facc15] rounded-[36px]
                px-10 py-6 md:px-14 md:py-8
                shadow-xl z-30">

          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-4xl font-bold text-black mb-3">

              Contact Paruthis Ltd Today..!
            </h3>
            <p className="text-black text-[11px] md:text-sm opacity-90 max-w-lg mx-auto leading-relaxed">
              We believe uniforms do more than cover — they connect people to purpose, protect dignity, and reflect responsibility.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-grow relative">
              <input
                type="email"
                placeholder="Please enter the mail address"
                className="w-full bg-black text-white placeholder:text-gray-500 px-8 py-5 rounded-full text-sm outline-none border border-gray-800 focus:border-white transition-colors"
              />
            </div>
            <button className="bg-white text-black font-bold px-12 py-5 rounded-full hover:bg-gray-100 transition-all text-sm shadow-md active:scale-95">
              Send mail
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10 mt-5">
          <div className="flex flex-col items-center md:items-start gap-4 ">
            <Image
              src="/elvira logo.svg"
              alt="Elvira Logo"
              width={140}
              height={50}

            />
            <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400">
              Craft with Purpose. Dress with Pride
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-lg md:text-2xl font-semibold tracking-tight">
              044-2653 4559 / 044-2653 6559
            </p>
            <p className="text-sm text-gray-400 font-light tracking-wide">
              support@elvira.co.in
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}