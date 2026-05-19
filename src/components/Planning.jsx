// src/components/Planning.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, X } from "lucide-react";

import plan1 from "../assests/images/plan1.jpg";
import plan2 from "../assests/images/plan2.jpg";
import plan3 from "../assests/images/plan3.jpg";
import plan4 from "../assests/images/plan4.jpg";
import plan5 from "../assests/images/plan5.jpg";
import plan6 from "../assests/images/plan6.jpg";
import plan7 from "../assests/images/plan7.jpg";
import plan8 from "../assests/images/plan8.jpg";

const plans = [
  { id: 1, title: "1st Floor", image: plan8 },
  { id: 2, title: "2nd Floor", image: plan6 },
  { id: 3, title: "2nd & 5th Floor", image: plan4 },
  { id: 4, title: "3rd Floor", image: plan3 },
  { id: 5, title: "3rd & 6th Floor", image: plan2 },
  { id: 6, title: "4th Floor", image: plan7 },
  { id: 7, title: "5th Floor", image: plan5 },
  { id: 8, title: "6th Floor", image: plan1 },
];

export default function FloorPlans() {
  const [active, setActive] = useState(plans[0]);
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <section
      id="planning"
      className="relative overflow-hidden py-10 lg:py-12"
      style={{
        background: `
          linear-gradient(
            135deg,
            #faf7f3 0%,
            #f4ede6 45%,
            #eadfd5 100%
          )
        `,
      }}
    >
      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 lg:px-5">

        {/* HEADER */}
        <div className="mb-6">

          <div className="flex items-center gap-3 mb-3">

            <div className="w-10 h-[2px] bg-[#d69073]" />

            <p
              className="uppercase tracking-[0.28em] text-[10px] text-[#b58671]"
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 400,
              }}
            >
              Premium Floor Layouts
            </p>

          </div>

          {/* HEADING */}
          <h2
            className="
            text-[#111111]
            text-[42px]
            md:text-[54px]
            lg:text-[64px]

            leading-[0.95]
            tracking-[-2px]
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            Elegant{" "}

            <span
              className="
              italic
              bg-gradient-to-r
              from-[#f7c58b]
              via-[#d69073]
              to-[#b86d4b]
              bg-clip-text
              text-transparent
              "
            >
              Living
            </span>{" "}

            Layouts
          </h2>

          {/* TEXT */}
          <p
            className="
            mt-3

            text-[#6b625d]
            text-[15px]
            lg:text-[17px]

            leading-[1.9]

            max-w-[760px]
            "
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontWeight: 300,
            }}
          >
            Discover thoughtfully designed residential layouts with spacious planning, elegant interiors and seamless spatial flow crafted for refined modern living.
          </p>

        </div>

        {/* BUTTONS */}
        <div
          className="
          flex
          flex-wrap
          gap-3

          mb-5
          "
        >

          {plans.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(item)}
              className={`
              flex
              items-center
              gap-2

              px-4
              py-2.5

              rounded-[14px]

              border

              transition-all
              duration-300

              ${
                active.id === item.id
                  ? `
                    bg-[#1f1f1f]
                    border-[#1f1f1f]
                  `
                  : `
                    bg-[#fcfaf8]
                    border-[#ddd3cb]
                    hover:bg-[#f6eee7]
                  `
              }
              `}
            >

              <div>

                <p
                  className={`
                  text-[7px]
                  uppercase
                  tracking-[0.16em]
                  mb-[2px]

                  ${
                    active.id === item.id
                      ? "text-[#d6b09b]"
                      : "text-[#b58a74]"
                  }
                  `}
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  PLAN {index + 1}
                </p>

                <h3
                  className={`
                  text-[16px]
                  leading-none

                  ${
                    active.id === item.id
                      ? "text-white"
                      : "text-[#1f1f1f]"
                  }
                  `}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </h3>

              </div>

              <ArrowRight
                className={`
                w-3.5
                h-3.5

                ${
                  active.id === item.id
                    ? "text-[#d6b09b]"
                    : "text-[#8f7b70]"
                }
                `}
              />

            </button>
          ))}

        </div>

        {/* IMAGE BOX */}
        <div
          className="
          bg-[#fcf8f4]

          border
          border-[#e5d8cf]

          rounded-[24px]

          overflow-hidden

          shadow-[0_12px_35px_rgba(0,0,0,0.05)]
          "
        >

          <div className="p-4">

            <AnimatePresence mode="wait">

              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >

                {/* TOP */}
                <div className="mb-3">

                  <div className="flex items-center gap-2 mb-1">

                    <Sparkles className="w-3 h-3 text-[#d69073]" />

                    <p
                      className="
                      uppercase
                      tracking-[0.18em]
                      text-[8px]
                      text-[#b58671]
                      "
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      Selected Layout
                    </p>

                  </div>

                  <h3
                    className="
                    text-[#111111]
                    text-[26px]
                    lg:text-[34px]

                    leading-none
                    "
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                    }}
                  >
                    {active.title}
                  </h3>

                </div>

                {/* IMAGE */}
                <div
                  onClick={() => setImageOpen(true)}
                  className="
                  relative
                  overflow-hidden

                  rounded-[18px]

                  bg-white

                  p-3

                  cursor-pointer
                  group
                  "
                >

                  <img
                    src={active.image}
                    alt={active.title}
                    className="
                    w-full

                    max-h-[260px]
                    lg:max-h-[340px]

                    object-contain

                    rounded-[12px]

                    transition-transform
                    duration-500

                    group-hover:scale-[1.01]
                    "
                  />

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>

        {imageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
            fixed
            inset-0
            z-50

            bg-black/90

            flex
            items-center
            justify-center

            p-4
            "
          >

            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              className="
              relative

              max-w-5xl
              w-full

              rounded-[18px]

              overflow-hidden

              bg-white
              "
            >

              <button
                onClick={() => setImageOpen(false)}
                className="
                absolute
                top-4
                right-4
                z-20

                w-9
                h-9

                rounded-full

                bg-[#1f1f1f]
                text-white

                flex
                items-center
                justify-center
                "
              >
                <X className="w-4 h-4" />
              </button>

              <img
                src={active.image}
                alt={active.title}
                className="
                w-full
                max-h-[88vh]

                object-contain

                bg-[#f8f5f1]
                "
              />

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}