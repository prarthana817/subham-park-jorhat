import { motion } from "framer-motion";
import heroBg from "../assests/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* LIGHT OVERLAY LIKE REFERENCE */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* SOFT BLUE + PINK GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-pink-500/20 blur-[120px]" />

      {/* TOP GLASS NAV EFFECT */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white/5 backdrop-blur-md border-b border-white/10 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
          inline-flex items-center gap-2
          px-5 py-2
          rounded-full
          bg-white/10
          border border-white/20
          backdrop-blur-md
          text-white
          text-sm
          font-medium
          shadow-xl
          "
        >
          ✨ Premium Living Experience
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
          Build Your{" "}
          <span className="bg-gradient-to-r from-blue-300 via-white to-pink-300 bg-clip-text text-transparent">
            Dream Home
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
          text-white/85
          max-w-3xl
          mx-auto
          "
        >
          Create beautiful and functional living spaces with modern
          architecture, elegant interiors, and luxury comfort designed
          for your future lifestyle.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="
            inline-flex items-center gap-3
            px-10 py-5
            rounded-2xl
            bg-white
            text-slate-900
            font-semibold
            text-xl
            shadow-2xl
            hover:scale-105
            transition-all
            duration-300
            "
          >
            Get Started
            <span className="text-2xl">›</span>
          </a>
        </motion.div>

        {/* GLASS STATS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="
          mt-20
          grid
          grid-cols-1
          md:grid-cols-3
          overflow-hidden
          rounded-[32px]
          border border-white/10
          bg-white/10
          backdrop-blur-xl
          shadow-2xl
          "
        >

          {/* CARD 1 */}
          <div className="p-8 text-left border-b md:border-b-0 md:border-r border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-white text-2xl">
                ★
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  4.8
                </h2>

                <p className="text-white/70">
                  Excellent Reviews
                </p>
              </div>
            </div>

            <p className="mt-5 text-white/85 text-lg leading-8">
              “Excellent service and beautiful modern design.”
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-8 text-left border-b md:border-b-0 md:border-r border-white/10">
            <h2 className="text-5xl font-bold text-white">
              5k+
            </h2>

            <p className="mt-3 text-white/80 text-lg">
              Successfully completed luxury projects.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-8 text-left">
            <h2 className="text-5xl font-bold text-white">
              Since 1998
            </h2>

            <p className="mt-3 text-white/80 text-lg">
              Building trust with modern architecture and premium quality.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}