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

      min-h-screen

      flex
      items-center

      bg-[#f8f5ed]

      pt-[105px]
      pb-10
      "
    >
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
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
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

            <p
              className="
              max-w-[520px]

              text-[17px]

              leading-[1.9]

              text-[#5f6674]

              mb-7
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              Experience premium residences surrounded by
              greenery and thoughtfully crafted architecture
              designed for elevated modern living in the heart
              of Jorhat.
            </p>

            <div className="flex flex-wrap items-center gap-5 mb-7">
              <button
                onClick={() => setOpen(true)}
                className="
                h-[52px]

                px-8

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
                Book A Site Visit
              </button>

              {/* EXPLORE PROJECT BUTTON */}
              <a
                href="#project"
                className="
                flex
                items-center
                gap-3

                border-b
                border-[#171717]

                pb-2

                text-[#171717]

                uppercase

                tracking-[0.15em]

                text-[10px]

                hover:text-[#162a63]

                transition-all
                duration-300
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                Explore Project

                <ArrowRight size={15} />
              </a>
            </div>

            <div
              className="
              grid
              grid-cols-1
              sm:grid-cols-2

              gap-4
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

                  bg-[#fffdfa]

                  rounded-[18px]

                  border
                  border-[#ece2d2]

                  px-4
                  py-3

                  shadow-[0_8px_25px_rgba(0,0,0,0.03)]
                  "
                >
                  <div
                    className="
                    w-10
                    h-10

                    rounded-full

                    bg-[#f8efd8]

                    flex
                    items-center
                    justify-center

                    text-[#d1a54d]
                    "
                  >
                    {item.icon}
                  </div>

                  <h4
                    className="
                    text-[13px]

                    text-[#171717]
                    "
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </motion.div>

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
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}