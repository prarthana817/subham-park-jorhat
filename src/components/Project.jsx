// src/components/Project.jsx

import React, { useState } from "react";

import {
  MapPin,
  Building2,
  Ruler,
  Construction,
  Users,
} from "lucide-react";

import { motion } from "framer-motion";

import logo from "../assests/images/logo.png";

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

  {
    name: "Subham Kishori Heights",
    location: "Dibrugarh",
  },
];

const completedProjects = [
  { name: "Subham Heights", location: "Kahilipara" },

  { name: "Subham Enclave", location: "Hatigaon" },

  {
    name: "Subham Park View",
    location: "Fatasil",
  },

  { name: "Subham Elite", location: "Gandhibasti" },

  {
    name: "Subham Classic",
    location: "Ambikagiri Nagar",
  },

  {
    name: "Subham Manjushree",
    location: "Datalpara",
  },

  { name: "Subham Regency", location: "Hengrabari" },

  {
    name: "Subham Residency",
    location: "Kharguli",
  },

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
  initial: { opacity: 0, y: 18 },

  whileInView: { opacity: 1, y: 0 },

  viewport: { once: true },

  transition: { duration: 0.55 },
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

      py-12
      md:py-14

      bg-[#f7f5ef]
      "
    >
      {/* BACKGROUND */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div
        className="
        relative
        z-10

        max-w-[1220px]
        mx-auto

        px-4
        lg:px-5
        "
      >
        {/* TOP TAG */}
        <motion.div
          {...fadeInUp}
          className="mb-2"
        >
          <div className="flex items-center gap-3">
            <div className="w-[48px] h-[2px] bg-[#d1a54d]" />

            <p
              className="
              uppercase

              tracking-[0.26em]

              text-[9px]

              text-[#c79d47]
              "
              style={{
                fontFamily:
                  "'Inter', sans-serif",
                fontWeight: 700,
              }}
            >
              PROJECT OVERVIEW
            </p>
          </div>
        </motion.div>

        {/* HEADING */}
        <motion.div
          {...fadeInUp}
          className="mb-7 lg:ml-6"
        >
          <h2
            className="
            text-[34px]
            md:text-[46px]
            lg:text-[56px]

            leading-[0.9]

            tracking-[-3px]

            text-[#101010]
            "
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
              fontWeight: 600,
            }}
          >
            Landmark{" "}
            <span className="italic text-[#d1a54d]">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* STATS */}
        <motion.div
          {...fadeInUp}
          className="
          grid
          grid-cols-2
          lg:grid-cols-4

          gap-3

          mb-8
          "
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="
              rounded-[24px]

              border
              border-[#e8dfd0]

              bg-white

              p-4

              flex
              items-center
              gap-3

              shadow-[0_8px_24px_rgba(0,0,0,0.025)]
              "
            >
              {/* ICON */}
              <div
                className="
                w-12
                h-12

                rounded-full

                bg-[#f6edd9]

                flex
                items-center
                justify-center

                text-[#d1a54d]

                shrink-0
                "
              >
                {item.icon}
              </div>

              {/* TEXT */}
              <div>
                <h3
                  className="
                  text-[22px]
                  md:text-[28px]

                  leading-none

                  text-[#14234b]
                  "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontWeight: 700,
                  }}
                >
                  {item.value}
                </h3>

                <p
                  className="
                  mt-1

                  text-[8px]

                  uppercase

                  tracking-[0.16em]

                  text-[#5f6674]

                  leading-[1.4]
                  "
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* LOGO + CONTENT */}
        <motion.div
          {...fadeInUp}
          className="
          grid
          lg:grid-cols-[240px_1fr]

          gap-8

          items-center

          mb-7
          "
        >
          {/* LOGO */}
          <div
            className="
            flex
            items-center
            justify-center

            lg:justify-start
            lg:-mt-3
            "
          >
            <img
              src={logo}
              alt="Subham Group"
              className="
              w-[165px]

              object-contain
              "
            />
          </div>

          {/* CONTENT */}
          <div
            className="
            lg:border-l
            lg:border-[#e5dccd]

            lg:pl-10

            flex
            items-center
            "
          >
            <p
              className="
              text-[14px]
              md:text-[15px]

              leading-[1.9]

              text-[#5f6674]

              max-w-[760px]
              "
              style={{
                fontFamily:
                  "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              Subham Group has crafted premium
              residential and commercial landmarks
              across Assam and Northeast India with a
              focus on elevated lifestyle, timeless
              architecture and trusted quality living
              experiences for thousands of families.
            </p>
          </div>
        </motion.div>

        {/* PROJECT LIST SECTION */}
        <motion.div
          {...fadeInUp}
          className="
          rounded-[28px]

          border
          border-[#e8dfd0]

          bg-white

          p-5
          md:p-6

          shadow-[0_10px_28px_rgba(0,0,0,0.025)]
          "
        >
          {/* ONGOING */}
          <div className="mb-8">
            <p
              className="
              uppercase

              tracking-[0.26em]

              text-[9px]

              text-[#b58d45]

              mb-4
              "
              style={{
                fontFamily:
                  "'Inter', sans-serif",
                fontWeight: 700,
              }}
            >
              Ongoing Projects
            </p>

            <div className="flex flex-wrap gap-2.5">
              {ongoingProjects.map(
                (project, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      setSelectedLocation(
                        project.location
                      )
                    }
                    className="
                    h-[34px]

                    px-4

                    rounded-full

                    border
                    border-[#ddd4c5]

                    bg-[#f8f6f1]

                    text-[#14234b]

                    text-[9px]

                    uppercase

                    tracking-[0.14em]

                    hover:bg-[#14234b]
                    hover:text-white

                    transition-all
                    duration-300
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {project.name}
                  </button>
                )
              )}
            </div>
          </div>

          {/* COMPLETED */}
          <div>
            <p
              className="
              uppercase

              tracking-[0.26em]

              text-[9px]

              text-[#b58d45]

              mb-4
              "
              style={{
                fontFamily:
                  "'Inter', sans-serif",
                fontWeight: 700,
              }}
            >
              Completed Projects
            </p>

            <div className="flex flex-wrap gap-2.5">
              {completedProjects.map(
                (project, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      setSelectedLocation(
                        project.location
                      )
                    }
                    className="
                    h-[34px]

                    px-4

                    rounded-full

                    border
                    border-[#ddd4c5]

                    bg-[#f8f6f1]

                    text-[#14234b]

                    text-[9px]

                    uppercase

                    tracking-[0.14em]

                    hover:bg-[#14234b]
                    hover:text-white

                    transition-all
                    duration-300
                    "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {project.name}
                  </button>
                )
              )}
            </div>
          </div>

          {/* LOCATION */}
          <div
            className="
            mt-6

            flex
            items-center
            gap-2
            "
          >
            <MapPin className="w-4 h-4 text-[#d1a54d]" />

            <p
              className="
              text-[11px]

              uppercase

              tracking-[0.16em]

              text-[#14234b]
              "
              style={{
                fontFamily:
                  "'Inter', sans-serif",
                fontWeight: 700,
              }}
            >
              {selectedLocation}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}