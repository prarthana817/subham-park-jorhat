import { motion } from "framer-motion";
import heroBg from "../assests/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
    >
      <div className="absolute inset-0 flex">

        {/* LEFT SIDE IMAGE (FULL FOCUS) */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        ></div>

        {/* RIGHT SIDE LIGHT BACKGROUND */}
        <div className="w-1/2 bg-white/80 backdrop-blur-md"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* LEFT EMPTY (image already there) */}
        <div></div>

        {/* RIGHT CONTENT */}
        <div className="max-w-xl ml-auto">

          {/* badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
            bg-blue-100 border border-blue-200 
            text-blue-900 font-semibold mb-6 shadow-sm"
          >
            🌿 Premium Gated Community in Jorhat
          </motion.div>

          {/* heading */}
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900"
          >
            Discover Your Dream Home at{" "}
            <span className="text-blue-600">
              Subham Park
            </span>
          </motion.h1>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-6 text-lg text-slate-600 leading-8"
          >
            Experience a thoughtfully planned residential community with lush
            greenery, wide internal roads, modern amenities, and a secure future
            for your family in the heart of Jorhat.
          </motion.p>

          {/* price */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-8 inline-block bg-blue-50 border border-blue-200 px-6 py-4 rounded-2xl shadow"
          >
            <p className="text-sm uppercase tracking-widest text-blue-700">
              Starting From
            </p>
            <p className="text-3xl font-bold text-slate-900">
              ₹12 Lakhs*
            </p>
          </motion.div>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition"
            >
              Explore Project
            </a>

            <a
              href="#contact"
              className="bg-white border border-blue-200 text-blue-700 
              hover:bg-blue-50 px-8 py-4 rounded-full font-semibold transition"
            >
              Book Free Site Visit
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}