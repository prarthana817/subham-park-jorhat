// src/components/Hero.jsx

import { motion } from "framer-motion";

import {
  MapPin,
} from "lucide-react";

import heroBg from "../assests/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      overflow-hidden

      min-h-screen

      flex
      items-center

      bg-[#f8f5ed]

      pt-[105px]
      pb-10
      "
    >
      {/* GRID BACKGROUND */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        "
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
        className="
        absolute
        left-0
        top-0

        h-full
        w-[90px]

        opacity-[0.04]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#000000 0px,#000000 1px,transparent 1px,transparent 8px)",
        }}
      />

      <div
        className="
        relative
        z-10

        max-w-[1420px]
        mx-auto

        w-full

        px-5
        lg:px-6
        "
      >
        <div
          className="
          grid
          lg:grid-cols-[0.92fr_1.08fr]

          items-center

          gap-10
          lg:gap-8
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* TOP TAG */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[54px] h-[2px] bg-[#d1a54d]" />

              <p
                className="
                uppercase
                tracking-[0.28em]
                text-[10px]
                text-[#c79d47]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                }}
              >
                Quiet Luxury Living
              </p>
            </div>

            {/* HEADING */}
            <h1
              className="
              text-[#111111]

              text-[48px]
              md:text-[58px]
              lg:text-[68px]

              leading-[0.92]

              tracking-[-2px]

              mb-4
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
              Elevate{" "}

              <span className="italic text-[#d1a54d]">
                Your
              </span>

              <br />

              Lifestyle
            </h1>

            <div className="w-[150px] h-[2px] bg-[#d1a54d] mb-5" />

            {/* PARAGRAPH */}
            <p
              className="
              max-w-[540px]

              text-[16px]
              lg:text-[17px]

              leading-[1.85]

              text-[#5f6674]

              text-justify

              mb-7
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                textAlignLast: "left",
                wordSpacing: "-1px",
              }}
            >
              Experience premium residences surrounded by
              greenery and thoughtfully crafted architecture
              designed for elevated modern living in the heart
              of Jorhat.
            </p>

            {/* ADDRESS */}
            <div className="flex items-center gap-4">
              <div
                className="
                w-11
                h-11

                rounded-full

                bg-[#efe3c8]

                flex
                items-center
                justify-center

                shrink-0

                text-[#c79d47]
                "
              >
                <MapPin size={18} />
              </div>

              <div>
                <p
                  className="
                  uppercase
                  tracking-[0.22em]

                  text-[10px]

                  text-[#c79d47]

                  mb-[2px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Prime Location
                </p>

                <h4
                  className="
                  text-[22px]
                  md:text-[25px]

                  leading-[1.2]

                  text-[#111111]
                  "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontWeight: 600,
                  }}
                >
                  Sonari Gaon, Tarajan, Jorhat
                </h4>

                <p
                  className="
                  text-[13px]

                  text-[#6f7785]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Assam — 785001
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div
              className="
              relative

              overflow-hidden

              rounded-[34px]

              h-[360px]
              md:h-[470px]
              lg:h-[560px]

              w-full

              shadow-[0_25px_80px_rgba(0,0,0,0.10)]
              "
            >
              {/* IMAGE */}
              <img
                src={heroBg}
                alt="Subham Park"

                className="
                w-full
                h-full

                object-cover
                object-top

                scale-[1.02]

                transition-transform
                duration-700

                hover:scale-[1.06]
                "
              />

              {/* DARK OVERLAY */}
              <div
                className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/30
                via-black/5
                to-transparent
                "
              />

              {/* FLOATING PRICE BADGE */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [-5, -3, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                absolute

                top-5
                left-5

                z-20
                "
              >
                <div
                  className="
                  bg-[#d96a2c]

                  w-[120px]
                  h-[120px]

                  rounded-[46%_54%_50%_50%]

                  flex
                  flex-col
                  items-center
                  justify-center

                  shadow-[0_18px_35px_rgba(0,0,0,0.25)]

                  border-[2px]
                  border-white/10
                  "
                >
                  <p
                    className="
                    uppercase

                    tracking-[0.15em]

                    text-[10px]

                    text-white/90

                    mb-[2px]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Starting At
                  </p>

                  <h3
                    className="
                    text-white

                    text-[34px]

                    leading-none
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontWeight: 700,
                    }}
                  >
                    90
                  </h3>

                  <p
                    className="
                    text-white

                    text-[17px]

                    -mt-1
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontWeight: 600,
                    }}
                  >
                    Lakh
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}