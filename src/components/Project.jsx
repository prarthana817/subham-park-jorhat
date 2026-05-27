// src/components/Project.jsx

import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

import logo from "../assests/images/logo.png";

const stats = [
  { value: "16+", label: "Completed Projects" },
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
  transition: { duration: 0.6 },
};

export default function ProjectOverview() {
  const [selectedLocation, setSelectedLocation] =
    useState("Jorhat");

  const colors = {
    navy: "#14234b",
    lightBg: "#f7f5ef",
    border: "#e6e0d5",
    gold: "#c79d47",
    text: "#5f6674",
  };

  return (
    <section
      id="project"
      className="
      relative
      overflow-hidden
      py-10
      lg:py-14
      bg-[#f7f5ef]
      "
    >
      <div className="relative z-10 max-w-[1380px] mx-auto px-4 lg:px-6">
        {/* SMALL HEADING */}
        <motion.div
          {...fadeInUp}
          className="mb-4"
        >
          <p
            className="
            uppercase
            tracking-[0.30em]
            text-[10px]
            text-[#b68a3f]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
          >
            PROJECT OVERVIEW
          </p>
        </motion.div>

        {/* HEADER */}
        <motion.div
          {...fadeInUp}
          className="
          flex
          flex-col
          lg:flex-row
          lg:items-end
          lg:justify-between
          gap-6
          mb-8
          "
        >
          <div className="flex items-center gap-5">
            {/* LOGO */}
            <div
              className="
              w-[95px]
              h-[95px]
              rounded-[24px]
              bg-white
              border
              border-[#ebe5d8]
              flex
              items-center
              justify-center
              shadow-[0_10px_30px_rgba(0,0,0,0.04)]
              shrink-0
              "
            >
              <img
                src={logo}
                alt="Subham Logo"
                className="
                w-[68px]
                object-contain
                "
              />
            </div>

            {/* TITLE */}
            <div>
              <p
                className="
                uppercase
                tracking-[0.32em]
                text-[10px]
                text-[#a07a44]
                mb-2
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                SUBHAM GROUP
              </p>

              <h2
                className="
                text-[38px]
                md:text-[52px]
                lg:text-[68px]
                leading-[0.92]
                tracking-[-2px]
                "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontWeight: 500,
                }}
              >
                <span className="text-[#14234b]">
                  Landmark
                </span>{" "}

                <span className="italic text-[#c79d47]">
                  Projects
                </span>
              </h2>
            </div>
          </div>

          <p
            className="
            text-[14px]
            lg:text-[15px]
            leading-[1.9]
            text-[#5f6674]
            max-w-sm
            lg:text-right
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
            }}
          >
            Premium residential and commercial
            developments across Assam and Northeast
            India.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          {...fadeInUp}
          className="
          rounded-[28px]
          border
          border-[#e6e0d5]
          bg-white
          overflow-hidden
          shadow-[0_18px_50px_rgba(0,0,0,0.05)]
          "
        >
          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#ece6db]">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`
                  px-5
                  py-5
                  bg-[#faf8f3]

                  ${
                    i < stats.length - 1
                      ? "border-r border-[#ece6db]"
                      : ""
                  }
                `}
              >
                <span
                  className="
                  text-[28px]
                  lg:text-[32px]
                  leading-none
                  text-[#14234b]
                  "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontWeight: 600,
                  }}
                >
                  {stat.value}
                </span>

                <p
                  className="
                  mt-1
                  text-[11px]
                  text-[#6f7786]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CONTENT */}
          <div className="p-6 lg:p-10">
            {/* ONGOING */}
            <div className="mb-10">
              <p
                className="
                text-[10px]
                uppercase
                tracking-[0.28em]
                mb-4
                text-[#a07a44]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                }}
              >
                Ongoing Projects
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-3">
                {ongoingProjects.map((project, idx) => (
                  <span
                    key={idx}
                    onClick={() =>
                      setSelectedLocation(
                        project.location
                      )
                    }
                    className="
                    px-5
                    py-2.5
                    rounded-full
                    border
                    border-[#e4ddd0]
                    bg-[#faf8f3]
                    text-[#14234b]
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:bg-[#14234b]
                    hover:text-white
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {project.name}
                  </span>
                ))}
              </div>
            </div>

            {/* COMPLETED */}
            <div>
              <p
                className="
                text-[10px]
                uppercase
                tracking-[0.28em]
                mb-4
                text-[#a07a44]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                }}
              >
                Completed Projects
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-3">
                {completedProjects.map((project, idx) => (
                  <span
                    key={idx}
                    onClick={() =>
                      setSelectedLocation(
                        project.location
                      )
                    }
                    className="
                    px-5
                    py-2.5
                    rounded-full
                    border
                    border-[#e4ddd0]
                    bg-[#faf8f3]
                    text-[#14234b]
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:bg-[#14234b]
                    hover:text-white
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {project.name}
                  </span>
                ))}
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-10 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#c79d47]" />

              <p
                className="
                text-[11px]
                uppercase
                tracking-[0.18em]
                text-[#14234b]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                }}
              >
                {selectedLocation}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}