// src/components/Preloader.jsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assests/images/shubham_logo.png";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  const text = ["Subham", "Jorhat"];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.7,
              ease: "easeInOut",
            },
          }}
          className="
          fixed
          inset-0
          z-[999999]

          bg-[#f8f5ed]

          flex
          items-center
          justify-center

          overflow-hidden
          "
        >
          {/* LIGHT GLOW */}
          <div
            className="
            absolute

            w-[420px]
            h-[420px]

            rounded-full

            bg-[#d1a54d]/10

            blur-[120px]
            "
          />

          {/* SUBTLE GRID */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center">
            {/* LOGO */}
            <motion.div
              initial={{
                scale: 2,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6"
            >
              <img
                src={logo}
                alt="Logo"
                className="
                w-[180px]
                md:w-[220px]

                object-contain

                drop-shadow-[0_18px_40px_rgba(0,0,0,0.12)]
                "
              />
            </motion.div>

            {/* TEXT REVEAL */}
            <div className="flex items-center gap-4 overflow-hidden">
              {text.map((word, index) => (
                <div
                  key={index}
                  className="overflow-hidden"
                >
                  <motion.h2
                    initial={{
                      y: 120,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.5 + index * 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                    text-[#111111]

                    text-[42px]
                    md:text-[62px]

                    leading-none

                    tracking-[-2px]
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontWeight: 600,
                    }}
                  >
                    {word}
                  </motion.h2>
                </div>
              ))}
            </div>

            {/* GOLD LINE */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: "90px",
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: "easeOut",
              }}
              className="
              h-[2px]

              bg-[#d1a54d]

              mt-5
              mb-4

              rounded-full
              "
            />

            {/* SUBTEXT */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.4,
              }}
              className="
              text-[#b88a33]

              uppercase

              tracking-[0.32em]

              text-[10px]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              Premium Living Experience
            </motion.p>

            {/* LOADING BAR */}
            <div
              className="
              mt-9

              w-[220px]
              h-[2px]

              rounded-full

              bg-black/10

              overflow-hidden
              "
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "250%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.3,
                  ease: "easeInOut",
                }}
                className="
                h-full
                w-[30%]

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