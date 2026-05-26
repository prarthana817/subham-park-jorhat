// src/components/Planning.jsx

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Maximize2, Compass, LayoutGrid, ZoomIn, ZoomOut } from "lucide-react";

// Site Plan Image
import sitePlan from "../assests/images/SITE PLAN WITH TERRACE FLOOR.webp";

// 2 BHK Images
import bhk2_study_3_4 from "../assests/images/2BHK + STUDY_UNIT NO 3 & 4.webp";
import bhk2_study_4 from "../assests/images/2BHK + STUDY_UNIT NO 4.webp";
import bhk2_study_5_3rd from "../assests/images/2BHK + STUDY_UNIT NO 5 _3RD FLOOR.webp";
import bhk2_study_5 from "../assests/images/2BHK + STUDY_UNIT NO 5.webp";

// 3 BHK Images
import bhk3_unit_2_a from "../assests/images/3 BHK UNIT NO 2.webp";
import bhk3_study_3 from "../assests/images/3BHK + STUDY_UNIT NO 3.webp";
import bhk3_study_4_5 from "../assests/images/3BHK + STUDY_UNIT NO 4 & 5.webp";
import bhk3_study_4 from "../assests/images/3BHK + STUDY_UNIT NO 4.webp";
import bhk3_unit_1 from "../assests/images/3BHK _UNIT NO 1.webp";
import bhk3_unit_1_2nd_5th from "../assests/images/3BHK _UNIT NO 1_2ND & 5TH FLOOR.webp";
import bhk3_unit_1_3rd_6th from "../assests/images/3BHK _UNIT NO 1_THIRD&SIXTH FLOOR.webp";
import bhk3_unit_2_b from "../assests/images/3BHK _UNIT NO 2.webp";
import bhk3_unit_2_3rd_6th from "../assests/images/3BHK _UNIT NO 2_3RD & 6TH FLOOR.webp";
import bhk3_unit_3_3rd from "../assests/images/3BHK _UNIT NO 3 _3RD FLOOR.webp";
import bhk3_unit_3 from "../assests/images/3BHK _UNIT NO 3.webp";
import bhk3_unit_4 from "../assests/images/3BHK _UNIT NO 4.webp";
import bhk3_unit_5_7_1st_4th from "../assests/images/3BHK _UNIT NO 5 & 7_first & fourt floor.webp";
import bhk3_unit_5_7 from "../assests/images/3BHK _UNIT NO 5&7.webp";
import bhk3_unit_6_4th from "../assests/images/3BHK _UNIT NO 6 4TH FLOOR.webp";
import bhk3_unit_6_8 from "../assests/images/3BHK _UNIT NO 6&8.webp";
import bhk3_unit_6_8_1st_4th from "../assests/images/3BHK _UNIT NO 6&8_FIRST AND 4TH FLOOR.webp";
import bhk3_unit_6 from "../assests/images/3BHK _UNIT NO 6.webp";
import bhk3_unit_7 from "../assests/images/3BHK _UNIT NO 7.webp";
import bhk3_unit_8 from "../assests/images/3BHK _UNIT NO 8.webp";
import bhk3_unit_3_2nd_5th from "../assests/images/3BHK _UNIT NO3 2ND & 5TH FLOOR.webp";
import bhk3_unit_6_2nd_5th from "../assests/images/3BHK_UNIT NO 6_2ND & FIFTH FLOOR.webp";

const mainTabs = [
  { id: "site-plan", label: "Site Plan" },
  { id: "2bhk", label: "2 BHK Layouts" },
  { id: "3bhk", label: "3 BHK Layouts" },
];

const bhk2Plans = [
  {
    id: "2bhk-study-3-4",
    title: "2 BHK + Study – Unit 3 & 4",
    image: bhk2_study_3_4,
    details: "Spacious 2 BHK layouts with a designated study room, ideal for modern work-from-home needs, occupying unit numbers 3 and 4.",
  },
  {
    id: "2bhk-study-4",
    title: "2 BHK + Study – Unit 4",
    image: bhk2_study_4,
    details: "Premium layout design for Unit 4, optimized for maximum spatial efficiency, natural light, and premium corner integration.",
  },
  {
    id: "2bhk-study-5-3rd",
    title: "2 BHK + Study – Unit 5 – 3rd Floor",
    image: bhk2_study_5_3rd,
    details: "Exquisite third floor plan for Unit 5, offering high accessibility, grand views and beautifully portioned bedroom alignments.",
  },
  {
    id: "2bhk-study-5",
    title: "2 BHK + Study – Unit 5",
    image: bhk2_study_5,
    details: "Standard luxury layout for Unit 5, showcasing comfortable bedrooms, contemporary kitchen, and cozy balcony attachments.",
  },
];

