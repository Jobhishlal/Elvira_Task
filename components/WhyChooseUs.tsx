"use client";
import React from 'react';
import { ChevronRight, Layers, Factory, Palette, PencilRuler, Clock, Truck } from 'lucide-react';

const features = [
  {
    title: "Own fabric unit",
    description: "Right from yarn to finished fabric, we manage theentire process ourselves. This allows us to maintainconsistency, ensure durability, and deliver onlythe best quality Read more",
    icon: <img src="/divicon1.png" alt="" width={20} height={20} />,
    highlight: true,
  },
  {
    title: "In-house production",
    description: "Every stage of production is done under one roof for better coordination.",
    icon: <img src="/divicon2.png" alt="" width={20} height={20} />,
    highlight: false,
  },
  {
    title: "In-house design",
    description: "We make the very fabric they're built from with our dedicated team.",
    icon: <img src="/divicon3.png" alt="" width={20} height={20} />,
    highlight: false,
  },
  {
    title: "Fully customizable",
    description: "We design and manufacture durable, easy-care school uniforms.",
    icon: <img src="/divicon4.png.png" alt="" width={20} height={20} />,
    highlight: false,
  },
  {
    title: "Lesser lead time",
    description: "Our vertical integration ensures faster turnaround times for all orders.",
    icon: <img src="/divicon5.png" alt="" width={20} height={20} />,
    highlight: false,
  },
  {
    title: "Quick delivery",
    description: "Efficient logistics to ensure your uniforms reach you on time, every time.",
    icon: <img src="/divicon6.png" alt="" width={20} height={20} />,
    highlight: false,
  },
];


export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f3f3f3] py-12 px-6 md:px-20 min-h-[600px] flex flex-col justify-center">
      {/* 1. Compact Header */}
      <div className="max-w-5xl mb-10">
        <div className="flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          <h1 className="font-semibold bg-gradient-to-r from-black via-yellow-400 to-black bg-[length:300%_100%] bg-clip-text text-transparent">
            Why choose us?
          </h1>
        </div>
        <h2 className="text-xl md:text-2xl lg:text-[22px] font-semibold text-gray-800 leading-7 md:leading-8 max-w-4xl">
          Excellence in Every Stitch. From design to doorstep, we take care of everything so you get hassle-free service, superior quality, and value for money.
        </h2>
      </div>

      {/* 2. Smaller Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((item, index) => (
          <div
            key={index}
            className={`transition-all duration-500 rounded-[24px] p-4 md:p-5 ${index === activeIndex
                ? 'bg-[#facc15] text-black scale-105 shadow-md'
                : 'bg-white text-gray-900 shadow-sm'
              }`}
          >
            <div className="flex items-start gap-4">
              {/* Smaller Icon Box */}
              <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center transition-colors duration-500 ${index === activeIndex ? 'bg-white' : 'bg-[#facc15]'
                }`}>
                {item.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-gray-900 font-semibold">{item.title}</h3>
                <p className={`text-xs mt-1 leading-5 ${index === activeIndex ? 'text-black/80' : 'text-gray-600'}`}>
                  {item.description}
                </p>
                <button className={`mt-2 text-[10px] font-bold text-left hover:underline w-fit ${index === activeIndex ? 'text-black' : 'text-gray-900'}`}>
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Compact Footer Button */}
      <div className="mt-10 flex justify-center">
        <button className="group flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all">
          <span className="text-xs font-medium uppercase tracking-widest">Read more</span>
          <div className="bg-[#facc15] text-black rounded-full p-1 group-hover:translate-x-1 transition-transform">
            <ChevronRight size={14} strokeWidth={3} />
          </div>
        </button>
      </div>
    </section>
  );
}