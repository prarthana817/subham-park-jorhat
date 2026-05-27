// src/components/Location.jsx

import { motion } from "framer-motion";

import {
  MapPin,
  Navigation,
  Plane,
  Train,
  School,
  Building2,
  ArrowUpRight,
} from "lucide-react";

const nearbyPlaces = [
  {
    icon: <Plane size={16} />,
    title: "Airport",
    value: "5.7 KM",
  },
  {
    icon: <Train size={16} />,
    title: "Railway",
    value: "3.2 KM",
  },
  {
    icon: <School size={16} />,
    title: "Schools",
    value: "Nearby",
  },
  {
    icon: <Building2 size={16} />,
    title: "Hospitals",
    value: "Nearby",
  },
];

export default function Location({ setOpen }) {
  return (
    <section
      id="location"
      className="
      relative

      py-10
      lg:py-14

      bg-[#f8f5ed]

      overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
        absolute
        top-[-120px]
        right-[-120px]

        w-[260px]
        h-[260px]

        rounded-full

        bg-[#d1a54d]/10

        blur-[100px]
        "
      />

      <div
        className="
        max-w-[1280px]
        mx-auto

        px-4
        lg:px-6
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
          grid
          lg:grid-cols-[0.9fr_1.1fr]

          gap-5
          lg:gap-6

          items-stretch
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
            relative

            rounded-[28px]

            bg-[#14234b]

            p-5
            md:p-6

            text-white

            overflow-hidden
            "
          >
            {/* GOLD GLOW */}
            <div
              className="
              absolute
              top-[-60px]
              right-[-60px]

              w-[180px]
              h-[180px]

              rounded-full

              bg-[#d1a54d]/20

              blur-[70px]
              "
            />

            <div className="relative z-10">
              {/* TAG */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[42px] h-[2px] bg-[#d1a54d]" />

                <p
                  className="
                  uppercase

                  tracking-[0.22em]

                  text-[9px]

                  text-[#d1a54d]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Prime Address
                </p>
              </div>

              {/* TITLE */}
              <h2
                className="
                text-[30px]
                md:text-[40px]

                leading-[0.95]

                tracking-[-1px]

                mb-4
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                }}
              >
                Luxury Living in
                <span className="italic text-[#d1a54d]">
                  {" "}Jorhat
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                text-[13px]
                md:text-[14px]

                leading-[1.8]

                text-white/75

                max-w-[430px]

                mb-5
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Strategically located with seamless access
                to transport, schools, healthcare and
                lifestyle conveniences.
              </p>

              {/* ADDRESS CARD */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=1+Sonari+Gaon+Tarajan+Jorhat+Bhatemora+Gaon+Assam+785001"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex
                items-start
                gap-3

                rounded-[18px]

                border
                border-white/10

                bg-white/5

                p-4

                hover:bg-white/10

                transition-all
                duration-300
                "
              >
                <div
                  className="
                  w-10
                  h-10

                  shrink-0

                  rounded-full

                  bg-[#d1a54d]/15

                  flex
                  items-center
                  justify-center

                  text-[#d1a54d]
                  "
                >
                  <MapPin size={18} />
                </div>

                <div>
                  <p
                    className="
                    text-[10px]

                    uppercase

                    tracking-[0.18em]

                    text-white/50

                    mb-1
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Project Location
                  </p>

                  <p
                    className="
                    text-[13px]

                    leading-[1.7]

                    text-white/85
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    1, Sonari Gaon, Tarajan,
                    <br />
                    Jorhat Bhatemora Gaon,
                    Assam - 785001
                  </p>
                </div>
              </a>

              {/* BUTTON */}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1+Sonari+Gaon+Tarajan+Jorhat+Bhatemora+Gaon+Assam+785001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-flex
                  items-center
                  gap-2

                  h-[42px]

                  px-5

                  rounded-full

                  bg-[#d1a54d]
                  hover:bg-[#be9339]

                  text-[#111111]

                  uppercase

                  tracking-[0.14em]

                  text-[9px]

                  transition-all
                  duration-300
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Open Map

                  <Navigation size={14} />
                </a>

                <button
                  onClick={() => setOpen(true)}
                  className="
                  inline-flex
                  items-center
                  gap-2

                  h-[42px]

                  px-5

                  rounded-full

                  border
                  border-white/10

                  bg-white/5
                  hover:bg-white/10

                  text-white

                  uppercase

                  tracking-[0.14em]

                  text-[9px]

                  transition-all
                  duration-300
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Book Visit

                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4">
            {/* MAP */}
            <div
              className="
              overflow-hidden

              rounded-[28px]

              border
              border-[#e7dccb]

              h-[240px]
              md:h-[280px]

              shadow-[0_18px_50px_rgba(0,0,0,0.05)]
              "
            >
              <iframe
                title="Subham Park Location"
                src="https://www.google.com/maps?q=1+Sonari+Gaon+Tarajan+Jorhat+Bhatemora+Gaon+Assam+785001&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* SMALL INFO CARDS */}
            <div
              className="
              grid
              grid-cols-2

              gap-3
              "
            >
              {nearbyPlaces.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="
                  rounded-[20px]

                  border
                  border-[#e8dcc9]

                  bg-white

                  p-4

                  shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  "
                >
                  <div
                    className="
                    w-9
                    h-9

                    rounded-full

                    bg-[#f7efdd]

                    flex
                    items-center
                    justify-center

                    text-[#c79d47]

                    mb-3
                    "
                  >
                    {item.icon}
                  </div>

                  <p
                    className="
                    text-[10px]

                    uppercase

                    tracking-[0.16em]

                    text-[#8a8f98]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {item.title}
                  </p>

                  <h4
                    className="
                    mt-1

                    text-[20px]

                    text-[#111111]
                    "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontWeight: 600,
                    }}
                  >
                    {item.value}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}