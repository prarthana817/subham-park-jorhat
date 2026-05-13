import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assests/images/amenities-1.jpg";
import img2 from "../assests/images/amenities-2.jpg";

export default function Amenities() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const images = [img1, img2];

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      id="amenities"
      className="relative h-screen overflow-hidden cursor-pointer"
      onClick={() => setPaused(!paused)}
    >
      {/* BACKGROUND SLIDESHOW */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* LIGHT EFFECT */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-400/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

        <div className="max-w-4xl text-white">

          {/* SPLIT TITLE CONVERGENCE */}
          <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">

            {/* LEFT → AMENITIES */}
            <motion.h2
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold"
            >
              Amenities
            </motion.h2>

            {/* CENTER ICON / GLOW */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="w-3 h-3 md:w-4 md:h-4 bg-green-400 rounded-full shadow-[0_0_25px_#22c55e]"
            />

            {/* RIGHT → PREMIUM LIFESTYLE */}
            <motion.h2
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-green-400"
            >
              Premium Lifestyle
            </motion.h2>
          </div>

          {/* SUBTITLE (FORWARD PUSH FEEL) */}
          <motion.p
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 text-lg text-slate-200 leading-8"
          >
            Experience world-class living with modern infrastructure, lush green
            landscapes, and premium community amenities designed for elegance and comfort.
          </motion.p>

          {/* BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full font-semibold shadow-2xl transition"
          >
            Explore Amenities
          </motion.button>

        </div>
      </div>
    </section>
  );
}