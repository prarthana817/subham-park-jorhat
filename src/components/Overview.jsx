// src/components/Overview.jsx
import { motion } from "framer-motion";
import { ShieldCheck, Zap, LockKeyhole, Droplets, ArrowUpRight } from "lucide-react";

export default function Overview({ setOpen }) {
  return (
    <section id="overview" className="relative overflow-hidden py-16 md:py-20 lg:py-24 bg-[#f8f5ed] w-full flex justify-center">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "68px 68px",
        }}
      />

      {/* BACKGROUND LIFT LINES */}
      <div
        className="absolute left-0 top-0 h-full w-[250px] opacity-[0.035] hidden lg:block"
        style={{
          backgroundImage: "repeating-linear-gradient(to right,#000000 0px,#000000 1px,transparent 1px,transparent 9px)",
        }}
      />

      <div className="absolute top-[-100px] left-[-100px] w-[260px] h-[260px] bg-[#d7b56d]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#2143b5]/10 blur-[120px] rounded-full" />

      {/* FIXED BOUNDARY CONTAINER: Standardizes side gaps and centers layout elements uniformly */}
      <div className="relative z-10 max-w-[1100px] w-full mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* FLEX LAYOUT FORCES ELEMENTS TO STAY PUSHED CLOSER TOGETHER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12 w-full">
          
          {/* LEFT CONTENT COLUMN: RESTRICTED WIDTH TO AVOID STRETCHING OUT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:max-w-[540px] shrink-0"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-[35px] h-[2px] bg-[#d1a54d]" />
              <p className="uppercase tracking-[0.32em] text-[10px] text-[#c79d47]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                Overview
              </p>
            </div>

            <h2 
              className="text-[#111111] text-[32px] md:text-[48px] lg:text-[58px] leading-[1.12] tracking-[-1px] mb-4 font-medium" 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Elegant <span className="italic text-[#d1a54d]">Living</span> Crafted For Modern Homes
            </h2>

            <p 
              className="text-[14px] lg:text-[14.5px] leading-[1.6] text-[#5f6674] mb-6 text-left" 
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Experience thoughtfully designed living spaces with elegant architecture, open green views, refined interiors and premium urban comfort crafted for families who value timeless design and peaceful modern living.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-3 px-7 h-[44px] rounded-full bg-[#162a63] hover:bg-[#10214f] text-white uppercase tracking-[0.16em] text-[10px] shadow-[0_10px_24px_rgba(22,42,99,0.2)] hover:-translate-y-[2px] transition-all duration-300 select-none cursor-pointer mb-8"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Schedule A Visit
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* FEATURES TILES GRID */}
            <div className="grid sm:grid-cols-2 gap-3 w-full">
              {/* CONFIGURATION */}
              <div className="bg-white rounded-[12px] border border-[#f0f0f0]/90 p-3.5 flex items-center gap-3.5 shadow-[0_4px_15px_rgba(0,0,0,0.015)]">
                <div className="w-[38px] h-[38px] rounded-[8px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} className="text-[#333333]" />
                </div>
                <div>
                  <h4 className="text-[13px] text-[#171717] font-bold tracking-tight mb-[1px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
                    Configuration
                  </h4>
                  <p className="text-[11.5px] text-[#707887] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    2 BHK & 3 BHK Apartments
                  </p>
                </div>
              </div>

              {/* 24x7 POWER BACKUP */}
              <div className="bg-white rounded-[12px] border border-[#f0f0f0]/90 p-3.5 flex items-center gap-3.5 shadow-[0_4px_15px_rgba(0,0,0,0.015)]">
                <div className="w-[38px] h-[38px] rounded-[8px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
                  <Zap size={17} className="text-[#333333]" />
                </div>
                <div>
                  <h4 className="text-[13px] text-[#171717] font-bold tracking-tight mb-[1px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
                    24×7 Power Backup
                  </h4>
                  <p className="text-[11.5px] text-[#707887]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Uninterrupted premium living
                  </p>
                </div>
              </div>

              {/* SMART SECURITY */}
              <div className="bg-white rounded-[12px] border border-[#f0f0f0]/90 p-3.5 flex items-center gap-3.5 shadow-[0_4px_15px_rgba(0,0,0,0.015)]">
                <div className="w-[38px] h-[38px] rounded-[8px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
                  <LockKeyhole size={16} className="text-[#333333]" />
                </div>
                <div>
                  <h4 className="text-[13px] text-[#171717] font-bold tracking-tight mb-[1px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
                    Smart Security
                  </h4>
                  <p className="text-[11.5px] text-[#707887]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Safe & secure community living
                  </p>
                </div>
              </div>

              {/* TOTAL UNITS */}
              <div className="bg-white rounded-[12px] border border-[#f0f0f0]/90 p-3.5 flex items-center gap-3.5 shadow-[0_4px_15px_rgba(0,0,0,0.015)]">
                <div className="w-[38px] h-[38px] rounded-[8px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
                  <Droplets size={17} className="text-[#333333]" />
                </div>
                <div>
                  <h4 className="text-[13px] text-[#171717] font-bold tracking-tight mb-[1px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
                    Total Units
                  </h4>
                  <p className="text-[11.5px] text-[#707887]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    8 premium units
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: RE-ANCHORED CLOSE TO PREVENT DRIFTING APART ON WIDESCREEN DISPLAYS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:max-w-[360px] flex justify-start"
          >
            <div className="relative bg-[#fffdfa] rounded-[20px] border border-[#ede2d3] p-6 md:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.03)] overflow-hidden w-full">
              <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[#2143b5]/5 blur-[70px] rounded-full" />

              <div className="text-[40px] leading-none text-[#d1a54d] mb-1 select-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                "
              </div>

              <p 
                className="text-[18px] md:text-[19px] leading-[1.5] text-[#202020] italic mb-5" 
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                Creating elegant spaces that blend luxury, comfort and timeless living experiences for modern families.
              </p>

              <div className="flex items-center gap-3">
                <div className="w-[38px] h-[38px] rounded-full border border-[#d8bb82] bg-[#fbf4e6] flex items-center justify-center text-[#d1a54d] text-[14px] font-bold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  S
                </div>
                <div>
                  <h4 className="text-[14.5px] text-[#171717] font-bold leading-tight mb-[1px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Subham Group
                  </h4>
                  <p className="text-[12px] text-[#727b88]" style={{ fontFamily: "'Inter', sans-serif" }}>
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