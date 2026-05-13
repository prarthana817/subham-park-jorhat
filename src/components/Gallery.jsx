// src/components/Gallery.jsx
// SMOOTH OPTIMIZED VERSION
// আগের version-এ অনেকগুলো image একসাথে animate হচ্ছিল,
// তাই hang করছিল। এই version-এ শুধুমাত্র 5টি visible image render হবে,
// animation duration কমানো হয়েছে এবং GPU-friendly transform ব্যবহার করা হয়েছে.

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import heroBg from "../assests/images/hero-bg.jpg";

import img1 from "../assests/images/gallery-1.jpg";
import img2 from "../assests/images/gallery-2.jpg";
import img3 from "../assests/images/gallery-3.jpg";
import img4 from "../assests/images/gallery-4.jpg";
import img5 from "../assests/images/gallery-5.jpg";
import img6 from "../assests/images/gallery-6.jpg";

export default function Gallery() {
  const images = useMemo(
    () => [img1, img2, img3, img4, img5, img6],
    []
  );

  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Relative position calculation
  const getRelativePosition = (i) => {
    const total = images.length;
    let diff = i - index;

    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff;
  };

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt="Gallery Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Green Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-400/10 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold">
          Project <span className="text-emerald-400">Gallery</span>
        </h2>

        <p className="mt-4 text-slate-300">
          Experience the lifestyle of Subham Park Jorhat
        </p>

        {/* Slider */}
        <div className="mt-20 relative h-[500px] flex items-center justify-center">
          {images.map((img, i) => {
            const pos = getRelativePosition(i);

            // Render only nearby images (-2 to +2)
            if (Math.abs(pos) > 2) return null;

            const isCenter = pos === 0;

            const settings = {
              0: {
                x: 0,
                scale: 1,
                opacity: 1,
                zIndex: 50,
                width: 420,
                height: 320,
              },
              1: {
                x: 260,
                scale: 0.85,
                opacity: 0.85,
                zIndex: 40,
                width: 320,
                height: 250,
              },
              2: {
                x: 430,
                scale: 0.7,
                opacity: 0.45,
                zIndex: 30,
                width: 260,
                height: 200,
              },
              [-1]: {
                x: -260,
                scale: 0.85,
                opacity: 0.85,
                zIndex: 40,
                width: 320,
                height: 250,
              },
              [-2]: {
                x: -430,
                scale: 0.7,
                opacity: 0.45,
                zIndex: 30,
                width: 260,
                height: 200,
              },
            };

            const style = settings[pos];

            return (
              <motion.img
                key={`${i}-${index}`}
                src={img}
                alt={`Gallery ${i + 1}`}
                onClick={() => setIndex(i)}
                className="absolute rounded-3xl shadow-2xl object-cover cursor-pointer border border-white/10 will-change-transform"
                animate={style}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  isCenter
                    ? {
                        scale: 1.03,
                      }
                    : {}
                }
              />
            );
          })}
        </div>

        {/* Description */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold">
            Modern Lifestyle Experience
          </h3>

          <p className="mt-3 text-slate-300 max-w-2xl mx-auto leading-8">
            A premium residential community surrounded by greenery,
            modern infrastructure, and thoughtfully designed spaces.
          </p>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === index
                  ? "w-8 h-3 bg-emerald-500"
                  : "w-3 h-3 bg-slate-500 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}