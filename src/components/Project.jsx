// src/components/Project.jsx

import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

import logo from "../assests/images/shubham_logo.png";

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
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
};

export default function ProjectOverview() {
  const [selectedLocation, setSelectedLocation] =
    useState("Jorhat");

  return (
    <section
      id="project"
      className="
      relative
      overflow-hidden
      py-4
      lg:py-6
      bg-[#f7f5ef]
      "
    >
      <div className="max-w-[1220px] mx-auto px-4">
        {/* SMALL HEADING */}
        <motion.div
          {...fadeInUp}
          className="mb-2"
        >
          <p
            className="
            uppercase
            tracking-[0.24em]
            text-[8px]
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
          lg:items-center
          lg:justify-between
          gap-4
          mb-4
          "
        >
          <div className="flex items-center gap-4">
            {/* LOGO */}
            <div
              className="
              w-[88px]
              h-[88px]
              flex
              items-center
              justify-center
              shrink-0
              "
            >
              <img
                src={logo}
                alt="Subham Logo"
                className="
                w-[78px]
                object-contain
                "
              />
            </div>

            {/* TITLE */}
            <div>
              <p
                className="
                uppercase
                tracking-[0.25em]
                text-[8px]
                text-[#a07a44]
                mb-1
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
                text-[28px]
                md:text-[40px]
                lg:text-[50px]
                leading-[0.95]
                tracking-[-1px]
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
            text-[11px]
            lg:text-[12px]
            leading-[1.6]
            text-[#5f6674]
            max-w-[250px]
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
          rounded-[20px]
          border
          border-[#e6e0d5]
          bg-white
          overflow-hidden
          "
        >
          {/* STATS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-[#ece6db]">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`
                  py-4
                  px-4
                  bg-[#faf8f3]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center

                  ${
                    i < stats.length - 1
                      ? "border-r border-[#ece6db]"
                      : ""
                  }
                `}
              >
                <span
                  className="
                  text-[24px]
                  lg:text-[28px]
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
                  text-[9px]
                  text-[#6f7786]
                  leading-[1.4]
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
          <div className="p-4 lg:p-5">
            {/* ONGOING */}
            <div className="mb-5">
              <p
                className="
                text-[8px]
                uppercase
                tracking-[0.24em]
                mb-3
                text-[#a07a44]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                }}
              >
                Ongoing Projects
              </p>

              <div className="flex flex-wrap gap-2">
                {ongoingProjects.map((project, idx) => (
                  <span
                    key={idx}
                    onClick={() =>
                      setSelectedLocation(
                        project.location
                      )
                    }
                    className="
                    px-3
                    py-1.5
                    rounded-full
                    border
                    border-[#e4ddd0]
                    bg-[#faf8f3]
                    text-[#14234b]
                    text-[8px]
                    uppercase
                    tracking-[0.12em]
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
                text-[8px]
                uppercase
                tracking-[0.24em]
                mb-3
                text-[#a07a44]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                }}
              >
                Completed Projects
              </p>

              <div className="flex flex-wrap gap-2">
                {completedProjects.map((project, idx) => (
                  <span
                    key={idx}
                    onClick={() =>
                      setSelectedLocation(
                        project.location
                      )
                    }
                    className="
                    px-3
                    py-1.5
                    rounded-full
                    border
                    border-[#e4ddd0]
                    bg-[#faf8f3]
                    text-[#14234b]
                    text-[8px]
                    uppercase
                    tracking-[0.12em]
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
            <div className="mt-4 flex items-center gap-2">
              <MapPin className="w-3 h-3 text-[#c79d47]" />

              <p
                className="
                text-[9px]
                uppercase
                tracking-[0.14em]
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