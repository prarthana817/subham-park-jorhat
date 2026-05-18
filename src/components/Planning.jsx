// src/components/Planning.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers3,
  Building2,
  ArrowRight,
  Sparkles,
  X,
} from "lucide-react";

import plan1 from "../assests/images/plan1.jpg";
import plan2 from "../assests/images/plan2.jpg";
import plan3 from "../assests/images/plan3.jpg";
import plan4 from "../assests/images/plan4.jpg";
import plan5 from "../assests/images/plan5.jpg";
import plan6 from "../assests/images/plan6.jpg";
import plan7 from "../assests/images/plan7.jpg";
import plan8 from "../assests/images/plan8.jpg";

const plans = [
  {
    id: 1,
    title: "1st Floor",
    image: plan8,
    size: "Signature Floor Plan",
    desc: "Premium apartment composition inspired by luxury living.",
  },
  {
    id: 2,
    title: "2nd Floor",
    image: plan6,
    size: "Family Residence",
    desc: "Thoughtfully planned units with efficient space utilization.",
  },
  {
    id: 3,
    title: "2nd & 5th Floor",
    image: plan4,
    size: "Classic Layout",
    desc: "Functional premium residences with refined planning.",
  },
  {
    id: 4,
    title: "3rd Floor",
    image: plan3,
    size: "Comfort Living",
    desc: "Elegant apartment layout with spacious circulation areas.",
  },
  {
    id: 5,
    title: "3rd & 6th Floor",
    image: plan2,
    size: "Smart Family Plan",
    desc: "Balanced floor arrangement designed for modern families.",
  },
  {
    id: 6,
    title: "4th Floor",
    image: plan7,
    size: "Modern Configuration",
    desc: "Modern architectural planning with elegant zoning.",
  },
  {
    id: 7,
    title: "5th Floor",
    image: plan5,
    size: "Luxury Unit Plan",
    desc: "Wide-open living spaces with premium room alignment.",
  },
  {
    id: 8,
    title: "6th Floor",
    image: plan1,
    size: "3BHK Premium Layout",
    desc: "Large luxury residences with open balconies and cross ventilation.",
  },
];

