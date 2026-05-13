// src/components/AboutUs.jsx

import { motion } from "framer-motion";
import {
  Leaf,
  Shield,
  TrendingUp,
} from "lucide-react";

import logo from "../assests/images/logo.png";
import bgImage from "../assests/images/about-day.jpg";

const features = [
  {
    icon: Leaf,
    title: "Green Environment",
    desc: "Lush landscapes and serene surroundings.",
  },
  {
    icon: Shield,
    title: "Secure Community",
    desc: "Safe and well-planned gated development.",
  },
  {
    icon: TrendingUp,
    title: "Smart Investment",
    desc: "Excellent future appreciation potential.",
  },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32 bg-[#f5f7ff]"
    >

      {/* BACKGROUND IMAGE */}
      <img
        src={bgImage}
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      {/* OVERLAY */}
      <div
        className="
        absolute inset-0

        bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.20),transparent_35%),linear-gradient(to_bottom_right,#eef4ff,#f7f4ff,#fff7fb)]

        backdrop-blur-[2px]
        "
      />

      {/* BLUE GLOW */}
      <div
        className="
        absolute
        top-[-120px]
        left-[-120px]

        w-[520px]
        h-[520px]

        bg-blue-400/30
        blur-[140px]
        rounded-full
        "
      ></div>

      {/* PINK GLOW */}
      <div
        className="
        absolute
        bottom-[-120px]
        right-[-120px]

        w-[520px]
        h-[520px]

        bg-pink-400/25
        blur-[140px]
        rounded-full
        "
      ></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* MAIN CONTENT */}
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
            w-[280px]
            h-[280px]

            rounded-full

            bg-white/50
            backdrop-blur-3xl

            border border-white/60

            shadow-[0_0_80px_rgba(236,72,153,0.15)]

            flex items-center justify-center

            shrink-0
            "
          >
            <img
              src={logo}
              alt="Subham Park"
              className="w-36 h-36 object-contain"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >

            {/* TAG */}
            <p
              className="
              uppercase
              tracking-[0.45em]
              text-sm
              font-semibold

              bg-gradient-to-r
              from-blue-500
              via-[#8b7cff]
              to-pink-500

              bg-clip-text
              text-transparent
              "
            >
              About Project
            </p>

            {/* HEADING */}
            <h2
              className="
              mt-5

              text-[52px]
              md:text-[70px]

              leading-[0.95]

              font-black

              text-[#101942]
              "
            >
              Premium Living at

              <span
                className="
                block

                bg-gradient-to-r
                from-blue-500
                via-[#8b7cff]
                to-pink-500

                bg-clip-text
                text-transparent
                "
              >
                Subham Park
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
              mt-7
              max-w-[720px]

              text-[18px]
              md:text-[20px]

              leading-9

              text-slate-600
              "
            >
              Experience premium modern living with elegant
              architecture, peaceful green surroundings,
              smart amenities, and a beautifully planned
              residential community in Jorhat.
            </p>

            {/* FEATURE BOXES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="
                    p-5

                    rounded-[24px]

                    bg-white/45
                    backdrop-blur-3xl

                    border border-white/60

                    shadow-[0_10px_40px_rgba(99,102,241,0.10)]

                    transition-all
                    duration-300
                    "
                  >

                    {/* ICON */}
                    <div
                      className="
                      w-14
                      h-14

                      rounded-2xl

                      bg-gradient-to-r
                      from-blue-500
                      via-[#8b7cff]
                      to-pink-500

                      flex items-center justify-center
                      "
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                      mt-4
                      text-lg
                      font-bold
                      text-[#16214a]
                      "
                    >
                      {feature.title}
                    </h3>

                    {/* DESC */}
                    <p
                      className="
                      mt-2
                      text-sm
                      leading-7
                      text-slate-600
                      "
                    >
                      {feature.desc}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}