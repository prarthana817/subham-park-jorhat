// src/components/Amenities.jsx

import { motion } from "framer-motion";

import {
  Dumbbell,
  Trees,
  Waves,
  Gamepad2,
  ShieldCheck,
  CarFront,
  Compass,
  Camera,
  Leaf,
  ArrowUpRight,
  Building2,
} from "lucide-react";

import { GiShuttlecock } from "react-icons/gi";

const amenities = [
  {
    title: "Indoor Games",
    desc: "Luxury indoor gaming experience.",
    icon: Gamepad2,
  },
  {
    title: "Vastu Living",
    desc: "Positive vastu compliant homes.",
    icon: Compass,
  },
  {
    title: "Badminton Court",
    desc: "Premium active lifestyle space.",
    icon: GiShuttlecock,
  },
  {
    title: "Community Hall",
    desc: "Elegant celebration & events zone.",
    icon: Building2,
  },
  {
    title: "Gymnasium",
    desc: "Advanced fitness & wellness area.",
    icon: Dumbbell,
  },
  {
    title: "Splash Pool",
    desc: "Refreshing luxury swimming zone.",
    icon: Waves,
  },
  {
    title: "Landscape Garden",
    desc: "Beautiful green peaceful spaces.",
    icon: Trees,
  },
  {
    title: "24/7 Security",
    desc: "Secure gated community living.",
    icon: ShieldCheck,
  },
  {
    title: "Visitor Parking",
    desc: "Spacious dedicated parking area.",
    icon: CarFront,
  },
  {
    title: "CCTV Camera",
    desc: "Advanced surveillance protection.",
    icon: Camera,
  },
];

export default function Amenities({ setOpen }) {
  return (
    <section
      id="amenities"
      className="relative overflow-hidden pt-0 pb-10 bg-[#14234b]"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "65px 65px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-[-140px] left-[-120px] w-[320px] h-[320px] bg-[#f8f5ed]/20 blur-[130px] rounded-full" />
      <div className="absolute bottom-[-80px] right-[-60px] w-[260px] h-[260px] bg-[#c9a84c]/10 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 lg:px-8 -mt-4 md:-mt-6">

        {/* ── HEADER CARD ── */}
        <div
          className="relative overflow-hidden rounded-[30px] lg:rounded-[34px] bg-[#f8f5ed] border border-[#ece2d2] mb-14 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
        >
          {/* vertical rule lines */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none">
            <div className="absolute left-[34px] top-[38px] w-[1px] h-[calc(100%-76px)] bg-black/10" />
            <div className="absolute right-[34px] top-[38px] w-[1px] h-[calc(100%-76px)] bg-black/10" />
          </div>

          <div className="relative p-7 md:p-10 lg:p-14">
            {/* label */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[70px] h-[2px] bg-[#14234b]" />
              <p
                className="uppercase tracking-[0.32em] text-[10px] md:text-[11px] text-[#14234b]"
                style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 600 }}
              >
                Premium Amenities
              </p>
            </div>

            {/* heading */}
            <h2
              className="text-[#111111] text-[48px] md:text-[58px] lg:text-[58px] leading-[0.95] tracking-[-2px] max-w-[1050px]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              Aspirational Living In{" "}
              <span className="inline-flex items-end tracking-[-3px]">
                <span style={{ color: "#d1a54d" }}>J</span>
                <span style={{ color: "#d1a54d" }}>o</span>
                <span style={{ color: "#d1a54d" }}>r</span>
                <span style={{ color: "#d1a54d" }}>h</span>
                <span style={{ color: "#d1a54d" }}>a</span>
                <span style={{ color: "#d1a54d" }}>t</span>
              </span>
            </h2>

            {/* body */}
            <div className="mt-7 max-w-[760px]">
              <Leaf className="w-7 h-7 text-[#14234b] mb-5" strokeWidth={1.8} />
              <p
                className="text-[15px] lg:text-[17px] leading-[1.9] text-[#1f1f1f]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                Crafted with thoughtfully designed amenities, landscaped greens and premium lifestyle experiences for elegant living in Jorhat.
              </p>
              <button
                onClick={() => setOpen(true)}
                className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#14234b] hover:bg-[#0f1c3f] text-white uppercase tracking-[0.18em] text-[10px] transition-all duration-300 hover:-translate-y-[2px] shadow-[0_14px_34px_rgba(20,35,75,0.22)]"
                style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 600 }}
              >
                Book A Site Visit
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* ── THIN GOLD RULE ── */}
        <div className="flex items-center gap-4 mb-10 px-1">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
          <span
            className="uppercase tracking-[0.3em] text-[9px] text-[#c9a84c]/70"
            style={{ fontFamily: "'Josefin Sans', sans-serif" }}
          >
            Amenities & Lifestyle
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
        </div>

        {/* ── AMENITIES GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-0">
          {amenities.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === amenities.length - 1;
            const isOdd = amenities.length % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`
                  group relative flex items-center gap-6 px-7 py-6
                  border-b border-white/[0.07]
                  transition-all duration-400
                  hover:bg-white/[0.04]
                  cursor-default
                  ${index % 2 === 0 ? "border-r border-white/[0.07]" : ""}
                  ${isLast ? "lg:col-start-2" : ""}
                  ${isLast && isOdd ? "sm:col-span-2 border-r-0" : ""}
                `}
              >
                {/* large faint number */}
                <span
                  className="absolute top-4 right-5 text-[42px] leading-none text-white/[0.04] select-none group-hover:text-white/[0.07] transition-all duration-500"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* icon circle */}
                <div
                  className="
                    flex-shrink-0
                    w-[58px] h-[58px]
                    rounded-[16px]
                    border border-white/[0.12]
                    bg-white/[0.05]
                    flex items-center justify-center
                    transition-all duration-500
                    group-hover:bg-[#c9a84c]/15
                    group-hover:border-[#c9a84c]/40
                  "
                >
                  <Icon
                    className="w-[22px] h-[22px] text-[#c9a84c]/80 transition-all duration-500 group-hover:text-[#c9a84c]"
                  />
                </div>

                {/* text */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-[20px] leading-[1.1] text-white/90 group-hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-1 text-[13px] leading-[1.7] text-white/40 group-hover:text-white/60 transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* animated gold underline */}
                <div
                  className="
                    absolute bottom-0 left-7
                    h-[1.5px] w-0
                    bg-gradient-to-r from-[#c9a84c] to-[#c9a84c]/0
                    transition-all duration-500
                    group-hover:w-[60px]
                  "
                />
              </motion.div>
            );
          })}
        </div>

        {/* ── BOTTOM RULE ── */}
        <div className="mt-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      </div>
    </section>
  );
}