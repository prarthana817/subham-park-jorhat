// src/components/Overview.jsx

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  LockKeyhole,
  Droplets,
  ArrowUpRight,
} from "lucide-react";

export default function Overview({ setOpen }) {
  return (
    <section
      id="overview"
      className="relative overflow-hidden py-16 lg:py-24 bg-[#f8f5ed]"
    >
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
          backgroundImage:
            "repeating-linear-gradient(to right,#000000 0px,#000000 1px,transparent 1px,transparent 9px)",
        }}
      />

      <div className="absolute top-[-100px] left-[-100px] w-[260px] h-[260px] bg-[#d7b56d]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#2143b5]/10 blur-[120px] rounded-full" />

      {/* Tightened max-width constraint to keep contents close and premium */}
      <div className="relative z-10 max-w-[1150px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-[40px] h-[2px] bg-[#d1a54d]" />
              <p
                className="uppercase tracking-[0.32em] text-[10px] text-[#c79d47]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                Overview
              </p>
            </div>

            <h2
              className="text-[#111111] text-[34px] md:text-[44px] lg:text-[48px] leading-[1.08] tracking-[-1px] mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              Elegant <span className="italic text-[#d1a54d]">Living</span> Crafted For Modern Homes
            </h2>

            {/* Changed from text-justify to text-left to prevent luxury-breaking typography gaps */}
            <p
              className="text-[15px] leading-[1.65] text-[#5f6674] max-w-[620px] mb-6 text-left"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Experience thoughtfully designed living spaces with elegant architecture,
              open green views, refined interiors and premium urban comfort
              crafted for families who value timeless design and peaceful modern living.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-3 px-7 h-[46px] rounded-full bg-[#162a63] hover:bg-[#10214f] text-white uppercase tracking-[0.16em] text-[10px] shadow-[0_10px_24px_rgba(22,42,99,0.2)] hover:-translate-y-[2px] transition-all duration-300 select-none cursor-pointer mb-8 lg:mb-10"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Schedule A Visit
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* FEATURES GRID */}
            <div className="grid sm:grid-cols-2 gap-3.5 max-w-[620px]">
              
              {/* CONFIGURATION */}
              <div className="bg-white rounded-[14px] border border-[#f0f0f0]/90 p-4 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)]">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
                  <ShieldCheck size={18} className="text-[#333333]" />
                </div>
                <div>
                  <h4
                    className="text-[14px] text-[#171717] font-bold tracking-tight mb-[2px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                  >
                    Configuration
                  </h4>
                  <p
                    className="text-[12.5px] text-[#707887]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                  >
                    2 BHK & 3 BHK Apartments
                  </p>
                </div>
              </div>

              {/* 24x7 POWER BACKUP */}
              <div className="bg-white rounded-[14px] border border-[#f0f0f0]/90 p-4 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)]">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
                  <Zap size={17} className="text-[#333333]" />
                </div>
                <div>
                  <h4
                    className="text-[14px] text-[#171717] font-bold tracking-tight mb-[2px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                  >
                    24×7 Power Backup
                  </h4>
                  <p
                    className="text-[12.5px] text-[#707887]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Uninterrupted premium living
                  </p>
                </div>
              </div>

              {/* SMART SECURITY */}
              <div className="bg-white rounded-[14px] border border-[#f0f0f0]/90 p-4 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)]">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
                  <LockKeyhole size={16} className="text-[#333333]" />
                </div>
                <div>
                  <h4
                    className="text-[14px] text-[#171717] font-bold tracking-tight mb-[2px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                  >
                    Smart Security
                  </h4>
                  <p
                    className="text-[12.5px] text-[#707887]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Safe & secure community living
                  </p>
                </div>
              </div>

              {/* TOTAL UNITS */}
              <div className="bg-white rounded-[14px] border border-[#f0f0f0]/90 p-4 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)]">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-[#f5f5f5] flex items-center justify-center shrink-0">
                  <Droplets size={17} className="text-[#333333]" />
                </div>
                <div>
                  <h4
                    className="text-[14px] text-[#171717] font-bold tracking-tight mb-[2px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                  >
                    Total Units
                  </h4>
                  <p
                    className="text-[12.5px] text-[#707887]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    8 premium units
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SIDE COMPACT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-[420px] lg:ml-auto"
          >
            <div className="relative bg-[#fffdfa] rounded-[24px] border border-[#ede2d3] p-7 md:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[#2143b5]/5 blur-[70px] rounded-full" />

              <div
                className="text-[44px] leading-none text-[#d1a54d] mb-1 select-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "
              </div>

              <p
                className="text-[19px] md:text-[21px] leading-[1.55] text-[#202020] italic mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                }}
              >
                Creating elegant spaces that blend luxury, comfort and timeless
                living experiences for modern families.
              </p>

              <div className="flex items-center gap-3.5">
                <div
                  className="w-[44px] h-[44px] rounded-full border border-[#d8bb82] bg-[#fbf4e6] flex items-center justify-center text-[#d1a54d] text-[16px]"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  S
                </div>

                <div>
                  <h4
                    className="text-[17px] text-[#171717] font-bold leading-tight mb-[2px]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Subham Group
                  </h4>
                  <p
                    className="text-[13px] text-[#727b88]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
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