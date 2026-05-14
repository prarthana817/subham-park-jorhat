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
    label: "Open Green Area",
  },
  {
    icon: Building2,
    value: "1535",
    label: "SQM Clubhouse",
  },
  {
    icon: Home,
    value: "257",
    label: "Total Units",
  },
  {
    icon: Sparkles,
    value: "2031",
    label: "Completion",
  },
];

export default function StatsBar() {
  const repeatedStats = [...stats, ...stats];

  return (
    <section className="relative overflow-hidden py-5 bg-transparent">

      {/* LEFT GLOW */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* RIGHT GLOW */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full"></div>

      {/* MAIN BAR */}
      <div
        className="
        relative
        overflow-hidden

        rounded-[32px]

        bg-gradient-to-r
        from-[#16214a]
        via-[#24367d]
        to-[#5a36a8]

        border
        border-white/10

        shadow-[0_15px_60px_rgba(20,20,50,0.25)]
        "
      >

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
          className="flex w-max"
        >

          {repeatedStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                flex
                items-center
                gap-5

                px-10
                py-7

                min-w-[360px]

                border-r
                border-white/10
                "
              >

                {/* ICON */}
                <div
                  className="
                  w-14
                  h-14

                  rounded-full

                  bg-white/10

                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  backdrop-blur-2xl
                  "
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* TEXT */}
                <div className="flex items-end gap-3">

                  <h3
                    className="
                    text-[54px]
                    font-black
                    leading-none
                    text-white
                    "
                  >
                    {item.value}
                  </h3>

                  <p
                    className="
                    text-sm

                    uppercase

                    tracking-[0.30em]

                    font-semibold

                    text-[#dbe7ff]

                    mb-1
                    "
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