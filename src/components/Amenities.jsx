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

      py-16
      lg:py-24

      bg-[#14234b]
      "
    >
      {/* GRID OVERLAY */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "65px 65px",
        }}
      />

      {/* TOP GLOW */}
      <div className="absolute top-[-140px] left-[-120px] w-[320px] h-[320px] bg-[#f8f5ed]/20 blur-[130px] rounded-full" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 lg:px-8">

        {/* TOP SECTION */}
        <div
          className="
          relative

          overflow-hidden

          rounded-[30px]
          lg:rounded-[34px]

          bg-[#f8f5ed]

          border
          border-[#ece2d2]

          mb-10

          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
          "
        >

          {/* INNER LINES */}
          <div
            className="
            absolute
            inset-0
            hidden lg:block
            pointer-events-none
            "
          >
            <div
              className="
              absolute
              left-[34px]
              top-[38px]

              w-[1px]
              h-[calc(100%-76px)]

              bg-black/10
              "
            />

            <div
              className="
              absolute
              right-[34px]
              top-[38px]

              w-[1px]
              h-[calc(100%-76px)]

              bg-black/10
              "
            />
          </div>

          <div className="relative p-7 md:p-10 lg:p-14">

            {/* LABEL */}
            <div className="flex items-center gap-4 mb-5">

              <div className="w-[70px] h-[2px] bg-[#14234b]" />

              <p
                className="
                uppercase
                tracking-[0.32em]

                text-[10px]
                md:text-[11px]

                text-[#14234b]
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 600,
                }}
              >
                Premium Amenities
              </p>

            </div>

            {/* HEADING */}
            <h2
              className="
              text-[#111111]

              text-[40px]
              md:text-[58px]
              lg:text-[72px]

              leading-[0.95]
              tracking-[-2px]

              max-w-[1050px]
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
              Aspirational Living In{" "}

              <span className="inline-flex items-end tracking-[-3px]">

                <span style={{ color: "#d86d3b" }}>J</span>

                <span style={{ color: "#b89f97" }}>o</span>

                <span style={{ color: "#159d98" }}>r</span>

                <span style={{ color: "#bf7f76" }}>h</span>

                <span style={{ color: "#c17062" }}>a</span>

                <span style={{ color: "#4f7ec2" }}>t</span>

              </span>

            </h2>

            {/* DESCRIPTION */}
            <div className="mt-7 max-w-[760px]">

              <Leaf
                className="
                w-7
                h-7

                text-[#14234b]

                mb-5
                "
                strokeWidth={1.8}
              />

              <p
                className="
                text-[15px]
                lg:text-[17px]

                leading-[1.9]

                text-[#1f1f1f]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                }}
              >
                Crafted with thoughtfully designed amenities,
                landscaped greens and premium lifestyle
                experiences for elegant living in Jorhat.
              </p>

              {/* BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="
                mt-8

                inline-flex
                items-center
                gap-3

                px-7
                py-4

                rounded-full

                bg-[#14234b]
                hover:bg-[#0f1c3f]

                text-white

                uppercase
                tracking-[0.18em]

                text-[10px]

                transition-all
                duration-300

                hover:-translate-y-[2px]

                shadow-[0_14px_34px_rgba(20,35,75,0.22)]
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

          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5

          gap-5
          "
        >

          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                group
                relative

                overflow-hidden

                rounded-[24px]

                bg-[#f8f5ed]

                border
                border-[#ece2d2]

                p-6

                min-h-[235px]

                transition-all
                duration-500

                hover:bg-[#14234b]
                hover:border-[#2a3f78]

                hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)]
                "
              >

                {/* NUMBER */}
                <div
                  className="
                  absolute
                  top-5
                  right-5

                  text-[20px]

                  text-[#14234b]

                  opacity-80

                  transition-all
                  duration-500

                  group-hover:text-[#f8f5ed]
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
                  w-[62px]
                  h-[62px]

                  rounded-full

                  bg-[#14234b]

                  border
                  border-[#20366d]

                  flex
                  items-center
                  justify-center

                  transition-all
                  duration-500

                  group-hover:bg-[#f8f5ed]
                  "
                >

                  <Icon
                    className="
                    w-6
                    h-6

                    text-[#f8f5ed]

                    transition-all
                    duration-500

                    group-hover:text-[#14234b]
                    "
                  />

                </div>

                {/* CONTENT */}
                <div className="mt-6">

                  <h3
                    className="
                    text-[26px]

                    leading-[1.08]

                    text-[#111111]

                    transition-all
                    duration-500

                    group-hover:text-white
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

                    w-[48px]
                    h-[2px]

                    rounded-full

                    bg-[#14234b]

                    transition-all
                    duration-500

                    group-hover:w-[80px]
                    group-hover:bg-[#f8f5ed]
                    "
                  />

                  <p
                    className="
                    mt-4

                    text-[14px]

                    leading-[1.8]

                    text-[#2f2f2f]

                    transition-all
                    duration-500

                    group-hover:text-[#e5e7ef]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
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