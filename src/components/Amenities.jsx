// src/components/Amenities.jsx

import { motion } from "framer-motion";

import {
  Dumbbell,
  Trees,
  Waves,
  Building2,
  Gamepad2,
  Trophy,
  ShieldCheck,
  CarFront,
  Sparkles,
  Camera,
  Leaf,
} from "lucide-react";

const amenities = [
  {
    title: "Indoor",
    subtitle: "Games",
    desc: "A dedicated indoor gaming zone for fun and relaxation.",
    icon: Gamepad2,
  },
  {
    title: "Vastu",
    subtitle: "Compliant",
    desc: "Designed according to vastu principles and harmony.",
    icon: Sparkles,
  },
  {
    title: "Badminton",
    subtitle: "Court",
    desc: "Professional badminton court for active lifestyle.",
    icon: Trophy,
  },
  {
    title: "Community",
    subtitle: "Hall",
    desc: "Elegant community hall for celebrations and events.",
    icon: Building2,
  },
  {
    title: "Modern",
    subtitle: "Gymnasium",
    desc: "Modern fitness zone with premium workout equipment.",
    icon: Dumbbell,
  },
  {
    title: "Swimming",
    subtitle: "Pool",
    desc: "Luxury swimming pool with peaceful surroundings.",
    icon: Waves,
  },
  {
    title: "Landscaped",
    subtitle: "Garden",
    desc: "Beautiful landscaped gardens with green open spaces.",
    icon: Trees,
  },
  {
    title: "24/7",
    subtitle: "Security",
    desc: "Round-the-clock security and gated safety system.",
    icon: ShieldCheck,
  },
  {
    title: "Visitor",
    subtitle: "Parking",
    desc: "Dedicated visitor parking with spacious access.",
    icon: CarFront,
  },
  {
    title: "CCTV Camera",
    subtitle: "Surveillance",
    desc: "Advanced CCTV monitoring for secure living.",
    icon: Camera,
  },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="
      relative
      overflow-hidden
      py-10
      bg-[#b96f4c]
      "
    >
      {/* TEXTURE */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.08]
        "
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* LEFT STRIP */}
      <div
        className="
        absolute
        left-0
        top-0
        w-[80px]
        h-full
        opacity-[0.12]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#ffffff 0px,#ffffff 2px,transparent 2px,transparent 10px)",
        }}
      />

      <div className="relative z-10 max-w-[1450px] mx-auto px-2 lg:px-3">

        {/* TOP */}
        <div
          className="
          relative
          grid
          lg:grid-cols-[1.15fr_0.85fr]
          border
          border-[#d6a58c]
          bg-transparent
          "
        >

          {/* BIG LEAF */}
          <Leaf
            className="
            absolute
            right-[20px]
            top-[10px]
            w-[230px]
            h-[230px]
            text-[#f0c7b3]
            opacity-20
            "
            strokeWidth={1}
          />

          {/* LEFT */}
          <div
            className="
            relative
            p-8
            lg:p-12
            border-r
            border-[#d6a58c]
            "
          >

            <p
              className="
              uppercase
              tracking-[0.32em]
              text-[11px]
              text-[#ffe5d7]
              "
              style={{
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Premium Amenities
            </p>

            <h2
              className="
              mt-4
              leading-[0.9]
              "
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontWeight: 400,
              }}
            >

              <span className="block text-[58px] text-[#fff8f3]">
                ASPIRATIONAL
              </span>

              <span className="block text-[58px] text-[#fff8f3]">
                LIVING
              </span>

              <div className="flex items-end gap-4 mt-1">

                <span className="text-[46px] text-[#fff8f3]">
                  IN
                </span>

                <div
                  className="
                  flex
                  items-end
                  text-[74px]
                  leading-none
                  tracking-[-4px]
                  "
                >

                  <span
                    style={{
                      color: "#f08b57",
                    }}
                  >
                    J
                  </span>

                  <span
                    style={{
                      color: "#f4d8c7",
                    }}
                  >
                    O
                  </span>

                  <span
                    style={{
                      color: "#43d6cf",
                    }}
                  >
                    R
                  </span>

                  <span
                    style={{
                      color: "#f4d8c7",
                    }}
                  >
                    H
                  </span>

                  <span
                    style={{
                      color: "#f0b09a",
                    }}
                  >
                    A
                  </span>

                  <span
                    style={{
                      color: "#8fb8e6",
                    }}
                  >
                    T
                  </span>

                </div>

              </div>

            </h2>

          </div>

          {/* RIGHT */}
          <div
            className="
            relative
            flex
            items-center
            overflow-hidden
            px-8
            py-10
            lg:px-12
            "
          >

            <div
              className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              w-[1px]
              h-[180px]
              bg-[#e4b59c]
              "
            />

            <div className="relative z-10 max-w-[430px]">

              <Leaf
                className="
                w-7
                h-7
                text-[#ffd8c3]
                "
                strokeWidth={1.8}
              />

              <p
                className="
                mt-6
                text-[20px]
                leading-[1.9]
                text-[#fff3eb]
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 300,
                }}
              >
                Crafted with thoughtfully designed
                amenities, peaceful green spaces and
                refined experiences for a premium
                lifestyle in Jorhat.
              </p>

            </div>

          </div>

        </div>

        {/* GRID */}
        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          border-l
          border-t
          border-[#d6a58c]
          "
        >

          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                }}
                className="
                relative
                overflow-hidden
                border-r
                border-b
                border-[#d6a58c]
                bg-[#fffdfa]
                p-5
                min-h-[300px]
                transition-all
                duration-300
                "
              >

                {/* BG */}
                <div
                  className="
                  absolute
                  inset-0
                  opacity-[0.05]
                  "
                  style={{
                    backgroundImage:
                      "radial-gradient(#d8c7bb 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                {/* NUMBER */}
                <div
                  className="
                  absolute
                  top-5
                  right-5
                  text-[32px]
                  leading-none
                  "
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    color: index % 2 === 0 ? "#43d6cf" : "#d88963",
                    fontWeight: 400,
                    opacity: 0.8,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* DOTS */}
                <div className="absolute top-4 left-4 grid grid-cols-3 gap-[4px]">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-[3px] h-[3px] rounded-full bg-[#d89b7a]"
                    />
                  ))}
                </div>

                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className="
                    mt-6
                    w-16
                    h-16
                    rounded-t-[35px]
                    border
                    flex
                    items-center
                    justify-center
                    "
                    style={{
                      borderColor: "#43d6cf",
                      backgroundColor: "rgba(67,214,207,0.06)",
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{
                        color: "#43d6cf",
                      }}
                    />
                  </div>

                  {/* TEXT */}
                  <div className="mt-6">

                    <h3
                      className="
                      text-[23px]
                      leading-[1]
                      tracking-[-1px]
                      text-[#222222]
                      "
                      style={{
                        fontFamily: "'Cinzel Decorative', serif",
                        fontWeight: 400,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      mt-2
                      text-[16px]
                      text-[#5f5953]
                      "
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {item.subtitle}
                    </p>

                    <div
                      className="
                      mt-4
                      w-[44px]
                      h-[2px]
                      bg-[#43d6cf]
                      "
                    />

                    <p
                      className="
                      mt-4
                      text-[13px]
                      leading-[1.7]
                      text-[#7d756e]
                      "
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {item.desc}
                    </p>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}