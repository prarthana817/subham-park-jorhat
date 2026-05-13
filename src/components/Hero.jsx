import { motion } from "framer-motion";
import heroBg from "../assests/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* CLEAN DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#050816]/55" />

      {/* LEFT SOLID SHADE */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081226]/88 via-[#081226]/60 to-transparent" />

      {/* SOFT BLUE LIGHT */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-500/15 blur-[140px]" />

      {/* SOFT PINK LIGHT */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-pink-400/10 blur-[130px]" />

      {/* CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-14 w-full">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
              text-5xl
              sm:text-6xl
              lg:text-8xl
              font-bold
              leading-[0.95]
              tracking-tight
              text-white
              "
            >
              Discover Your Dream Home at{" "}

              <span className="bg-gradient-to-r from-blue-400 to-pink-300 bg-clip-text text-transparent">
                Subham Park
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
              mt-10
              text-xl
              leading-10
              text-white/75
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
              mt-12
              inline-block
              bg-white/10
              backdrop-blur-xl
              border border-white/10
              rounded-[32px]
              px-10
              py-7
              shadow-2xl
              "
            >
              <p className="text-sm tracking-[6px] uppercase text-blue-200">
                Starting From
              </p>

              <h2 className="mt-3 text-5xl font-bold text-white">
                ₹12 Lakhs*
              </h2>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="mt-12 flex flex-wrap gap-5"
            >
              {/* PRIMARY BUTTON */}
              <a
                href="#about"
                className="
                px-10
                py-5
                rounded-full
                bg-gradient-to-r
                from-blue-500
                to-pink-500
                text-white
                text-xl
                font-semibold
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
                px-10
                py-5
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border border-white/10
                text-white
                text-xl
                font-semibold
                hover:bg-white/20
                transition-all
                duration-300
                "
              >
                Book Free Site Visit
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}