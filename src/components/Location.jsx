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
    icon: <Plane size={15} />,
    title: "Airport",
    value: "5.7 KM",
  },
  {
    icon: <Train size={15} />,
    title: "Railway",
    value: "3.2 KM",
  },
  {
    icon: <School size={15} />,
    title: "Schools",
    value: "Nearby",
  },
  {
    icon: <Building2 size={15} />,
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
      py-16
      md:py-20
      lg:py-24
      bg-[#f8f5ed]
      overflow-hidden
      scroll-mt-28
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
        relative
        z-10

        max-w-[1240px]
        mx-auto

        px-4
        sm:px-5
        lg:px-6
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
          grid
          lg:grid-cols-[1fr_1fr]
          gap-6
          xl:gap-8
          items-center
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
            relative

            rounded-[28px]

            bg-[#14234b]

            p-6
            md:p-8
            xl:p-10

            text-white
            overflow-hidden

            flex
            flex-col
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

            <div className="relative z-10 flex flex-col h-full">
              
              {/* TAG */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-[40px] h-[2px] bg-[#d1a54d]" />

                <p
                  className="
                  uppercase
                  tracking-[0.18em]
                  text-[10px]
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
                text-[34px]
                sm:text-[42px]
                lg:text-[50px]
                xl:text-[56px]

                leading-[1.02]
                tracking-[-1px]

                mb-5
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

                leading-[1.9]

                text-white/75

                max-w-[560px]

                mb-7
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                }}
              >
                Strategically located with seamless access
                to transport, schools, healthcare and
                lifestyle conveniences for elevated
                everyday living.
              </p>

              {/* ADDRESS CARD */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=1+Sonari+Gaon+Tarajan+Jorhat+Bhatemora+Gaon+Assam+785001"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex
                items-start
                gap-4

                rounded-[20px]

                border
                border-white/10

                bg-white/5

                p-5

                hover:bg-white/10

                transition-all
                duration-300
                "
              >
                <div
                  className="
                  w-11
                  h-11

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
                    mb-2
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    Project Location
                  </p>

                  <p
                    className="
                    text-[15px]
                    leading-[1.8]
                    text-white/85
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    1, Sonari Gaon, Tarajan, Jorhat
                    Bhatemora Gaon, Assam - 785001
                  </p>
                </div>
              </a>

              {/* BUTTONS */}
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1+Sonari+Gaon+Tarajan+Jorhat+Bhatemora+Gaon+Assam+785001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2

                  h-[48px]
                  px-7

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

                  h-[48px]
                  px-7

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

              {/* BOTTOM CARDS */}
              <div
                className="
                mt-10

                grid
                grid-cols-1
                sm:grid-cols-2

                gap-4
                "
              >
                {nearbyPlaces.slice(0, 2).map((item, index) => (
                  <div
                    key={index}
                    className="
                    rounded-[20px]

                    bg-white/5

                    border
                    border-white/10

                    px-5
                    py-4

                    flex
                    items-center
                    gap-4
                    "
                  >
                    <div
                      className="
                      w-11
                      h-11

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

                    <div>
                      <p
                        className="
                        text-[10px]
                        uppercase
                        tracking-[0.12em]
                        text-white/50
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
          <div className="flex flex-col gap-5">
            
            {/* MAP */}
            <div
              className="
              overflow-hidden

              rounded-[28px]

              border
              border-[#e7dccb]

              h-[320px]
              sm:h-[380px]
              lg:h-[520px]
              xl:h-[560px]

              shadow-[0_12px_35px_rgba(0,0,0,0.05)]
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
              grid-cols-1
              sm:grid-cols-2
              gap-4
              "
            >
              {nearbyPlaces.slice(2, 4).map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="
                  rounded-[20px]

                  border
                  border-[#e8dcc9]

                  bg-white

                  px-5
                  py-5

                  min-h-[110px]

                  flex
                  items-center
                  gap-4

                  shadow-[0_5px_16px_rgba(0,0,0,0.04)]
                  "
                >
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
                      text-[10px]
                      uppercase
                      tracking-[0.12em]
                      text-[#8a8f98]
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
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
