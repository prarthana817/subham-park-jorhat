// src/components/Overview.jsx
import { motion } from "framer-motion";
import { ShieldCheck, Zap, LockKeyhole, Droplets, ArrowUpRight } from "lucide-react";

export default function Overview({ setOpen }) {
  return (
    <section id="overview" className="relative overflow-hidden py-8 md:py-10 bg-[#f8f5ed] w-full">
      {/* DECORATIVE GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* MATCHED GLOBAL CONTAINER */}
      <div className="max-w-[1200px] mx-auto px-4 w-full relative z-10">
        
        {/* COMPACT CONTENT GRID WITH NO CENTRAL GAP DRIFT */}
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-8 lg:gap-10 items-center w-full">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full flex flex-col"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-[25px] h-[1px] bg-[#d1a54d]" />
              <p className="uppercase tracking-[0.25em] text-[9px] text-[#c79d47] font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                Overview
              </p>
            </div>

            {/* UPDATED TO YOUR EXACT TEXT SIZE REQUEST */}
            <h2 
              className="text-[#111111] text-[36px] md:text-[48px] lg:text-[58px] leading-[1.15] tracking-tight mb-2.5 font-semibold" 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Elegant <span className="italic text-[#d1a54d]">Living</span> Crafted For Modern Homes
            </h2>

            <p 
              className="text-[12.5px] lg:text-[13.5px] leading-[1.6] text-[#5f6674] mb-4 text-left max-w-[520px]" 
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Experience thoughtfully designed living spaces with elegant architecture, open green views, refined interiors and premium urban comfort crafted for families who value timeless design and peaceful modern living.
            </p>

            <div>
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 px-5 h-[36px] rounded-full bg-[#162a63] hover:bg-[#10214f] text-white uppercase tracking-[0.12em] text-[9px] shadow-[0_4px_12px_rgba(22,42,99,0.15)] hover:-translate-y-[1px] transition-all duration-200 select-none cursor-pointer mb-5"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                Schedule A Visit
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>

            {/* CORE COMPACT MATRIX PANEL GRID */}
            <div className="grid grid-cols-2 gap-2.5 max-w-[520px] w-full">
              
              {/* CONFIGURATION */}
              <div className="bg-white rounded-[10px] border border-[#e8dfd0]/60 p-2.5 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                <div className="w-[32px] h-[32px] rounded-[6px] bg-[#f6edd9] flex items-center justify-center shrink-0">
                  <ShieldCheck size={15} className="text-[#d1a54d]" />
                </div>
                <div>
                  <h4 className="text-[12px] text-[#171717] font-bold tracking-tight leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Configuration
                  </h4>
                  <p className="text-[10.5px] text-[#707887] leading-tight mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    2 BHK & 3 BHK
                  </p>
                </div>
              </div>

              {/* POWER BACKUP */}
              <div className="bg-white rounded-[10px] border border-[#e8dfd0]/60 p-2.5 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                <div className="w-[32px] h-[32px] rounded-[6px] bg-[#f6edd9] flex items-center justify-center shrink-0">
                  <Zap size={14} className="text-[#d1a54d]" />
                </div>
                <div>
                  <h4 className="text-[12px] text-[#171717] font-bold tracking-tight leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    24×7 Power Backup
                  </h4>
                  <p className="text-[10.5px] text-[#707887] leading-tight mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Uninterrupted premium
                  </p>
                </div>
              </div>

              {/* SECURITY */}
              <div className="bg-white rounded-[10px] border border-[#e8dfd0]/60 p-2.5 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                <div className="w-[32px] h-[32px] rounded-[6px] bg-[#f6edd9] flex items-center justify-center shrink-0">
                  <LockKeyhole size={14} className="text-[#d1a54d]" />
                </div>
                <div>
                  <h4 className="text-[12px] text-[#171717] font-bold tracking-tight leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Smart Security
                  </h4>
                  <p className="text-[10.5px] text-[#707887] leading-tight mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Safe & secure living
                  </p>
                </div>
              </div>

              {/* TOTAL UNITS */}
              <div className="bg-white rounded-[10px] border border-[#e8dfd0]/60 p-2.5 flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                <div className="w-[32px] h-[32px] rounded-[6px] bg-[#f6edd9] flex items-center justify-center shrink-0">
                  <Droplets size={14} className="text-[#d1a54d]" />
                </div>
                <div>
                  <h4 className="text-[12px] text-[#171717] font-bold tracking-tight leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Total Units
                  </h4>
                  <p className="text-[10.5px] text-[#707887] leading-tight mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    8 premium units
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: BRAND QUOTE BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full flex md:justify-end"
          >
            <div className="relative bg-[#fffdfa] rounded-[16px] border border-[#ede2d3] p-5 md:p-6 shadow-[0_6px_20px_rgba(0,0,0,0.02)] overflow-hidden w-full max-w-[340px]">
              <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#2143b5]/5 blur-[50px] rounded-full" />

              <div className="text-[36px] leading-none text-[#d1a54d] mb-0.5 select-none font-serif">
                “
              </div>

              <p 
                className="text-[15px] md:text-[16px] leading-[1.5] text-[#202020] italic mb-4 font-normal" 
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Creating elegant spaces that blend luxury, comfort and timeless living experiences for modern families.
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-[#f3eee5]">
                <div className="w-[34px] h-[34px] rounded-full border border-[#d8bb82] bg-[#fbf4e6] flex items-center justify-center text-[#d1a54d] text-[13px] font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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