// src/components/Preloader.jsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assests/images/logo.png";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
          className="
          fixed
          inset-0
          z-[999999]

          bg-[#0b1635]

          flex
          items-center
          justify-center

          overflow-hidden
          "
        >
          {/* BACKGROUND GLOW */}
          <div
            className="
            absolute
            w-[420px]
            h-[420px]
            rounded-full
            bg-[#d1a54d]/20
            blur-[120px]
            "
          />

          {/* GRID */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center">
            {/* ROTATING RING */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear",
              }}
              className="
              absolute
              w-[170px]
              h-[170px]
              rounded-full
              border
              border-dashed
              border-[#d1a54d]/40
              "
            />

            {/* SECOND RING */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
              className="
              absolute
              w-[220px]
              h-[220px]
              rounded-full
              border
              border-[#ffffff10]
              "
            />

            {/* LOGO BOX */}
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="
              relative

              w-[120px]
              h-[120px]

              rounded-[28px]

              bg-white

              shadow-[0_20px_60px_rgba(0,0,0,0.35)]

              flex
              items-center
              justify-center
              "
            >
              <motion.img
                src={logo}
                alt="Logo"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="
                w-[82px]
                object-contain
                "
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="mt-10 text-center"
            >
              <h2
                className="
                text-white

                text-[34px]
                md:text-[42px]

                tracking-[-1px]
                "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                Subham Group
              </h2>

              <p
                className="
                mt-2

                text-[#d1a54d]

                uppercase
                tracking-[0.35em]

                text-[10px]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                Premium Living Experience
              </p>
            </motion.div>

            {/* LOADING BAR */}
            <div
              className="
              mt-10

              w-[220px]
              h-[3px]

              rounded-full

              bg-white/10

              overflow-hidden
              "
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  ease: "easeInOut",
                }}
                className="
                h-full
                w-[40%]

                rounded-full

                bg-[#d1a54d]
                "
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}