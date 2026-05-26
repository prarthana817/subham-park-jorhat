// src/components/Project.jsx

import React, { useState } from "react";
import { Building2, BriefcaseBusiness, Landmark, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "16", label: "Completed Projects" },
  { value: "28 Lac", label: "Sq. Ft. Constructed" },
  { value: "15 Lac", label: "Sq. Ft. Ongoing" },
  { value: "6000+", label: "Happy Residents" },
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
  transition: { duration: 0.6 }
};

export default function ProjectOverview() {
  const [selectedLocation, setSelectedLocation] = useState("Jorhat");

  const colors = {
    blackish: "#14234b",     // Deep Navy Blue matching the theme background
    brightOrange: "#efe3c8",  // Goldish/Cream matching the stats text
    mediumOrange: "#9d6f4f",  // Brown/Bronze accent matching existing accents
    darkOrange: "#d8b36f",    // Gold accent
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-10 lg:py-14 bg-[#14234b]"
    >
      {/* Grid BG */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "58px 58px",
        }}
      />
      <div className="absolute top-[-160px] right-[-120px] w-[380px] h-[380px] rounded-full bg-[#e8d7b7]/10 blur-[120px]" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 lg:px-6">

        {/* ── Header ── */}
        <motion.div
          {...fadeInUp}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 lg:mb-10"
        >
          <div>
            <p
              className="uppercase tracking-[0.32em] text-[10px] lg:text-[11px] text-[#e7d5b2] mb-3"
              style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 500 }}
            >
              PROJECT OVERVIEW
            </p>
            <h2
              className="text-[38px] md:text-[48px] lg:text-[62px] leading-[0.95] tracking-[-2px]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              <span className="text-white">Our </span>
              <span className="italic bg-gradient-to-r from-[#fff2d8] via-[#ecd6a8] to-[#d8b36f] bg-clip-text text-transparent">
                Landmark
              </span>{" "}
              <span className="text-white">Developments</span>
            </h2>
          </div>
          <p
            className="text-[14px] lg:text-[16px] leading-[1.9] text-[#e4e7ef] max-w-sm lg:text-right"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Premium residential and commercial developments across Assam and Northeast India.
          </p>
        </motion.div>

        {/* ── Main card ── */}
        <motion.div
          {...fadeInUp}
          className="relative overflow-hidden rounded-[24px] border border-[#f2e7d2] bg-[#efe3c8] shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "58px 58px",
            }}
          />

          <div className="relative z-10">

            {/* ── Stats bar ── */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#e4d7c2]">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`
                    px-5 py-4 flex flex-col gap-0.5 bg-[#14234b]
                    ${i < stats.length - 1 ? "border-r border-[#1e3470]" : ""}
                  `}
                >
                  <span
                    className="text-[26px] lg:text-[30px] leading-none text-[#efe3c8]"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[11px] leading-[1.4] text-[#a8b8d8]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* ── Compact Premium Project Layout ── */}
            <div className="p-6 lg:p-10 flex flex-col justify-between">
              <div>
                <p
                  className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-[#9d6f4f] opacity-80"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  The Subham Portfolio
                </p>

                {/* Ongoing Projects Section */}
                <p
                  className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-[#9d6f4f] opacity-80"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  Ongoing
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2 mb-8">
                  {ongoingProjects.map((project, idx) => (
                    <span
                      key={idx}
                      onClick={() => setSelectedLocation(project.location)}
                      className="px-5 py-2.5 rounded-full border text-[9px] font-bold uppercase tracking-widest transition-all cursor-pointer text-center select-none"
                      style={{
                        backgroundColor: "#ffffff",
                        borderColor: `${colors.blackish}15`,
                        color: colors.blackish,
                        fontFamily: "'Inter', sans-serif"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = colors.blackish;
                        e.target.style.color = "#efe3c8";
                        e.target.style.borderColor = colors.blackish;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#ffffff";
                        e.target.style.color = colors.blackish;
                        e.target.style.borderColor = `${colors.blackish}15`;
                      }}
                    >
                      {project.name}
                    </span>
                  ))}
                </div>

                {/* Completed Projects Section */}
                <p
                  className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-[#9d6f4f] opacity-80"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  Completed
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2">
                  {completedProjects.map((project, idx) => (
                    <span
                      key={idx}
                      onClick={() => setSelectedLocation(project.location)}
                      className="px-5 py-2.5 rounded-full border text-[9px] font-bold uppercase tracking-widest transition-all cursor-pointer text-center select-none"
                      style={{
                        backgroundColor: "#ffffff",
                        borderColor: `${colors.blackish}15`,
                        color: colors.blackish,
                        fontFamily: "'Inter', sans-serif"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = colors.blackish;
                        e.target.style.color = "#efe3c8";
                        e.target.style.borderColor = colors.blackish;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#ffffff";
                        e.target.style.color = colors.blackish;
                        e.target.style.borderColor = `${colors.blackish}15`;
                      }}
                    >
                      {project.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer displaying the selected project's location */}
              <div className="mt-12 flex items-center justify-between opacity-60">
                <div
                  className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-[#14234b]"
                  style={{ fontFamily: "'Josefin Sans', sans-serif" }}
                >
                  <MapPin className="w-4 h-4 text-[#9d6f4f]" /> {selectedLocation}
                </div>
                <div className="w-12 h-[1px] bg-[#14234b]/20" />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

