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

          rounded-[34px]
          lg:rounded-[42px]

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
                tracking-[0.3em]

                text-[10px]
                lg:text-[11px]

                text-[#c68463]
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Premium Amenities
              </p>

              <h2
                className="
                mt-3

                leading-[0.92]

                text-[#221d1a]
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                <span className="block text-[34px] sm:text-[48px] lg:text-[68px]">
                  ASPIRATIONAL
                </span>

                <span className="block text-[34px] sm:text-[48px] lg:text-[68px]">
                  LIVING
                </span>

                {/* JORHAT */}
                <div className="flex items-end gap-2 lg:gap-4 mt-1 lg:mt-2">

                  <span className="text-[24px] sm:text-[30px] lg:text-[42px] text-[#1f1f1f]">
                    IN
                  </span>

                  <div
                    className="
                    flex
                    items-end

                    text-[38px]
                    sm:text-[54px]
                    lg:text-[74px]

                    leading-none

                    tracking-[-2px]
                    lg:tracking-[-4px]
                    "
                  >
                    <span style={{ color: "#f08b57" }}>J</span>

                    <span style={{ color: "#f4d8c7" }}>O</span>

                    <span style={{ color: "#43d6cf" }}>R</span>

                    <span style={{ color: "#f4d8c7" }}>H</span>

                    <span style={{ color: "#f0b09a" }}>A</span>

                    <span style={{ color: "#8fb8e6" }}>T</span>
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

                rounded-full

                bg-[#b96f4c]
                hover:bg-[#a85c39]

                text-white

                uppercase
                tracking-[0.18em]

                text-[10px]
                lg:text-[11px]

                transition-all
                duration-300
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
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

                rounded-[28px]

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

                  text-[22px]

                  text-[#d88963]
                  opacity-80
                  "
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    fontWeight: 400,
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
                    text-[24px]

                    leading-[1.08]

                    text-[#241f1c]
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontWeight: 600,
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

        {/* LANDSCAPE FEATURE STRIP */}
        <div
          className="
          mt-8

          rounded-[34px]

          bg-[#fffaf6]

          border
          border-[#ddb59f]

          overflow-hidden
          "
        >

          <div
            className="
            grid
            lg:grid-cols-[0.9fr_1.1fr]
            "
          >

            {/* LEFT */}
            <div
              className="
              relative

              bg-[#2e241f]

              px-8
              py-8

              lg:px-10
              "
            >

              <p
                className="
                uppercase

                tracking-[0.28em]

                text-[11px]

                text-[#d8b18f]

                mb-5
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 700,
                }}
              >
                Landscape Features
              </p>

              <h3
                className="
                text-white

                text-[30px]
                lg:text-[42px]

                leading-[0.95]

                mb-4
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                Open Green
                <br />
                Living Spaces
              </h3>

              <p
                className="
                max-w-[420px]

                text-[14px]
                leading-[1.9]

                text-[#d8cec7]
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 300,
                }}
              >
                Outdoor spaces designed for peaceful walks,
                gatherings and luxury lifestyle experiences.
              </p>

              <div
                className="
                mt-6

                w-[90px]
                h-[2px]

                bg-[#43d6cf]
                rounded-full
                "
              />

            </div>

            {/* RIGHT */}
            <div
              className="
              px-6
              py-6

              lg:px-8

              flex
              flex-wrap
              gap-3

              items-center
              content-center
              "
            >

              {[
                "Stepped Planter",
                "Open Gym",
                "Adda Corner",
                "Senior Citizens Area",
                "Shaded Sitting",
                "Forest Orchard",
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                  px-5
                  py-3

                  rounded-full

                  bg-[#f8f3ef]

                  border
                  border-[#ead8ce]

                  text-[#5b514b]

                  text-[13px]

                  hover:bg-[#43d6cf]
                  hover:text-white

                  transition-all
                  duration-300
                  "
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}