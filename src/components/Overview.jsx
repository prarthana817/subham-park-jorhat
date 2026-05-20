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
      lg:py-20

      bg-[#f8f4ef]
      "
    >

      {/* GRID BG */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "65px 65px",
        }}
      />

      {/* LEFT LINES */}
      <div
        className="
        absolute
        left-0
        top-0
        h-full
        w-[240px]
        opacity-[0.05]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#000000 0px,#000000 1px,transparent 1px,transparent 8px)",
        }}
      />

      {/* GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#d79a74]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#56bdb7]/10 blur-[120px] rounded-full" />

      <div
        className="
        relative
        z-10

        max-w-[1750px]
        mx-auto
        px-6
        lg:px-8
        "
      >

        <div
          className="
          grid
          lg:grid-cols-[1.05fr_0.95fr]
          gap-8
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

            {/* TOP TEXT */}
            <div className="flex items-center gap-4 mb-5">

              <div className="w-[60px] h-[2px] bg-[#d79a74]" />

              <p
                className="
                uppercase
                tracking-[0.35em]
                text-[11px]
                text-[#b57a5a]
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Overview
              </p>

            </div>

            {/* HEADING */}
            <h2
              className="
              text-[#1f1f1f]
              text-[42px]
              lg:text-[58px]
              leading-[0.95]
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
                text-[#d79a74]
                "
              >
                Living
              </span>{" "}

              Crafted
              <br />

              For Modern
              Homes
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
              text-[16px]
              leading-[1.9]
              text-[#655d57]
              max-w-[850px]
              mb-7
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 300,
              }}
            >
              Experience thoughtfully designed living spaces
              with elegant architecture, open green views,
              refined interiors and premium urban comfort
              crafted for families who value timeless design
              and peaceful modern living.
            </p>

            {/* CTA BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="
              inline-flex
              items-center
              gap-3
              px-7
              py-4
              mb-8

              rounded-[14px]

              bg-[#d79a74]
              hover:bg-[#c68662]

              text-white

              uppercase
              tracking-[0.18em]
              text-[11px]

              transition-all
              duration-300
              "
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
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
              "
            >

              {[
                {
                  icon: <ShieldCheck size={20} color="#d79a74" />,
                  title: "Earthquake Resistant",
                  text: "RCC frame engineered",
                },
                {
                  icon: <Zap size={20} color="#d79a74" />,
                  title: "24×7 Power Backup",
                  text: "Uninterrupted premium living",
                },
                {
                  icon: <LockKeyhole size={20} color="#d79a74" />,
                  title: "Smart Security",
                  text: "Safe & secure community living",
                },
                {
                  icon: <Droplets size={20} color="#d79a74" />,
                  title: "Rainwater Harvesting",
                  text: "Eco-friendly sustainable design",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                  bg-white

                  rounded-[22px]

                  border
                  border-[#eadfd7]

                  p-5

                  flex
                  items-start
                  gap-4

                  shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  "
                >

                  <div
                    className="
                    w-[46px]
                    h-[46px]

                    rounded-[14px]

                    bg-[#f5ebe5]

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
                      text-[#1f1f1f]
                      mb-1
                      "
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                      text-[13px]
                      text-[#7a726c]
                      "
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
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
            className="relative"
          >

            {/* QUOTE CARD */}
            <div
              className="
              bg-white

              rounded-[30px]

              border
              border-[#eadfd7]

              p-7

              shadow-[0_15px_50px_rgba(0,0,0,0.06)]

              mb-5
              "
            >

              <div
                className="
                text-[60px]
                leading-none
                text-[#d79a74]
                mb-3
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                "
              </div>

              <p
                className="
                text-[20px]
                leading-[1.8]

                text-[#1f1f1f]

                italic
                mb-6
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
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
                  w-[52px]
                  h-[52px]

                  rounded-full

                  border
                  border-[#d79a74]

                  flex
                  items-center
                  justify-center

                  text-[#d79a74]

                  text-[20px]
                  "
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  S
                </div>

                <div>
                  <h4
                    className="
                    text-[18px]
                    text-[#1f1f1f]
                    "
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Subham Group
                  </h4>

                  <p
                    className="
                    text-[14px]
                    text-[#7a726c]
                    "
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
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