// src/components/Location.jsx

import { motion } from "framer-motion";

import {
  GraduationCap,
  HeartPulse,
  Train,
  Building2,
  ShoppingBag,
} from "lucide-react";

const locationCards = [
  {
    icon: <ShoppingBag size={17} />,
    title: "Nearby Conveniences",
    points: [
      {
        name: "Sohum Shoppe",
        distance: "300 m",
      },
      {
        name: "Bharat Petroleum Retail Outlet",
        distance: "500 m",
      },
      {
        name: "ISBT Jorhat",
        distance: "600 m",
      },
      {
        name: "Hotel Manor",
        distance: "300 m",
      },
    ],
  },

  {
    icon: <HeartPulse size={17} />,
    title: "Healthcare",
    points: [
      {
        name: "AG Nursing Home",
        distance: "350 m",
      },
      {
        name: "Jorhat Medical College",
        distance: "3.4 km",
      },
    ],
  },

  {
    icon: <GraduationCap size={17} />,
    title: "Education",
    points: [
      {
        name: "DCB Girls’ College",
        distance: "1.6 km",
      },
      {
        name: "Jagannath Barooah University",
        distance: "2.1 km",
      },
      {
        name: "Assam Agricultural University",
        distance: "3.3 km",
      },
      {
        name: "Don Bosco HS School, Lichubari",
        distance: "5.1 km",
      },
      {
        name: "DPS Jorhat",
        distance: "7.7 km",
      },
    ],
  },

  {
    icon: <Building2 size={17} />,
    title: "Shopping",
    points: [
      {
        name: "Jorhat Stadium Market Area",
        distance: "2.2 km",
      },
      {
        name: "Smart Bazaar",
        distance: "2.7 km",
      },
    ],
  },

  {
    icon: <Train size={17} />,
    title: "Connectivity",
    points: [
      {
        name: "Jorhat Town Railway Station",
        distance: "4.2 km",
      },
      {
        name: "Jorhat Airport",
        distance: "4.5 km",
      },
    ],
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="
      relative
      overflow-hidden
      py-14
      md:py-16
      bg-[#f8f5ed]
      "
    >
      {/* GRID BACKGROUND */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "68px 68px",
        }}
      />

      {/* SIDE LINES */}
      <div
        className="
        absolute
        left-0
        top-0
        h-full
        w-[120px]
        opacity-[0.03]
        hidden lg:block
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#000000 0px,#000000 1px,transparent 1px,transparent 9px)",
        }}
      />

      <div
        className="
        relative
        z-10

        max-w-[1320px]
        mx-auto

        px-4
        lg:px-6
        "
      >
        {/* TOP SECTION */}
        <div
          className="
          grid
          lg:grid-cols-[0.82fr_1.18fr]

          gap-5
          lg:gap-6

          items-stretch

          mb-8
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* TAG */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[52px] h-[2px] bg-[#d1a54d]" />

              <p
                className="
                uppercase
                tracking-[0.24em]
                text-[10px]
                text-[#c79d47]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                Prime Connectivity
              </p>
            </div>

            {/* HEADING */}
            <h2
              className="
              text-[#111111]

              text-[38px]
              sm:text-[48px]
              lg:text-[58px]

              leading-[0.95]

              tracking-[-2px]

              mb-5
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
              Everything{" "}
              <span className="italic text-[#d1a54d]">
                Within
              </span>{" "}
              Reach
            </h2>

            {/* TEXT */}
            <p
              className="
              text-[14px]
              sm:text-[15px]

              leading-[1.9]

              text-[#5f6674]

              max-w-[540px]

              mb-6
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              Subham Park offers seamless access to
              healthcare, educational institutions,
              transport hubs and lifestyle destinations
              — creating a connected urban lifestyle in
              the heart of Jorhat.
            </p>

            {/* CONNECTIVITY CARD */}
            <div
              className="
              relative

              overflow-hidden

              rounded-[24px]

              border
              border-[#eadfcb]

              bg-white

              px-5
              py-5

              shadow-[0_12px_35px_rgba(0,0,0,0.05)]
              "
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="
                  w-12
                  h-12

                  rounded-full

                  bg-[#f6ecd2]

                  flex
                  items-center
                  justify-center

                  shrink-0

                  text-[#c79d47]
                  "
                >
                  <Train size={19} />
                </div>

                <div>
                  <p
                    className="
                    uppercase
                    tracking-[0.22em]
                    text-[9px]
                    text-[#b89f73]
                    mb-[6px]
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Nearby Access
                  </p>

                  <h3
                    className="
                    text-[#111111]

                    text-[22px]

                    leading-[1.1]
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontWeight: 700,
                    }}
                  >
                    Connectivity
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {locationCards[4].points.map(
                  (point, i) => (
                    <div
                      key={i}
                      className="
                      flex
                      items-start
                      justify-between
                      gap-4

                      border-b
                      border-[#efe5d6]

                      pb-3
                      "
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="
                          w-[6px]
                          h-[6px]

                          rounded-full

                          bg-[#d1a54d]

                          shrink-0
                          mt-[7px]
                          "
                        />

                        <p
                          className="
                          text-[14px]

                          leading-[1.6]

                          text-[#5d6470]
                          "
                          style={{
                            fontFamily:
                              "'Inter', sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          {point.name}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <p
                          className="
                          text-[14px]

                          text-[#111111]
                          "
                          style={{
                            fontFamily:
                              "'Inter', sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          {point.distance}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
            relative

            overflow-hidden

            rounded-[28px]

            border
            border-[#eadfcb]

            h-[300px]
            lg:h-full
            min-h-[420px]

            shadow-[0_22px_55px_rgba(0,0,0,0.07)]
            "
          >
            <iframe
              title="Subham Park Location"
              src="https://www.google.com/maps?q=1+Sonari+Gaon+Tarajan+Jorhat+Bhatemora+Gaon+Assam+785001&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="w-full h-full"
            />

            <div
              className="
              absolute
              inset-0

              border
              border-white/20

              pointer-events-none
              "
            />
          </motion.div>
        </div>

        {/* BOTTOM CARDS */}
        <div
          className="
          grid
          lg:grid-cols-3

          gap-5
          "
        >
          {[locationCards[2], locationCards[1], locationCards[0]].map(
            (item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="
                group
                relative

                overflow-hidden

                rounded-[28px]

                border
                border-[#eadfcb]

                bg-white

                p-5

                shadow-[0_12px_30px_rgba(0,0,0,0.04)]

                transition-all
                duration-300
                "
              >
                <div
                  className="
                  absolute
                  right-[-35px]
                  bottom-[-35px]

                  w-[110px]
                  h-[110px]

                  rounded-full

                  bg-[#d1a54d]/10

                  blur-[55px]

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-500
                  "
                />

                <div className="relative z-10">
                  {/* TOP */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="
                      w-11
                      h-11

                      rounded-full

                      bg-[#f7efdd]

                      flex
                      items-center
                      justify-center

                      text-[#c79d47]

                      shrink-0
                      "
                    >
                      {item.icon}
                    </div>

                    <div>
                      <p
                        className="
                        uppercase

                        tracking-[0.22em]

                        text-[9px]

                        text-[#b89f73]

                        mb-[5px]
                        "
                        style={{
                          fontFamily:
                            "'Inter', sans-serif",
                          fontWeight: 700,
                        }}
                      >
                        Nearby Access
                      </p>

                      <h3
                        className="
                        text-[24px]

                        leading-[1]

                        tracking-[-1px]

                        text-[#111111]
                        "
                        style={{
                          fontFamily:
                            "'Cormorant Garamond', serif",
                          fontWeight: 700,
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* LIST */}
                  <div className="space-y-1">
                    {item.points.map((point, i) => (
                      <div
                        key={i}
                        className="
                        flex
                        items-start
                        justify-between
                        gap-4

                        border-b
                        border-[#efe5d6]

                        py-[10px]
                        "
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <div
                            className="
                            w-[6px]
                            h-[6px]

                            rounded-full

                            bg-[#d1a54d]

                            shrink-0
                            mt-[7px]
                            "
                          />

                          <p
                            className="
                            text-[14px]

                            leading-[1.55]

                            text-[#5d6470]
                            "
                            style={{
                              fontFamily:
                                "'Inter', sans-serif",
                              fontWeight: 400,
                            }}
                          >
                            {point.name}
                          </p>
                        </div>

                        <div className="text-right shrink-0">
                          <p
                            className="
                            text-[14px]

                            text-[#111111]
                            "
                            style={{
                              fontFamily:
                                "'Inter', sans-serif",
                              fontWeight: 700,
                            }}
                          >
                            {point.distance}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}