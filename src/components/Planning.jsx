// src/components/Plans.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import planA from "../assests/images/plan-a.jpg";
import planB from "../assests/images/plan-b.jpg";
import planC from "../assests/images/plan-c.jpg";

const plans = [
  {
    id: "A",
    title: "Unit A",
    image: planA,
    size: "3 BHK Premium Apartment",
    desc: "Spacious modern layout with elegant living and dining experience.",
  },

  {
    id: "B",
    title: "Unit B",
    image: planB,
    size: "2 BHK Smart Living",
    desc: "Compact luxury planning with optimized comfort and ventilation.",
  },

  {
    id: "C",
    title: "Penthouse",
    image: planC,
    size: "Luxury Rooftop Residence",
    desc: "Premium private living crafted with modern architectural elegance.",
  },
];

export default function Plans() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="plan"
      className="
      relative

      overflow-hidden

      py-24

      bg-[#e9edf7]
      "
    >
      {/* SOLID PREMIUM BACKGROUND */}
      <div
        className="
        absolute
        inset-0

        bg-[linear-gradient(to_bottom_right,#eef2ff,#e8ecf7,#f4f6fb)]
        "
      />

      {/* LEFT GLOW */}
      <div
        className="
        absolute
        top-[-120px]
        left-[-120px]

        w-[300px]
        h-[300px]

        rounded-full

        bg-[#6c7cff]/10

        blur-[120px]
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
        absolute
        bottom-[-120px]
        right-[-120px]

        w-[300px]
        h-[300px]

        rounded-full

        bg-[#d56dff]/10

        blur-[120px]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          {/* LEFT */}
          <div>

            {/* TAG */}
            <div className="flex items-center gap-4 mb-6">

              <div
                className="
                w-14
                h-[2px]

                bg-gradient-to-r
                from-[#4f7cff]
                to-[#cb6ce6]
                "
              />

              <p
                className="
                uppercase

                tracking-[0.38em]

                text-[13px]

                font-[500]

                text-[#5e6eff]
                "
              >
                Master Plan
              </p>

            </div>

            {/* TITLE */}
            <h2
              className="
              text-[48px]
              md:text-[70px]

              leading-[0.95]

              tracking-[-3px]

              font-[300]

              text-[#121826]
              "
            >
              Premium
              <br />

              Living
              <br />

              <span
                className="
                bg-gradient-to-r
                from-[#4d7cff]
                to-[#c66dff]

                bg-clip-text
                text-transparent
                "
              >
                Layouts
              </span>
            </h2>

          </div>

          {/* BUTTONS */}
          <div
            className="
            flex
            items-center
            gap-4

            flex-wrap
            "
          >
            {plans.map((plan, index) => (
              <button
                key={plan.id}
                onClick={() => setActive(index)}
                className={`
                px-7
                py-3

                rounded-full

                text-sm
                tracking-[0.18em]
                uppercase

                transition-all
                duration-300

                border

                ${
                  active === index
                    ? `
                    bg-gradient-to-r
                    from-[#4d7cff]
                    to-[#c66dff]

                    text-white

                    border-transparent

                    shadow-[0_10px_35px_rgba(99,102,241,0.35)]
                    `
                    : `
                    bg-white/80
                    backdrop-blur-xl

                    text-[#20263d]

                    border-white/70

                    hover:border-[#6b7dff]
                    hover:text-[#5b6dff]
                    `
                }
                `}
              >
                {plan.title}
              </button>
            ))}
          </div>

        </div>

        {/* MAIN CARD */}
        <div className="mt-16">

          <div
            className="
            grid
            lg:grid-cols-[1.05fr_0.95fr]

            overflow-hidden

            rounded-[42px]

            bg-white/80
            backdrop-blur-xl

            border border-white/70

            shadow-[0_25px_80px_rgba(15,23,42,0.08)]

            shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]
            "
          >

            {/* IMAGE */}
            <div
              className="
              relative

              min-h-[320px]
              lg:min-h-[620px]

              bg-[#f8f9fd]
              "
            >

              <AnimatePresence mode="wait">
                <motion.img
                  key={plans[active].image}
                  src={plans[active].image}
                  alt={plans[active].title}

                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}

                  transition={{ duration: 0.5 }}

                  className="
                  absolute
                  inset-0

                  w-full
                  h-full

                  object-contain
                  "
                />
              </AnimatePresence>

            </div>

            {/* RIGHT */}
            <div
              className="
              flex
              flex-col
              justify-center

              p-8
              md:p-12
              lg:p-16
              "
            >

              {/* SMALL */}
              <p
                className="
                uppercase

                tracking-[0.35em]

                text-[12px]

                text-[#6b7dff]

                font-[500]
                "
              >
                Floor Plan
              </p>

              {/* TITLE */}
              <h3
                className="
                mt-5

                text-[38px]
                md:text-[52px]

                leading-[1]

                tracking-[-2px]

                font-[300]

                text-[#121826]
                "
              >
                {plans[active].title}
              </h3>

              {/* LINE */}
              <div
                className="
                mt-7

                w-full
                h-[1px]

                bg-gradient-to-r
                from-[#5d7dff]
                to-transparent
                "
              />

              {/* SIZE */}
              <p
                className="
                mt-8

                text-[22px]

                font-[500]

                text-[#1f2940]
                "
              >
                {plans[active].size}
              </p>

              {/* DESC */}
              <p
                className="
                mt-5

                max-w-[460px]

                text-[16px]

                leading-[2]

                font-[300]

                text-[#6d7896]
                "
              >
                {plans[active].desc}
              </p>

              {/* FEATURES */}
              <div
                className="
                mt-10

                grid
                grid-cols-2

                gap-4
                "
              >

                {[
                  "Luxury Finish",
                  "Modern Layout",
                  "Natural Ventilation",
                  "Premium Lifestyle",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                    flex
                    items-center
                    gap-3

                    rounded-2xl

                    px-4
                    py-4

                    bg-[#f6f8ff]

                    border border-white

                    text-[#2c3550]

                    text-sm
                    "
                  >

                    <div
                      className="
                      w-2
                      h-2

                      rounded-full

                      bg-gradient-to-r
                      from-[#4f7cff]
                      to-[#cb6ce6]
                      "
                    />

                    {item}

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}