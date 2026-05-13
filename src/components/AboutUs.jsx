// src/components/AboutUs.jsx

import { motion } from "framer-motion";
import {
  Leaf,
  Shield,
  TrendingUp,
  MapPin,
  Building2,
  Trees,
} from "lucide-react";

import logo from "../assets/images/logo.png";
import bgImage from "../assets/images/about-day.jpg";

const topFeatures = [
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

const smallFeatures = [
  {
    icon: MapPin,
    title: "Prime Location",
  },
  {
    icon: Building2,
    title: "Modern Design",
  },
  {
    icon: Trees,
    title: "Open Green Space",
  },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28"
    >
      {/* Background */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[3px]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-400/20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-start justify-center"
          >

            {/* BIG ROUND LOGO */}
            <div
              className="
              w-40
              h-40
              rounded-full
              bg-white/70
              backdrop-blur-2xl
              border
              border-white/40
              shadow-[0_20px_60px_rgba(99,102,241,0.18)]
              flex
              items-center
              justify-center
              mb-10
              "
            >
              <img
                src={logo}
                alt="Subham Park"
                className="w-24 h-24 object-contain"
              />
            </div>

            {/* SMALL TITLE */}
            <p
              className="
              uppercase
              tracking-[0.4em]
              text-sm
              font-semibold
              bg-gradient-to-r
              from-blue-500
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
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              leading-[1.05]
              text-[#0f172a]
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
                Subham Park Jorhat
              </span>
            </h2>

            {/* TEXT */}
            <p
              className="
              mt-7
              text-lg
              leading-9
              text-slate-600
              max-w-2xl
              "
            >
              Subham Park is a thoughtfully planned residential project
              in Jorhat, Assam, designed to offer modern living,
              elegant surroundings, premium comfort, and future-ready
              investment opportunities.
            </p>

            {/* SMALL FEATURE BOXES */}
            <div className="flex flex-wrap gap-4 mt-10">

              {smallFeatures.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                    flex
                    items-center
                    gap-3
                    px-5
                    py-4
                    rounded-2xl
                    bg-white/65
                    backdrop-blur-xl
                    border
                    border-white/40
                    shadow-lg
                    "
                  >
                    <div
                      className="
                      w-11
                      h-11
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-500
                      to-pink-500
                      flex
                      items-center
                      justify-center
                      "
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <p className="font-semibold text-[#16214a]">
                      {item.title}
                    </p>
                  </div>
                );
              })}

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {topFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="
                  p-8
                  rounded-[34px]
                  bg-white/60
                  backdrop-blur-2xl
                  border
                  border-white/40
                  shadow-[0_15px_50px_rgba(99,102,241,0.10)]
                  "
                >

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-500
                    via-[#8b7cff]
                    to-pink-500
                    flex
                    items-center
                    justify-center
                    shadow-xl
                    "
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3
                    className="
                    mt-6
                    text-3xl
                    font-bold
                    text-[#16214a]
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                    mt-3
                    text-lg
                    leading-8
                    text-slate-600
                    "
                  >
                    {feature.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}