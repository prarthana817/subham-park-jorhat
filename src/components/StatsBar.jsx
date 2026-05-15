import { motion } from "framer-motion";
import {
  Trees,
  Building2,
  Home,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    icon: Trees,
    value: "70%",
    label: "OPEN GREEN AREA",
  },
  {
    icon: Building2,
    value: "1535",
    label: "SQM CLUBHOUSE",
  },
  {
    icon: Home,
    value: "257",
    label: "TOTAL UNITS",
  },
  {
    icon: Sparkles,
    value: "2031",
    label: "COMPLETION",
  },
];

export default function StatsBar() {
  const repeatedStats = [...stats, ...stats];

  return (
    <section className="relative overflow-hidden py-[6px] bg-transparent">

      {/* MAIN BAR */}
      <div
        className="
        relative
        overflow-hidden

        bg-gradient-to-r
        from-[#cf9477]
        via-[#dca287]
        to-[#e0ad92]

        border
        border-[#ffffff15]
        "
      >

        {/* SOFT OVERLAY */}
        <div
          className="
          absolute
          inset-0

          bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)]

          bg-[size:120px_100%]

          opacity-40
          "
        />

        {/* MOVING CONTENT */}
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
          className="flex w-max relative z-10"
        >

          {repeatedStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                flex
                items-center
                gap-3

                px-7
                py-3

                min-w-[270px]

                border-r
                border-white/10
                "
              >

                {/* ICON */}
                <div
                  className="
                  w-9
                  h-9

                  rounded-full

                  bg-white/10

                  border
                  border-white/15

                  flex
                  items-center
                  justify-center

                  shrink-0
                  "
                >
                  <Icon className="w-[15px] h-[15px] text-white" />
                </div>

                {/* TEXT */}
                <div className="flex items-end gap-2.5">

                  <h3
                    className="
                    text-[28px]
                    leading-none
                    text-white
                    "
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                    text-[9px]

                    uppercase

                    tracking-[0.30em]

                    text-[#fffaf6]

                    mb-[3px]

                    whitespace-nowrap
                    "
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {item.label}
                  </p>

                </div>

              </div>
            );
          })}

        </motion.div>

      </div>

    </section>
  );
}