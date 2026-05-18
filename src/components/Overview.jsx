// src/components/Overview.jsx

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  LockKeyhole,
  Droplets,
} from "lucide-react";

export default function Overview() {
  return (
    <section
      id="overview"
      className="
      relative
      overflow-hidden

      bg-[#f7f5f1]

      py-14
      "
    >
      <div
        className="
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

              <div className="w-[60px] h-[2px] bg-[#d6b92f]" />

              <p
                className="
                uppercase
                tracking-[0.35em]

                text-[11px]

                text-[#b89d22]
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
              text-[#111111]

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
              The{" "}

              <span className="italic text-[#d6b92f]">
                Luxury
              </span>{" "}

              Homes
              <br />

              You Deserve
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
              text-[15px]

              leading-[1.8]

              text-[#5a5a5a]

              max-w-[850px]

              mb-7
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 300,
              }}
            >
              Experience thoughtfully designed living spaces at
              Sonari Gaon where elegant architecture, spacious
              layouts, greenery, and premium urban comfort come
              together to create timeless homes for modern
              families in the heart of Jorhat.
            </p>

            {/* FEATURES */}
            <div
              className="
              grid
              sm:grid-cols-2

              gap-3
              "
            >
              {/* CARD */}
              <div
                className="
                bg-white

                rounded-[18px]

                border
                border-[#ece7df]

                p-5

                flex
                items-start
                gap-4
                "
              >
                <div
                  className="
                  w-[46px]
                  h-[46px]

                  rounded-[14px]

                  bg-[#f5f2eb]

                  flex
                  items-center
                  justify-center
                  "
                >
                  <ShieldCheck
                    size={20}
                    color="#111111"
                  />
                </div>

                <div>
                  <h4
                    className="
                    text-[18px]

                    text-[#111111]

                    mb-1
                    "
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Earthquake Resistant
                  </h4>

                  <p
                    className="
                    text-[13px]

                    text-[#6a6a6a]
                    "
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    RCC frame engineered
                  </p>
                </div>
              </div>

              {/* CARD */}
              <div
                className="
                bg-white

                rounded-[18px]

                border
                border-[#ece7df]

                p-5

                flex
                items-start
                gap-4
                "
              >
                <div
                  className="
                  w-[46px]
                  h-[46px]

                  rounded-[14px]

                  bg-[#f5f2eb]

                  flex
                  items-center
                  justify-center
                  "
                >
                  <Zap
                    size={20}
                    color="#111111"
                  />
                </div>

                <div>
                  <h4
                    className="
                    text-[18px]

                    text-[#111111]

                    mb-1
                    "
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    24×7 Power Backup
                  </h4>

                  <p
                    className="
                    text-[13px]

                    text-[#6a6a6a]
                    "
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    Uninterrupted premium living
                  </p>
                </div>
              </div>

              {/* CARD */}
              <div
                className="
                bg-white

                rounded-[18px]

                border
                border-[#ece7df]

                p-5

                flex
                items-start
                gap-4
                "
              >
                <div
                  className="
                  w-[46px]
                  h-[46px]

                  rounded-[14px]

                  bg-[#f5f2eb]

                  flex
                  items-center
                  justify-center
                  "
                >
                  <LockKeyhole
                    size={20}
                    color="#111111"
                  />
                </div>

                <div>
                  <h4
                    className="
                    text-[18px]

                    text-[#111111]

                    mb-1
                    "
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Smart Security
                  </h4>

                  <p
                    className="
                    text-[13px]

                    text-[#6a6a6a]
                    "
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    Safe & secure community living
                  </p>
                </div>
              </div>

              {/* CARD */}
              <div
                className="
                bg-white

                rounded-[18px]

                border
                border-[#ece7df]

                p-5

                flex
                items-start
                gap-4
                "
              >
                <div
                  className="
                  w-[46px]
                  h-[46px]

                  rounded-[14px]

                  bg-[#f5f2eb]

                  flex
                  items-center
                  justify-center
                  "
                >
                  <Droplets
                    size={20}
                    color="#111111"
                  />
                </div>

                <div>
                  <h4
                    className="
                    text-[18px]

                    text-[#111111]

                    mb-1
                    "
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Rainwater Harvesting
                  </h4>

                  <p
                    className="
                    text-[13px]

                    text-[#6a6a6a]
                    "
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    Sustainable & eco-friendly design
                  </p>
                </div>
              </div>

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

              rounded-[28px]

              border
              border-[#ece7df]

              p-7

              shadow-[0_10px_40px_rgba(0,0,0,0.04)]

              mb-5
              "
            >
              <div
                className="
                text-[60px]

                leading-none

                text-[#e7dfba]

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

                text-[#1d1d1d]

                italic

                mb-6
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Creating homes that blend elegance,
                comfort, and timeless relationships for
                modern families.
              </p>

              {/* PROFILE */}
              <div className="flex items-center gap-4">

                <div
                  className="
                  w-[50px]
                  h-[50px]

                  rounded-full

                  border
                  border-[#d6b92f]

                  flex
                  items-center
                  justify-center

                  text-[#d6b92f]

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

                    text-[#111111]
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

                    text-[#666666]
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

            {/* INFO BAR */}
            <div
              className="
              bg-white/90

              backdrop-blur-sm

              rounded-[22px]

              border
              border-[#ece7df]

              px-6
              py-5

              grid
              grid-cols-3

              items-center
              "
            >
              {/* ITEM */}
              <div className="text-center">

                <p
                  className="
                  uppercase
                  tracking-[0.25em]

                  text-[10px]

                  text-[#9d9d9d]

                  mb-1
                  "
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                  }}
                >
                  Type
                </p>

                <h4
                  className="
                  text-[18px]

                  text-[#111111]
                  "
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  2 & 3 BHK
                </h4>

              </div>

              {/* ITEM */}
              <div
                className="
                text-center

                border-x
                border-[#ece7df]
                "
              >
                <p
                  className="
                  uppercase
                  tracking-[0.25em]

                  text-[10px]

                  text-[#9d9d9d]

                  mb-1
                  "
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                  }}
                >
                  Location
                </p>

                <h4
                  className="
                  text-[18px]

                  text-[#111111]
                  "
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Jorhat
                </h4>

              </div>

              {/* ITEM */}
              <div className="text-center">

                <p
                  className="
                  uppercase
                  tracking-[0.25em]

                  text-[10px]

                  text-[#9d9d9d]

                  mb-1
                  "
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                  }}
                >
                  Status
                </p>

                <h4
                  className="
                  text-[18px]

                  text-[#111111]
                  "
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Open
                </h4>

              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}