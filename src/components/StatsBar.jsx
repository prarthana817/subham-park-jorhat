import { motion } from "framer-motion";
import {
  Trees,
  Home,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    icon: Sparkles,
    value: "2030",
    label: "COMPLETION",
  },
  {
    icon: Trees,
    value: "63%",
    label: "OPEN AREA",
  },
  {
    icon: Home,
    value: "44",
    label: "SPACIOUS UNITS",
  },
];

export default function StatsBar() {
  const repeatedStats = [...stats, ...stats];

  return (
    <section
      className="
      relative
      w-screen
      left-1/2
      -translate-x-1/2
      overflow-hidden
      py-[4px]
      bg-[#f8f5ed]
      "
    >
      <div
        className="
        relative
        left-1/2
        w-screen
        -translate-x-1/2
        overflow-hidden

        bg-gradient-to-r
        from-[#d5b166]
        via-[#dfc07a]
        to-[#d4ad60]

        border-y
        border-[#e6d2a4]
        "
      >
        
        <div
          className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)]
          bg-[size:130px_100%]
          opacity-40
          "
        />

        
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 24,
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
                gap-4

                px-7
                md:px-9

                py-2.5

                min-w-[260px]
                md:min-w-[300px]

                border-r
                border-white/15
                "
              >
                
                <div
                  className="
                  w-10
                  h-10

                  rounded-full

                  bg-white/15

                  border
                  border-white/20

                  flex
                  items-center
                  justify-center
                  "
                >
                  <Icon className="w-[16px] h-[16px] text-white" />
                </div>

                
                <div className="flex items-end gap-2.5">
                  <h3
                    className="
                    text-[28px]
                    md:text-[30px]

                    leading-none

                    text-white
                    "
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                    text-[9px]

                    uppercase

                    tracking-[0.28em]

                    text-[#fffdf7]

                    mb-[4px]

                    whitespace-nowrap
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
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