export default function FloorPlans() {
  const [active, setActive] = useState(plans[0]);
  const [open, setOpen] = useState(false);

  return (
    <section
      id="planning"
      className="
      relative
      overflow-hidden
      py-20
      lg:py-24
      "
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
        className="
        absolute
        inset-0
        opacity-[0.05]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "65px 65px",
        }}
      />

      {/* LEFT LINES */}
      <div
        className="
        absolute
        left-0
        top-0
        h-full
        w-[120px]
        opacity-[0.08]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, transparent 1px, transparent 10px)",
        }}
      />

      {/* ORANGE BLUR */}
      <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full bg-[#d8a285]/10 blur-[140px]" />

      {/* CYAN BLUR */}
      <div className="absolute bottom-[-180px] left-[-120px] w-[380px] h-[380px] rounded-full bg-[#56bdb7]/10 blur-[130px]" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/20" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-4 lg:px-6">

        {/* HEADER */}
        <div
          className="
          flex
          flex-col
          lg:flex-row
          lg:items-end
          lg:justify-between
          gap-10
          mb-14
          "
        >
          <div className="max-w-[720px]">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-10 h-[2px] bg-[#d69073]" />

              <p
                className="
                uppercase
                tracking-[0.32em]
                text-[11px]
                text-[#b58671]
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Premium Floor Layouts
              </p>

            </div>

            <h2
              className="
              text-[42px]
              sm:text-[54px]
              lg:text-[72px]
              leading-[0.92]
              tracking-[-2px]
              text-[#1f1f1f]
              "
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontWeight: 400,
              }}
            >
              MASTER
              <br />
              FLOOR PLANS
            </h2>

          </div>

          <div
            className="
            lg:max-w-[420px]
            text-[#5f5953]
            text-[15px]
            leading-[1.9]
            "
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontWeight: 300,
            }}
          >
            Explore beautifully crafted residential layouts
            designed with functional luxury, open living,
            premium ventilation and refined architectural flow.
          </div>

        </div>

        {/* MAIN */}
        <div
          className="
          grid
          lg:grid-cols-[300px_1fr]

          overflow-hidden

          border
          border-[#e5d8cf]

          bg-[#fdf9f6]

          shadow-[0_35px_80px_rgba(0,0,0,0.08)]
          "
        >

          {/* LEFT */}
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

            {/* DOTS */}
            <div
              className="
              absolute
              inset-0
              opacity-[0.10]
              "
              style={{
                backgroundImage:
                  "radial-gradient(#b79e8d 1px, transparent 1px)",
                backgroundSize: "15px 15px",
              }}
            />

            <div className="relative z-10 p-4">

              {plans.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item)}
                  className={`
                  w-full
                  text-left
                  mb-3
                  p-4

                  border

                  transition-all
                  duration-300

                  ${
                    active.id === item.id
                      ? `
                        bg-[#1f1f1f]
                        border-[#1f1f1f]
                        shadow-[0_12px_25px_rgba(0,0,0,0.12)]
                      `
                      : `
                        bg-[#fcfaf8]
                        border-[#ddd3cb]
                        hover:bg-[#f6eee7]
                      `
                  }
                  `}
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p
                        className={`
                        text-[11px]
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
                          fontFamily: "'Raleway', sans-serif",
                        }}
                      >
                        Plan {index + 1}
                      </p>

                      <h3
                        className={`
                        text-[22px]
                        leading-none

                        ${
                          active.id === item.id
                            ? "text-white"
                            : "text-[#1f1f1f]"
                        }
                        `}
                        style={{
                          fontFamily: "'Cinzel Decorative', serif",
                          fontWeight: 400,
                        }}
                      >
                        {item.title}
                      </h3>

                    </div>

                    <ArrowRight
                      className={`
                      w-5
                      h-5

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
          <div className="relative p-5 lg:p-8">

            <AnimatePresence mode="wait">

              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >

                {/* TOP */}
                <div
                  className="
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                  gap-6
                  mb-8
                  "
                >

                  <div>

                    <div className="flex items-center gap-3 mb-3">

                      <Sparkles className="w-4 h-4 text-[#d69073]" />

                      <p
                        className="
                        uppercase
                        tracking-[0.25em]
                        text-[11px]
                        text-[#b58671]
                        "
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                        }}
                      >
                        Selected Layout
                      </p>

                    </div>

                    <h3
                      className="
                      text-[36px]
                      lg:text-[48px]
                      leading-none
                      text-[#1f1f1f]
                      "
                      style={{
                        fontFamily: "'Cinzel Decorative', serif",
                        fontWeight: 400,
                      }}
                    >
                      {active.title}
                    </h3>

                  </div>

                </div>

                {/* IMAGE */}
                <div
                  className="
                  relative
                  overflow-hidden

                  border
                  border-[#ddd3cb]

                  bg-[#f8f5f1]

                  p-3

                  shadow-[0_15px_35px_rgba(0,0,0,0.06)]
                  "
                >

                  <img
                    src={active.image}
                    alt={active.title}
                    className="
                    w-full
                    object-cover
                    "
                  />

                </div>

                {/* BOTTOM */}
                <div
                  className="
                  mt-7
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                  gap-6
                  "
                >

                  <p
                    className="
                    max-w-[720px]
                    text-[15px]
                    leading-[1.9]
                    text-[#5f5953]
                    "
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {active.desc}
                  </p>

                  <button
                    onClick={() => setOpen(true)}
                    className="
                    px-7
                    py-3

                    bg-[#1f1f1f]
                    hover:bg-[#d69073]

                    text-white

                    text-[13px]
                    uppercase
                    tracking-[0.2em]

                    transition-all
                    duration-300
                    "
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    View Details
                  </button>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
            fixed
            inset-0
            z-50

            bg-black/80

            flex
            items-center
            justify-center

            p-4
            "
          >

            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              className="
              relative
              max-w-6xl
              w-full

              bg-white
              overflow-hidden
              "
            >

              <button
                onClick={() => setOpen(false)}
                className="
                absolute
                top-4
                right-4
                z-20

                w-10
                h-10

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