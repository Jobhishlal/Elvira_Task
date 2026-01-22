import React from 'react';
import { ChevronRight, Layers, Factory, Palette, PencilRuler, Clock, Truck } from 'lucide-react';

const features = [
  {
    title: "Own fabric unit",
    description: "Right from yarn to finished fabric, we manage the entire process ourselves.",
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
    icon: <img src="/divicon4.png" alt="" width={20} height={20} />,
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
  return (
    <section className="bg-[#f3f3f3] py-12 px-6 md:px-20 min-h-[600px] flex flex-col justify-center">
      {/* 1. Compact Header */}
      <div className="max-w-5xl mb-10">
        <div className="flex items-center gap-2 mb-2 text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">
          <span>✦</span>
          <span>Why choose us?</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight max-w-3xl">
          Excellence in Every Stitch From design to doorstep, we take care of everything—so you get hassle-free service.
        </h2>
      </div>

      {/* 2. Smaller Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((item, index) => (
          <div
            key={index}
            className={`p-5 rounded-[24px] flex flex-col justify-between h-[180px] transition-all ${
              item.highlight 
                ? 'bg-[#facc15] text-black' 
                : 'bg-white text-gray-900 shadow-sm'
            }`}
          >
            <div>
              {/* Smaller Icon Box */}
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                item.highlight ? 'bg-white' : 'bg-[#facc15]'
              }`}>
                {item.icon}
              </div>

              <h3 className="text-base font-bold mb-1">{item.title}</h3>
              <p className="text-[11px] leading-snug opacity-90 line-clamp-2">
                {item.description}
              </p>
            </div>
            
            <button className="text-[10px] font-bold text-left hover:underline w-fit">
              Read more
            </button>
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