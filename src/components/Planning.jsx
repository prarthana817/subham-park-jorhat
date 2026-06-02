// src/components/Planning.jsx

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  Maximize2,
  Compass,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

// Site Plan Image
import sitePlan from "../assests/images/SITE PLAN WITH TERRACE FLOOR.webp";

// New Floor Plan Images
import bhk2_5_sbua_1096 from "../assests/images/2.5 BHK - SBUA 1096 Sq Ft.png";
import bhk3_sbua_1339 from "../assests/images/3 BHK - SBUA 1339 Sq Ft.png";
import bhk3_sbua_1530 from "../assests/images/3 BHK - SBUA 1530 Sq Ft.png";
import bhk3_5_sbua_1684 from "../assests/images/3.5 BHK - SBUA 1684 Sq Ft.png";

const mainTabs = [
  { id: "site-plan", label: "Site Plan" },
  { id: "2bhk", label: "2.5 BHK Layouts" },
  { id: "3bhk", label: "3 & 3.5 BHK Layouts" },
];

const bhk2Plans = [
  {
    id: "2.5-bhk-sbua-1096",
    title: "2.5 BHK - SBUA 1096 Sq Ft",
    image: bhk2_5_sbua_1096,
    details:
      "Spacious 2.5 BHK apartment layout with a super built-up area of 1096 Sq Ft, carefully designed for modern living with optimal ventilation and spatial flow.",
  },
];

const bhk3Plans = [
  {
    id: "3bhk-sbua-1339",
    title: "3 BHK - SBUA 1339 Sq Ft",
    image: bhk3_sbua_1339,
    details:
      "Premium 3 BHK layout featuring a super built-up area of 1339 Sq Ft, beautifully optimized for space, natural light, and modern family living.",
  },
  {
    id: "3bhk-sbua-1530",
    title: "3 BHK - SBUA 1530 Sq Ft",
    image: bhk3_sbua_1530,
    details:
      "Luxurious 3 BHK apartment plan offering a generous super built-up area of 1530 Sq Ft, showcasing spacious rooms and exquisite dining and living layouts.",
  },
  {
    id: "3.5bhk-sbua-1684",
    title: "3.5 BHK - SBUA 1684 Sq Ft",
    image: bhk3_5_sbua_1684,
    details:
      "Magnificent 3.5 BHK residential layout with a super built-up area of 1684 Sq Ft, combining grand interiors, separate study/servant wings, and premier cross-ventilation.",
  },
];

