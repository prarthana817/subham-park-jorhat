// src/components/AboutUs.jsx

import { motion } from "framer-motion";

import img1 from "../assests/images/gallery-3.jpg";
import img2 from "../assests/images/gallery-5.jpg";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="
      relative
      overflow-hidden
      bg-[#f5f2ee]
      py-14
      lg:py-16
      "
    >
      {/* STRIP DESIGN */}
      <div className="absolute left-0 top-0 h-full w-[160px] opacity-[0.18] overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #cfc7bf 0px, #cfc7bf 2px, transparent 2px, transparent 8px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1380px] mx-auto px-5 lg:px-8">

        {/* TOP SECTION */}
        <div
          className="
          grid
          lg:grid-cols-[1.15fr_0.85fr]
          gap-5
          items-start
          "
        >

          {/* BIG IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div
              className="
              overflow-hidden
              rounded-[28px]

              h-[340px]
              lg:h-[430px]

              shadow-[0_18px_50px_rgba(0,0,0,0.07)]
              "
            >
              <img
                src={img1}
                alt="Luxury Interior"
                className="
                w-full
                h-full
                object-cover
                object-center
                scale-[1.02]
                "
              />
            </div>

            {/* FLOATING TEXT */}
            <div
              className="
              absolute
              bottom-[-20px]
              left-0

              bg-[#f5f2ee]

              px-6
              py-4

              rounded-tr-[24px]

              max-w-[260px]
              "
            >
              <h2
                className="
                text-[34px]
                lg:text-[46px]

                leading-[0.95]

                text-[#1b1b1b]
                "
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontWeight: 400,
                }}
              >
                Modern
                <br />
                Luxury
              </h2>
            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-5">

            {/* TEXT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
              bg-[#e8dfd7]

              rounded-[24px]

              p-6

              min-h-[205px]

              flex
              flex-col
              justify-between
              "
            >

              <div>
                <span
                  className="
                  inline-block

                  px-3
                  py-1.5

                  rounded-full

                  border
                  border-[#c7b6aa]

                  text-[10px]

                  text-[#8d6f61]
                  "
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    letterSpacing: "0.12em",
                  }}
                >
                  PREMIUM LIVING
                </span>
              </div>

              <div>
                <h3
                  className="
                  text-[28px]

                  leading-[1.05]

                  text-[#1f1f1f]
                  "
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    fontWeight: 400,
                  }}
                >
                  Into a gallery
                  <br />
                  of elegance
                </h3>

                <p
                  className="
                  mt-3

                  text-[13px]

                  leading-[1.7]

                  text-[#444]
                  "
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  Elegant architecture with refined luxury,
                  premium ambience and peaceful living.
                </p>
              </div>

            </motion.div>

            {/* SMALL IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="
              relative

              overflow-hidden

              rounded-[24px]

              h-[200px]
              lg:h-[220px]

              shadow-[0_18px_40px_rgba(0,0,0,0.07)]
              "
            >

              <img
                src={img2}
                alt="Luxury"
                className="
                w-full
                h-full
                object-cover
                object-center
                scale-[1.03]
                "
              />

              <div
                className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/50
                to-transparent
                "
              />

              <div className="absolute bottom-4 left-4">

                <span
                  className="
                  inline-block

                  px-3
                  py-1

                  rounded-full

                  bg-white/20
                  backdrop-blur-md

                  text-white
                  text-[9px]
                  "
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    letterSpacing: "0.14em",
                  }}
                >
                  LUXURY SPACES
                </span>

                <h4
                  className="
                  mt-2

                  text-[22px]

                  leading-[1.05]

                  text-white
                  "
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    fontWeight: 400,
                  }}
                >
                  Refined
                  <br />
                  Lifestyle
                </h4>

              </div>

            </motion.div>

          </div>

        </div>

        {/* STATS */}
        <div
          className="
          mt-12

          grid
          grid-cols-2
          lg:grid-cols-4

          gap-y-8

          bg-[#f1ece7]

          rounded-[30px]

          py-8
          px-4
          lg:px-6
          "
        >

          {[
            {
              number: "16",
              label: "Completed Projects",
            },
            {
              number: "28 Lac",
              label: "Sq. Ft. Constructed",
            },
            {
              number: "15 Lac",
              label: "Sq. Ft. Ongoing",
            },
            {
              number: "6000+",
              label: "Happy Residents",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
              relative

              text-center

              lg:border-r
              border-[#c8beb6]

              last:border-r-0
              "
            >

              <h3
                className="
                text-[36px]
                lg:text-[58px]

                leading-none

                text-[#434343]
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                }}
              >
                {item.number}
              </h3>

              <p
                className="
                mt-1.5

                text-[12px]
                lg:text-[14px]

                tracking-[0.01em]

                text-[#555]
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 300,
                }}
              >
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}