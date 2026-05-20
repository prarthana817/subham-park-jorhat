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
      className="
      relative
      overflow-hidden

      py-16
      lg:py-24

      bg-[#f8f5ed]
      "
    >
      {/* GRID */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.028]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "68px 68px",
        }}
      />

      {/* LEFT STRIPES */}
      <div
        className="
        absolute
        left-0
        top-0

        h-full
        w-[250px]

        opacity-[0.035]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#000000 0px,#000000 1px,transparent 1px,transparent 9px)",
        }}
      />

      {/* GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[260px] h-[260px] bg-[#d7b56d]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#2143b5]/10 blur-[120px] rounded-full" />

      <div
        className="
        relative
        z-10

        max-w-[1700px]
        mx-auto

        px-5
        lg:px-8
        "
      >
        <div
          className="
          grid
          lg:grid-cols-[1.02fr_0.98fr]

          gap-10
          lg:gap-14

          items-start
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* LABEL */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[65px] h-[2px] bg-[#d1a54d]" />

              <p
                className="
                uppercase

                tracking-[0.34em]

                text-[11px]

                text-[#c79d47]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                }}
              >
                Overview
              </p>
            </div>

            {/* HEADING */}
            <h2
              className="
              text-[#111111]

              text-[42px]
              md:text-[54px]
              lg:text-[64px]

              leading-[0.96]

              tracking-[-2px]

              mb-6
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
              Elegant{" "}

              <span
                className="
                italic
                text-[#d1a54d]
                "
              >
                Living
              </span>

              Crafted
              <br />

              For Modern
              Homes
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
              text-[17px]

              leading-[1.9]

              text-[#5f6674]

              max-w-[760px]

              mb-8
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              Experience thoughtfully designed living spaces
              with elegant architecture, open green views,
              refined interiors and premium urban comfort
              crafted for families who value timeless design
              and peaceful modern living.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="
              inline-flex
              items-center
              gap-3

              px-8

              h-[54px]

              rounded-full

              bg-[#162a63]
              hover:bg-[#10214f]

              text-white

              uppercase

              tracking-[0.16em]

              text-[10px]

              shadow-[0_12px_28px_rgba(22,42,99,0.24)]

              hover:-translate-y-[2px]

              transition-all
              duration-300
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              Schedule A Visit

              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* FEATURES */}
            <div
              className="
              grid
              sm:grid-cols-2

              gap-4

              mt-10
              "
            >
              {[
                {
                  icon: <ShieldCheck size={20} color="#d1a54d" />,
                  title: "Earthquake Resistant",
                  text: "RCC frame engineered",
                },
                {
                  icon: <Zap size={20} color="#d1a54d" />,
                  title: "24×7 Power Backup",
                  text: "Uninterrupted premium living",
                },
                {
                  icon: <LockKeyhole size={20} color="#d1a54d" />,
                  title: "Smart Security",
                  text: "Safe & secure community living",
                },
                {
                  icon: <Droplets size={20} color="#d1a54d" />,
                  title: "Rainwater Harvesting",
                  text: "Eco-friendly sustainable design",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                  bg-[#fffdfa]

                  rounded-[24px]

                  border
                  border-[#ece2d2]

                  p-5

                  flex
                  items-start
                  gap-4

                  shadow-[0_10px_35px_rgba(0,0,0,0.04)]

                  hover:-translate-y-[3px]

                  transition-all
                  duration-300
                  "
                >
                  <div
                    className="
                    w-[48px]
                    h-[48px]

                    rounded-[15px]

                    bg-[#f8efd8]

                    flex
                    items-center
                    justify-center
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h4
                      className="
                      text-[18px]

                      text-[#171717]

                      mb-1.5
                      "
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                      text-[14px]

                      leading-[1.7]

                      text-[#707887]
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div
              className="
              relative

              bg-[#fffdfa]

              rounded-[34px]

              border
              border-[#ede2d3]

              p-7
              md:p-10

              shadow-[0_20px_60px_rgba(0,0,0,0.05)]

              overflow-hidden
              "
            >
              {/* GLOW */}
              <div className="absolute top-0 right-0 w-[160px] h-[160px] bg-[#2143b5]/5 blur-[90px] rounded-full" />

              {/* QUOTE */}
              <div
                className="
                text-[70px]
                leading-none

                text-[#d1a54d]

                mb-2
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                "
              </div>

              <p
                className="
                text-[24px]
                md:text-[28px]

                leading-[1.7]

                text-[#202020]

                italic

                mb-10
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                }}
              >
                Creating elegant spaces that blend
                luxury, comfort and timeless living
                experiences for modern families.
              </p>

              {/* PROFILE */}
              <div className="flex items-center gap-4">
                <div
                  className="
                  w-[60px]
                  h-[60px]

                  rounded-full

                  border
                  border-[#d8bb82]

                  bg-[#fbf4e6]

                  flex
                  items-center
                  justify-center

                  text-[#d1a54d]

                  text-[22px]
                  "
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  S
                </div>

                <div>
                  <h4
                    className="
                    text-[24px]

                    text-[#171717]

                    mb-[2px]
                    "
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Subham Group
                  </h4>

                  <p
                    className="
                    text-[15px]

                    text-[#727b88]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
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