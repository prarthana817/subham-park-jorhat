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

  const letters = [
    { char: "J", color: "#e3a17b" },
    { char: "O", color: "#d8b5a7" },
    { char: "R", color: "#79cfc1" },
    { char: "H", color: "#b8b1a7" },
    { char: "A", color: "#d8c7ba" },
    { char: "T", color: "#aeb9be" },
  ];

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
                scale: 1.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-0"
            >
              <img
                src={logo}
                alt="Logo"
                className="
                w-[155px]
                md:w-[190px]

                object-contain

                drop-shadow-[0_18px_40px_rgba(0,0,0,0.10)]
                "
              />
            </motion.div>

            {/* TOP TEXT */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
              uppercase

              tracking-[0.24em]

              text-[10px]
              md:text-[11px]

              text-[#b9b0a2]

              mb-[-4px]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
              }}
            >
              Aspirational Living In
            </motion.p>

            {/* JORHAT MULTICOLOR */}
            <div
              className="
              flex
              items-center

              leading-[0.82]

              select-none
              "
            >
              {letters.map((item, index) => (
                <motion.span
                  key={index}
                  initial={{
                    x: -80,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.45 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                  text-[74px]
                  md:text-[112px]

                  tracking-[-5px]
                  "
                  style={{
                    color: item.color,
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontWeight: 700,
                  }}
                >
                  {item.char}
                </motion.span>
              ))}
            </div>

            {/* BOTTOM TEXT */}
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.15,
              }}
              className="
              uppercase

              tracking-[0.40em]

              text-[9px]
              md:text-[10px]

              text-[#b9b0a2]

              mt-[-2px]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
              }}
            >
              Is Now A Reality!
            </motion.p>

            {/* GOLD LINE */}
            <motion.div
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: "78px",
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 1.35,
                ease: "easeOut",
              }}
              className="
              h-[2px]

              bg-[#d1a54d]

              mt-4
              mb-3

              rounded-full
              "
            />

            {/* SUBTEXT */}
            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 1.5,
              }}
              className="
              text-[#c59b45]

              uppercase

              tracking-[0.28em]

              text-[9px]
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
              mt-7

              w-[200px]
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
                  duration: 1.2,
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