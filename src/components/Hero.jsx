// src/components/Hero.jsx

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

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
      pt-[125px]
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
        max-w-[1380px]
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
              lg:text-[70px]
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

            <div className="w-[150px] h-[2px] bg-[#d1a54d] mb-6" />

            {/* PARAGRAPH */}
            <p
              className="
              max-w-[520px]
              text-[16px]
              lg:text-[17px]
              leading-[1.9]
              text-[#5f6674]
              mb-8
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                wordSpacing: "-1px",
              }}
            >
              Experience premium residences surrounded by
              greenery and thoughtfully crafted architecture
              designed for elevated modern living in the heart
              of Jorhat.
            </p>

            {/* LOCATION + PRICE */}
            <div
              className="
              flex
              flex-wrap
              items-center
              gap-5
              "
            >
              {/* LOCATION CARD */}
              <div
                className="
                relative

                px-5
                py-[14px]

                rounded-[20px]

                bg-gradient-to-br
                from-[#f4ead3]
                via-[#f0e2bc]
                to-[#ead7a4]

                shadow-[0_10px_24px_rgba(209,165,77,0.12)]

                overflow-hidden
                "
              >
                {/* ROTATING BORDER */}
                <div
                  className="
                  absolute
                  inset-0

                  rounded-[20px]

                  before:absolute
                  before:inset-0
                  before:rounded-[20px]

                  before:bg-[conic-gradient(from_0deg,#d1a54d,transparent,transparent,#fff3c9,#d1a54d)]

                  before:animate-[spin_6s_linear_infinite]

                  before:content-['']
                  "
                />

                {/* INNER */}
                <div
                  className="
                  absolute
                  inset-[1px]

                  rounded-[19px]

                  bg-gradient-to-br
                  from-[#f4ead3]
                  via-[#f0e2bc]
                  to-[#ead7a4]
                  "
                />

                {/* GLOW */}
                <div
                  className="
                  absolute
                  inset-0

                  bg-gradient-to-br
                  from-white/20
                  via-transparent
                  to-transparent

                  pointer-events-none
                  "
                />

                {/* CONTENT */}
                <div
                  className="
                  relative
                  z-10

                  flex
                  items-center
                  gap-4
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                    w-11
                    h-11

                    rounded-full

                    bg-[#f7edd4]

                    flex
                    items-center
                    justify-center

                    text-[#c79d47]

                    shadow-inner
                    "
                  >
                    <MapPin size={18} />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p
                      className="
                      uppercase
                      tracking-[0.22em]

                      text-[10px]

                      text-[#b88b34]

                      mb-[3px]
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      Prime Location
                    </p>

                    <h4
                      className="
                      text-[22px]
                      md:text-[24px]

                      leading-none

                      text-[#111111]
                      "
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                        fontWeight: 700,
                      }}
                    >
                      Sonari Gaon
                    </h4>
                  </div>
                </div>
              </div>

              {/* GOLD DASH */}
<div
  className="
  hidden
  md:flex

  items-center
  justify-center

  h-[70px]
  "
>
  <div
    className="
    w-[2px]
    h-[42px]

    rounded-full

    bg-gradient-to-b
    from-transparent
    via-[#d1a54d]
    to-transparent

    opacity-90
    "
  />
</div>

              {/* PRICE CARD */}
              <div
                className="
                relative

                px-5
                py-[14px]

                rounded-[18px]

                bg-gradient-to-br
                from-[#f4ead3]
                via-[#f0e2bc]
                to-[#ead7a4]

                shadow-[0_10px_24px_rgba(209,165,77,0.12)]

                overflow-hidden
                "
              >
                {/* ROTATING BORDER */}
                <div
                  className="
                  absolute
                  inset-0

                  rounded-[18px]

                  before:absolute
                  before:inset-0
                  before:rounded-[18px]

                  before:bg-[conic-gradient(from_0deg,#d1a54d,transparent,transparent,#fff3c9,#d1a54d)]

                  before:animate-[spin_4s_linear_infinite]

                  before:content-['']
                  "
                />

                {/* INNER LAYER */}
                <div
                  className="
                  absolute
                  inset-[1px]

                  rounded-[17px]

                  bg-gradient-to-br
                  from-[#f4ead3]
                  via-[#f0e2bc]
                  to-[#ead7a4]
                  "
                />

                {/* SOFT GLOW */}
                <div
                  className="
                  absolute
                  inset-0

                  bg-gradient-to-br
                  from-white/25
                  via-transparent
                  to-transparent

                  pointer-events-none
                  "
                />

                {/* CONTENT */}
                <div className="relative z-10">
                  <p
                    className="
                    uppercase
                    tracking-[0.22em]

                    text-[9px]

                    text-[#b88b34]

                    mb-[4px]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Starting At
                  </p>

                  <div
                    className="
                    flex
                    items-end
                    gap-[3px]
                    "
                  >
                    <span
                      className="
                      text-[16px]

                      leading-none

                      text-[#b88b34]

                      mb-[4px]
                      "
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                        fontWeight: 600,
                      }}
                    >
                      ₹
                    </span>

                    <h3
                      className="
                      text-[34px]
                      md:text-[38px]

                      leading-[0.9]

                      tracking-[-1.5px]

                      text-[#111111]
                      "
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                        fontWeight: 700,
                      }}
                    >
                      53
                    </h3>

                    <span
                      className="
                      text-[12px]

                      uppercase

                      tracking-[0.08em]

                      text-[#6d6758]

                      mb-[5px]
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      Lac
                    </span>
                  </div>
                </div>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}