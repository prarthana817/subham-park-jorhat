import React, { useState } from "react";
import {
  MapPin,
  Building2,
  Ruler,
  Construction,
  Users,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assests/images/shubham_logo.png";

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
  { name: "Subham Velocity", location: "GS Road" },
  { name: "Subham Redstone", location: "Downtown" },
  { name: "Bijay Crescent", location: "Pibco" },
  { name: "Subham Square", location: "Lokhra" },
  { name: "Subham Greens", location: "Lokhra" },
  { name: "Subham Buildwell", location: "Zoo Road" },
  { name: "Subham Garden", location: "Kalapahar" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function ProjectOverview() {
  const [selectedLocation, setSelectedLocation] = useState("Jorhat");
  const [selectedProjectName, setSelectedProjectName] = useState("Subham Garden");
  const [activeAccordion, setActiveAccordion] = useState("ongoing");

  const handleProjectClick = (name, location) => {
    setSelectedLocation(location);
    setSelectedProjectName(name);
  };

  return (
    <section
      id="project"
      className="relative overflow-hidden py-16 md:py-20 bg-[#f7f5ef]"
    >
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1220px] mx-auto px-4 lg:px-6">
        
        <motion.div {...fadeInUp} className="mb-3">
          <div className="flex items-center gap-3">
            <div className="w-[48px] h-[1.5px] bg-[#d1a54d]" />
            <p
              className="uppercase tracking-[0.28em] text-[10px] text-[#c79d47]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              Project Overview
            </p>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="mb-10 lg:ml-1">
          <h2
            className="text-[38px] md:text-[50px] lg:text-[62px] leading-[0.95] tracking-[-2px] text-[#101010]"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Landmark <span className="italic text-[#d1a54d]">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, boxShadow: "0_12px_30px_rgba(20,35,75,0.06)" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="rounded-[24px] border border-[#e8dfd0] bg-white p-5 flex items-center gap-4 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[#f6edd9] flex items-center justify-center text-[#d1a54d] shrink-0">
                {item.icon}
              </div>
              <div>
                <h3
                  className="text-[24px] md:text-[30px] leading-none text-[#14234b]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                >
                  {item.value}
                </h3>
                <p
                  className="mt-1.5 text-[8.5px] uppercase tracking-[0.16em] text-[#5f6674] leading-[1.4]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="grid lg:grid-cols-[280px_1fr] gap-8 items-center mb-10"
        >
          <div className="flex items-center justify-between lg:border-r lg:border-[#e5dccd] lg:pr-10 h-full">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full flex justify-center lg:justify-start"
            >
              <img
                src={logo}
                alt="Subham Group"
                className="w-[190px] md:w-[210px] object-contain select-none"
              />
            </motion.div>
          </div>

          <div className="bg-white rounded-[24px] border border-[#e8dfd0] p-6 md:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.015)] h-full flex items-center">
            <p
              className="text-[13.5px] md:text-[14.5px] leading-[2] text-[#5f6674] text-justify tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Subham Group has crafted premium residential architectural masterpieces and commercial 
              landmarks across the skylines of Assam and Northeast India. Driven by an uncompromised 
              focus on structural integrity, elevated aesthetic lifestyles, timeless design paradigms, 
              and highly trusted quality construction execution, we have successfully created unparalleled 
              and holistic standard living experiences for thousands of happy modern families.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="rounded-[28px] border border-[#e8dfd0] bg-white p-6 md:p-8 shadow-[0_12px_32px_rgba(0,0,0,0.02)] flex flex-col gap-4"
        >
          <div className="border-b border-[#f3eee5] pb-4">
            <button
              onClick={() => setActiveAccordion(activeAccordion === "ongoing" ? null : "ongoing")}
              className="w-full flex justify-between items-center py-2 text-left group"
            >
              <p
                className="uppercase tracking-[0.26em] text-[10px] text-[#b58d45]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              >
                Ongoing Projects
              </p>
              <motion.div
                animate={{ rotate: activeAccordion === "ongoing" ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-[#b58d45] group-hover:text-[#14234b] transition-colors"
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {activeAccordion === "ongoing" && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-3 pt-1">
                    {ongoingProjects.map((project, idx) => {
                      const isSelected = selectedProjectName === project.name && selectedLocation === project.location;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleProjectClick(project.name, project.location)}
                          className={`h-[36px] px-5 rounded-full border text-[9.5px] uppercase tracking-[0.14em] transition-all duration-300 ${
                            isSelected
                              ? "bg-[#14234b] border-[#14234b] text-white shadow-md shadow-blue-900/10"
                              : "border-[#ddd4c5] bg-[#f8f6f1] text-[#14234b] hover:bg-[#14234b] hover:text-white hover:border-[#14234b]"
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                        >
                          {project.name}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="pb-2">
            <button
              onClick={() => setActiveAccordion(activeAccordion === "completed" ? null : "completed")}
              className="w-full flex justify-between items-center py-2 text-left group"
            >
              <p
                className="uppercase tracking-[0.26em] text-[10px] text-[#b58d45]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              >
                Completed Projects
              </p>
              <motion.div
                animate={{ rotate: activeAccordion === "completed" ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-[#b58d45] group-hover:text-[#14234b] transition-colors"
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {activeAccordion === "completed" && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-3 pt-1">
                    {completedProjects.map((project, idx) => {
                      const isSelected = selectedProjectName === project.name && selectedLocation === project.location;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleProjectClick(project.name, project.location)}
                          className={`h-[36px] px-5 rounded-full border text-[9.5px] uppercase tracking-[0.14em] transition-all duration-300 ${
                            isSelected
                              ? "bg-[#14234b] border-[#14234b] text-white shadow-md shadow-blue-900/10"
                              : "border-[#ddd4c5] bg-[#f8f6f1] text-[#14234b] hover:bg-[#14234b] hover:text-white hover:border-[#14234b]"
                          }`}
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                        >
                          {project.name}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-4 pt-5 border-t border-[#f3eee5] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-[#fdfcf9] border border-[#f0e9dd] rounded-full shadow-sm">
              <MapPin className="w-4 h-4 text-[#d1a54d]" />
              <div className="flex items-center gap-2">
                <span className="text-[9.5px] tracking-[0.12em] uppercase text-[#7a8293]" style={{ fontFamily: "'Inter', sans-serif" }}>Location:</span>
                <p
                  className="text-[11px] uppercase tracking-[0.16em] text-[#14234b]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                >
                  {selectedLocation}
                </p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}