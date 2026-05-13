import { motion } from "framer-motion";
import heroBg from "../assests/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40"></div>

      {/* Decorative Blur Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-400/10 blur-3xl rounded-full"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 w-full">
        <div className="max-w-3xl text-white">
          {/* Premium Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-sm font-semibold text-green-300 mb-6 shadow-lg"
          >
            🌿 Premium Gated Community in Jorhat
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
          >
            Discover Your Dream Home at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
              Subham Park
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-slate-200 leading-8 max-w-2xl"
          >
            Experience a thoughtfully planned residential community with lush
            greenery, wide internal roads, modern amenities, and a secure future
            for your family in the heart of Jorhat.
          </motion.p>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 inline-block bg-green-500/15 border border-green-400/30 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl"
          >
            <p className="text-sm uppercase tracking-widest text-green-300">
              Starting From
            </p>
            <p className="text-3xl font-bold text-white">₹12 Lakhs*</p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#about"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-2xl transition duration-300"
            >
              Explore Project
            </a>

            <a
              href="#contact"
              className="bg-white/10 border border-white/30 backdrop-blur-md hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-full font-semibold transition duration-300"
            >
              Book Free Site Visit
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 2 },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-sm tracking-widest uppercase"
      >
        Scroll Down ↓
      </motion.a>
    </section>
  );
}