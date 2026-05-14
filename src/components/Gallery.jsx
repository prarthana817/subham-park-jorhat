// src/components/Gallery.jsx
// PREMIUM STACKED SIDECARD GALLERY

import { useState } from "react";
import { motion } from "framer-motion";

import img1 from "../assests/images/gallery-1.jpg";
import img2 from "../assests/images/gallery-2.jpg";
import img3 from "../assests/images/gallery-3.jpg";
import img4 from "../assests/images/gallery-4.jpg";
import img5 from "../assests/images/gallery-5.jpg";
import img6 from "../assests/images/gallery-6.jpg";

const galleryItems = [
  {
    image: img1,
    title: "Luxury Exterior",
    desc: "Elegant architectural aesthetics with premium modern design.",
  },
  {
    image: img2,
    title: "Sky Lounge",
    desc: "Relaxing rooftop atmosphere with premium comfort.",
  },
  {
    image: img3,
    title: "Modern Workspace",
    desc: "Beautiful interiors crafted for smart modern living.",
  },
  {
    image: img4,
    title: "Premium Lobby",
    desc: "Classic entrance experience with elegant ambience.",
  },
  {
    image: img5,
    title: "Community Space",
    desc: "Designed for social comfort and family lifestyle.",
  },
  {
    image: img6,
    title: "Luxury Lifestyle",
    desc: "Premium residential experience with timeless aesthetics.",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="gallery"
      className="
      relative

      overflow-hidden

      py-24

      bg-[#eef2ff]
      "
    >
      {/* GLOW */}
      <div
        className="
        absolute
        top-[-100px]
        left-[-100px]

        w-[350px]
        h-[350px]

        bg-blue-300/10

        blur-[120px]

        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-[-100px]
        right-[-100px]

        w-[350px]
        h-[350px]

        bg-pink-300/10

        blur-[120px]

        rounded-full
        "
      />

      {/* MAIN */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-5 lg:px-8">

        {/* TOP */}
        <div className="text-center max-w-[720px] mx-auto">

          <div className="flex items-center justify-center gap-4 mb-6">

            <div className="w-12 h-[2px] bg-gradient-to-r from-[#4b74ff] to-[#cf4dff]" />

            <p
              className="
              uppercase

              tracking-[0.4em]

              text-[11px]

              text-[#5d74ff]

              font-[400]
              "
            >
              Project Gallery
            </p>

          </div>

          <h2
            className="
            text-[42px]
            md:text-[62px]

            leading-[0.95]

            tracking-[-2px]

            font-[300]

            text-[#111827]
            "
          >
            Premium
            <span className="block bg-gradient-to-r from-[#4b74ff] to-[#a855f7] bg-clip-text text-transparent">
              Visual Experience
            </span>
          </h2>

          <div
            className="
            mt-5

            mx-auto

            w-[180px]
            h-[4px]

            rounded-full

            bg-gradient-to-r
            from-[#4b74ff]
            to-[#cf4dff]
            "
          />

        </div>

        {/* GALLERY LAYOUT */}
        <div
          className="
          mt-20

          grid
          lg:grid-cols-[0.75fr_1.25fr]

          gap-8

          items-center
          "
        >
          {/* LEFT SIDECARDS */}
          <div
            className="
            grid
            grid-cols-2

            sm:grid-cols-3

            gap-4
            "
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => setActive(index)}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className={`
                  relative

                  overflow-hidden

                  rounded-[28px]

                  cursor-pointer

                  group

                  border

                  ${
                    active === index
                      ? "border-[#6b7cff] shadow-[0_15px_45px_rgba(79,70,229,0.18)]"
                      : "border-white/50"
                  }
                `}
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  w-full

                  h-[180px]

                  object-cover

                  transition-all
                  duration-700

                  group-hover:scale-110
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                  absolute inset-0

                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                  "
                />

                {/* TITLE */}
                <div
                  className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  "
                >
                  <h3
                    className="
                    text-white

                    text-[16px]

                    leading-[1.3]

                    font-[500]
                    "
                  >
                    {item.title}
                  </h3>
                </div>

              </motion.div>
            ))}
          </div>

          {/* RIGHT BIG IMAGE */}
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="
            relative

            overflow-hidden

            rounded-[48px]

            border border-white/60

            bg-white/40
            backdrop-blur-xl

            shadow-[0_25px_80px_rgba(15,23,42,0.12)]
            "
          >
            {/* BIG IMAGE */}
            <img
              src={galleryItems[active].image}
              alt={galleryItems[active].title}
              className="
              w-full

              h-[620px]

              object-cover
              "
            />

            {/* OVERLAY */}
            <div
              className="
              absolute inset-0

              bg-gradient-to-t
              from-black/70
              via-black/10
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

              p-8
              md:p-12
              "
            >

              {/* TAG */}
              <div
                className="
                inline-flex

                px-5
                py-2

                rounded-full

                bg-white/15
                backdrop-blur-xl

                border border-white/10

                text-white

                uppercase

                tracking-[0.28em]

                text-[10px]
                "
              >
                Subham Park
              </div>

              {/* TITLE */}
              <h3
                className="
                mt-6

                text-[38px]
                md:text-[56px]

                leading-[0.95]

                tracking-[-2px]

                font-[300]

                text-white
                "
              >
                {galleryItems[active].title}
              </h3>

              {/* LINE */}
              <div
                className="
                mt-5

                w-[140px]
                h-[4px]

                rounded-full

                bg-gradient-to-r
                from-[#4b74ff]
                to-[#cf4dff]
                "
              />

              {/* DESC */}
              <p
                className="
                mt-6

                max-w-[620px]

                text-[16px]

                leading-[2]

                font-[300]

                text-white/80
                "
              >
                {galleryItems[active].desc}
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}