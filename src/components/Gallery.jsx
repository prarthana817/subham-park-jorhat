// src/components/Gallery.jsx

import { motion } from "framer-motion";

import gallery1 from "../assests/images/gallery-1.jpg";
import gallery2 from "../assests/images/gallery-2.jpg";
import gallery3 from "../assests/images/gallery-3.jpg";
import gallery4 from "../assests/images/gallery-4.jpg";
import gallery5 from "../assests/images/gallery-5.jpg";
import gallery6 from "../assests/images/gallery-6.jpg";

import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  {
    img: gallery1,
    title: "Sky high homescape",
    desc: "Elegant aerial lifestyle with greenery and open spaces.",
  },
  {
    img: gallery2,
    title: "Luxury exterior",
    desc: "Premium architecture crafted with timeless elegance.",
  },
  {
    img: gallery3,
    title: "Refined interiors",
    desc: "Warm sophisticated interiors with premium ambience.",
  },
  {
    img: gallery4,
    title: "Modern lifestyle",
    desc: "Contemporary living blended with peaceful surroundings.",
  },
  {
    img: gallery5,
    title: "Elegant living",
    desc: "Luxury lifestyle spaces inspired by modern comfort.",
  },
  {
    img: gallery6,
    title: "Nature & serenity",
    desc: "Beautiful balance of greenery and refined experiences.",
  },
];

export default function Gallery({ setOpen }) {
  return (
    <section
      id="gallery"
      className="
      relative
      overflow-hidden

      py-10
      lg:py-12

      bg-gradient-to-br
      from-[#bb7653]
      via-[#a86547]
      to-[#8a5238]
      "
    >
      {/* GRID OVERLAY */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.05]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* LEFT LINES */}
      <div
        className="
        absolute
        left-0
        top-0
        h-full
        w-[90px]
        opacity-[0.12]
        hidden lg:block
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#ffffff 0px,#ffffff 2px,transparent 2px,transparent 10px)",
        }}
      />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 lg:px-8">

        {/* TOP */}
        <div className="mb-8">

          {/* LABEL */}
          <div className="flex items-center gap-4 mb-4">

            <div className="w-[55px] h-[2px] bg-[#ffe2d1]" />

            <p
              className="
              uppercase
              tracking-[0.34em]
              text-[10px]
              text-[#fff3ea]
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              Signature Spaces
            </p>

          </div>

          {/* HEADING */}
          <h2
            className="
            text-white

            text-[42px]
            md:text-[54px]
            lg:text-[64px]

            leading-[0.95]
            tracking-[-2px]
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            Crafted{" "}

            <span className="italic text-[#ffe2d1]">
              Modern
            </span>{" "}

            Elegance
          </h2>

          {/* PARAGRAPH + BUTTON */}
          <div className="mt-4">

            <p
              className="
              text-[15px]
              lg:text-[16px]

              leading-[1.9]

              text-white/90

              max-w-[950px]
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 300,
              }}
            >
              Discover elegant architecture, serene green surroundings and beautifully curated spaces designed to elevate modern urban living with sophistication, comfort and timeless charm.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="
              mt-5

              flex
              items-center
              gap-3

              px-7
              py-3.5

              rounded-[16px]

              bg-[#dc9a79]
              hover:bg-[#efb190]

              text-white

              uppercase
              tracking-[0.16em]
              text-[10px]

              transition-all
              duration-300
              "
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
              }}
            >
              Explore Lifestyle

              <ArrowUpRight size={15} />
            </button>

          </div>

        </div>

        {/* GALLERY GRID */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3

          gap-5
          "
        >
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="
              group
              relative

              overflow-hidden

              rounded-[26px]

              h-[270px]
              lg:h-[340px]
              "
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="
                absolute
                inset-0

                w-full
                h-full

                object-cover

                transition-transform
                duration-700

                group-hover:scale-105
                "
              />

              {/* OVERLAY */}
              <div
                className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/80
                via-black/30
                to-transparent
                "
              />

              {/* CONTENT */}
              <div
                className="
                absolute
                bottom-0
                left-0

                w-full

                p-6
                lg:p-7
                "
              >
                <div className="flex items-end justify-between gap-4">

                  <div>

                    <h3
                      className="
                      text-[30px]
                      lg:text-[34px]

                      leading-[1]

                      text-white
                      "
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </h3>

                    <div
                      className="
                      mt-3

                      w-[60px]
                      h-[2px]

                      bg-[#ffe2d1]

                      transition-all
                      duration-500

                      group-hover:w-[90px]
                      "
                    />

                    <p
                      className="
                      mt-4

                      text-[13px]
                      lg:text-[14px]

                      leading-[1.7]

                      text-white/90

                      max-w-[250px]
                      "
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {item.desc}
                    </p>

                  </div>

                  <button
                    onClick={() => setOpen(true)}
                    className="
                    shrink-0

                    w-12
                    h-12

                    flex
                    items-center
                    justify-center

                    rounded-full

                    bg-white/10
                    hover:bg-white/20

                    border
                    border-white/20

                    backdrop-blur-md

                    transition-all
                    duration-300
                    "
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </button>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}