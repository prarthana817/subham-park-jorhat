import { motion } from "framer-motion";
import {
  Dumbbell,
  Trees,
  Waves,
  Building2,
  Gamepad2,
  Trophy,
} from "lucide-react";

import img1 from "../assests/images/location-map.jpg";
import img2 from "../assests/images/gallery-2.jpg";
import img3 from "../assests/images/gallery-3.jpg";
import img4 from "../assests/images/gallery-5.jpg";
import img5 from "../assests/images/gallery-4.jpg";
import img6 from "../assests/images/gallery-6.jpg";
const amenities = [
  {
    title: "Community Hall",
    desc: "Elegant gathering and event space.",
    image: img1,
    icon: Building2,
  },
  {
    title: "Modern Gym",
    desc: "Advanced fitness and wellness zone.",
    image: img2,
    icon: Dumbbell,
  },
  {
    title: "Lawn Area",
    desc: "Beautiful landscaped green retreat.",
    image: img3,
    icon: Trees,
  },
  {
    title: "Swimming Pool",
    desc: "Luxury pool with relaxing ambience.",
    image: img4,
    icon: Waves,
  },
  {
    title: "Badminton Court",
    desc: "Professional sports experience.",
    image: img5,
    icon: Trophy,
  },
  {
    title: "Indoor Games",
    desc: "Fun gaming and leisure activities.",
    image: img6,
    icon: Gamepad2,
  },
];

const stats = [
  {
    number: "120+",
    label: "Families",
  },
  {
    number: "25+",
    label: "Amenities",
  },
  {
    number: "15K+",
    label: "Green Area",
  },
  {
    number: "24/7",
    label: "Security",
  },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="relative overflow-hidden py-20 bg-[#eef2ff]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.10),transparent_30%)]" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-5 lg:px-6">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          {/* LEFT */}
          <div className="max-w-[520px]">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-[2px] bg-gradient-to-r from-[#4f7cff] to-[#c026d3]" />

              <p
                className="
                uppercase
                tracking-[0.38em]
                text-[11px]
                font-[400]
                text-[#5e6dff]
                "
              >
                Premium Amenities
              </p>

            </div>

            <h2
              className="
              text-[42px]
              md:text-[58px]

              leading-[0.95]

              tracking-[-2px]

              font-[300]

              text-[#111827]
              "
            >
              Luxury
              <br />

              Living
              <br />

              <span className="bg-gradient-to-r from-[#4677ff] to-[#965cff] bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <div
              className="
              mt-5

              w-[180px]
              h-[4px]

              rounded-full

              bg-gradient-to-r
              from-[#4677ff]
              to-[#d946ef]
              "
            />

            <p
              className="
              mt-7

              text-[15px]

              leading-[2]

              font-[300]

              text-[#74809d]
              "
            >
              Thoughtfully designed premium amenities for
              elegant modern living and peaceful comfort.
            </p>

          </div>

          {/* ROTATING CIRCLE */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-[170px] h-[170px]">

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                absolute
                inset-0

                rounded-full

                border border-[#cfd7f7]

                flex
                items-center
                justify-center
                "
              >
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="
                        M 100,100
                        m -70,0
                        a 70,70 0 1,1 140,0
                        a 70,70 0 1,1 -140,0
                      "
                    />
                  </defs>

                  <text
                    fill="#6675ff"
                    fontSize="12"
                    letterSpacing="4"
                  >
                    <textPath href="#circlePath">
                      SHUBHAM PARK • JORHAT • PREMIUM LIVING •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              <div
                className="
                absolute
                inset-[28px]

                rounded-full

                bg-gradient-to-br
                from-[#4677ff]
                to-[#9c5cff]

                shadow-[0_15px_40px_rgba(99,102,241,0.25)]

                flex
                items-center
                justify-center
                "
              >
                <span
                  className="
                  text-white

                  text-[14px]

                  tracking-[0.2em]

                  uppercase

                  font-[300]
                  "
                >
                  WHY
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* CARDS */}
        <div
          className="
          mt-16

          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3

          gap-5
          "
        >
          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="
                group

                overflow-hidden

                rounded-[28px]

                bg-[#f7f9ff]

                border border-[#dde5ff]

                hover:bg-gradient-to-br
                hover:from-[#4677ff]
                hover:to-[#905cff]

                transition-all
                duration-500

                shadow-[0_10px_35px_rgba(15,23,42,0.06)]
                "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden h-[210px]">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                    w-full
                    h-full

                    object-cover

                    group-hover:scale-110

                    transition-transform
                    duration-700
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* ICON */}
                  <div
                    className="
                    absolute
                    top-4
                    left-4

                    w-12
                    h-12

                    rounded-[16px]

                    bg-white/20
                    backdrop-blur-xl

                    border border-white/20

                    flex
                    items-center
                    justify-center
                    "
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <div className="flex items-start justify-between gap-4">

                    <h3
                      className="
                      text-[28px]

                      leading-[1.08]

                      tracking-[-1px]

                      font-[500]

                      text-[#12192f]

                      group-hover:text-white

                      transition-colors
                      duration-500
                      "
                    >
                      {item.title}
                    </h3>

                    <div
                      className="
                      shrink-0

                      w-12
                      h-12

                      rounded-full

                      bg-gradient-to-br
                      from-[#4677ff]
                      to-[#9c5cff]

                      flex
                      items-center
                      justify-center

                      text-white
                      text-xl

                      group-hover:bg-white
                      group-hover:text-[#5f63ff]

                      transition-all
                      duration-500
                      "
                    >
                      ↗
                    </div>

                  </div>

                  <div
                    className="
                    mt-5

                    w-full
                    h-[2px]

                    bg-gradient-to-r
                    from-[#7b8cff]
                    to-transparent

                    group-hover:from-white
                    "
                  />

                  <p
                    className="
                    mt-5

                    text-[15px]

                    leading-[1.9]

                    font-[300]

                    text-[#7d87a5]

                    group-hover:text-white/85

                    transition-colors
                    duration-500
                    "
                  >
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-24">

          <div className="text-center">

            <p
              className="
              uppercase

              tracking-[0.35em]

              text-[11px]

              text-[#6b73ff]
              "
            >
              Why Choose Us
            </p>

            <h3
              className="
              mt-4

              text-[36px]
              md:text-[48px]

              leading-[1]

              tracking-[-2px]

              font-[300]

              text-[#111827]
              "
            >
              Crafted For
              <span className="block bg-gradient-to-r from-[#4677ff] to-[#965cff] bg-clip-text text-transparent">
                Premium Families
              </span>
            </h3>

          </div>

          {/* STATS */}
          <div
            className="
            mt-12

            grid
            grid-cols-2
            lg:grid-cols-4

            gap-5
            "
          >
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="
                rounded-[24px]

                bg-[#f7f9ff]

                border border-[#dfe5ff]

                hover:bg-gradient-to-br
                hover:from-[#4677ff]
                hover:to-[#9c5cff]

                px-6
                py-8

                text-center

                transition-all
                duration-500

                shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                "
              >
                <h4
                  className="
                  text-[34px]

                  leading-none

                  font-[500]

                  bg-gradient-to-r
                  from-[#4677ff]
                  to-[#965cff]

                  bg-clip-text
                  text-transparent

                  group-hover:text-white
                  "
                >
                  {item.number}
                </h4>

                <p
                  className="
                  mt-3

                  text-[13px]

                  tracking-[0.08em]

                  uppercase

                  text-[#7d87a5]
                  "
                >
                  {item.label}
                </p>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}