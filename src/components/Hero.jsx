import { motion } from "framer-motion";
import heroBg from "../assests/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* VERY LIGHT gradient only for readability (image fully visible) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-blue-100/10"></div>

      {/* soft floating glow (no dark overlay) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 w-full">
        <div className="max-w-3xl">

          {/* Floating glass badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
            bg-white/40 backdrop-blur-md 
            border border-white/50 
            text-blue-900 font-semibold mb-6 shadow-lg rotate-[-1deg]"
          >
            🌿 Premium Gated Community in Jorhat
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg"
          >
            Discover Your Dream Home at{" "}
            <span className="bg-white/30 backdrop-blur-md px-4 py-1 rounded-xl text-blue-900">
              Subham Park
            </span>
          </motion.h1>

          {/* DESCRIPTION GLASS */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-lg md:text-xl leading-8 max-w-2xl 
            bg-white/25 backdrop-blur-md 
            border border-white/40 
            p-5 rounded-2xl text-slate-900 shadow-lg rotate-[0.5deg]"
          >
            Experience a thoughtfully planned residential community with lush
            greenery, wide internal roads, modern amenities, and a secure future
            for your family in the heart of Jorhat.
          </motion.p>

          {/* PRICE TAG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 inline-block 
            bg-white/40 backdrop-blur-md 
            border border-white/50 
            px-6 py-4 rounded-2xl shadow-xl rotate-[-1deg]"
          >
            <p className="text-sm uppercase tracking-widest text-blue-900">
              Starting From
            </p>
            <p className="text-3xl font-bold text-white">₹12 Lakhs*</p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition"
            >
              Explore Project
            </a>

            <a
              href="#contact"
              className="bg-white/40 backdrop-blur-md border border-white/50 
              hover:bg-white hover:text-blue-900 text-white 
              px-8 py-4 rounded-full font-semibold transition"
            >
              Book Free Site Visit
            </a>
          </motion.div>

        </div>
      </div>

      {/* SCROLL */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm tracking-widest uppercase"
      >
        Scroll Down ↓
      </motion.a>
    </section>
  );
}