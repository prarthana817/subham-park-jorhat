import React, { useState } from "react";
import { MapPin, Building2, Ruler, Construction, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assests/images/shubham_logo.png";

const stats = [
  { value: "16+", label: "Completed Portfolios", icon: <Building2 size={15} strokeWidth={1.5} /> },
  { value: "28 L", label: "Sq. Ft. Built", icon: <Ruler size={15} strokeWidth={1.5} /> },
  { value: "15 L", label: "Sq. Ft. Progressing", icon: <Construction size={15} strokeWidth={1.5} /> },
  { value: "6k+", label: "Elite Residents", icon: <Users size={15} strokeWidth={1.5} /> },
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
  { name: "Subham Greens", location: "Lokhra" },
  { name: "Subham Buildwell", location: "Zoo Road" },
  { name: "Subham Garden", location: "Kalapahar" },
];

const commercialProjects = [
  { name: "Subham Velocity", location: "G.S. Road" },
  { name: "Subham Redstone", location: "Downtown" },
  { name: "Bijay Crescent", location: "Pibco" },
  { name: "Subham Square", location: "Lokhra" },
];

export default function ProjectOverview() {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [selectedProjectName, setSelectedProjectName] = useState("Subham Garden");
  const [selectedLocation, setSelectedLocation] = useState("Jorhat");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    let firstProject;
    if (tab === "ongoing") firstProject = ongoingProjects[0];
    if (tab === "completed") firstProject = completedProjects[0];
    if (tab === "commercial") firstProject = commercialProjects[0];
    
    if (firstProject) {
      setSelectedProjectName(firstProject.name);
      setSelectedLocation(firstProject.location);
    }
  };

  const getActiveProjects = () => {
    if (activeTab === "ongoing") return ongoingProjects;
    if (activeTab === "completed") return completedProjects;
    return commercialProjects;
  };

  return (
    <section id="project" className="relative bg-[#F9F8F6] py-12 md:py-16 text-[#1C1C1C] overflow-hidden border-b border-[#E5DFD5]">
      {/* Structural Hairlines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-[5%] top-0 bottom-0 w-[1px] bg-[#E5DFD5]" />
        <div className="absolute right-[5%] top-0 bottom-0 w-[1px] bg-[#E5DFD5]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= UPPER PACKED HERO CONTAINER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 pb-10 border-b border-[#E5DFD5]">
          
          {/* Logo Showcase Pedestal */}
          <div className="lg:col-span-4 flex items-center justify-center relative">
            <div className="absolute -top-2 -left-2 text-[#A89F91] select-none pointer-events-none text-[10px]">+</div >
            <div className="absolute -bottom-2 -right-2 text-[#A89F91] select-none pointer-events-none text-[10px]">+</div >

            <motion.div
              animate={{ 
                y: [0, -6, 3, 0],
                x: [0, 3, -3, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-[230px] sm:max-w-[250px] aspect-square rounded-full bg-white border border-[#E5DFD5] p-8 flex items-center justify-center shadow-[0_12px_30px_rgba(28,28,28,0.02)] group cursor-pointer transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(163,92,70,0.05)]"
            >
              <div className="absolute inset-1 rounded-full border border-[#FAF9F6] bg-gradient-to-b from-[#FDFDFD] to-[#F5F3EE] opacity-30 pointer-events-none" />
              <img
                src={logo}
                alt="Subham Group Corporate Signet"
                className="w-[85%] h-auto object-contain select-none relative z-10 filter contrast-[1.01]"
              />
            </motion.div>
          </div>

          {/* Copy Deck Typography */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#A35C46] font-bold block mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              Developers profile
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#111111] leading-[1.15] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
              Sculpting spaces. <span className="italic font-normal text-[#A35C46]">Inspiriting Generations.</span>
            </h2>
            <p className="text-[14px] leading-[1.7] text-[#4A4A4A] text-justify tracking-wide font-light max-w-3xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              Subham Group has crafted premium residential architectural masterpieces and commercial 
              landmarks across the skylines of Assam and Northeast India. Driven by an uncompromised 
              focus on structural integrity, elevated aesthetic lifestyles, timeless design paradigms, 
              and highly trusted quality construction execution, we have successfully created unparalleled 
              and holistic standard living experiences for thousands of happy modern families.
            </p>
          </div>

        </div>

        {/* ================= LOWER CONTROL FRAMEWORK ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Dense Metrics Strip */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-3 lg:pr-6">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col border-l border-[#A35C46] pl-3 py-0.5">
                <span className="text-[9px] uppercase tracking-widest text-[#8A8276] mb-1 flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span className="text-[#A35C46] flex items-center justify-center">{item.icon}</span>
                  {item.label}
                </span>
                <h4 className="text-xl sm:text-2xl font-light text-[#111111] leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {item.value}
                </h4>
              </div>
            ))}
          </div>

          {/* Dynamic Compact Tab Section */}
          <div className="lg:col-span-8 flex flex-col w-full">
            
            {/* Custom 3-Tab Selector Grid Line */}
            <div className="flex border-b border-[#E5DFD5] mb-4 overflow-x-auto scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] gap-6 md:gap-8 relative w-full">
              <button
                onClick={() => handleTabChange("ongoing")}
                className={`pb-2 text-[10px] uppercase tracking-[0.2em] font-bold relative transition-colors duration-200 whitespace-nowrap focus:outline-none ${
                  activeTab === "ongoing" ? "text-[#A35C46]" : "text-[#8A8276] hover:text-[#111111]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Ongoing Works
                {activeTab === "ongoing" && (
                  <motion.div layoutId="activeTabLine" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A35C46]" />
                )}
              </button>
              
              <button
                onClick={() => handleTabChange("completed")}
                className={`pb-2 text-[10px] uppercase tracking-[0.2em] font-bold relative transition-colors duration-200 whitespace-nowrap focus:outline-none ${
                  activeTab === "completed" ? "text-[#A35C46]" : "text-[#8A8276] hover:text-[#111111]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Completed Landscapes
                {activeTab === "completed" && (
                  <motion.div layoutId="activeTabLine" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A35C46]" />
                )}
              </button>

              <button
                onClick={() => handleTabChange("commercial")}
                className={`pb-2 text-[10px] uppercase tracking-[0.2em] font-bold relative transition-colors duration-200 whitespace-nowrap focus:outline-none ${
                  activeTab === "commercial" ? "text-[#A35C46]" : "text-[#8A8276] hover:text-[#111111]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Commercial Portfolios
                {activeTab === "commercial" && (
                  <motion.div layoutId="activeTabLine" className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A35C46]" />
                )}
              </button>
            </div>

            {/* Micro Tag Cluster Wrapper */}
            <div className="min-h-[110px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-wrap gap-2 max-h-[150px] overflow-y-auto pr-1 items-start content-start"
                >
                  {getActiveProjects().map((project, idx) => {
                    const isSelected = selectedProjectName === project.name && selectedLocation === project.location;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedProjectName(project.name);
                          setSelectedLocation(project.location);
                        }}
                        className={`h-[30px] px-3.5 text-[9px] uppercase tracking-[0.12em] font-medium rounded-sm transition-all duration-200 flex items-center justify-center focus:outline-none ${
                          isSelected
                            ? "bg-[#111111] text-[#FFFFFF] shadow-sm"
                            : "bg-[#FFFFFF] border border-[#E5DFD5] text-[#4A4A4A] hover:border-[#111111] hover:text-[#111111]"
                        }`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {project.name}
                      </button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Context Ledger Footer */}
            <div className="mt-4 pt-3 border-t border-[#E5DFD5] flex flex-wrap items-center justify-between gap-2 w-full">
              <div className="flex items-center gap-2 h-4">
                <MapPin size={12} className="text-[#A35C46] shrink-0" />
                <span className="text-[9px] tracking-[0.12em] uppercase text-[#8A8276] font-medium leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Context Location:
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[#111111] font-bold leading-none" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {selectedLocation}
                </span>
              </div>
              
              <span className="text-base text-[#111111] font-light italic leading-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {selectedProjectName}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}