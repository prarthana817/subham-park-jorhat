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
  ArrowUpRight,
} from "lucide-react";

const amenities = [
  {
    title: "Indoor Games",
    desc: "Luxury indoor gaming experience.",
    icon: Gamepad2,
  },
  {
    title: "Vastu Living",
    desc: "Positive vastu compliant homes.",
    icon: Sparkles,
  },
  {
    title: "Badminton Court",
    desc: "Premium active lifestyle space.",
    icon: Trophy,
  },
  {
    title: "Community Hall",
    desc: "Elegant celebration & events zone.",
    icon: Building2,
  },
  {
    title: "Modern Gym",
    desc: "Advanced fitness & wellness area.",
    icon: Dumbbell,
  },
  {
    title: "Swimming Pool",
    desc: "Refreshing luxury swimming zone.",
    icon: Waves,
  },
  {
    title: "Landscape Garden",
    desc: "Beautiful green peaceful spaces.",
    icon: Trees,
  },
  {
    title: "24/7 Security",
    desc: "Secure gated community living.",
    icon: ShieldCheck,
  },
  {
    title: "Visitor Parking",
    desc: "Spacious dedicated parking area.",
    icon: CarFront,
  },
  {
    title: "CCTV Camera",
    desc: "Advanced surveillance protection.",
    icon: Camera,
  },
];

export default function Amenities({ setOpen }) {
  return (
    <section
      id="amenities"
      className="
      relative
      overflow-hidden

      py-12
      lg:py-16

      bg-[#b96f4c]
      "
    >

      {/* BG TEXTURE */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.05]
        "
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative z-10 max-w-[1450px] mx-auto px-4">

        {/* TOP SECTION */}
        <div
          className="
          relative

          rounded-[28px]
          lg:rounded-[32px]

          overflow-hidden

          bg-[#fffaf6]

          border
          border-[#ddb59f]

          mb-7
          "
        >

          {/* SIDE LINES */}
          <div
            className="
            absolute
            inset-0
            pointer-events-none
            hidden lg:block
            "
          >
            <div
              className="
              absolute
              left-[24px]
              top-[24px]

              w-[1px]
              h-[calc(100%-48px)]

              bg-[#ecdcd2]
              "
            />

            <div
              className="
              absolute
              right-[24px]
              top-[24px]

              w-[1px]
              h-[calc(100%-48px)]

              bg-[#ecdcd2]
              "
            />
          </div>

          <div
            className="
            grid
            lg:grid-cols-[1fr_0.9fr]
            "
          >

            {/* LEFT */}
            <div className="relative p-6 lg:p-10">

              <p
                className="
                uppercase
                tracking-[0.28em]

                text-[10px]
                lg:text-[11px]

                text-[#c68463]
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 500,
                }}
              >
                Premium Amenities
              </p>

              {/* HEADING */}
              <h2
                className="
                mt-4

                text-[#221d1a]
                leading-[0.95]
                tracking-[-1.5px]
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                }}
              >

                <span className="block text-[38px] sm:text-[52px] lg:text-[70px]">
                  Aspirational
                </span>

                <span className="block text-[38px] sm:text-[52px] lg:text-[70px]">
                  Living
                </span>

                {/* JORHAT */}
                <div className="flex items-end gap-2 lg:gap-4 mt-1 lg:mt-2">

                  <span className="text-[24px] sm:text-[30px] lg:text-[40px] text-[#1f1f1f]">
                    In
                  </span>

                  <div
                    className="
                    flex
                    items-end

                    text-[40px]
                    sm:text-[58px]
                    lg:text-[78px]

                    leading-none

                    tracking-[-2px]
                    lg:tracking-[-4px]
                    "
                  >
                    <span style={{ color: "#f08b57" }}>J</span>

                    <span style={{ color: "#f4d8c7" }}>o</span>

                    <span style={{ color: "#43d6cf" }}>r</span>

                    <span style={{ color: "#f4d8c7" }}>h</span>

                    <span style={{ color: "#f0b09a" }}>a</span>

                    <span style={{ color: "#8fb8e6" }}>t</span>
                  </div>

                </div>

              </h2>

              <div
                className="
                mt-5

                w-[70px]
                lg:w-[90px]

                h-[2px]

                rounded-full

                bg-[#43d6cf]
                "
              />
            </div>

            {/* RIGHT */}
            <div
              className="
              relative

              flex
              flex-col
              justify-center

              p-6
              lg:p-10
              "
            >
              <Leaf
                className="
                w-6
                h-6

                text-[#43d6cf]
                "
                strokeWidth={1.8}
              />

              <p
                className="
                mt-4

                max-w-[480px]

                text-[14px]
                lg:text-[16px]

                leading-[1.9]

                text-[#6c655f]
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 300,
                }}
              >
                Crafted with thoughtfully designed amenities,
                landscaped greens and premium lifestyle
                experiences for elegant living in Jorhat.
              </p>

              <button
                onClick={() => setOpen(true)}
                className="
                mt-6

                w-fit

                flex
                items-center
                gap-3

                px-6
                py-3.5

                rounded-[14px]

                bg-[#d69073]
                hover:bg-[#a85c39]

                text-white

                uppercase
                tracking-[0.16em]

                text-[10px]
                lg:text-[11px]

                transition-all
                duration-300
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 600,
                }}
              >
                Book Site Visit

                <ArrowUpRight size={15} />
              </button>
            </div>

          </div>

        </div>

        {/* CARDS */}
        <div
          className="
          grid

          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-5

          gap-4
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
                  duration: 0.4,
                  delay: index * 0.03,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -4,
                }}
                className="
                group
                relative

                rounded-[22px]

                border
                border-[#ddb59f]

                bg-[#fffaf6]

                overflow-hidden

                p-5

                min-h-[215px]

                transition-all
                duration-500

                hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]
                "
              >

                {/* NUMBER */}
                <div
                  className="
                  absolute
                  top-4
                  right-4

                  text-[20px]

                  text-[#d88963]
                  opacity-80
                  "
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* ICON */}
                <div
                  className="
                  relative
                  z-10

                  w-[64px]
                  h-[64px]

                  rounded-full

                  bg-white

                  border
                  border-[#ece2db]

                  flex
                  items-center
                  justify-center

                  shadow-[0_6px_16px_rgba(0,0,0,0.05)]

                  transition-all
                  duration-500

                  group-hover:bg-[#43d6cf]
                  "
                >

                  <Icon
                    className="
                    w-7
                    h-7

                    text-[#43d6cf]

                    transition-all
                    duration-500

                    group-hover:text-white
                    "
                  />

                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-6">

                  <h3
                    className="
                    text-[26px]

                    leading-[1.08]

                    text-[#241f1c]
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
                    mt-3

                    w-[42px]
                    h-[2px]

                    rounded-full

                    bg-[#d8b18f]

                    transition-all
                    duration-500

                    group-hover:w-[75px]
                    group-hover:bg-[#43d6cf]
                    "
                  />

                  <p
                    className="
                    mt-3

                    text-[13px]

                    leading-[1.7]

                    text-[#726a63]
                    "
                    style={{
                      fontFamily:
                        "'Josefin Sans', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}