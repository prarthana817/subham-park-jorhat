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
          radial-gradient(circle at top left, rgba(214,144,115,0.08), transparent 24%),
          radial-gradient(circle at bottom right, rgba(86,189,183,0.08), transparent 28%),
          linear-gradient(
            135deg,
            #faf7f3 0%,
            #f6f1eb 22%,
            #f3ece5 45%,
            #efe5dc 70%,
            #eadfd5 100%
          )
        `,
      }}
    >
      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* BLURS */}
      <div className="absolute top-[-120px] right-[-120px] w-[380px] h-[380px] rounded-full bg-[#d8a285]/10 blur-[120px]" />

      <div className="absolute bottom-[-140px] left-[-100px] w-[320px] h-[320px] rounded-full bg-[#56bdb7]/10 blur-[120px]" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-4 lg:px-6">

        {/* HEADER */}
        <div className="mb-8">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-10 h-[2px] bg-[#d69073]" />

            <p
              className="uppercase tracking-[0.32em] text-[10px] text-[#b58671]"
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 400,
              }}
            >
              Premium Floor Layouts
            </p>

          </div>

          {/* HEADING */}
          <div className="max-w-[1200px]">

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

            {/* CONTENT */}
            <div className="mt-4 lg:ml-[250px] max-w-[900px]">

              <p
                className="
                text-[#6b625d]
                text-[14px]
                lg:text-[15px]
                leading-[1.9]
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 300,
                }}
              >
                Discover thoughtfully designed residential layouts with spacious planning, elegant interiors and seamless spatial flow crafted for refined modern living.
              </p>

            </div>

          </div>

        </div>

        {/* MAIN */}
        <div
          className="
          grid
          lg:grid-cols-[260px_1fr]

          overflow-hidden

          rounded-[28px]

          border
          border-[#e5d8cf]

          bg-[#fcf8f4]

          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          "
        >

          {/* LEFT MENU */}
          <div
            className="
            relative

            border-r
            border-[#e5d8cf]

            bg-gradient-to-b
            from-[#f0e5dc]
            to-[#e7d7ca]
            "
          >

            <div className="p-3 lg:p-4">

              {plans.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item)}
                  className={`
                  w-full
                  text-left

                  mb-3

                  px-4
                  py-3.5

                  rounded-[18px]

                  border

                  transition-all
                  duration-300

                  ${
                    active.id === item.id
                      ? `
                        bg-[#1f1f1f]
                        border-[#1f1f1f]
                        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                      `
                      : `
                        bg-[#fcfaf8]
                        border-[#ddd3cb]
                        hover:bg-[#f6eee7]
                      `
                  }
                  `}
                >

                  <div className="flex items-center justify-between gap-4">

                    <div>

                      <p
                        className={`
                        text-[9px]
                        uppercase
                        tracking-[0.25em]
                        mb-2

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
                        capitalize
                        text-[20px]
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
                      w-4
                      h-4
                      shrink-0

                      ${
                        active.id === item.id
                          ? "text-[#d6b09b]"
                          : "text-[#8f7b70]"
                      }
                      `}
                    />

                  </div>

                </button>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div
            className="
            relative

            bg-[#f3eee8]

            p-4
            lg:p-5
            "
          >

            <AnimatePresence mode="wait">

              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >

                {/* TOP */}
                <div className="mb-4">

                  <div className="flex items-center gap-2 mb-2">

                    <Sparkles className="w-4 h-4 text-[#d69073]" />

                    <p
                      className="
                      uppercase
                      tracking-[0.22em]
                      text-[9px]
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
                    text-[28px]
                    lg:text-[36px]
                    leading-[0.95]
                    tracking-[-1px]
                    "
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                    }}
                  >
                    {active.title}
                  </h3>

                </div>

                {/* IMAGE FRAME */}
                <div
                  onClick={() => setImageOpen(true)}
                  className="
                  relative
                  overflow-hidden

                  rounded-[18px]

                  bg-white

                  p-3

                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]

                  cursor-pointer
                  group
                  "
                >

                  <img
                    src={active.image}
                    alt={active.title}
                    className="
                    w-full

                    rounded-[12px]

                    object-cover

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
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="
              relative

              max-w-6xl
              w-full

              rounded-[22px]

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

                w-10
                h-10

                rounded-full

                bg-[#1f1f1f]
                text-white

                flex
                items-center
                justify-center
                "
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={active.image}
                alt={active.title}
                className="
                w-full
                max-h-[90vh]

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