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

      py-12
      lg:py-16

      bg-[#f8f5ed]
      "
    >
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

      <div
        className="
        absolute
        left-0
        top-0

        h-full
        w-[250px]

        opacity-[0.035]
        hidden lg:block
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#000000 0px,#000000 1px,transparent 1px,transparent 9px)",
        }}
      />

      <div className="absolute top-[-100px] left-[-100px] w-[260px] h-[260px] bg-[#d7b56d]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#2143b5]/10 blur-[120px] rounded-full" />

      <div
        className="
        relative
        z-10

        max-w-[1500px]
        mx-auto

        px-4
        lg:px-6
        "
      >
        <div
          className="
          grid
          lg:grid-cols-[1.02fr_0.98fr]

          gap-8
          lg:gap-10

          items-start
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[60px] h-[2px] bg-[#d1a54d]" />

              <p
                className="
                uppercase
                tracking-[0.32em]
                text-[10px]
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

            <h2
              className="
              text-[#111111]

              text-[38px]
              md:text-[50px]
              lg:text-[60px]

              leading-[0.96]

              tracking-[-2px]

              mb-5
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

              {" "}Crafted
              <br />

              For Modern Homes
            </h2>

            <p
              className="
              text-[15px]
              lg:text-[16px]

              leading-[1.75]

              text-[#5f6674]

              max-w-[720px]

              mb-7

              text-justify
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

            <button
              onClick={() => setOpen(true)}
              className="
              inline-flex
              items-center
              gap-3

              px-7

              h-[50px]

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

            {/* FEATURES GRID */}
            <div
              className="
              grid
              sm:grid-cols-2

              gap-3

              mt-7
              "
            >
              {/* CONFIGURATION */}
<div
  className="
  bg-[#fffdfa]

  rounded-[20px]

  border
  border-[#ece2d2]

  p-4

  shadow-[0_8px_24px_rgba(0,0,0,0.04)]

  hover:-translate-y-[2px]

  transition-all
  duration-300
  "
>
  <div className="flex items-start gap-3">
    <div
      className="
      w-[42px]
      h-[42px]

      rounded-[13px]

      bg-[#f8efd8]

      flex
      items-center
      justify-center

      shrink-0
      "
    >
      <ShieldCheck size={18} color="#d1a54d" />
    </div>

    <div className="flex-1">
      <h4
        className="
        text-[16px]

        text-[#171717]

        mb-2
        "
        style={{
          fontFamily:
            "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
        }}
      >
        Configuration
      </h4>

      <p
        className="
        text-[14px]

        leading-[1.7]

        text-[#707887]
        "
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
        }}
      >
        2 BHK & 3 BHK Apartments
      </p>
    </div>
  </div>
</div>
              {/* POWER BACKUP */}
              <div
                className="
                bg-[#fffdfa]

                rounded-[20px]

                border
                border-[#ece2d2]

                p-4

                flex
                items-start
                gap-3

                shadow-[0_8px_24px_rgba(0,0,0,0.04)]

                hover:-translate-y-[2px]

                transition-all
                duration-300
                "
              >
                <div
                  className="
                  w-[42px]
                  h-[42px]

                  rounded-[13px]

                  bg-[#f8efd8]

                  flex
                  items-center
                  justify-center

                  shrink-0
                  "
                >
                  <Zap size={18} color="#d1a54d" />
                </div>

                <div>
                  <h4
                    className="
                    text-[16px]

                    text-[#171717]

                    mb-1
                    "
                    style={{
                      fontFamily:
                        "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    24×7 Power Backup
                  </h4>

                  <p
                    className="
                    text-[13px]

                    leading-[1.6]

                    text-[#707887]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Uninterrupted premium living
                  </p>
                </div>
              </div>

              {/* SMART SECURITY */}
              <div
                className="
                bg-[#fffdfa]

                rounded-[20px]

                border
                border-[#ece2d2]

                p-4

                flex
                items-start
                gap-3

                shadow-[0_8px_24px_rgba(0,0,0,0.04)]

                hover:-translate-y-[2px]

                transition-all
                duration-300
                "
              >
                <div
                  className="
                  w-[42px]
                  h-[42px]

                  rounded-[13px]

                  bg-[#f8efd8]

                  flex
                  items-center
                  justify-center

                  shrink-0
                  "
                >
                  <LockKeyhole size={18} color="#d1a54d" />
                </div>

                <div>
                  <h4
                    className="
                    text-[16px]

                    text-[#171717]

                    mb-1
                    "
                    style={{
                      fontFamily:
                        "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Smart Security
                  </h4>

                  <p
                    className="
                    text-[13px]

                    leading-[1.6]

                    text-[#707887]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Safe & secure community living
                  </p>
                </div>
              </div>

              {/* TOTAL UNITS */}
              <div
                className="
                bg-[#fffdfa]

                rounded-[20px]

                border
                border-[#ece2d2]

                p-4

                flex
                items-start
                gap-3

                shadow-[0_8px_24px_rgba(0,0,0,0.04)]

                hover:-translate-y-[2px]

                transition-all
                duration-300
                "
              >
                <div
                  className="
                  w-[42px]
                  h-[42px]

                  rounded-[13px]

                  bg-[#f8efd8]

                  flex
                  items-center
                  justify-center

                  shrink-0
                  "
                >
                  <Droplets size={18} color="#d1a54d" />
                </div>

                <div>
                  <h4
                    className="
                    text-[16px]

                    text-[#171717]

                    mb-1
                    "
                    style={{
                      fontFamily:
                        "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Total Units
                  </h4>

                  <p
                    className="
                    text-[13px]

                    leading-[1.6]

                    text-[#707887]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    8 premium units
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
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

              rounded-[30px]

              border
              border-[#ede2d3]

              p-6
              md:p-8

              shadow-[0_20px_60px_rgba(0,0,0,0.05)]

              overflow-hidden
              "
            >
              <div className="absolute top-0 right-0 w-[160px] h-[160px] bg-[#2143b5]/5 blur-[90px] rounded-full" />

              <div
                className="
                text-[60px]
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
                text-[22px]
                md:text-[26px]

                leading-[1.7]

                text-[#202020]

                italic

                mb-8
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

              <div className="flex items-center gap-4">
                <div
                  className="
                  w-[54px]
                  h-[54px]

                  rounded-full

                  border
                  border-[#d8bb82]

                  bg-[#fbf4e6]

                  flex
                  items-center
                  justify-center

                  text-[#d1a54d]

                  text-[20px]
                  "
                  style={{
                    fontFamily:
                      "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  S
                </div>

                <div>
                  <h4
                    className="
                    text-[22px]

                    text-[#171717]

                    mb-[2px]
                    "
                    style={{
                      fontFamily:
                        "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Subham Group
                  </h4>

                  <p
                    className="
                    text-[14px]

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