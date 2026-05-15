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
      bg-[#f6f2ee]
      "
    >
      {/* LEFT STRIP */}
      <div
        className="
        absolute
        left-0
        top-0
        w-[80px]
        h-full
        opacity-[0.4]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#ddd5ce 0px,#ddd5ce 3px,transparent 3px,transparent 11px)",
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
          border-[#ddd5ce]
          bg-[#faf7f3]
          "
        >

          {/* BIG LEAF */}
          <Leaf
            className="
            absolute
            right-[-20px]
            top-[-10px]
            w-[230px]
            h-[230px]
            text-[#ebe3dc]
            opacity-80
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
            border-[#ddd5ce]
            "
          >

            <p
              className="
              uppercase
              tracking-[0.32em]
              text-[11px]
              text-[#d88963]
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

              <span className="block text-[58px] text-[#222222]">
                ASPIRATIONAL
              </span>

              <span className="block text-[58px] text-[#222222]">
                LIVING
              </span>

              <div className="flex items-end gap-4 mt-1">

                <span className="text-[46px] text-[#222222]">
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
                      background:
                        "repeating-linear-gradient(45deg,#c46f49 0px,#c46f49 3px,transparent 3px,transparent 11px)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 0.7px #a35b3b",
                    }}
                  >
                    J
                  </span>

                  <span
                    style={{
                      background:
                        "repeating-radial-gradient(circle,#b39a87 0px,#b39a87 2px,transparent 2px,transparent 9px)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 0.7px #9f8673",
                    }}
                  >
                    O
                  </span>

                  <span
                    style={{
                      background:
                        "repeating-linear-gradient(to bottom,#49c7bf 0px,#49c7bf 3px,transparent 3px,transparent 10px)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 0.7px #38a9a1",
                    }}
                  >
                    R
                  </span>

                  <span
                    style={{
                      background:
                        "radial-gradient(#9d836d 1.8px, transparent 1.8px)",
                      backgroundSize: "10px 10px",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 0.7px #7e6856",
                    }}
                  >
                    H
                  </span>

                  <span
                    style={{
                      background:
                        "repeating-linear-gradient(-45deg,#d5a08f 0px,#d5a08f 3px,transparent 3px,transparent 11px)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 0.7px #b7806f",
                    }}
                  >
                    A
                  </span>

                  <span
                    style={{
                      background:
                        "repeating-linear-gradient(to right,#8ca8c4 0px,#8ca8c4 3px,transparent 3px,transparent 10px)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 0.7px #6f89a3",
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
            bg-[#faf7f3]
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
              bg-[#d8d0c8]
              "
            />

            <div className="relative z-10 max-w-[430px]">

              <Leaf
                className="
                w-7
                h-7
                text-[#d8a58b]
                "
                strokeWidth={1.8}
              />

              <p
                className="
                mt-6
                text-[20px]
                leading-[1.9]
                text-[#645d57]
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
          border-[#ddd5ce]
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
                  backgroundColor: "#f0ebe6",
                }}
                className="
                relative
                overflow-hidden
                border-r
                border-b
                border-[#ddd5ce]
                bg-[#f7f3ef]
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
                  opacity-[0.12]
                  "
                  style={{
                    backgroundImage:
                      index % 2 === 0
                        ? "repeating-linear-gradient(45deg,#ddd5ce 0px,#ddd5ce 1px,transparent 1px,transparent 14px)"
                        : "radial-gradient(#d9d1ca 1px, transparent 1px)",
                    backgroundSize:
                      index % 2 === 0
                        ? "22px 22px"
                        : "14px 14px",
                  }}
                />

                {/* UPDATED SMALL NUMBER */}
                <div
                  className="
                  absolute
                  top-5
                  right-5
                  text-[32px]
                  leading-none
                  opacity-50
                  "
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    color: "#d88963",
                    fontWeight: 400,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* DOTS */}
                <div className="absolute top-4 left-4 grid grid-cols-3 gap-[4px]">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-[3px] h-[3px] rounded-full bg-[#67cfc7]"
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
                      borderColor: "#67cfc7",
                      backgroundColor: "rgba(103,207,199,0.08)",
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{
                        color: "#67cfc7",
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
                      bg-[#67cfc7]
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