export default function FloorPlans() {
  const [activeMainTab, setActiveMainTab] =
    useState("site-plan");

  const [active2BHKIndex, setActive2BHKIndex] =
    useState(0);

  const [active3BHKIndex, setActive3BHKIndex] =
    useState(0);

  const [imageOpen, setImageOpen] =
    useState(false);

  const [scale, setScale] = useState(1);

  // Reset indices
  useEffect(() => {
    setActive2BHKIndex(0);
    setActive3BHKIndex(0);
  }, [activeMainTab]);

  // Active layout
  const getActiveLayout = () => {
    if (activeMainTab === "site-plan") {
      return {
        title:
          "Site Plan with Terrace Floor",
        image: sitePlan,
        details:
          "Comprehensive architectural master plan of Subham Park, outlining tower positions, green zones, common amenities, parking configurations, and detailed terrace floor layouts.",
      };
    } else if (activeMainTab === "2bhk") {
      return (
        bhk2Plans[active2BHKIndex] ||
        bhk2Plans[0]
      );
    } else {
      return (
        bhk3Plans[active3BHKIndex] ||
        bhk3Plans[0]
      );
    }
  };

  const activeLayout = getActiveLayout();

  // Hide sticky navbar/form during popup
  useEffect(() => {
    const navbar =
      document.querySelector("header");

    const bottomForm =
      document.querySelector(
        ".bottom-4.z-\\[999\\]"
      ) ||
      document.querySelector(
        ".fixed.bottom-4"
      );

    if (imageOpen) {
      if (navbar)
        navbar.style.setProperty(
          "display",
          "none",
          "important"
        );

      if (bottomForm)
        bottomForm.style.setProperty(
          "display",
          "none",
          "important"
        );
    } else {
      if (navbar)
        navbar.style.display = "";

      if (bottomForm)
        bottomForm.style.display = "";
    }

    return () => {
      if (navbar)
        navbar.style.display = "";

      if (bottomForm)
        bottomForm.style.display = "";
    };
  }, [imageOpen]);

  return (
    <section
      id="planning"
      className="
      relative
      overflow-hidden
      pt-0
      pb-10
      bg-[#14234b]
      "
    >
      {/* BG GRID */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.035]
        pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "62px 62px",
        }}
      />

      {/* GOLD BLUR */}

      <div
        className="
        absolute
        top-[-120px]
        right-[-120px]

        w-[280px]
        h-[280px]

        bg-[#efe4cd]/10

        blur-[120px]

        rounded-full

        pointer-events-none
        "
      />

      <div
        className="
        relative
        z-10

        max-w-[1450px]
        mx-auto

        px-5
        lg:px-8
        "
      >
        {/* HEADER */}

        <div className="mb-10 lg:mb-12">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-[65px] h-[2px] bg-[#e8d9bb]" />

            <p
              className="
              uppercase
              tracking-[0.18em]
              text-[10px]
              md:text-[11px]
              text-[#efe4cd]
              "
              style={{
                fontFamily:
                  "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              Premium Floor Layouts
            </p>
          </div>

          <h2
            className="
            text-white

            text-[42px]
            md:text-[56px]
            lg:text-[68px]

            leading-[0.95]

            tracking-[-2px]

            max-w-[920px]
            "
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            Elegant{" "}
            <span className="italic text-[#efe4cd]">
              Living
            </span>{" "}
            Layouts
          </h2>

          <p
            className="
            mt-5

            text-[#d7ddeb]

            text-[15px]
            lg:text-[17px]

            leading-[1.9]

            max-w-[760px]

            text-justify
            "
            style={{
              fontFamily:
                "'Inter', sans-serif",
              fontWeight: 400,
            }}
          >
            Discover thoughtfully designed
            residential layouts with spacious
            planning, elegant interiors, and
            seamless spatial flow crafted for
            refined modern living.
          </p>
        </div>

        {/* MAIN CONTAINER */}

        <div
          className="
          relative

          bg-[#f4ead6]

          border
          border-[#f0e2c8]

          rounded-[32px]

          overflow-hidden

          shadow-[0_22px_60px_rgba(0,0,0,0.20)]
          "
        >
          {/* BG PATTERN */}

          <div
            className="
            absolute
            inset-0
            opacity-[0.04]
            pointer-events-none
            "
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right,#000000 0px,#000000 1px,transparent 1px,transparent 10px)",
            }}
          />

          <div
            className="
            relative
            z-10

            p-4
            md:p-6
            lg:p-8
            "
          >
            {/* MAIN TABS */}

            <div className="flex justify-center mb-6">
              <div
                className="
                flex

                w-full
                max-w-[720px]

                bg-[#fbf6ec]

                border
                border-[#e5d6bb]

                p-1.5

                rounded-2xl

                gap-1

                shadow-sm
                "
              >
                {mainTabs.map((tab) => {
                  const isActive =
                    activeMainTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() =>
                        setActiveMainTab(tab.id)
                      }
                      className={`
                        relative

                        flex-1

                        py-3
                        px-2

                        rounded-xl

                        text-[12px]
                        md:text-[14px]

                        font-medium

                        transition-all
                        duration-300

                        z-10

                        ${
                          isActive
                            ? "text-white"
                            : "text-[#7f715e] hover:text-[#14234b]"
                        }
                      `}
                      style={{
                        fontFamily:
                          "'Inter', sans-serif",
                      }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeMainTabIndicator"
                          className="
                          absolute
                          inset-0

                          bg-[#14234b]

                          rounded-xl

                          shadow-[0_6px_15px_rgba(20,35,75,0.2)]

                          -z-10
                          "
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}

                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PLAN BUTTONS */}

            <AnimatePresence mode="wait">
              {activeMainTab === "2bhk" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="mb-5"
                >
                  <div
                    className="
                    flex
                    flex-wrap
                    justify-center

                    gap-2.5

                    max-w-3xl
                    mx-auto
                    "
                  >
                    {bhk2Plans.map(
                      (plan, index) => {
                        const isActive =
                          active2BHKIndex ===
                          index;

                        return (
                          <button
                            key={plan.id}
                            onClick={() =>
                              setActive2BHKIndex(
                                index
                              )
                            }
                            className={`
                              px-4
                              md:px-5

                              py-3

                              rounded-xl

                              border

                              text-[12px]
                              md:text-sm

                              font-medium

                              transition-all
                              duration-300

                              ${
                                isActive
                                  ? "bg-[#14234b] border-[#14234b] text-white"
                                  : "bg-white/70 border-[#e5d6bb] text-[#14234b] hover:bg-[#efe2c7]/40"
                              }
                            `}
                            style={{
                              fontFamily:
                                "'Inter', sans-serif",
                            }}
                          >
                            {plan.title}
                          </button>
                        );
                      }
                    )}
                  </div>
                </motion.div>
              )}

              {activeMainTab === "3bhk" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="mb-5"
                >
                  <div
                    className="
                    flex
                    flex-wrap
                    justify-center

                    gap-2.5

                    max-w-4xl
                    mx-auto
                    "
                  >
                    {bhk3Plans.map(
                      (plan, index) => {
                        const isActive =
                          active3BHKIndex ===
                          index;

                        return (
                          <button
                            key={plan.id}
                            onClick={() =>
                              setActive3BHKIndex(
                                index
                              )
                            }
                            className={`
                              px-4
                              md:px-5

                              py-3

                              rounded-xl

                              border

                              text-[12px]
                              md:text-sm

                              font-medium

                              transition-all
                              duration-300

                              ${
                                isActive
                                  ? "bg-[#14234b] border-[#14234b] text-white"
                                  : "bg-white/70 border-[#e5d6bb] text-[#14234b] hover:bg-[#efe2c7]/40"
                              }
                            `}
                            style={{
                              fontFamily:
                                "'Inter', sans-serif",
                            }}
                          >
                            {plan.title}
                          </button>
                        );
                      }
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CONTENT */}

            <div
              className="
              bg-[#fbf6ec]

              border
              border-[#eadcc2]

              rounded-[28px]

              overflow-hidden

              shadow-[0_12px_35px_rgba(0,0,0,0.06)]
              "
            >
              <div
                className="
                p-5
                md:p-7
                lg:p-8
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeMainTab}-${active2BHKIndex}-${active3BHKIndex}`}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                    grid
                    grid-cols-1
                    lg:grid-cols-12

                    gap-7

                    items-center
                    "
                  >
                    {/* LEFT */}

                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-[#14234b]" />

                        <p
                          className="
                          uppercase
                          tracking-[0.14em]
                          text-[10px]
                          text-[#7f715e]
                          "
                          style={{
                            fontFamily:
                              "'Inter', sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          {activeMainTab ===
                          "site-plan"
                            ? "Development Masterplan"
                            : "Selected Apartment Plan"}
                        </p>
                      </div>

                      <h3
                        className="
                        text-[#111111]

                        text-[28px]
                        md:text-[34px]
                        lg:text-[38px]

                        leading-tight

                        mb-4
                        "
                        style={{
                          fontFamily:
                            "'Cormorant Garamond', serif",
                          fontWeight: 500,
                        }}
                      >
                        {activeLayout.title}
                      </h3>

                      <div className="w-[45px] h-[1.5px] bg-[#14234b]/20 mb-5" />

                      <p
                        className="
                        text-[#554d3f]

                        text-sm
                        md:text-base

                        leading-relaxed

                        text-justify
                        "
                        style={{
                          fontFamily:
                            "'Inter', sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {activeLayout.details}
                      </p>

                      {activeMainTab !==
                        "site-plan" && (
                        <div
                          className="
                          mt-6

                          p-4

                          rounded-xl

                          bg-[#f4ead6]/60

                          border
                          border-[#e5d6bb]

                          flex
                          items-start
                          gap-3
                          "
                        >
                          <Compass className="w-5 h-5 text-[#14234b] shrink-0 mt-0.5" />

                          <div>
                            <h4
                              className="
                              text-xs
                              uppercase
                              tracking-[0.08em]
                              text-[#14234b]
                              font-bold
                              mb-1
                              "
                              style={{
                                fontFamily:
                                  "'Inter', sans-serif",
                              }}
                            >
                              Smart Vastu Layout
                            </h4>

                            <p
                              className="
                              text-xs
                              text-[#7f715e]
                              leading-normal
                              text-justify
                              "
                              style={{
                                fontFamily:
                                  "'Inter', sans-serif",
                              }}
                            >
                              This apartment
                              features
                              cross-ventilation,
                              optimized natural
                              lighting, and
                              highly efficient
                              corner-to-corner
                              utility routing.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* RIGHT IMAGE */}

                    <div className="lg:col-span-8">
                      <div
                        onClick={() =>
                          setImageOpen(true)
                        }
                        className="
                        relative

                        overflow-hidden

                        rounded-[22px]

                        bg-white

                        border
                        border-[#efe1c7]

                        p-3
                        md:p-5

                        cursor-pointer
                        group

                        shadow-sm

                        flex
                        items-center
                        justify-center

                        min-h-[260px]
                        "
                      >
                        {/* HOVER */}

                        <div
                          className="
                          absolute
                          inset-0

                          bg-[#14234b]/5

                          opacity-0
                          group-hover:opacity-100

                          transition-opacity
                          duration-300

                          flex
                          items-center
                          justify-center

                          z-10

                          pointer-events-none
                          "
                        >
                          <div
                            className="
                            bg-[#14234b]

                            text-white

                            px-4
                            py-2

                            rounded-full

                            text-xs
                            font-semibold

                            tracking-[0.08em]
                            uppercase

                            flex
                            items-center
                            gap-2

                            shadow-lg

                            scale-90
                            group-hover:scale-100

                            transition-transform
                            duration-300
                            "
                          >
                            <Maximize2 className="w-3.5 h-3.5" />

                            <span>
                              Click to Zoom
                            </span>
                          </div>
                        </div>

                        <img
                          src={
                            activeLayout.image
                          }
                          alt={
                            activeLayout.title
                          }
                          className="
                          w-full

                          max-h-[260px]
                          md:max-h-[420px]
                          lg:max-h-[500px]

                          object-contain

                          rounded-[14px]

                          transition-transform
                          duration-500

                          group-hover:scale-[1.015]
                          "
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}

      {createPortal(
        <AnimatePresence>
          {imageOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                if (
                  e.target ===
                  e.currentTarget
                ) {
                  setImageOpen(false);
                  setScale(1);
                }
              }}
              className="
              fixed
              inset-0

              z-[99999]

              bg-black/95

              flex
              flex-col
              items-center
              justify-center

              p-4

              cursor-zoom-out
              "
            >
              {/* CLOSE */}

              <button
                onClick={(e) => {
                  e.stopPropagation();

                  setImageOpen(false);

                  setScale(1);
                }}
                className="
                fixed
                top-6
                right-6

                z-[100000]

                w-12
                h-12

                rounded-full

                bg-[#14234b]/95
                hover:bg-[#1d3369]

                border
                border-[#e5d6bb]/20

                text-white

                flex
                items-center
                justify-center

                transition-all
                duration-300

                shadow-xl

                hover:scale-105
                "
              >
                <X className="w-5 h-5" />
              </button>

              {/* IMAGE */}

              <div
                className="
                relative

                w-full
                max-w-5xl

                max-h-[80vh]

                flex
                items-center
                justify-center

                overflow-hidden

                p-2
                md:p-4

                rounded-3xl
                "
              >
                <motion.div
                  drag={scale > 1}
                  dragConstraints={{
                    left: -400,
                    right: 400,
                    top: -400,
                    bottom: 400,
                  }}
                  dragElastic={0.15}
                  animate={{ scale }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                  }}
                  className={`
                    ${
                      scale > 1
                        ? "cursor-grab active:cursor-grabbing"
                        : "cursor-default"
                    }

                    flex
                    items-center
                    justify-center
                  `}
                >
                  <img
                    src={
                      activeLayout.image
                    }
                    alt={
                      activeLayout.title
                    }
                    className="
                    max-w-[85vw]
                    max-h-[72vh]

                    object-contain

                    rounded-2xl

                    select-none
                    pointer-events-none

                    transition-shadow
                    duration-300

                    shadow-2xl

                    border
                    border-white/5
                    "
                  />
                </motion.div>
              </div>

              {/* CONTROLS */}

              <div
                onClick={(e) =>
                  e.stopPropagation()
                }
                className="
                fixed
                bottom-8
                left-1/2

                -translate-x-1/2

                flex
                items-center
                gap-5

                bg-[#14234b]/95
                backdrop-blur-md

                px-6
                py-3.5

                rounded-full

                border
                border-[#efe4cd]/15

                shadow-2xl

                z-[100000]
                "
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    setScale((s) =>
                      Math.max(1, s - 0.25)
                    );
                  }}
                  disabled={scale <= 1}
                  className="
                  p-1

                  rounded-lg

                  hover:bg-white/10

                  text-white

                  disabled:opacity-40

                  transition-all
                  duration-200
                  "
                >
                  <ZoomOut className="w-5 h-5" />
                </button>

                <span
                  className="
                  text-white

                  text-xs

                  font-mono
                  font-semibold

                  tracking-normal

                  min-w-[48px]

                  text-center
                  "
                >
                  {Math.round(scale * 100)}%
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    setScale((s) =>
                      Math.min(3, s + 0.25)
                    );
                  }}
                  disabled={scale >= 3}
                  className="
                  p-1

                  rounded-lg

                  hover:bg-white/10

                  text-white

                  disabled:opacity-40

                  transition-all
                  duration-200
                  "
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}