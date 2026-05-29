// src/components/Gallery.jsx

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

import {
  X,
  Search,
} from "lucide-react";

import gallery1 from "../assests/images/location-map.jpg";
import gallery2 from "../assests/images/gallery-2.jpg";
import gallery3 from "../assests/images/gallery-3.jpg";
import gallery4 from "../assests/images/gallery-4.jpg";
import gallery5 from "../assests/images/gallery-5.jpg";
import gallery6 from "../assests/images/gallery-6.jpg";
import gallery7 from "../assests/images/gallery-7.jpg";
import gallery8 from "../assests/images/gallery-8.jpg";
import gallery9 from "../assests/images/gallery-9.jpg";

const galleryImages = [
  {
    img: gallery1,
    title: "Community Hall View",
  },
  {
    img: gallery2,
    title: "Gymnasium View",
  },
  {
    img: gallery3,
    title: "Terrace Lawn View",
  },
  {
    img: gallery4,
    title: "Badminton Court View",
  },
  {
    img: gallery5,
    title: "Splash Pool View",
  },
  {
    img: gallery6,
    title: "Indoor Games View",
  },
  {
    img: gallery7,
    title: "Evening Gate View",
  },
  {
    img: gallery8,
    title: "Elevation Night View",
  },
  {
    img: gallery9,
    title: "Area View",
  },
];

