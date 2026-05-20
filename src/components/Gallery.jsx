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
      lg:py-24

      bg-[#f8f5ed]
      "
    >
      
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "68px 68px",
        }}
      />

      
      <div
        className="
        absolute
        left-0
        top-0

        h-full
        w-[220px]

        opacity-[0.035]

        hidden lg:block
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#000000 0px,#000000 1px,transparent 1px,transparent 9px)",
        }}
      />

      
      <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-[#2143b5]/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-5 lg:px-8">
        
        <div className="mb-10 lg:mb-14">
          
          <div className="flex items-center gap-4 mb-5">
            <div className="w-[60px] h-[2px] bg-[#d1a54d]" />

            <p
              className="
              uppercase

              tracking-[0.32em]

              text-[11px]

              text-[#c79d47]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              Signature Spaces
            </p>
          </div>

          
          <h2
            className="
            text-[#111111]

            text-[42px]
            md:text-[54px]
            lg:text-[64px]

            leading-[0.95]

            tracking-[-2px]

            max-w-[900px]
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            Crafted{" "}

            <span className="italic text-[#d1a54d]">
              Modern
            </span>{" "}

            Elegance
          </h2>

          
          <div className="mt-6 max-w-[820px]">
            <p
              className="
              text-[17px]

              leading-[1.9]

              text-[#5f6674]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              Discover elegant architecture, serene green
              surroundings and beautifully curated spaces
              designed to elevate modern urban living with
              sophistication, comfort and timeless charm.
            </p>

            
            <button
              onClick={() => setOpen(true)}
              className="
              mt-7

              inline-flex
              items-center
              gap-3

              h-[54px]

              px-8

              rounded-full

              bg-[#14234b]
              hover:bg-[#1b2f63]

              text-white

              uppercase

              tracking-[0.16em]

              text-[10px]

              shadow-[0_12px_28px_rgba(20,35,75,0.22)]

              hover:-translate-y-[2px]

              transition-all
              duration-300
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              Explore Lifestyle

              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

      
        <div
          className="
          grid

          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3

          gap-6
          "
        >
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              viewport={{ once: true }}
              className="
              group
              relative

              overflow-hidden

              rounded-[30px]

              h-[300px]
              md:h-[340px]
              lg:h-[390px]

              border
              border-[#e9dfcf]

              shadow-[0_18px_45px_rgba(0,0,0,0.05)]

              bg-white
              "
            >
              
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

              
              <div
                className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/75
                via-black/20
                to-transparent
                "
              />

              
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
                        fontFamily:
                          "'Cormorant Garamond', serif",
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </h3>

                    
                    <div
                      className="
                      mt-4

                      w-[58px]
                      h-[2px]

                      bg-[#d1a54d]

                      transition-all
                      duration-500

                      group-hover:w-[90px]
                      "
                    />

                    <p
                      className="
                      mt-4

                      text-[14px]

                      leading-[1.8]

                      text-white/90

                      max-w-[260px]
                      "
                      style={{
                        fontFamily:
                          "'Inter', sans-serif",
                        fontWeight: 400,
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

                    bg-[#14234b]
                    hover:bg-[#1b2f63]

                    border
                    border-[#24396f]

                    backdrop-blur-md

                    transition-all
                    duration-300
                    "
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              
              <div
                className="
                absolute
                bottom-[-60px]
                right-[-60px]

                w-[160px]
                h-[160px]

                rounded-full

                bg-[#2143b5]/10

                blur-[70px]

                opacity-0

                transition-all
                duration-500

                group-hover:opacity-100
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}