// src/components/ProjectOverview.jsx

import { Building2, BriefcaseBusiness, Landmark } from "lucide-react";

const stats = [
  { value: "16", label: "Completed Projects" },
  { value: "28 Lac", label: "Sq. Ft. Constructed" },
  { value: "15 Lac", label: "Sq. Ft. Ongoing" },
  { value: "6000+", label: "Happy Residents" },
];

const categories = [
  {
    title: "Ongoing Projects",
    subtitle: "Premium developments shaping modern lifestyles.",
    icon: <Building2 size={15} />,
    projects: [
      { name: "Subham Garden", location: "Jorhat" },
      { name: "Subham Solitaire", location: "Agartala" },
      { name: "Subham Ashray", location: "Goral" },
      { name: "Subham Park", location: "Bongaigaon" },
    ],
  },
  {
    title: "Completed Residential",
    subtitle: "Landmark communities delivered across Assam.",
    icon: <Landmark size={15} />,
    projects: [
      { name: "Subham Heights", location: "Kahilipara" },
      { name: "Subham Enclave", location: "Hatigaon" },
      { name: "Subham Park View", location: "Fatasil" },
      { name: "Subham Elite", location: "Ganeshguri" },
      { name: "Subham Classic", location: "Ambikagiri Nagar" },
      { name: "Subham Manjushree", location: "Datalpara" },
      { name: "Subham Regency", location: "Hengrabari" },
      { name: "Subham Residency", location: "Kharguli" },
      { name: "Subham Sapphire", location: "Malapara" },
    ],
  },
  {
    title: "Commercial Projects",
    subtitle: "Dynamic business spaces in prime locations.",
    icon: <BriefcaseBusiness size={15} />,
    projects: [
      { name: "Subham Velocity", location: "GS Road" },
      { name: "Subham Redstone", location: "Downtown" },
      { name: "Bijay Crescent", location: "Pibco" },
      { name: "Subham Square", location: "Lokhra" },
      { name: "Subham Greens", location: "Lokhra" },
      { name: "Subham Buildwell", location: "Zoo Road" },
      { name: "Subham Garden", location: "Kalapahar" },
    ],
  },
];

export default function ProjectOverview() {
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
        </div>

        {/* ── Main card ── */}
        <div className="relative overflow-hidden rounded-[24px] border border-[#f2e7d2] bg-[#efe3c8] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
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

            {/* ── Three project columns ── */}
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e4d7c2]">
              {categories.map((cat, ci) => (
                <div key={ci} className="p-5 lg:p-6 flex flex-col gap-4">

                  {/* Column header */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#14234b] flex items-center justify-center text-[#efe3c8] shrink-0">
                      {cat.icon}
                    </div>
                    <div>
                      <h3
                        className="text-[16px] lg:text-[18px] leading-[1.1] text-[#111]"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                      >
                        {cat.title}
                      </h3>
                      <p
                        className="text-[11px] text-[#9d6f4f] leading-[1.3] mt-0.5"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                      >
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#e4d7c2]" />

                  {/* Project list */}
                  <div className="flex flex-col">
                    {cat.projects.map((proj, pi) => (
                      <div
                        key={pi}
                        className={`
                          flex items-center justify-between py-2
                          ${pi < cat.projects.length - 1 ? "border-b border-[#e8dece]" : ""}
                        `}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[10px] text-[#9d6f4f] w-4 shrink-0"
                            style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 500 }}
                          >
                            {String(pi + 1).padStart(2, "0")}
                          </span>
                          <span
                            className="text-[14px] text-[#1f1f1f]"
                            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                          >
                            {proj.name}
                          </span>
                        </div>
                        <span
                          className="text-[11px] text-[#9d6f4f] bg-[#f2e7d6] border border-[#e4d7c2] rounded-full px-2 py-0.5 shrink-0 ml-2"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                        >
                          {proj.location}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
