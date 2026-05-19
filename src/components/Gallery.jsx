// src/components/Gallery.jsx

import { motion } from "framer-motion";

import gallery1 from "../assests/images/gallery-1.jpg";
import gallery2 from "../assests/images/gallery-2.jpg";
import gallery3 from "../assests/images/gallery-3.jpg";
import gallery4 from "../assests/images/gallery-4.jpg";
import gallery5 from "../assests/images/gallery-5.jpg";
import gallery6 from "../assests/images/gallery-6.jpg";

import {
  ArrowUpRight,
  Leaf,
} from "lucide-react";

const galleryImages = [
  {
    img: gallery1,
    title: "Sky High Homescape",
    desc: "Elegant aerial lifestyle with greenery and open spaces.",
  },
  {
    img: gallery2,
    title: "Luxury Exterior",
    desc: "Premium architecture crafted with timeless elegance.",
  },
  {
    img: gallery3,
    title: "Refined Interiors",
    desc: "Warm sophisticated interiors with premium ambience.",
  },
  {
    img: gallery4,
    title: "Modern Lifestyle",
    desc: "Contemporary living blended with peaceful surroundings.",
  },
  {
    img: gallery5,
    title: "Elegant Living",
    desc: "Luxury lifestyle spaces inspired by modern comfort.",
  },
  {
    img: gallery6,
    title: "Nature & Serenity",
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

      py-16
      lg:py-20

      bg-gradient-to-br
      from-[#b56f4e]
      via-[#9c5e42]
      to-[#7f4933]
      "
    >

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#d9b39d]/30" />

      {/* TOP LEFT GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#f0b08a]/20 blur-[120px] rounded-full" />

      {/* BOTTOM RIGHT GLOW */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#5c2f20]/30 blur-[120px] rounded-full" />

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

      {/* LEFT STRIP */}
      <div
        className="
        absolute
        left-0
        top-0
        h-full
        w-[85px]
        opacity-[0.12]
        hidden lg:block
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#ffffff 0px,#ffffff 2px,transparent 2px,transparent 10px)",
        }}
      />

      <div className="relative z-10 max-w-[1450px] mx-auto px-4 lg:px-5">

        {/* TOP */}
        <div
          className="
          flex
          flex-col
          lg:flex-row
          lg:items-end
          lg:justify-between
          gap-8
          mb-12
          "
        >

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-3">

              <div className="w-10 h-[2px] bg-[#ffe1d1]" />

              <p
                className="
                uppercase
                tracking-[0.32em]
                text-[11px]
                text-[#fff2ea]
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Luxury Gallery
              </p>

            </div>

            <h2
              className="
              mt-4

              text-[40px]
              md:text-[52px]
              lg:text-[72px]

              leading-[0.92]

              text-white
              "
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontWeight: 400,
              }}
            >
              EXPERIENCE
              <br />

              ELEVATED
              <br />

              <span className="text-[#ffe1d1]">
                LIVING
              </span>

            </h2>

          </div>

          {/* RIGHT */}
          <div className="max-w-[470px] relative">

            <Leaf
              className="
              absolute
              -top-10
              right-0

              w-24
              h-24

              text-white/20
              "
              strokeWidth={1}
            />

            <p
              className="
              text-[16px]
              lg:text-[18px]

              leading-[1.9]

              text-white/80

              relative
              z-10
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 300,
              }}
            >
              Inspired by brochure aesthetics,
              Subham Park blends luxury architecture,
              green surroundings and refined lifestyle
              experiences crafted for modern living.
            </p>

            {/* CTA BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="
              mt-8

              flex
              items-center
              gap-3

              px-7
              py-4

              bg-white/10
              hover:bg-white/20

              border
              border-white/20

              backdrop-blur-md

              text-white

              uppercase
              tracking-[0.18em]
              text-[11px]

              transition-all
              duration-300
              "
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
              }}
            >
              Schedule Visit

              <ArrowUpRight size={16} />
            </button>

          </div>

        </div>

        {/* GRID */}
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
              className={`
              group
              relative

              overflow-hidden

              h-[260px]
              lg:h-[340px]

              ${
                index % 2 === 0
                  ? "bg-[#e7ded6]"
                  : "bg-[#f3ede7]"
              }
              `}
              style={{
                clipPath:
                  index % 2 === 0
                    ? "polygon(0 0,100% 0,100% 88%,92% 100%,0 100%)"
                    : "polygon(8% 0,100% 0,100% 100%,0 100%,0 12%)",
              }}
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
                ease-out

                group-hover:scale-105
                "
              />

              {/* DARK OVERLAY */}
              <div
                className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/75
                via-black/30
                to-transparent
                "
              />

              {/* EXTRA SHADOW */}
              <div
                className="
                absolute
                inset-0

                bg-black/10

                group-hover:bg-black/5

                transition-all
                duration-500
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

                <div
                  className="
                  flex
                  items-end
                  justify-between
                  gap-4
                  "
                >

                  <div>

                    <h3
                      className="
                      text-[24px]
                      lg:text-[28px]

                      leading-[1.1]

                      text-white

                      drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]
                      "
                      style={{
                        fontFamily: "'Cinzel Decorative', serif",
                        fontWeight: 400,
                      }}
                    >
                      {item.title}
                    </h3>

                    <div
                      className="
                      mt-3

                      w-[60px]
                      h-[2px]

                      bg-[#ffe1d1]

                      transition-all
                      duration-500

                      group-hover:w-[95px]
                      "
                    />

                    <p
                      className="
                      mt-4

                      text-[13px]
                      lg:text-[14px]

                      leading-[1.7]

                      text-white/90

                      max-w-[260px]

                      drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
                      "
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {item.desc}
                    </p>

                  </div>

                  {/* ICON */}
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

                    border
                    border-white/20

                    bg-white/10

                    backdrop-blur-md

                    hover:bg-white/20

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