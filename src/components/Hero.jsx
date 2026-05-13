import { motion } from "framer-motion";
import heroBg from "../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f7f9ff]"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f4f7ff] to-[#fff1f8]" />

      {/* GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-300/20 blur-[120px]" />

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* HEADING */}
            <h1
              className="
              text-[44px]
              sm:text-[58px]
              lg:text-[76px]
              font-bold
              leading-[0.95]
              tracking-[-3px]
              text-[#08113d]
              "
            >
              DISCOVER
              <br />
              YOUR
              <br />

              <span className="bg-gradient-to-r from-blue-500 via-[#7c8dff] to-pink-400 bg-clip-text text-transparent">
                DREAM HOME
              </span>

              <br />
              AT SUBHAM PARK
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
              mt-8
              text-lg
              lg:text-xl
              leading-8
              text-slate-600
              max-w-xl
              "
            >
              Experience a thoughtfully planned residential
              community with lush greenery, modern amenities,
              and a secure future for your family.
            </p>

            {/* LINE */}
            <div className="mt-8 w-28 h-1 rounded-full bg-gradient-to-r from-blue-500 to-pink-400"></div>

            {/* BUTTONS */}
            <div className="mt-12 flex items-center gap-6 flex-wrap">

              {/* BUTTON */}
              <a
                href="#about"
                className="
                px-8
                py-4
                rounded-[18px]
                bg-gradient-to-r
                from-blue-500
                via-[#7b8cff]
                to-pink-400
                text-white
                text-[15px]
                uppercase
                tracking-[2px]
                font-bold
                shadow-[0_10px_35px_rgba(99,102,241,0.30)]
                hover:scale-105
                transition-all
                duration-300
                "
              >
                Explore Project
              </a>

              {/* VIDEO */}
              <div className="flex items-center gap-4 cursor-pointer">

                <div
                  className="
                  w-14
                  h-14
                  rounded-full
                  bg-white
                  shadow-lg
                  flex
                  items-center
                  justify-center
                  text-blue-600
                  text-xl
                  "
                >
                  ▶
                </div>

                <span className="text-lg font-semibold text-[#08113d]">
                  Watch Video
                </span>

              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            {/* CARD */}
            <div
              className="
              relative
              bg-white/75
              backdrop-blur-2xl
              border
              border-white/60
              rounded-[40px]
              p-6
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              "
            >

              {/* TAGS */}
              <div className="flex items-center gap-3">

                <div className="px-5 py-2 rounded-full border border-slate-200 text-slate-700 text-sm font-medium">
                  Premium
                </div>

                <div className="px-5 py-2 rounded-full border border-slate-200 text-slate-700 text-sm font-medium">
                  Modern
                </div>

                <div className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 text-white text-sm font-medium">
                  Luxury
                </div>

              </div>

              {/* TEXT */}
              <div className="mt-8">

                <h2 className="text-3xl lg:text-4xl font-semibold leading-tight text-[#08113d]">
                  Elegant living
                  <br />
                  experience
                </h2>

                <p className="mt-4 text-lg text-slate-500">
                  Crafted for modern lifestyle.
                </p>

              </div>

              {/* IMAGE */}
              <div className="mt-8 relative">

                <div className="rounded-[30px] overflow-hidden">

                  <img
                    src={heroBg}
                    alt="Subham Park"
                    className="
                    w-full
                    h-[430px]
                    object-cover
                    "
                  />

                </div>

                {/* PLAY BUTTON */}
                <div
                  className="
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-20
                  h-20
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-pink-400
                  flex
                  items-center
                  justify-center
                  text-white
                  text-3xl
                  shadow-2xl
                  "
                >
                  ▶
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}