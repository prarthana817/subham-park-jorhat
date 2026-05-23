// src/components/ProjectOverview.jsx

import {
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
  Landmark,
} from "lucide-react";
import { useState } from "react";

const projectData = {
  ongoing: {
    title: "Ongoing Projects",
    subtitle: "Premium developments currently shaping modern lifestyles.",
    description:
      "Subham Group's ongoing projects are thoughtfully designed with elegant architecture, modern amenities and strategic locations across Northeast India.",
    projects: [
      "Subham Garden — Jorhat",
      "Subham Solitaire — Agartala",
      "Subham Ashray — Goral",
      "Subham Park — Bongaigaon",
    ],
    icon: <Building2 size={16} />,
  },

  completed: {
    title: "Completed Residential Projects",
    subtitle: "Elegant residential communities successfully delivered across Assam.",
    description:
      "Subham Group has successfully delivered landmark residential developments designed for comfortable family living and refined city lifestyles.",
    projects: [
      "Subham Heights — Kahilipara",
      "Subham Enclave — Hatigaon",
      "Subham Park View — Fatasil",
      "Subham Elite — Ganeshguri",
      "Subham Classic — Ambikagiri Nagar",
      "Subham Manjushree — Datalpara",
      "Subham Regency — Hengrabari",
      "Subham Residency — Kharguli",
      "Subham Sapphire — Malapara",
    ],
    icon: <Landmark size={16} />,
  },

  commercial: {
    title: "Commercial Projects",
    subtitle: "Modern business spaces crafted for productivity and growth.",
    description:
      "Subham Group's commercial developments combine premium office infrastructure with strategic locations to create dynamic business environments.",
    projects: [
      "Subham Velocity — GS Road",
      "Subham Redstone — Downtown",
      "Bijay Crescent — Pibco",
      "Subham Square — Lokhra",
      "Subham Greens — Lokhra",
      "Subham Buildwell — Zoo Road",
      "Subham Garden — Kalapahar",
    ],
    icon: <BriefcaseBusiness size={16} />,
  },
};

export default function ProjectOverview() {
  const [active, setActive] = useState("ongoing");
  const current = projectData[active];

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

        {/* ── Header row ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 lg:mb-10">
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
              <span
                className="italic bg-gradient-to-r from-[#fff2d8] via-[#ecd6a8] to-[#d8b36f] bg-clip-text text-transparent"
              >
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
        </div>

        {/* ── Tab pills ── */}
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.keys(projectData).map((key) => {
            const item = projectData[key];
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-full border
                  transition-all duration-300 text-[13px]
                  ${isActive
                    ? "bg-[#efe3c8] border-[#efe3c8] text-[#111]"
                    : "bg-[#1c2f65] border-[#253d7c] text-[#f5f3ef] hover:bg-[#223872]"
                  }
                `}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                <span
                  className={`flex items-center justify-center w-6 h-6 rounded-full
                    ${isActive ? "bg-[#14234b] text-[#efe3c8]" : "bg-[#2a4489] text-[#efe3c8]"}`}
                >
                  {item.icon}
                </span>
                {item.title}
              </button>
            );
          })}
        </div>

        {/* ── Content card ── */}
        <div
          className="relative overflow-hidden rounded-[24px] border border-[#f2e7d2] bg-[#efe3c8] shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
        >
          {/* Card grid bg */}
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

          <div className="relative z-10 p-5 md:p-7 lg:p-8">

            {/* Card header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 pb-5 border-b border-[#e4d7c2] mb-6">
              <div>
                <h2
                  className="text-[30px] md:text-[40px] lg:text-[52px] leading-[0.95] text-[#111]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                >
                  {current.title}
                </h2>
                <p
                  className="mt-1.5 text-[#9d6f4f] text-[14px] lg:text-[15px]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                >
                  {current.subtitle}
                </p>
              </div>
              <p
                className="text-[#444] text-[14px] lg:text-[15px] leading-[1.9] md:max-w-xs md:text-right"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                {current.description}
              </p>
            </div>

            {/* Two-column body: projects + highlights */}
            <div className="grid lg:grid-cols-[1fr_auto] gap-6">

              {/* Projects grid */}
              <div
                className="grid sm:grid-cols-2 gap-2.5"
                style={{ gridAutoRows: "min-content" }}
              >
                {current.projects.map((project, index) => (
                  <div
                    key={index}
                    className="rounded-[14px] border border-[#e4d7c2] bg-[#f8f1e5] px-3.5 py-3 flex items-center gap-2.5"
                  >
                    <CheckCircle2 size={15} className="text-[#14234b] shrink-0" />
                    <p
                      className="text-[14px] leading-[1.7] text-[#1f1f1f]"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                    >
                      {project}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlights — vertical strip */}
              <div className="flex lg:flex-col gap-2.5 flex-wrap">

                {/* Stats block */}
                <div className="w-full grid grid-cols-2 gap-2.5 mb-0.5">
                  {[
                    { value: "16", label: "Completed Projects" },
                    { value: "28 Lac", label: "Sq. Ft. Constructed" },
                    { value: "15 Lac", label: "Sq. Ft. Ongoing" },
                    { value: "6000+", label: "Happy Residents" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-[14px] border border-[#e4d7c2] bg-[#14234b] px-3 py-3 flex flex-col items-start gap-0.5"
                    >
                      <span
                        className="text-[20px] leading-none text-[#efe3c8]"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                      >
                        {stat.value}
                      </span>
                      <span
                        className="text-[11px] leading-[1.3] text-[#a8b8d8]"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                      >
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
