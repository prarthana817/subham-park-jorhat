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
      className="
      relative
      overflow-hidden

      py-16
      lg:py-24

      bg-[#14234b]
      "
    >
      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "62px 62px",
        }}
      />

      {/* GLOW */}
      <div className="absolute top-[-120px] right-[-120px] w-[280px] h-[280px] bg-[#efe4cd]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 lg:px-8">

        {/* HEADER */}
        <div className="mb-10 lg:mb-12">

          {/* LABEL */}
          <div className="flex items-center gap-4 mb-5">

            <div className="w-[65px] h-[2px] bg-[#e8d9bb]" />

            <p
              className="
              uppercase
              tracking-[0.30em]

              text-[10px]
              md:text-[11px]

              text-[#efe4cd]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              Premium Floor Layouts
            </p>

          </div>

          {/* HEADING */}
          <h2
            className="
            text-white

            text-[42px]
            md:text-[56px]
            lg:text-[68px]

            leading-[0.95]
            tracking-[-2px]

            max-w-[920px]
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
              text-[#efe4cd]
              "
            >
              Living
            </span>{" "}

            Layouts
          </h2>

          {/* TEXT */}
          <p
            className="
            mt-5

            text-[#d7ddeb]

            text-[15px]
            lg:text-[17px]

            leading-[1.9]

            max-w-[760px]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
            }}
          >
            Discover thoughtfully designed residential layouts
            with spacious planning, elegant interiors and
            seamless spatial flow crafted for refined modern
            living.
          </p>

        </div>

        {/* MAIN BOX */}
        <div
          className="
          relative

          bg-[#f4ead6]

          border
          border-[#f0e2c8]

          rounded-[32px]

          overflow-hidden

          shadow-[0_22px_60px_rgba(0,0,0,0.20)]
          "
        >

          {/* INNER LINES */}
          <div
            className="
            absolute
            inset-0

            opacity-[0.04]
            pointer-events-none
            "
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right,#000000 0px,#000000 1px,transparent 1px,transparent 10px)",
            }}
          />

          <div className="relative p-5 md:p-7 lg:p-10">

            {/* BUTTONS */}
            <div
              className="
              flex
              flex-wrap

              gap-3

              mb-7
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
                  py-3

                  rounded-[16px]

                  border

                  transition-all
                  duration-300

                  ${
                    active.id === item.id
                      ? `
                        bg-[#14234b]
                        border-[#14234b]

                        shadow-[0_10px_25px_rgba(20,35,75,0.22)]
                      `
                      : `
                        bg-[#fbf6ec]
                        border-[#e5d6bb]

                        hover:bg-[#efe2c7]
                      `
                  }
                  `}
                >

                  <div>

                    <p
                      className={`
                      text-[8px]

                      uppercase
                      tracking-[0.16em]

                      mb-[3px]

                      ${
                        active.id === item.id
                          ? "text-[#efe4cd]"
                          : "text-[#9a866d]"
                      }
                      `}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      PLAN {index + 1}
                    </p>

                    <h3
                      className={`
                      text-[17px]

                      leading-none

                      ${
                        active.id === item.id
                          ? "text-white"
                          : "text-[#111111]"
                      }
                      `}
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
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

                    ${
                      active.id === item.id
                        ? "text-[#efe4cd]"
                        : "text-[#7f715e]"
                    }
                    `}
                  />

                </button>
              ))}

            </div>

            {/* IMAGE BOX */}
            <div
              className="
              bg-[#fbf6ec]

              border
              border-[#eadcc2]

              rounded-[28px]

              overflow-hidden

              shadow-[0_12px_35px_rgba(0,0,0,0.06)]
              "
            >

              <div className="p-4 lg:p-6">

                <AnimatePresence mode="wait">

                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >

                    {/* TOP */}
                    <div className="mb-5">

                      <div className="flex items-center gap-2 mb-2">

                        <Sparkles className="w-3.5 h-3.5 text-[#14234b]" />

                        <p
                          className="
                          uppercase
                          tracking-[0.18em]

                          text-[8px]

                          text-[#7f715e]
                          "
                          style={{
                            fontFamily:
                              "'Inter', sans-serif",
                            fontWeight: 500,
                          }}
                        >
                          Selected Layout
                        </p>

                      </div>

                      <h3
                        className="
                        text-[#111111]

                        text-[28px]
                        lg:text-[38px]

                        leading-none
                        "
                        style={{
                          fontFamily:
                            "'Cormorant Garamond', serif",
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

                      rounded-[22px]

                      bg-white

                      border
                      border-[#efe1c7]

                      p-3
                      lg:p-5

                      cursor-pointer
                      group
                      "
                    >

                      <img
                        src={active.image}
                        alt={active.title}
                        className="
                        w-full

                        max-h-[280px]
                        md:max-h-[420px]
                        lg:max-h-[520px]

                        object-contain

                        rounded-[14px]

                        transition-transform
                        duration-500

                        group-hover:scale-[1.015]
                        "
                      />

                    </div>

                  </motion.div>

                </AnimatePresence>

              </div>

            </div>

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

              max-w-6xl
              w-full

              rounded-[22px]

              overflow-hidden

              bg-[#f8f3ea]
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

                bg-[#14234b]
                hover:bg-[#1d3369]

                text-white

                flex
                items-center
                justify-center

                transition-all
                duration-300
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

                bg-[#f8f3ea]
                "
              />

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}