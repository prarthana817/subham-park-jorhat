import React, { useState } from "react";
import {
  MapPin,
  Building2,
  Ruler,
  Construction,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assests/images/shubham_logo.png";
import StickyLeadForm from "./StickyLeadForm"; // Assuming this is where your form component is

const stats = [
  {
    value: "16+",
    label: "Completed Projects",
    icon: <Building2 size={18} />,
  },
  {
    value: "28 Lac",
    label: "Sq. Ft. Constructed",
    icon: <Ruler size={18} />,
  },
  {
    value: "15 Lac",
    label: "Sq. Ft. Ongoing",
    icon: <Construction size={18} />,
  },
  {
    value: "6000+",
    label: "Happy Residents",
    icon: <Users size={18} />,
  },
];

const ongoingProjects = [
  { name: "Subham Garden", location: "Jorhat" },
  { name: "Subham Solitaire", location: "Agartala" },
  { name: "Subham Ashray", location: "Garal" },
  { name: "Subham Park", location: "Bongaigaon" },
  { name: "Subham Kishori Heights", location: "Dibrugarh" },
  { name: "The Peak", location: "GS Road" },
];

const completedProjects = [
  { name: "Subham Heights", location: "Kahilipara" },
  { name: "Subham Enclave", location: "Hatigaon" },
  { name: "Subham Park View", location: "Fatasil" },
  { name: "Subham Elite", location: "Gandhibasti" },
  { name: "Subham Classic", location: "Ambikagiri Nagar" },
  { name: "Subham Manjushree", location: "Datalpara" },
  { name: "Subham Regency", location: "Hengrabari" },
  { name: "Subham Residency", location: "Kharguli" },
  { name: "Subham Sapphire", location: "Nalapara" },
  { name: "Subham Greens", location: "Lokhra" },
  { name: "Subham Buildwell", location: "Zoo Road" },
  { name: "Subham Garden", location: "Kalapahar" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function ProjectOverview({ galleryPopupOpen }) {
  const [selectedLocation, setSelectedLocation] = useState("Jorhat");
  const [selectedProjectName, setSelectedProjectName] = useState("Subham Garden");

  const handleProjectClick = (name, location) => {
    setSelectedLocation(location);
    setSelectedProjectName(name);
  };

  return (
    <section
      id="project"
      className="relative overflow-hidden pt-0 pb-10 bg-[#f7f5ef]"
    >
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full flex flex-col gap-12">
        
        {/* ================= HEADER SECTION (Updated Padding-Top) ================= */}
        <motion.div {...fadeInUp} className="mt-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-[40px] h-[1.5px] bg-[#d1a54d]" />
            <p
              className="uppercase tracking-[0.28em] text-[10px] text-[#c79d47]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              Project Overview
            </p>
          </div>
          <div className="lg:ml-1">
            <h2
              className="text-[34px] md:text-[44px] lg:text-[54px] leading-[0.95] tracking-[-1.5px] text-[#101010]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Landmark <span className="italic text-[#d1a54d]">Projects</span>
            </h2>
          </div>
        </motion.div>

        {/* Site Visit Form Component */}
        <div className="w-full -mt-10">
           <StickyLeadForm galleryPopupOpen={galleryPopupOpen} />
        </div>

        {/* ================= STATS MATRIX GRID ================= */}
        <motion.div
          {...fadeInUp}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, boxShadow: "0px 10px 25px rgba(20,35,75,0.05)" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="rounded-[20px] border border-[#f0e8db] bg-white p-4 flex items-center gap-4 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#f6edd9] flex items-center justify-center text-[#d1a54d] shrink-0">
                {item.icon}
              </div>
              <div>
                <h3
                  className="text-[22px] md:text-[26px] leading-none text-[#14234b]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                >
                  {item.value}
                </h3>
                <p
                  className="mt-1 text-[8px] uppercase tracking-[0.16em] text-[#5f6674] leading-[1.4]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= PREMIUM LUXURY BRAND SHOWCASE BLOCK ================= */}
        <motion.div
          {...fadeInUp}
          className="relative w-full bg-white rounded-[24px] border border-[#e8dfd0] p-6 md:p-10 lg:p-12 shadow-[0_12px_40px_rgba(20,35,75,0.02),0_1px_2px_rgba(0,0,0,0.01)] overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <div className="flex-shrink-0 flex justify-center items-center relative py-1 lg:py-0">
              <motion.div
                animate={{ y: [0, -6, 3, 0], rotate: [0, 0.2, -0.2, 0] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                whileHover={{ scale: 1.03, filter: "drop-shadow(0px 15px 25px rgba(20,35,75,0.04))" }}
                className="relative w-[190px] sm:w-[210px] md:w-[230px] flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <img src={logo} alt="Subham Group Corporate Crest" className="w-full h-auto object-contain select-none" />
              </motion.div>
            </div>

            <div className="relative flex items-center justify-center flex-shrink-0 w-full lg:w-auto -my-1 lg:my-0 lg:-mx-1 z-20">
              <div className="hidden lg:block w-[1.5px] h-[140px] bg-gradient-to-b from-transparent via-[#D1A54D] to-transparent opacity-50" />
              <div className="block lg:hidden w-1/3 h-[1.5px] bg-gradient-to-r from-transparent via-[#D1A54D] to-transparent opacity-50" />
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex-grow flex flex-col justify-center text-center lg:text-left pt-1 lg:pt-0 lg:pl-2"
            >
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#C79D47] font-bold block mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                Corporate Signet Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] tracking-tight text-[#14234B] leading-[1.2] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Time-Bound Projects <span className="italic font-normal text-[#D1A54D] relative inline-block">and Timeless</span> Relationships
              </h2>
              <p className="text-[13.5px] md:text-[14.5px] leading-[1.8] text-[#5F6674] text-justify lg:text-left tracking-wide font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
                Since 2007, Subham Group has been the silent force behind Assam’s skyline, blending architectural bravery with the warmth of a home. Based in Guwahati, we are known for innovation, timely delivery, and dedicated customer support. Driven by passion, we create lasting value through time-bound projects and timeless relationships.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ================= STATIC PROJECT LIST CONTAINER ================= */}
        <motion.div
          {...fadeInUp}
          className="rounded-[24px] border border-[#e8dfd0] bg-white p-6 md:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.015)] flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <p className="uppercase tracking-[0.26em] text-[10px] text-[#b58d45]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>Ongoing Projects</p>
              <div className="flex-grow h-[1px] bg-[#f3eee5]" />
            </div>
            <div className="flex flex-wrap gap-2.5">
              {ongoingProjects.map((project, idx) => {
                const isSelected = selectedProjectName === project.name && selectedLocation === project.location;
                return (
                  <button key={idx} onClick={() => handleProjectClick(project.name, project.location)} className={`h-[34px] px-4 rounded-full border text-[9px] uppercase tracking-[0.14em] transition-all duration-200 cursor-pointer ${isSelected ? "bg-[#14234b] border-[#14234b] text-white" : "border-[#ddd4c5] bg-[#f8f6f1] text-[#14234b] hover:bg-[#14234b] hover:text-white"}`} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                    {project.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <p className="uppercase tracking-[0.26em] text-[10px] text-[#b58d45]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>Completed Projects</p>
              <div className="flex-grow h-[1px] bg-[#f3eee5]" />
            </div>
            <div className="flex flex-wrap gap-2.5">
              {completedProjects.map((project, idx) => {
                const isSelected = selectedProjectName === project.name && selectedLocation === project.location;
                return (
                  <button key={idx} onClick={() => handleProjectClick(project.name, project.location)} className={`h-[34px] px-4 rounded-full border text-[9px] uppercase tracking-[0.14em] transition-all duration-200 cursor-pointer ${isSelected ? "bg-[#14234b] border-[#14234b] text-white" : "border-[#ddd4c5] bg-[#f8f6f1] text-[#14234b] hover:bg-[#14234b] hover:text-white"}`} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                    {project.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-5 border-t border-[#f3eee5] flex items-center">
            <div className="flex items-center gap-3 px-3.5 py-1.5 bg-[#fdfcf9] border border-[#f0e9dd] rounded-full shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#d1a54d]" />
              <div className="flex items-center gap-2">
                <span className="text-[9px] tracking-[0.12em] uppercase text-[#7a8293]" style={{ fontFamily: "'Inter', sans-serif" }}>Location:</span>
                <p className="text-[10.5px] uppercase tracking-[0.16em] text-[#14234b]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>{selectedLocation}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}