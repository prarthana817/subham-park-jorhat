import { motion } from "framer-motion";
import heroBg from "../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f6f8ff] pt-40 pb-24"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-blue-200/30 blur-[140px]" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-pink-200/30 blur-[140px]" />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-6"
          >

            {/* BIG HEADING */}
            <h1
              className="
              text-[78px]
              sm:text-[100px]
              lg:text-[118px]
              font-black
              leading-[0.84]
              tracking-[-6px]
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
              mt-10
              text-[22px]
              leading-[44px]
              text-slate-600
              max-w-[650px]
              "
            >
              Experience a thoughtfully planned residential
              community with lush greenery, modern amenities,
              and a secure future for your family.
            </p>

            {/* LINE */}
            <div className="mt-8 w-36 h-[4px] rounded-full bg-gradient-to-r from-blue-500 to-pink-400" />

            {/* BUTTON */}
            <div className="mt-12">

              <a
                href="#about"
                className="
                inline-flex
                items-center
                justify-center
                px-10
                py-5
                rounded-full
                bg-gradient-to-r
                from-blue-500
                via-[#7b8cff]
                to-pink-400
                text-white
                text-[18px]
                font-semibold
                shadow-[0_15px_40px_rgba(99,102,241,0.30)]
                hover:scale-105
                transition-all
                duration-300
                "
              >
                Explore Project
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            {/* GLASS CARD */}
            <div
              className="
              relative
              bg-white/70
              backdrop-blur-2xl
              border
              border-white/60
              rounded-[45px]
              p-8
              shadow-[0_25px_80px_rgba(0,0,0,0.08)]
              "
            >

              {/* TOP TAGS */}
              <div className="flex items-center gap-4">

                <div className="px-6 py-3 rounded-full border border-slate-200 text-[#1d2755] text-[18px] font-medium">
                  Interior
                </div>

                <div className="px-6 py-3 rounded-full border border-slate-200 text-[#1d2755] text-[18px] font-medium">
                  Design
                </div>

                <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 text-white text-[18px] font-medium">
                  3D
                </div>

              </div>

              {/* CONTENT */}
              <div className="mt-10">

                <h2
                  className="
                  text-[58px]
                  leading-[1]
                  font-semibold
                  text-[#07113d]
                  "
                >
                  Unique design &
                  <br />
                  ergonomics
                </h2>

                <p className="mt-5 text-[26px] text-slate-500">
                  From blueprints to renders.
                </p>

              </div>

              {/* IMAGE */}
              <div className="mt-10 relative">

                <div className="rounded-[36px] overflow-hidden">

                  <img
                    src={heroBg}
                    alt="Subham Park"
                    className="
                    w-full
                    h-[620px]
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