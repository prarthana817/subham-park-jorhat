// src/components/Hero.jsx

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import heroBg from "../assests/images/hero-bg.jpg";

export default function Hero({ setOpen }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-[#f8f5ed] pt-[150px] lg:pt-[125px] pb-10"
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "65px 65px",
        }}
      />

      {/* LEFT LINES */}
      <div
        className="absolute left-0 top-0 h-full w-[90px] opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#000000 0px,#000000 1px,transparent 1px,transparent 8px)",
        }}
      />

      <div className="relative z-10 max-w-[1380px] mx-auto w-full px-5 lg:px-6">
        <div className="grid lg:grid-cols-[1fr_1fr] items-center gap-10 lg:gap-12">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* TOP TAG */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[54px] h-[2px] bg-[#d1a54d]" />
              <p className="uppercase tracking-[0.28em] text-[10px] text-[#c79d47]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                Quiet Luxury Living
              </p>
            </div>

            {/* HEADING */}
            <h1 className="text-[#111111] text-[36px] sm:text-[48px] md:text-[58px] lg:text-[70px] leading-[0.92] tracking-[-2px] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
              Elevate <span className="italic text-[#d1a54d]">Your</span><br /> Lifestyle
            </h1>

            <div className="w-[150px] h-[2px] bg-[#d1a54d] mb-6" />

            {/* DESCRIPTION */}
            <p className="max-w-[720px] text-[16px] lg:text-[17px] leading-[1.72] tracking-[-0.01em] text-[#5f6674] mb-7 text-justify" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              Experience premium residences surrounded by greenery and thoughtfully crafted architecture designed for elevated modern living in the heart of Jorhat.
            </p>

            {/* LOCATION + PRICE CARDS */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative px-5 py-[11px] rounded-[16px] border border-[#dcc89b] bg-[#e8d6ab] shadow-[0_8px_18px_rgba(209,165,77,0.08)] overflow-hidden">
                <div className="absolute inset-0 rounded-[16px] before:absolute before:inset-0 before:rounded-[16px] before:bg-[conic-gradient(from_0deg,#d1a54d,transparent,transparent,#e7c97a,#d1a54d)] before:animate-[spin_6s_linear_infinite] before:content-['']" />
                <div className="absolute inset-[1px] rounded-[15px] bg-[#e8d6ab]" />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#e2cca0] flex items-center justify-center text-[#b78528] shadow-inner"><MapPin size={15} /></div>
                  <div>
                    <p className="uppercase tracking-[0.18em] text-[8px] text-[#9e7426] mb-[2px]">Prime Location</p>
                    <h4 className="text-[18px] md:text-[20px] leading-none text-[#111111]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>Sonari Gaon</h4>
                  </div>
                </div>
              </div>

              {/* লাইন - আগের মতো ঠিক রাখা হয়েছে */}
              <div className="hidden md:flex items-center justify-center h-[54px]">
                <div className="w-[2px] h-[32px] rounded-full bg-gradient-to-b from-transparent via-[#d1a54d] to-transparent opacity-90" />
              </div>

              <div className="relative px-6 py-[11px] rounded-[16px] border border-[#dcc89b] bg-[#e8d6ab] shadow-[0_8px_18px_rgba(209,165,77,0.08)] overflow-hidden">
                <div className="absolute inset-0 rounded-[16px] before:absolute before:inset-0 before:rounded-[16px] before:bg-[conic-gradient(from_0deg,#d1a54d,transparent,transparent,#e7c97a,#d1a54d)] before:animate-[spin_4s_linear_infinite] before:content-['']" />
                <div className="absolute inset-[1px] rounded-[15px] bg-[#e8d6ab]" />
                <div className="relative z-10 min-w-[85px]">
                  <p className="uppercase tracking-[0.18em] text-[8px] text-[#9e7426] mb-[3px]">Starting At</p>
                  <div className="flex items-end gap-[3px]">
                    <span className="text-[14px] leading-none text-[#9e7426] mb-[2px]">₹</span>
                    <h3 className="text-[28px] md:text-[31px] leading-[0.85] tracking-[-0.5px] text-[#111111]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>53</h3>
                    <span className="text-[10px] uppercase tracking-[0.1em] text-[#6d6758] mb-[3px] ml-1">Lac</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
<div className="mt-9 flex items-center gap-2 overflow-x-auto scrollbar-hide">
  <motion.button
    whileHover={{ scale: 1.02 }}
    onClick={() => setOpen(true)}
    className="
      flex-shrink-0
      w-[150px] sm:min-w-[180px]

      h-[44px]

      px-4
      sm:px-7

      rounded-[16px]

      bg-[#162a63]
      text-white

      flex
      items-center
      justify-center

      transition-colors
    "
  >
    <span
      className="
        text-[8px] sm:text-[10.5px]
        uppercase

        tracking-[0.18em]
        sm:tracking-[0.22em]

        font-bold

        whitespace-nowrap
      "
    >
      Download Brochure
    </span>
  </motion.button>

  <button
    onClick={() =>
      document
        .getElementById("overview")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="
      group

      flex-shrink-0

      flex
      items-center
      justify-center

      gap-2

      py-2

      text-[#14234b]
    "
  >
    <span
      className="
        text-[9px]
        sm:text-[10.5px]

        uppercase

        tracking-[0.18em]
        sm:tracking-[0.22em]

        font-bold

        whitespace-nowrap
      "
    >
      Explore More
    </span>

    <svg
      className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-y-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>

    <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-[#caa64d] -translate-x-1/2 transition-all group-hover:w-full" />
  </button>
</div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div className="relative">
            <div className="relative overflow-hidden rounded-[34px] h-[360px] md:h-[470px] lg:h-[560px] w-full shadow-[0_25px_80px_rgba(0,0,0,0.10)]">
              <img
  src={heroBg}
  alt="Subham Park"
  className="w-full h-full object-cover object-[40%_center]"
/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}