// src/components/Overview.jsx
import { motion } from "framer-motion";
import { ShieldCheck, Zap, LockKeyhole, Droplets, ArrowUpRight } from "lucide-react";

export default function Overview({ setOpen }) {
  return (
    <section 
      id="overview" 
      className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 bg-[#f8f5ed] w-full"
    >
      {/* DECORATIVE GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* CONTAINER: Matches Hero wrapper alignment perfectly */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full relative z-10">
        
        {/* FLEX BOX: Keeps left side locked and brings the right card strictly closer */}
        <div className="flex flex-col lg:flex-row items-start justify-start gap-8 md:gap-12 lg:gap-16 w-full">
          
          {/* LEFT SIDE: Hits the absolute left boundary of the container */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:max-w-[640px] flex flex-col items-start"
          >
            {/* Tagline Accent */}
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-[30px] h-[1.5px] bg-[#d1a54d]" />
              <p className="uppercase tracking-[0.25em] text-[9.5px] text-[#c79d47] font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                Overview
              </p>
            </div>

            {/* Main Header: Shares exact same start-line as Hero Heading */}
            <h2 
              className="text-[#111111] text-[36px] md:text-[48px] lg:text-[58px] leading-[1.12] tracking-tight mb-4 font-semibold w-full" 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Elegant <span className="italic text-[#d1a54d]">Living</span> Crafted For Modern Homes
            </h2>

            {/* Paragraph Description */}
            <p 
              className="text-[13.5px] lg:text-[14.5px] leading-[1.65] text-[#5f6674] mb-5 text-left max-w-[540px]" 
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Experience thoughtfully designed living spaces with elegant architecture, open green views, refined interiors and premium urban comfort crafted for families who value timeless design and peaceful modern living.
            </p>

            {/* Action Button */}
            <div className="mb-7 md:mb-8">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 px-5 h-[38px] rounded-full bg-[#162a63] hover:bg-[#10214f] text-white uppercase tracking-[0.12em] text-[9px] shadow-[0_4px_15px_rgba(22,42,99,0.15)] hover:-translate-y-[1px] transition-all duration-200 select-none cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                Schedule A Site Visit
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Core 4-Panel Metric Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-[560px]">
              
              {/* CONFIGURATION */}
              <div className="bg-white rounded-[12px] border border-[#f0eee9] p-3.5 flex items-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                <div className="w-[34px] h-[34px] rounded-[8px] bg-[#fdfaf4] border border-[#f4eedf] flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} className="text-[#d1a54d]" />
                </div>
                <div>
                  <h4 className="text-[12.5px] text-[#171717] font-bold tracking-tight leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Configuration
                  </h4>
                  <p className="text-[11px] text-[#707887] mt-1 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    2 BHK & 3 BHK Apartments
                  </p>
                </div>
              </div>

              {/* POWER BACKUP */}
              <div className="bg-white rounded-[12px] border border-[#f0eee9] p-3.5 flex items-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                <div className="w-[34px] h-[34px] rounded-[8px] bg-[#fdfaf4] border border-[#f4eedf] flex items-center justify-center shrink-0">
                  <Zap size={15} className="text-[#d1a54d]" />
                </div>
                <div>
                  <h4 className="text-[12.5px] text-[#171717] font-bold tracking-tight leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    24×7 Power Backup
                  </h4>
                  <p className="text-[11px] text-[#707887] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Uninterrupted premium living
                  </p>
                </div>
              </div>

              {/* SECURITY */}
              <div className="bg-white rounded-[12px] border border-[#f0eee9] p-3.5 flex items-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                <div className="w-[34px] h-[34px] rounded-[8px] bg-[#fdfaf4] border border-[#f4eedf] flex items-center justify-center shrink-0">
                  <LockKeyhole size={15} className="text-[#d1a54d]" />
                </div>
                <div>
                  <h4 className="text-[12.5px] text-[#171717] font-bold tracking-tight leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Smart Security
                  </h4>
                  <p className="text-[11px] text-[#707887] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Safe & secure community living
                  </p>
                </div>
              </div>

              {/* TOTAL UNITS */}
              <div className="bg-white rounded-[12px] border border-[#f0eee9] p-3.5 flex items-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
                <div className="w-[34px] h-[34px] rounded-[8px] bg-[#fdfaf4] border border-[#f4eedf] flex items-center justify-center shrink-0">
                  <Droplets size={15} className="text-[#d1a54d]" />
                </div>
                <div>
                  <h4 className="text-[12.5px] text-[#171717] font-bold tracking-tight leading-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Total Units
                  </h4>
                  <p className="text-[11px] text-[#707887] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    8 premium units
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE: Perfectly bound to sit near the metrics without floating off screen */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full lg:w-auto flex justify-start lg:mt-16 select-none shrink-0"
          >
            <div className="relative bg-[#fffdfa] rounded-[20px] border border-[#ede2d3] p-6 shadow-[0_8px_25px_rgba(0,0,0,0.02)] overflow-hidden w-full max-w-[350px] lg:w-[350px]">
              <div className="absolute top-0 right-0 w-[90px] h-[90px] bg-[#2143b5]/5 blur-[60px] rounded-full pointer-events-none" />

              <div className="text-[38px] leading-none text-[#d1a54d] mb-0.5 font-serif">
                “
              </div>

              <p 
                className="text-[15.5px] md:text-[16.5px] leading-[1.5] text-[#202020] italic mb-4 font-normal" 
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Creating elegant spaces that blend luxury, comfort and timeless living experiences for modern families.
              </p>

              <div className="flex items-center gap-3 pt-3.5 border-t border-[#f3eee5]">
                <div className="w-[36px] h-[36px] rounded-full border border-[#d8bb82] bg-[#fbf4e6] flex items-center justify-center text-[#d1a54d] text-[13.5px] font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  S
                </div>
                <div>
                  <h4 className="text-[13.5px] text-[#171717] font-bold leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Subham Group
                  </h4>
                  <p className="text-[11px] text-[#727b88] mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Trusted Real Estate Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}