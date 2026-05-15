// src/components/Hero.jsx

import { motion } from "framer-motion";
import heroBg from "../assests/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      overflow-hidden
      bg-[#f6f4f3]
      min-h-screen
      flex
      items-center
      "
    >

      {/* PREMIUM GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[260px] h-[260px] bg-[#d69073]/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[260px] h-[260px] bg-[#c6a28f]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1450px] mx-auto w-full px-4 lg:px-6">

        {/* GRID */}
        <div
          className="
          grid
          lg:grid-cols-[0.52fr_1.48fr]
          items-center
          gap-8

          pt-[120px]
          lg:pt-[95px]

          pb-10
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
            <div className="flex items-center gap-3 mb-5">

              <div className="w-10 h-[2px] bg-[#d69073]" />

              <p
                className="
                uppercase
                tracking-[0.35em]
                text-[10px]
                text-[#b58d7c]
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 400,
                }}
              >
                Premium Living
              </p>

            </div>

            {/* HEADING */}
            <h1
              className="
              text-[42px]
              sm:text-[54px]
              lg:text-[62px]

              leading-[0.9]

              tracking-[-2px]

              text-[#171b30]
              "
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontWeight: 400,
              }}
            >
              DISCOVER
              <br />

              YOUR
              <br />

              <span className="text-[#d69073]">
                DREAM
              </span>

            </h1>

            {/* LINE */}
            <div
              className="
              mt-4
              w-[145px]
              h-[3px]
              rounded-full
              bg-gradient-to-r
              from-[#d69073]
              to-[#c6a28f]
              "
            />

            {/* PARAGRAPH */}
            <p
              className="
              mt-5

              max-w-[360px]

              text-[14px]
              lg:text-[15px]

              leading-[1.45]

              text-[#1d1d1d]
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 300,
                wordSpacing: "-2px",
                letterSpacing: "-0.3px",
              }}
            >
              Elegant premium residences crafted with
              modern architecture, peaceful surroundings,
              and refined luxury living experiences in
              Jorhat.
            </p>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
            relative
            flex
            justify-end
            items-center
            "
          >

            {/* D SHAPE IMAGE BOX */}
            <div
              className="
              relative

              w-full
              max-w-[720px]

              h-[470px]

              overflow-hidden

              bg-[#ebe6e2]

              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              "
              style={{
                clipPath:
                  "polygon(12% 0%,100% 0%,100% 80%,88% 100%,18% 100%,0% 84%,0% 14%)",
                WebkitClipPath:
                  "polygon(12% 0%,100% 0%,100% 80%,88% 100%,18% 100%,0% 84%,0% 14%)",
                borderRadius: "34px",
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

                object-[center_58%]
                "
              />

              {/* OVERLAY */}
              <div
                className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/[0.03]
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