// src/components/Location.jsx

import { motion } from "framer-motion";

import {
  GraduationCap,
  Plane,
  HeartPulse,
  Train,
  Building2,
} from "lucide-react";

const locationCards = [
  {
    icon: <HeartPulse size={17} />,
    title: "Healthcare",
    points: [
      "AG Nursing Home – 350 m",
      "Jorhat Medical – 3.4 kms",
      "Ayush Hospital – 2.1 kms",
      "Apollo Pharmacy Nearby",
    ],
  },

  {
    icon: <GraduationCap size={17} />,
    title: "Education",
    points: [
      "DCB Girls College – 1.6 kms",
      "JB College – 2.1 kms",
      "AAU – 3.3 kms",
      "DPS Jorhat – 7.7 kms",
    ],
  },

  {
    icon: <Plane size={17} />,
    title: "Airport & Leisure",
    points: [
      "Jorhat Airport – 4.5 kms",
      "Gymkhana Club – 3.5 kms",
      "Jorhat Stadium – 2.2 kms",
      "Hotels & Cafes Nearby",
    ],
  },

  {
    icon: <Train size={17} />,
    title: "Connectivity",
    points: [
      "ISBT – 600 m",
      "Town Station – 4.2 kms",
      "Petrol Pump – 500 m",
      "Smooth City Access",
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

        max-w-[1260px]
        mx-auto

        px-4
        lg:px-6
        "
      >
        {/* TOP SECTION */}
        <div
          className="
          grid
          lg:grid-cols-[0.9fr_1.1fr]

          gap-10
          lg:gap-14

          items-center

          mb-12
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
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

              mb-7
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

            {/* ADDRESS CARD */}
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
              {/* SOFT GLOW */}
              <div
                className="
                absolute
                right-[-40px]
                top-[-40px]

                w-[120px]
                h-[120px]

                rounded-full

                bg-[#d1a54d]/10

                blur-[60px]
                "
              />

              <div className="relative z-10 flex gap-4">
                {/* ICON */}
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
                  <Building2 size={20} />
                </div>

                {/* TEXT */}
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
                    Project Address
                  </p>

                  <h3
                    className="
                    text-[#111111]

                    text-[22px]
                    sm:text-[24px]

                    leading-[1.1]

                    mb-1
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontWeight: 700,
                    }}
                  >
                    Subham Park
                  </h3>

                  <p
                    className="
                    text-[#5f6674]

                    text-[14px]

                    leading-[1.8]
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    1 Sonari Gaon, Tarajan,
                    <br />
                    Jorhat, Assam – 785001
                  </p>
                </div>
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

            h-[260px]
            sm:h-[320px]
            lg:h-[420px]

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

            {/* BORDER OVERLAY */}
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

        {/* LOCATION CARDS */}
        <div
          className="
          grid
          sm:grid-cols-2
          xl:grid-cols-4

          gap-4
          "
        >
          {locationCards.map((item, index) => (
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

              rounded-[26px]

              border
              border-[#eadfcb]

              bg-white

              p-5

              min-h-[250px]

              shadow-[0_12px_30px_rgba(0,0,0,0.04)]

              transition-all
              duration-300
              "
            >
              {/* GLOW */}
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
                <div className="flex items-start gap-3 mb-5">
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

                      tracking-[0.2em]

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
                <div className="space-y-3">
                  {item.points.map((point, i) => (
                    <div
                      key={i}
                      className="
                      flex
                      items-start
                      gap-3

                      border-b
                      border-[#efe5d6]

                      pb-3
                      "
                    >
                      <div
                        className="
                        w-[6px]
                        h-[6px]

                        rounded-full

                        bg-[#d1a54d]

                        mt-[8px]

                        shrink-0
                        "
                      />

                      <p
                        className="
                        text-[13px]

                        leading-[1.7]

                        text-[#5d6470]
                        "
                        style={{
                          fontFamily:
                            "'Inter', sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}