export default function Gallery({
  setOpen,
  setGalleryPopupOpen,
}) {
  const [selectedImage, setSelectedImage] =
    useState(null);

  /*
  ============================================
  BODY LOCK WITHOUT LAYOUT SHIFT
  ============================================
  */

  useEffect(() => {
    if (selectedImage) {
      const scrollBarWidth =
        window.innerWidth -
        document.documentElement
          .clientWidth;

      document.body.style.overflow =
        "hidden";

      document.body.style.paddingRight =
        `${scrollBarWidth}px`;

      document.body.style.touchAction =
        "none";
    } else {
      document.body.style.overflow = "";

      document.body.style.paddingRight =
        "";

      document.body.style.touchAction =
        "";
    }

    return () => {
      document.body.style.overflow = "";

      document.body.style.paddingRight =
        "";

      document.body.style.touchAction =
        "";
    };
  }, [selectedImage]);

  /*
  ============================================
  HIDE NAVBAR + STICKY FORM
  ============================================
  */

  useEffect(() => {
    if (setGalleryPopupOpen) {
      setGalleryPopupOpen(
        !!selectedImage
      );
    }
  }, [
    selectedImage,
    setGalleryPopupOpen,
  ]);

  return (
    <section
      id="gallery"
      className="
      relative
      overflow-hidden
      py-14
      lg:py-20
      bg-[#f8f5ed]
      "
    >
      {/* ================================= */}
      {/* FULLSCREEN POPUP */}
      {/* ================================= */}

      <AnimatePresence mode="wait">
        {selectedImage && (
          <motion.div
            key="gallery-popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.28,
            }}
            className="
            fixed
            inset-0
            z-[999999999]

            bg-black/95

            flex
            items-center
            justify-center

            p-4
            sm:p-6

            overflow-hidden

            isolation-isolate
            "
          >
            {/* CLOSE BUTTON */}

            <motion.button
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={() =>
                setSelectedImage(null)
              }
              className="
              fixed
              top-5
              right-5

              z-[9999999999]

              h-[56px]
              px-7

              rounded-full

              bg-white/10
              backdrop-blur-xl

              border
              border-white/10

              flex
              items-center
              gap-3

              text-white

              uppercase
              tracking-[0.18em]
              text-[11px]

              hover:bg-white/20

              transition-all
              duration-300
              "
              style={{
                fontFamily:
                  "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              <X size={18} />

              Close
            </motion.button>

            {/* IMAGE */}

            <motion.img
              initial={{
                scale: 0.92,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.92,
                opacity: 0,
              }}
              transition={{
                duration: 0.32,
              }}
              src={selectedImage}
              alt="Preview"
              className="
              relative
              z-[999999999]

              max-w-[96vw]
              max-h-[92vh]

              object-contain

              rounded-[24px]

              shadow-[0_25px_90px_rgba(0,0,0,0.55)]
              "
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================================= */}
      {/* BACKGROUND */}
      {/* ================================= */}

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

      {/* SIDE PATTERN */}

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

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 lg:px-6">
        {/* ================================= */}
        {/* HEADING */}
        {/* ================================= */}

        <div className="mb-10 lg:mb-12">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-[55px] h-[2px] bg-[#d1a54d]" />

            <p
              className="
              uppercase
              tracking-[0.28em]
              text-[10px]
              text-[#c79d47]
              "
              style={{
                fontFamily:
                  "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              Signature Spaces
            </p>
          </div>

          <h2
            className="
            text-[#111111]

            text-[36px]
            md:text-[48px]
            lg:text-[58px]

            leading-[0.95]

            tracking-[-2px]

            max-w-[850px]
            "
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            Crafted{" "}
            <span className="italic text-[#d1a54d]">
              Modern
            </span>{" "}
            Elegance
          </h2>

          <div className="mt-5 max-w-[760px]">
            <p
              className="
              text-[15px]
              leading-[1.9]
              text-[#5f6674]
              "
              style={{
                fontFamily:
                  "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              Discover elegant architecture,
              serene green surroundings and
              beautifully curated spaces
              designed to elevate modern urban
              living with sophistication and
              comfort.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="
              mt-6

              inline-flex
              items-center
              gap-3

              h-[50px]
              px-7

              rounded-full

              bg-[#14234b]
              hover:bg-[#1b2f63]

              text-white

              uppercase
              tracking-[0.15em]
              text-[10px]

              shadow-[0_12px_28px_rgba(20,35,75,0.22)]

              hover:-translate-y-[2px]

              transition-all
              duration-300
              "
              style={{
                fontFamily:
                  "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              Explore Lifestyle
            </button>
          </div>
        </div>

        {/* ================================= */}
        {/* GRID */}
        {/* ================================= */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          "
        >
          {galleryImages.map(
            (item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="
                group
                relative

                overflow-hidden

                rounded-[26px]

                h-[240px]
                sm:h-[260px]
                md:h-[290px]
                lg:h-[300px]

                border
                border-[#e9dfcf]

                shadow-[0_18px_45px_rgba(0,0,0,0.05)]

                bg-[#f1f1f1]
                "
              >
                {/* IMAGE */}

                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="
                  absolute
                  inset-0

                  w-full
                  h-full

                  object-cover
                  object-center

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
                  from-black/70
                  via-black/10
                  to-transparent
                  "
                />

                {/* SEARCH ICON */}

                <div
                  className="
                  absolute
                  inset-0

                  flex
                  items-center
                  justify-center

                  z-20

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-300
                  "
                >
                  <button
                    onClick={() =>
                      setSelectedImage(
                        item.img
                      )
                    }
                    className="
                    w-16
                    h-16

                    rounded-full

                    bg-white/15
                    backdrop-blur-md

                    border
                    border-white/20

                    flex
                    items-center
                    justify-center

                    scale-75
                    group-hover:scale-100

                    transition-all
                    duration-300
                    "
                  >
                    <Search className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* CONTENT */}

                <div
                  className="
                  absolute
                  bottom-0
                  left-0

                  w-full

                  p-5

                  z-30
                  "
                >
                  <div>
                    <h3
                      className="
                      text-[20px]
                      md:text-[24px]

                      leading-[1.1]

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
                      mt-3

                      w-[55px]
                      h-[2px]

                      bg-[#d1a54d]

                      transition-all
                      duration-500

                      group-hover:w-[85px]
                      "
                    />
                  </div>
                </div>

                {/* GLOW */}

                <div
                  className="
                  absolute
                  bottom-[-60px]
                  right-[-60px]

                  w-[140px]
                  h-[140px]

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
            )
          )}
        </div>
      </div>
    </section>
  );
}