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
      className="relative overflow-hidden py-32"
    >
      {/* BACKGROUND */}
      <img
        src={bgImage}
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5f7ff] to-[#fff0f8]" />

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-400/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
            relative
            flex
            flex-col
            justify-center
            min-h-[850px]
            "
          >

            {/* BIG ROUND LOGO */}
            <div
              className="
              absolute
              -left-10
              top-1/2
              -translate-y-1/2

              w-52
              h-52

              rounded-full

              bg-white/40
              backdrop-blur-3xl

              border
              border-white/60

              shadow-[0_0_100px_rgba(236,72,153,0.18)]

              flex
              items-center
              justify-center

              z-10
              "
            >
              <img
                src={logo}
                alt="Subham Park"
                className="w-28 h-28 object-contain"
              />
            </div>

            {/* TEXT CONTENT */}
            <div className="pl-40">

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
                mt-6

                text-[72px]
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
                mt-8
                max-w-[620px]

                text-[19px]
                leading-9

                text-slate-600
                "
              >
                Experience premium modern living with elegant
                architecture, peaceful green surroundings,
                smart amenities, and a beautifully planned
                residential community in Jorhat.
              </p>

              {/* SMALL FEATURE BOXES */}
              <div
                className="
                grid
                grid-cols-3
                gap-5
                mt-12
                max-w-[700px]
                "
              >

                {smallFeatures.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                      p-5

                      rounded-[26px]

                      bg-white/45
                      backdrop-blur-3xl

                      border
                      border-white/60

                      shadow-[0_10px_40px_rgba(99,102,241,0.10)]

                      flex
                      flex-col
                      items-center
                      text-center

                      hover:-translate-y-1
                      transition-all
                      duration-300
                      "
                    >

                      <div
                        className="
                        w-14
                        h-14

                        rounded-2xl

                        bg-gradient-to-r
                        from-blue-500
                        via-[#8b7cff]
                        to-pink-500

                        flex
                        items-center
                        justify-center
                        "
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <p
                        className="
                        mt-4
                        text-[15px]
                        font-semibold
                        text-[#16214a]
                        "
                      >
                        {item.title}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="
                  p-8

                  rounded-[34px]

                  bg-white/45
                  backdrop-blur-3xl

                  border
                  border-white/60

                  shadow-[0_15px_50px_rgba(99,102,241,0.10)]

                  transition-all
                  duration-300
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