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
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/85 via-[#2563eb]/40 to-[#ec4899]/30"></div>

      {/* BLUR EFFECT */}
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      {/* TOP NAV STYLE EFFECT */}
      <div className="absolute top-0 left-0 w-full h-28 bg-white/10 backdrop-blur-md border-b border-white/10"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center">

        <div className="max-w-3xl">

          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
            bg-white/10 border border-white/20 
            text-white backdrop-blur-md font-medium mb-8 shadow-lg"
          >
            ✨ Premium Living Experience
          </motion.div>

          {/* heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-white"
          >
            Build Your{" "}
            <span className="text-pink-300">
              Dream Home
            </span>
          </motion.h1>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-8 text-lg sm:text-xl text-blue-100 leading-9 max-w-2xl"
          >
            Create beautiful and functional living spaces with modern
            architecture, elegant interiors, and a lifestyle designed for
            comfort and luxury.
          </motion.p>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 flex flex-col sm:flex-row gap-5"
          >
            <a
              href="#about"
              className="px-8 py-4 rounded-full bg-gradient-to-r 
              from-blue-500 to-pink-500 text-white font-semibold 
              shadow-2xl hover:scale-105 transition duration-300"
            >
              Get Started
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/10 
              border border-white/20 backdrop-blur-md text-white 
              hover:bg-white/20 transition duration-300 font-semibold"
            >
              Contact Us
            </a>
          </motion.div>

          {/* bottom glass cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16"
          >

            {/* card 1 */}
            <div
              className="bg-white/10 border border-white/10 
              backdrop-blur-xl rounded-3xl p-6 text-white shadow-2xl"
            >
              <h2 className="text-4xl font-bold text-pink-300">
                4.9
              </h2>

              <p className="mt-3 text-blue-100">
                Trusted by hundreds of happy families with premium support.
              </p>
            </div>

            {/* card 2 */}
            <div
              className="bg-white/10 border border-white/10 
              backdrop-blur-xl rounded-3xl p-6 text-white shadow-2xl"
            >
              <h2 className="text-4xl font-bold text-blue-300">
                5k+
              </h2>

              <p className="mt-3 text-blue-100">
                Successfully completed modern housing and interior projects.
              </p>
            </div>

            {/* card 3 */}
            <div
              className="bg-white/10 border border-white/10 
              backdrop-blur-xl rounded-3xl p-6 text-white shadow-2xl"
            >
              <h2 className="text-4xl font-bold text-pink-300">
                Since 1998
              </h2>

              <p className="mt-3 text-blue-100">
                Delivering elegant living spaces with innovation and trust.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}