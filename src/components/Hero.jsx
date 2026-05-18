// src/components/Hero.jsx

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import heroBg from "../assests/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      overflow-hidden

      bg-[#f5f1ec]

      flex
      items-center

      py-4
      "
    >

      {/* GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[260px] h-[260px] bg-[#d69073]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[260px] h-[260px] bg-[#d69073]/10 blur-[120px] rounded-full" />

      <div
        className="
        max-w-[1750px]
        mx-auto

        w-full

        px-6
        lg:px-8
        "
      >

        {/* GRID */}
        <div
          className="
          grid
          lg:grid-cols-[0.92fr_1.08fr]

          items-center

          gap-6

          pt-[90px]
          pb-2
          "
        >

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >

            {/* TOP TEXT */}
            <div className="flex items-center gap-4 mb-4">

              <div className="w-[55px] h-[2px] bg-[#d69073]" />

              <p
                className="
                uppercase
                tracking-[0.35em]

                text-[11px]

                text-[#c1886d]
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Premium Living
              </p>

            </div>

            {/* HEADING */}
            <h1
              className="
              text-[#171b30]

              text-[72px]
              lg:text-[82px]

              leading-[0.9]

              tracking-[-2px]

              mb-5
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >

              Discover

              <br />

              <span className="flex items-end gap-4">

                <span>
                  Your
                </span>

                <span
                  className="
                  italic
                  text-[#d69073]

                  text-[66px]
                  lg:text-[76px]
                  "
                >
                  Dream
                </span>

              </span>

            </h1>

            {/* LINE */}
            <div
              className="
              w-[330px]
              h-[4px]

              rounded-full

              bg-[#d69073]

              mb-8
              "
            />

            {/* TEXT */}
            <p
              className="
              max-w-[650px]

              text-[15px]

              leading-[1.9]

              text-[#2b2b2b]

              mb-8
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 300,
              }}
            >
              Experience refined luxury living at
              Subham Park with elegant architecture,
              peaceful surroundings and premium urban
              comfort in the heart of Jorhat.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-8">

              {/* BTN */}
              <button
                className="
                h-[54px]

                px-9

                bg-[#d69073]

                text-white

                uppercase
                tracking-[0.18em]

                text-[11px]

                hover:bg-[#bf7c5f]

                transition-all
                duration-300
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 600,
                }}
              >
                Book A Site Visit
              </button>

              {/* BTN */}
              <button
                className="
                flex
                items-center
                gap-4

                border-b
                border-[#171b30]

                pb-3

                text-[#171b30]

                uppercase
                tracking-[0.18em]

                text-[11px]

                hover:text-[#d69073]

                transition-all
                duration-300
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 500,
                }}
              >
                Explore Project

                <ArrowRight size={16} />
              </button>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            {/* IMAGE BOX */}
            <div
              className="
              relative

              overflow-hidden

              h-[470px]

              rounded-tr-[50px]
              rounded-bl-[50px]
              "
              style={{
                clipPath:
                  "polygon(12% 0%,100% 0%,100% 84%,90% 100%,16% 100%,0% 86%,0% 14%)",
                WebkitClipPath:
                  "polygon(12% 0%,100% 0%,100% 84%,90% 100%,16% 100%,0% 86%,0% 14%)",
              }}
            >

              {/* IMAGE */}
              <img
                src={heroBg}
                alt="Subham Park"
                className="
                absolute
                inset-0

                w-full
                h-full

                object-cover
                object-center
                scale-[1.16]
                "
              />

              {/* OVERLAY */}
              <div
                className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/[0.04]
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