const bhk3Plans = [
  {
    id: "3bhk-unit-1",
    title: "3 BHK – Unit 1",
    image: bhk3_unit_1,
    details: "Grand 3 BHK Unit 1 layout with wide corridors, expansive living lounge, and three master suites for elegant living.",
  },
  {
    id: "3bhk-unit-1-2nd-5th",
    title: "3 BHK – Unit 1 – 2nd & 5th Floor",
    image: bhk3_unit_1_2nd_5th,
    details: "Premium corner apartment layout for Unit 1 across the 2nd and 5th floors with grand balconies.",
  },
  {
    id: "3bhk-unit-1-3rd-6th",
    title: "3 BHK – Unit 1 – 3rd & 6th Floor",
    image: bhk3_unit_1_3rd_6th,
    details: "Grand design for Unit 1 across the 3rd and 6th floors with airy layout and double side ventilation.",
  },
  {
    id: "3bhk-unit-2-a",
    title: "3 BHK – Unit 2 – 2nd & 5th Floor",
    image: bhk3_unit_2_a,
    details: "Sophisticated apartment plan for Unit 2 across the 2nd and 5th floors, curated with spacious layouts and premium dining design.",
  },
  {
    id: "3bhk-unit-2-b",
    title: "3 BHK – Unit 2 – 1st & 4th Floor",
    image: bhk3_unit_2_b,
    details: "Spacious apartment plan for Unit 2 on the 1st and 4th floors offering maximum space efficiency and premium cross ventilation.",
  },
  {
    id: "3bhk-unit-2-3rd-6th",
    title: "3 BHK – Unit 2 – 3rd & 6th Floor",
    image: bhk3_unit_2_3rd_6th,
    details: "Luxurious middle floor layouts for Unit 2 on the 3rd and 6th floors with gorgeous cityscape views.",
  },
  {
    id: "3bhk-unit-3",
    title: "3 BHK – Unit 3",
    image: bhk3_unit_3,
    details: "Classic 3 BHK design for Unit 3 with integrated luxury dining and smart modular kitchen space.",
  },
  {
    id: "3bhk-study-3",
    title: "3 BHK + Study – Unit 3",
    image: bhk3_study_3,
    details: "Enhanced 3 BHK plan for Unit 3 incorporating a study room, ideal for a private office space.",
  },
  {
    id: "3bhk-unit-3-3rd",
    title: "3 BHK – Unit 3 – 3rd Floor",
    image: bhk3_unit_3_3rd,
    details: "Third floor exclusive design for Unit 3, optimized for perfect morning sunlight and cozy bedroom views.",
  },
  {
    id: "3bhk-unit-3-2nd-5th",
    title: "3 BHK – Unit 3 – 2nd & 5th Floor",
    image: bhk3_unit_3_2nd_5th,
    details: "Special layout for Unit 3 on the 2nd and 5th floors with customized large bathrooms and walk-in dresser options.",
  },
  {
    id: "3bhk-unit-4",
    title: "3 BHK – Unit 4",
    image: bhk3_unit_4,
    details: "Lavish 3 BHK planning for Unit 4, displaying grand entrance foyer and smart cross-ventilation.",
  },
  {
    id: "3bhk-study-4",
    title: "3 BHK + Study – Unit 4",
    image: bhk3_study_4,
    details: "Luxurious Unit 4 layout adding a highly productive private study/library space.",
  },
  {
    id: "3bhk-study-4-5",
    title: "3 BHK + Study – Unit 4 & 5",
    image: bhk3_study_4_5,
    details: "Grand combo layouts for Unit 4 and 5 featuring elegant private wings and double balconies.",
  },
  {
    id: "3bhk-unit-5-7",
    title: "3 BHK – Unit 5 & 7",
    image: bhk3_unit_5_7,
    details: "Beautiful symmetrical layouts for Units 5 and 7 with dynamic living zones and elegant layouts.",
  },
  {
    id: "3bhk-unit-5-7-1st-4th",
    title: "3 BHK – Unit 5 & 7 – 1st & 4th Floor",
    image: bhk3_unit_5_7_1st_4th,
    details: "Specially tailored layouts for Units 5 & 7 on the 1st and 4th floors with beautiful terrace views.",
  },
  {
    id: "3bhk-unit-6",
    title: "3 BHK – Unit 6",
    image: bhk3_unit_6,
    details: "Elegant 3 BHK layout for Unit 6, featuring master bedroom privacy and large dining area.",
  },
  {
    id: "3bhk-unit-6-4th",
    title: "3 BHK – Unit 6 – 4th Floor",
    image: bhk3_unit_6_4th,
    details: "Fourth floor custom layout for Unit 6, offering exclusive design with large windows.",
  },
  {
    id: "3bhk-unit-6-2nd-5th",
    title: "3 BHK – Unit 6 – 2nd & 5th Floor",
    image: bhk3_unit_6_2nd_5th,
    details: "Breathtaking middle floor layouts for Unit 6 on the 2nd and 5th floors with extensive kitchen utilities.",
  },
  {
    id: "3bhk-unit-6-8",
    title: "3 BHK – Unit 6 & 8",
    image: bhk3_unit_6_8,
    details: "Magnificent dual unit mapping for Unit 6 & 8, emphasizing premium luxury and maximum privacy.",
  },
  {
    id: "3bhk-unit-6-8-1st-4th",
    title: "3 BHK – Unit 6 & 8 – 1st & 4th Floor",
    image: bhk3_unit_6_8_1st_4th,
    details: "Bespoke layouts for Units 6 & 8 on the 1st & 4th floors with modern layout refinements.",
  },
  {
    id: "3bhk-unit-7",
    title: "3 BHK – Unit 7",
    image: bhk3_unit_7,
    details: "Charming 3 BHK design for Unit 7 with a warm living aesthetic and beautifully placed kitchen setup.",
  },
  {
    id: "3bhk-unit-8",
    title: "3 BHK – Unit 8",
    image: bhk3_unit_8,
    details: "Exquisite 3 BHK plan for Unit 8 with three large bedrooms, dual toilets and private entrance.",
  },
];

