import { motion } from "framer-motion";
import heroBg from "../assests/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* FULL BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* DARK + BLUE + PINK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071028]/85 via-[#0f172a]/65 to-[#ec48993d]" />

      {/* TOP GLASS NAV EFFECT */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white/5 backdrop-blur-xl border-b border-white/10 z-10" />

      {/* SIDE BLUR */}
      <div className="absolute -left-32 top-40 w-72 h-72 bg-blue-500/30 blur-[120px]" />
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-pink-500/20 blur-[120px]" />

      {/* MAIN CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

          {/* CONTENT BOX */}
          <div className="max-w-3xl">

            {/* SMALL BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
              inline-flex items-center gap-2
              px-5 py-2 rounded-full
              bg-white/10
              border border-white/20
              backdrop-blur-md
              text-blue-100
              text-sm
              font-medium
              shadow-xl
              "
            >
              ✨ Premium Luxury Living
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
              mt-8
              text-5xl
              sm:text-6xl
              lg:text-7xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-white
              "
            >
              Discover Your Dream Home at{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-pink-300 bg-clip-text text-transparent">
                Subham Park
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
              mt-8
              text-lg
              sm:text-xl
              leading-9
              text-blue-100/90
              max-w-2xl
              "
            >
              Experience a thoughtfully planned residential community
              with lush greenery, modern amenities, elegant living
              spaces, and a secure future for your family.
            </motion.p>

            {/* PRICE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              className="
              mt-10
              inline-block
              px-7 py-5
              rounded-3xl
              bg-white/10
              border border-white/15
              backdrop-blur-xl
              shadow-2xl
              "
            >
              <p className="text-sm tracking-[4px] uppercase text-blue-200">
                Starting From
              </p>

              <h3 className="mt-2 text-4xl font-bold text-white">
                ₹12 Lakhs*
              </h3>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="mt-12 flex flex-col sm:flex-row gap-5"
            >
              {/* PRIMARY BUTTON */}
              <a
                href="#about"
                className="
                px-9 py-4
                rounded-full
                bg-gradient-to-r
                from-blue-500
                to-pink-500
                text-white
                font-semibold
                text-lg
                shadow-[0_10px_40px_rgba(59,130,246,0.45)]
                hover:scale-105
                transition-all
                duration-300
                "
              >
                Explore Project
              </a>

              {/* SECONDARY BUTTON */}
              <a
                href="#contact"
                className="
                px-9 py-4
                rounded-full
                border border-white/20
                bg-white/10
                backdrop-blur-xl
                text-white
                font-semibold
                text-lg
                hover:bg-white/20
                transition-all
                duration-300
                "
              >
                Book Free Site Visit
              </a>
            </motion.div>

            {/* BOTTOM GLASS STATS */}
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3 }}
              className="
              mt-16
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-5
              "
            >
              {/* CARD 1 */}
              <div
                className="
                p-6
                rounded-3xl
                bg-white/10
                border border-white/10
                backdrop-blur-2xl
                shadow-2xl
                "
              >
                <h2 className="text-4xl font-bold text-pink-300">
                  4.9★
                </h2>

                <p className="mt-3 text-blue-100 leading-7">
                  Excellent customer satisfaction with premium support.
                </p>
              </div>

              {/* CARD 2 */}
              <div
                className="
                p-6
                rounded-3xl
                bg-white/10
                border border-white/10
                backdrop-blur-2xl
                shadow-2xl
                "
              >
                <h2 className="text-4xl font-bold text-blue-300">
                  5K+
                </h2>

                <p className="mt-3 text-blue-100 leading-7">
                  Successfully completed modern residential projects.
                </p>
              </div>

              {/* CARD 3 */}
              <div
                className="
                p-6
                rounded-3xl
                bg-white/10
                border border-white/10
                backdrop-blur-2xl
                shadow-2xl
                "
              >
                <h2 className="text-4xl font-bold text-pink-300">
                  Since 1998
                </h2>

                <p className="mt-3 text-blue-100 leading-7">
                  Delivering elegant homes with trust and innovation.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}