import { motion } from "framer-motion";
import heroBg from "../assests/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f7f9ff]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5f8ff] to-[#fff1f8]" />

      {/* SOFT LIGHTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-300/20 blur-[120px]" />

      {/* MAIN SECTION */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* MAIN TITLE */}
            <h1
              className="
              text-[60px]
              sm:text-[78px]
              lg:text-[105px]
              font-bold
              leading-[0.9]
              tracking-[-5px]
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
              text-xl
              leading-9
              text-slate-600
              max-w-xl
              "
            >
              Experience a thoughtfully planned residential
              community with lush greenery, modern amenities,
              and a secure future for your family.
            </p>

            {/* GRADIENT LINE */}
            <div className="mt-8 w-28 h-1 rounded-full bg-gradient-to-r from-blue-500 to-pink-400"></div>

            {/* BUTTON AREA */}
            <div className="mt-12 flex items-center gap-8 flex-wrap">

              {/* BUTTON */}
              <a
                href="#about"
                className="
                px-10
                py-5
                rounded-full
                bg-gradient-to-r
                from-blue-500
                to-pink-400
                text-white
                text-lg
                font-semibold
                shadow-[0_15px_40px_rgba(59,130,246,0.25)]
                hover:scale-105
                transition-all
                duration-300
                "
              >
                Explore Project
              </a>

              {/* WATCH VIDEO */}
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

          {/* RIGHT SIDE */}
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
              border border-white/60
              rounded-[42px]
              p-7
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              "
            >

              {/* TOP TAGS */}
              <div className="flex items-center gap-3">

                <div className="px-5 py-2 rounded-full border border-slate-200 text-slate-700 text-sm font-medium">
                  Interior
                </div>

                <div className="px-5 py-2 rounded-full border border-slate-200 text-slate-700 text-sm font-medium">
                  Design
                </div>

                <div className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 text-white text-sm font-medium">
                  3D
                </div>

              </div>

              {/* TEXT */}
              <div className="mt-8">

                <h2 className="text-4xl font-semibold leading-tight text-[#08113d]">
                  Unique design &
                  <br />
                  ergonomics
                </h2>

                <p className="mt-4 text-lg text-slate-500">
                  From blueprints to renders.
                </p>

              </div>

              {/* IMAGE SECTION */}
              <div className="mt-10 relative">

                <div className="rounded-[34px] overflow-hidden">

                  <img
                    src={heroBg}
                    alt="Subham Park"
                    className="
                    w-full
                    h-[470px]
                    object-cover
                    "
                  />

                </div>

                {/* SMALL ROOM TOUR CARD */}
                <div
                  className="
                  absolute
                  top-6
                  right-6
                  bg-[#fff7fb]
                  rounded-[24px]
                  p-5
                  shadow-xl
                  "
                >
                  <p className="text-sm font-semibold text-slate-700">
                    ROOMTOUR
                  </p>

                  <div className="mt-4 rounded-xl overflow-hidden">

                    <img
                      src={heroBg}
                      alt="Room Tour"
                      className="w-32 h-24 object-cover"
                    />

                  </div>

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

        {/* BOTTOM STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="
          mt-20
          bg-white/70
          backdrop-blur-2xl
          border border-white/60
          rounded-[42px]
          shadow-[0_20px_80px_rgba(0,0,0,0.06)]
          grid
          md:grid-cols-3
          overflow-hidden
          "
        >

          {/* ITEM */}
          <div className="p-10 flex items-start gap-5 border-b md:border-b-0 md:border-r border-slate-200/60">

            <div
              className="
              w-16
              h-16
              rounded-full
              bg-blue-500
              flex
              items-center
              justify-center
              text-white
              text-2xl
              "
            >
              ★
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#08113d]">
                4.8
              </h3>

              <p className="mt-2 text-slate-500">
                Customer Rating
              </p>

              <p className="mt-3 text-slate-600 leading-7">
                Trusted by hundreds
                <br />
                of happy families
              </p>
            </div>

          </div>

          {/* ITEM */}
          <div className="p-10 flex items-start gap-5 border-b md:border-b-0 md:border-r border-slate-200/60">

            <div
              className="
              w-16
              h-16
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-pink-400
              flex
              items-center
              justify-center
              text-white
              text-2xl
              "
            >
              🏢
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#08113d]">
                5K+
              </h3>

              <p className="mt-2 text-slate-500">
                Projects Completed
              </p>

              <p className="mt-3 text-slate-600 leading-7">
                Successfully delivered
                <br />
                modern homes
              </p>
            </div>

          </div>

          {/* ITEM */}
          <div className="p-10 flex items-start gap-5">

            <div
              className="
              w-16
              h-16
              rounded-full
              bg-pink-400
              flex
              items-center
              justify-center
              text-white
              text-2xl
              "
            >
              ✦
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#08113d]">
                Since 1998
              </h3>

              <p className="mt-2 text-slate-500">
                Years of Excellence
              </p>

              <p className="mt-3 text-slate-600 leading-7">
                Building trust with quality
                <br />
                and commitment
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}