export default function FloorPlans() {
  const [activeMainTab, setActiveMainTab] = useState("site-plan");
  const [active2BHKIndex, setActive2BHKIndex] = useState(0);
  const [active3BHKIndex, setActive3BHKIndex] = useState(0);
  const [imageOpen, setImageOpen] = useState(false);
  const [scale, setScale] = useState(1);

  // Get active layout based on current selections
  const getActiveLayout = () => {
    if (activeMainTab === "site-plan") {
      return {
        title: "Site Plan with Terrace Floor",
        image: sitePlan,
        details: "Comprehensive architectural master plan of Subham Park, outlining tower positions, green zones, common amenities, parking configurations, and detailed terrace floor layouts.",
      };
    } else if (activeMainTab === "2bhk") {
      return bhk2Plans[active2BHKIndex];
    } else {
      return bhk3Plans[active3BHKIndex];
    }
  };

  const activeLayout = getActiveLayout();

  // Hide sticky navbar and sticky bottom form when lightbox is open
  useEffect(() => {
    const navbar = document.querySelector("header");
    const bottomForm = document.querySelector(".bottom-4.z-\\[999\\]") || document.querySelector(".fixed.bottom-4");
    
    if (imageOpen) {
      if (navbar) navbar.style.setProperty("display", "none", "important");
      if (bottomForm) bottomForm.style.setProperty("display", "none", "important");
    } else {
      if (navbar) navbar.style.display = "";
      if (bottomForm) bottomForm.style.display = "";
    }
    
    return () => {
      if (navbar) navbar.style.display = "";
      if (bottomForm) bottomForm.style.display = "";
    };
  }, [imageOpen]);

  return (
    <section
      id="planning"
      className="relative overflow-hidden py-16 lg:py-24 bg-[#14234b]"
    >
      {/* Background grids */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "62px 62px",
        }}
      />

      {/* Decorative Golden Blur */}
      <div className="absolute top-[-120px] right-[-120px] w-[280px] h-[280px] bg-[#efe4cd]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-10 lg:mb-12">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-[65px] h-[2px] bg-[#e8d9bb]" />
            <p
              className="uppercase tracking-[0.30em] text-[10px] md:text-[11px] text-[#efe4cd]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              Premium Floor Layouts
            </p>
          </div>

          <h2
            className="text-white text-[42px] md:text-[56px] lg:text-[68px] leading-[0.95] tracking-[-2px] max-w-[920px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            Elegant{" "}
            <span className="italic text-[#efe4cd]">Living</span> Layouts
          </h2>

          <p
            className="mt-5 text-[#d7ddeb] text-[15px] lg:text-[17px] leading-[1.9] max-w-[760px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
            }}
          >
            Discover thoughtfully designed residential layouts with spacious planning, elegant interiors, and seamless spatial flow crafted for refined modern living.
          </p>
        </div>

        {/* Showcase Container */}
        <div
          className="relative bg-[#f4ead6] border border-[#f0e2c8] rounded-[32px] overflow-hidden shadow-[0_22px_60px_rgba(0,0,0,0.20)]"
        >
          {/* Subtle decorative background pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right,#000000 0px,#000000 1px,transparent 1px,transparent 10px)",
            }}
          />

          <div className="relative p-5 md:p-7 lg:p-10 z-10">
            
            {/* MAIN NAVIGATION TABS */}
            <div className="flex justify-center mb-8">
              <div className="flex bg-[#fbf6ec] border border-[#e5d6bb] p-1.5 rounded-2xl gap-1 shadow-sm w-full max-w-lg">
                {mainTabs.map((tab) => {
                  const isActive = activeMainTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveMainTab(tab.id)}
                      className={`relative flex-1 py-3 px-2 rounded-xl text-[13px] md:text-[14px] font-medium transition-all duration-300 z-10 ${
                        isActive
                          ? "text-white"
                          : "text-[#7f715e] hover:text-[#14234b]"
                      }`}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeMainTabIndicator"
                          className="absolute inset-0 bg-[#14234b] rounded-xl shadow-[0_6px_15px_rgba(20,35,75,0.2)] -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* INNER SUB-TABS SHOWCASE (For 2 BHK & 3 BHK) */}
            <AnimatePresence mode="wait">
              {activeMainTab === "2bhk" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="mb-8"
                >
                  <div className="flex items-center justify-center gap-2 mb-3.5 text-[#7f715e] text-xs font-semibold tracking-wider uppercase">
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>Select 2 BHK Unit Layout</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
                    {bhk2Plans.map((plan, index) => {
                      const isActive = active2BHKIndex === index;
                      return (
                        <button
                          key={plan.id}
                          onClick={() => setActive2BHKIndex(index)}
                          className={`px-4 py-3 rounded-xl border text-center text-xs md:text-sm font-medium tracking-wide transition-all duration-300 flex items-center justify-center min-h-[48px] ${
                            isActive
                              ? "bg-[#14234b] border-[#14234b] text-white shadow-sm"
                              : "bg-white/60 border-[#e5d6bb] text-[#14234b] hover:bg-[#efe2c7]/40"
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {plan.title}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {activeMainTab === "3bhk" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="mb-8"
                >
                  <div className="flex items-center justify-center gap-2 mb-3.5 text-[#7f715e] text-xs font-semibold tracking-wider uppercase">
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>Select 3 BHK Unit Layout</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
                    {bhk3Plans.map((plan, index) => {
                      const isActive = active3BHKIndex === index;
                      return (
                        <button
                          key={plan.id}
                          onClick={() => setActive3BHKIndex(index)}
                          className={`px-4 py-3 rounded-xl border text-center text-xs md:text-sm font-medium tracking-wide transition-all duration-300 flex items-center justify-center min-h-[52px] leading-snug ${
                            isActive
                              ? "bg-[#14234b] border-[#14234b] text-white shadow-sm"
                              : "bg-white/60 border-[#e5d6bb] text-[#14234b] hover:bg-[#efe2c7]/40"
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {plan.title}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* DETAILS & DISPLAY CONTAINER */}
            <div
              className="bg-[#fbf6ec] border border-[#eadcc2] rounded-[28px] overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
            >
              <div className="p-5 md:p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeMainTab}-${active2BHKIndex}-${active3BHKIndex}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                  >
                    {/* Texts Panel */}
                    <div className="lg:col-span-4 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-[#14234b]" />
                        <p
                          className="uppercase tracking-[0.20em] text-[10px] text-[#7f715e]"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 600,
                          }}
                        >
                          {activeMainTab === "site-plan" ? "Development Masterplan" : "Selected Apartment Plan"}
                        </p>
                      </div>

                      <h3
                        className="text-[#111111] text-[28px] md:text-[34px] lg:text-[38px] leading-tight mb-4"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 500,
                        }}
                      >
                        {activeLayout.title}
                      </h3>

                      <div className="w-[45px] h-[1.5px] bg-[#14234b]/20 mb-5" />

                      <p
                        className="text-[#554d3f] text-sm md:text-base leading-relaxed"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {activeLayout.details}
                      </p>

                      {activeMainTab !== "site-plan" && (
                        <div className="mt-6 p-4 rounded-xl bg-[#f4ead6]/60 border border-[#e5d6bb] flex items-start gap-3">
                          <Compass className="w-5 h-5 text-[#14234b] shrink-0 mt-0.5" />
                          <div>
                            <h4
                              className="text-xs uppercase tracking-wider text-[#14234b] font-bold mb-1"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              Smart Vastu Layout
                            </h4>
                            <p
                              className="text-xs text-[#7f715e] leading-normal"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              This apartment features cross-ventilation, optimized natural lighting, and highly efficient corner-to-corner utility routing.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Image View Frame */}
                    <div className="lg:col-span-8">
                      <div
                        onClick={() => setImageOpen(true)}
                        className="relative overflow-hidden rounded-[22px] bg-white border border-[#efe1c7] p-3 md:p-5 cursor-pointer group shadow-sm flex items-center justify-center min-h-[300px]"
                      >
                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 bg-[#14234b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
                          <div className="bg-[#14234b] text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-2 shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>Click to Zoom</span>
                          </div>
                        </div>

                        <img
                          src={activeLayout.image}
                          alt={activeLayout.title}
                          className="w-full max-h-[320px] md:max-h-[460px] lg:max-h-[520px] object-contain rounded-[14px] transition-transform duration-500 group-hover:scale-[1.015]"
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

      {/* FULLSCREEN IMAGE LIGHTBOX */}
      {createPortal(
        <AnimatePresence>
          {imageOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setImageOpen(false);
                  setScale(1);
                }
              }}
              className="fixed inset-0 z-[99999] bg-black/95 flex flex-col items-center justify-center p-4 cursor-zoom-out"
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setImageOpen(false);
                  setScale(1);
                }}
                className="fixed top-6 right-6 z-[100000] w-12 h-12 rounded-full bg-[#14234b]/95 hover:bg-[#1d3369] border border-[#e5d6bb]/20 text-white flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer hover:scale-105"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Image Container */}
              <div className="relative w-full max-w-5xl max-h-[80vh] flex items-center justify-center overflow-hidden p-2 md:p-4 rounded-3xl bg-transparent cursor-default">
                <motion.div
                  drag={scale > 1}
                  dragConstraints={{ left: -400, right: 400, top: -400, bottom: 400 }}
                  dragElastic={0.15}
                  animate={{ scale }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  className={`${scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default"} flex items-center justify-center`}
                >
                  <img
                    src={activeLayout.image}
                    alt={activeLayout.title}
                    className="max-w-[85vw] max-h-[72vh] object-contain rounded-2xl select-none pointer-events-none transition-shadow duration-300 shadow-2xl border border-white/5"
                  />
                </motion.div>
              </div>

              {/* Bottom Floating Control Bar */}
              <div 
                onClick={(e) => e.stopPropagation()}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-5 bg-[#14234b]/95 backdrop-blur-md px-6 py-3.5 rounded-full border border-[#efe4cd]/15 shadow-2xl z-[100000] cursor-default select-none"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setScale((s) => Math.max(1, s - 0.25));
                  }}
                  disabled={scale <= 1}
                  className="p-1 rounded-lg hover:bg-white/10 text-white disabled:opacity-40 disabled:hover:bg-transparent transition-all duration-200 cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                
                <span className="text-white text-xs font-mono font-semibold tracking-wider min-w-[48px] text-center">
                  {Math.round(scale * 100)}%
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setScale((s) => Math.min(3, s + 0.25));
                  }}
                  disabled={scale >= 3}
                  className="p-1 rounded-lg hover:bg-white/10 text-white disabled:opacity-40 disabled:hover:bg-transparent transition-all duration-200 cursor-pointer"
                  title="Zoom In"
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