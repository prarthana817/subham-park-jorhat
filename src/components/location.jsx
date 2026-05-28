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
    icon: <Plane size={14} />,
    title: "Airport",
    value: "5.7 KM",
  },
  {
    icon: <Train size={14} />,
    title: "Railway",
    value: "3.2 KM",
  },
  {
    icon: <School size={14} />,
    title: "Schools",
    value: "Nearby",
  },
  {
    icon: <Building2 size={14} />,
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
      py-8
      lg:py-10
      bg-[#f8f5ed]
      overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
        absolute
        top-[-100px]
        right-[-100px]
        w-[200px]
        h-[200px]
        rounded-full
        bg-[#d1a54d]/10
        blur-[85px]
        "
      />

      <div
        className="
        max-w-[1200px]
        mx-auto
        px-4
        lg:px-5
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
          grid
          lg:grid-cols-[0.92fr_1.08fr]
          gap-4
          items-start
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
            relative
            rounded-[24px]
            bg-[#14234b]
            p-5
            md:p-6
            text-white
            overflow-hidden
            flex
            flex-col
            lg:mt-[12px]
            min-h-[520px]
            "
          >
            {/* GOLD GLOW */}
            <div
              className="
              absolute
              top-[-40px]
              right-[-40px]
              w-[130px]
              h-[130px]
              rounded-full
              bg-[#d1a54d]/20
              blur-[60px]
              "
            />

            <div className="relative z-10 flex flex-col h-full">
              {/* TAG */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-[34px] h-[2px] bg-[#d1a54d]" />

                <p
                  className="
                  uppercase
                  tracking-[0.18em]
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
                text-[38px]
                md:text-[48px]
                leading-[1]
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
                text-[14px]
                md:text-[15px]
                leading-[1.8]
                text-white/75
                max-w-[500px]
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
                rounded-[16px]
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
                    tracking-[0.14em]
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
                    text-[15px]
                    leading-[1.6]
                    text-white/85
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    1, Sonari Gaon, Tarajan, Jorhat
                    Bhatemora Gaon, Assam - 785001
                  </p>
                </div>
              </a>

              {/* BUTTONS */}
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1+Sonari+Gaon+Tarajan+Jorhat+Bhatemora+Gaon+Assam+785001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  h-[46px]
                  min-w-[145px]
                  rounded-full
                  bg-[#d1a54d]
                  hover:bg-[#be9339]
                  text-[#111111]
                  uppercase
                  tracking-[0.12em]
                  text-[11px]
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
                  justify-center
                  gap-2
                  h-[46px]
                  min-w-[145px]
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  hover:bg-white/10
                  text-white
                  uppercase
                  tracking-[0.12em]
                  text-[11px]
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

              {/* EXTRA 2 CARDS INSIDE EMPTY SPACE */}
              <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
                {nearbyPlaces.slice(0, 2).map((item, index) => (
                  <div
                    key={index}
                    className="
                    rounded-[18px]
                    bg-white/5
                    border
                    border-white/10
                    px-4
                    py-3

                    flex
                    items-center
                    gap-3
                    "
                  >
                    <div
                      className="
                      w-10
                      h-10
                      rounded-full
                      bg-[#d1a54d]/15
                      flex
                      items-center
                      justify-center
                      text-[#d1a54d]
                      shrink-0
                      "
                    >
                      {item.icon}
                    </div>

                    <div className="flex flex-col">
                      <p
                        className="
                        text-[10px]
                        uppercase
                        tracking-[0.12em]
                        text-white/50
                        leading-none
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
                        text-[18px]
                        leading-none
                        text-white
                        "
                        style={{
                          fontFamily:
                            "'Cormorant Garamond', serif",
                          fontWeight: 600,
                        }}
                      >
                        {item.value}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4">
            {/* MAP */}
            <div
              className="
              overflow-hidden
              rounded-[24px]
              border
              border-[#e7dccb]
              h-[330px]
              md:h-[370px]
              shadow-[0_12px_35px_rgba(0,0,0,0.05)]
              lg:mt-[18px]
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
              {nearbyPlaces.slice(2, 4).map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="
                  rounded-[18px]
                  border
                  border-[#e8dcc9]
                  bg-white
                  px-5
                  py-4

                  min-h-[95px]

                  flex
                  items-center
                  gap-3

                  shadow-[0_5px_16px_rgba(0,0,0,0.04)]
                  "
                >
                  <div
                    className="
                    w-10
                    h-10
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
                      text-[10px]
                      uppercase
                      tracking-[0.12em]
                      text-[#8a8f98]
                      leading-none
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
                      text-[18px]
                      text-[#111111]
                      leading-none
                      "
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                        fontWeight: 600,
                      }}
                    >
                      {item.value}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}