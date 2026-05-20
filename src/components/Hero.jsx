// src/components/Hero.jsx

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  LockKeyhole,
  Droplets,
} from "lucide-react";

import heroBg from "../assests/images/hero-bg.jpg";

export default function Hero({ setOpen }) {
  return (
    <section
      id="home"
      className="
      relative
      overflow-hidden

      h-screen

      flex
      items-center

      bg-[#f7f3ef]

      pt-[82px]
      pb-2
      "
    >
      {/* GRID BG */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* LEFT LINE DESIGN */}
      <div
        className="
        absolute
        left-0
        top-0

        h-full
        w-[90px]

        opacity-[0.05]
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

        px-4
        lg:px-5
        "
      >
        {/* MAIN GRID */}
        <div
          className="
          grid
          lg:grid-cols-[0.88fr_1.12fr]

          items-center

          gap-5
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* TOP LABEL */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-[50px] h-[2px] bg-[#c7815f]" />

              <p
                className="
                uppercase
                tracking-[0.3em]

                text-[10px]

                text-[#b16d4e]
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Quiet Luxury Living
              </p>
            </div>

            {/* HEADING */}
            <h1
              className="
              text-[#171717]

              text-[46px]
              md:text-[58px]
              lg:text-[66px]

              leading-[0.88]
              tracking-[-2px]

              mb-3
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
              Elevate{" "}

              <span className="italic text-[#cf8b67]">
                Your
              </span>

              <br />

              Lifestyle
            </h1>

            {/* LINE */}
            <div className="w-[160px] h-[2px] bg-[#cf8b67] mb-4" />

            {/* DESCRIPTION */}
            <p
              className="
              max-w-[500px]

              text-[16px]
              lg:text-[18px]

              leading-[1.75]

              text-[#5f5a56]

              mb-5
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              Experience premium residences surrounded by
              greenery and thoughtfully crafted architecture
              designed for elevated modern living in the heart
              of Jorhat.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-5 mb-5">
              {/* PRIMARY BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="
                h-[46px]

                px-7

                rounded-full

                bg-[#cf8b67]
                hover:bg-[#bb7654]

                text-white

                uppercase
                tracking-[0.18em]

                text-[10px]

                transition-all
                duration-300
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                }}
              >
                Book A Site Visit
              </button>

              {/* SECONDARY BUTTON */}
              <button
                className="
                flex
                items-center
                gap-3

                border-b
                border-[#cf8b67]

                pb-2

                text-[#b16d4e]

                uppercase
                tracking-[0.16em]

                text-[10px]

                hover:text-black

                transition-all
                duration-300
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 600,
                }}
              >
                Explore Project

                <ArrowRight size={15} />
              </button>
            </div>

            {/* FEATURES */}
            <div
              className="
              grid
              grid-cols-2

              gap-3
              "
            >
              {[
                {
                  icon: <ShieldCheck size={17} />,
                  title: "Earthquake Resistant",
                },
                {
                  icon: <Zap size={17} />,
                  title: "24×7 Backup",
                },
                {
                  icon: <LockKeyhole size={17} />,
                  title: "Smart Security",
                },
                {
                  icon: <Droplets size={17} />,
                  title: "Eco Friendly",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                  flex
                  items-center
                  gap-3

                  bg-white/90

                  rounded-[14px]

                  px-4
                  py-3
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                    w-9
                    h-9

                    rounded-full

                    bg-[#f5ebe4]

                    flex
                    items-center
                    justify-center

                    text-[#c7815f]
                    "
                  >
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <h4
                    className="
                    text-[12px]

                    text-[#222]
                    "
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h4>
                </div>
              ))}
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

              rounded-[28px]

              h-[360px]
              md:h-[430px]
              lg:h-[500px]

              w-full
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

                scale-[0.94]
                translate-y-[10px]

                rounded-[28px]
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}