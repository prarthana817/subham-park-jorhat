// src/components/AboutUs.jsx

import { motion } from "framer-motion";
import {
  Leaf,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import img1 from "../assests/images/gallery-3.jpg";
import img2 from "../assests/images/gallery-5.jpg";
import img3 from "../assests/images/gallery-2.jpg";

const cards = [
  {
    title: "Elegant Architecture",
    desc: "Premium design with timeless modern aesthetics.",
    image: img1,
    icon: Leaf,
  },
  {
    title: "Luxury Lifestyle",
    desc: "Smart spaces crafted for refined living experience.",
    image: img2,
    icon: ShieldCheck,
  },
  {
    title: "Future Investment",
    desc: "A perfect blend of comfort and long term value.",
    image: img3,
    icon: TrendingUp,
  },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5f7fd] py-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img
          src={img1}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[1680px] mx-auto px-5 lg:px-8">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[0.85fr_1.55fr] gap-10 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-[430px]"
          >

            {/* TOP TAG */}
            <div className="flex items-center gap-5 mb-10">

              <div className="w-16 h-[2px] bg-gradient-to-r from-[#4c74ff] to-[#ca4dff]" />

              <p
                className="
                uppercase
                tracking-[0.4em]
                text-[14px]
                font-[400]
                text-[#5a72ff]
                "
              >
                About Us
              </p>

            </div>

            {/* TITLE */}
            <h2
              className="
              text-[58px]
              md:text-[74px]

              leading-[0.95]

              tracking-[-3px]

              font-[250]

              text-[#131927]
              "
            >
              Premium
              <br />
              Living
              <br />
              Experience
            </h2>

            {/* UNDERLINE */}
            <div
              className="
              mt-8

              w-[240px]
              h-[5px]

              rounded-full

              bg-gradient-to-r
              from-[#4c74ff]
              via-[#8667ff]
              to-[#d54cff]
              "
            />

            {/* DESCRIPTION */}
            <p
              className="
              mt-10

              text-[18px]

              leading-[2]

              font-[300]

              text-[#7e89a7]
              "
            >
              Discover a beautifully planned residential
              environment crafted with elegant architecture,
              premium lifestyle amenities and peaceful modern
              living experiences.
            </p>

          </motion.div>

          {/* RIGHT CARDS */}
          <div
            className="
            grid

            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3

            gap-6
            "
          >

            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="
                  relative

                  overflow-hidden

                  rounded-[34px]

                  bg-white/85
                  backdrop-blur-xl

                  border border-white/60

                  shadow-[0_20px_60px_rgba(15,23,42,0.08)]

                  transition-all
                  duration-500
                  "
                >

                  {/* IMAGE */}
                  <div
                    className="
                    relative

                    h-[250px]

                    overflow-hidden
                    "
                  >

                    <img
                      src={card.image}
                      alt={card.title}
                      className="
                      w-full
                      h-full

                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-105
                      "
                    />

                    {/* ICON */}
                    <div
                      className="
                      absolute
                      top-5
                      left-5

                      w-14
                      h-14

                      rounded-[20px]

                      bg-white/20
                      backdrop-blur-xl

                      border border-white/30

                      flex
                      items-center
                      justify-center
                      "
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="relative px-8 py-8">

                    {/* ARROW BUTTON */}
                    <div
                      className="
                      absolute
                      top-[-30px]
                      right-7

                      w-16
                      h-16

                      rounded-full

                      bg-gradient-to-r
                      from-[#4c74ff]
                      to-[#8f63ff]

                      shadow-[0_15px_40px_rgba(99,102,241,0.35)]

                      flex
                      items-center
                      justify-center
                      "
                    >
                      <ArrowUpRight className="w-7 h-7 text-white" />
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                      pr-14

                      text-[28px]

                      leading-[1.25]

                      tracking-[-1px]

                      font-[600]

                      text-[#151c34]
                      "
                    >
                      {card.title}
                    </h3>

                    {/* LINE */}
                    <div
                      className="
                      mt-6
                      mb-6

                      w-full
                      h-[1px]

                      bg-gradient-to-r
                      from-[#7c92ff]
                      to-transparent
                      "
                    />

                    {/* DESC */}
                    <p
                      className="
                      text-[17px]

                      leading-[2]

                      font-[300]

                      text-[#7d86a5]
                      "
                    >
                      {card.desc}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}