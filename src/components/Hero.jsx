import { motion } from "framer-motion";
import heroBg from "../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f7f9ff] pt-32 pb-16"
    >

      {/* LIGHT GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-200/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-200/20 blur-[120px]" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[620px]"
          >

            {/* HEADING */}
            <h1
              className="
              text-[58px]
              sm:text-[72px]
              lg:text-[86px]
              font-black
              leading-[0.9]
              tracking-[-4px]
              text-[#07113d]
              "
            >
              DISCOVER
              <br />
              YOUR
              <br />

              <span className="bg-gradient-to-r from-blue-500 via-[#8b8cff] to-pink-400 bg-clip-text text-transparent">
                DREAM HOME
              </span>

              <br />
              AT SUBHAM
              <br />
              PARK
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
              mt-7
              text-[18px]
              leading-[36px]
              text-slate-600
              max-w-[560px]
              "
            >
              Experience a thoughtfully planned residential
              community with lush greenery, modern amenities
              and elegant living spaces for your family.
            </p>

            {/* LINE */}
            <div className="mt-6 w-28 h-[4px] rounded-full bg-gradient-to-r from-blue-500 to-pink-400" />

            {/* BUTTON */}
            <div className="mt-10">

              <a
                href="#about"
                className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-full
                bg-gradient-to-r
                from-blue-500
                via-[#7b8cff]
                to-pink-400
                text-white
                text-[16px]
                font-semibold
                shadow-[0_10px_30px_rgba(99,102,241,0.25)]
                hover:scale-105
                transition-all
                duration-300
                "
              >
                Explore Project
              </a>

            </div>

          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >

            <div
              className="
              bg-white/75
              backdrop-blur-2xl
              border
              border-white/60
              rounded-[38px]
              p-6
              shadow-[0_20px_70px_rgba(0,0,0,0.06)]
              "
            >

              {/* TAGS */}
              <div className="flex items-center gap-3">

                <div className="px-5 py-2 rounded-full border border-slate-200 text-[#16214a] text-sm font-medium">
                  Interior
                </div>

                <div className="px-5 py-2 rounded-full border border-slate-200 text-[#16214a] text-sm font-medium">
                  Design
                </div>

                <div className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 text-white text-sm font-medium">
                  3D
                </div>

              </div>

              {/* CONTENT */}
              <div className="mt-8">

                <h2
                  className="
                  text-[42px]
                  leading-[1.1]
                  font-semibold
                  text-[#07113d]
                  "
                >
                  Unique design &
                  <br />
                  ergonomics
                </h2>

                <p className="mt-4 text-[20px] text-slate-500">
                  From blueprints to renders.
                </p>

              </div>

              {/* IMAGE */}
              <div className="mt-8">

                <div className="rounded-[28px] overflow-hidden">

                  <img
                    src={heroBg}
                    alt="Subham Park"
                    className="
                    w-full
                    h-[460px]
                    object-cover
                    "
                  />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}