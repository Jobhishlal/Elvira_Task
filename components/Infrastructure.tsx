import React from 'react';
import { ChevronRight, Factory, Cog, Truck, Warehouse } from 'lucide-react';

const steps = [
  { id: "01", label: "Own Fabric Factory", icon: <img src="/fact1.png" width={28} height={28} alt="" /> },
  { id: "02", label: "Own Production Unit", icon: <img src="/fact2.png" width={28} height={28} alt="" /> },
  { id: "03", label: "Export Division", icon: <img src="/fact3.png" width={28} height={28} alt="" /> },
  { id: "04", label: "Warehouse & Storage", icon: <img src="/fact4.png" width={28} height={28} alt="" /> },
];


export default function Infrastructure() {
  return (
    <section className="bg-black text-white py-12 px-6 flex flex-col items-center justify-center min-h-[500px]">
      
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4 text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold">
          <span className="text-white text-lg">✦</span>
          <span>What's our infrastructure</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-medium max-w-2xl mx-auto leading-tight">
          Our vertically integrated setup gives us complete control over every stage from design to final packing.
        </h2>
      </div>

      {/* Timeline Steps */}
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8 md:gap-0 px-4">
        
      
        <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] border-t-2 border-dashed border-[#facc15] opacity-50 z-0" />

        {steps.map((step, index) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center group">
            
            <div className="relative flex items-center justify-center">
           
              <div className="absolute -left-4 bg-black border border-white text-white text-[10px] font-bold w-10 h-10 rounded-full flex items-center justify-center z-20">
                {step.id}
              </div>
              
            
              <div className="w-24 h-24 rounded-full border border-[#facc15] flex items-center justify-center bg-black transition-transform group-hover:scale-110">
                <div className="text-[#facc15]">
                  {step.icon}
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm font-light tracking-wide text-center">
              {step.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <button className="group flex items-center gap-2 bg-white text-black px-8 py-2.5 rounded-full hover:bg-gray-200 transition-all">
          <span className="text-sm font-medium uppercase tracking-wider">Read more</span>
          <div className="bg-[#facc15] text-black rounded-full p-1 group-hover:translate-x-1 transition-transform">
            <ChevronRight size={18} strokeWidth={3} />
          </div>
        </button>
      </div>
    </section>
  );
}