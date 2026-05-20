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
    subtitle:
      "Premium developments currently shaping modern lifestyles.",

    description:
      "Subham Group’s ongoing projects are thoughtfully designed with elegant architecture, modern amenities and strategic locations across Northeast India.",

    projects: [
      "Subham Garden — Jorhat",
      "Subham Solitaire — Agartala",
      "Subham Ashray — Goral",
      "Subham Park — Bongaigaon",
    ],

    highlights: [
      "Smart urban planning",
      "Premium lifestyle amenities",
      "Excellent connectivity",
      "Modern architecture",
    ],

    icon: <Building2 size={22} />,
  },

  completed: {
    title: "Completed Residential Projects",

    subtitle:
      "Elegant residential communities successfully delivered across Assam.",

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

    highlights: [
      "Modern residential living",
      "Prime city locations",
      "Community focused planning",
      "High-quality construction",
    ],

    icon: <Landmark size={22} />,
  },

  commercial: {
    title: "Commercial Projects",

    subtitle:
      "Modern business spaces crafted for productivity and growth.",

    description:
      "Subham Group’s commercial developments combine premium office infrastructure with strategic locations to create dynamic business environments.",

    projects: [
      "Subham Velocity — GS Road",
      "Subham Redstone — Downtown",
      "Bijay Crescent — Pibco",
      "Subham Square — Lokhra",
      "Subham Greens — Lokhra",
      "Subham Buildwell — Zoo Road",
      "Subham Garden — Kalapahar",
    ],

    highlights: [
      "Prime business locations",
      "Contemporary workspaces",
      "Retail & office integration",
      "Modern infrastructure",
    ],

    icon: <BriefcaseBusiness size={22} />,
  },
};

export default function ProjectOverview() {
  const [active, setActive] = useState("ongoing");

  const current = projectData[active];

  return (
    <section
      id="about"
      className="
      relative
      overflow-hidden

      py-14
      lg:py-20

      bg-[#14234b]
      "
    >
      {/* GRID BG */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "58px 58px",
        }}
      />

      {/* GLOW */}
      <div className="absolute top-[-160px] right-[-120px] w-[380px] h-[380px] rounded-full bg-[#e8d7b7]/10 blur-[120px]" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 lg:px-6">

        {/* HEADING */}
        <div className="mb-12 lg:mb-14">

          <p
            className="
            uppercase
            tracking-[0.32em]

            text-[10px]
            lg:text-[11px]

            text-[#e7d5b2]

            mb-4
            "
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            PROJECT OVERVIEW
          </p>

          <h2
            className="
            text-left

            text-[38px]
            md:text-[48px]
            lg:text-[62px]

            leading-[0.95]
            tracking-[-2px]

            max-w-[1000px]
            "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
            }}
          >
            <span className="text-white">
              Our{" "}
            </span>

            <span
              className="
              italic

              bg-gradient-to-r
              from-[#fff2d8]
              via-[#ecd6a8]
              to-[#d8b36f]

              bg-clip-text
              text-transparent
              "
            >
              Landmark
            </span>{" "}

            <span className="text-white">
              Developments
            </span>
          </h2>

          <p
            className="
            max-w-3xl

            mt-5

            text-[14px]
            lg:text-[16px]

            leading-[1.9]

            text-[#e4e7ef]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
            }}
          >
            Explore Subham Group’s premium residential and
            commercial developments across Assam and Northeast
            India with elegant architecture and refined
            urban living experiences.
          </p>

        </div>

        {/* TOP BUTTONS */}
        <div
          className="
          flex
          flex-wrap

          gap-4

          mb-10
          "
        >
          {Object.keys(projectData).map((key) => {
            const item = projectData[key];

            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`
                relative

                min-w-[230px]

                px-5
                py-4

                rounded-[22px]

                border

                flex
                items-center
                gap-3

                transition-all
                duration-300

                ${
                  active === key
                    ? `
                    bg-[#efe3c8]
                    border-[#efe3c8]
                    `
                    : `
                    bg-[#1c2f65]
                    border-[#253d7c]
                    hover:bg-[#223872]
                    `
                }
                `}
              >

                <div
                  className={`
                  w-[48px]
                  h-[48px]

                  rounded-full

                  flex
                  items-center
                  justify-center

                  ${
                    active === key
                      ? `
                      bg-[#14234b]
                      text-[#efe3c8]
                      `
                      : `
                      bg-[#2a4489]
                      text-[#efe3c8]
                      `
                  }
                  `}
                >
                  {item.icon}
                </div>

                <div className="text-left">

                  <h3
                    className={`
                    text-[18px]
                    leading-[1.2]

                    ${
                      active === key
                        ? "text-[#111111]"
                        : "text-[#f5f3ef]"
                    }
                    `}
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </h3>

                </div>

              </button>
            );
          })}
        </div>

        {/* CONTENT BOX */}
        <div
          className="
          relative
          overflow-hidden

          rounded-[30px]

          border
          border-[#f2e7d2]

          bg-[#efe3c8]

          p-6
          md:p-8
          lg:p-10

          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
          "
        >

          {/* INNER GRID */}
          <div
            className="
            absolute
            inset-0
            opacity-[0.03]
            "
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "58px 58px",
            }}
          />

          <div className="relative z-10">

            <h2
              className="
              text-[30px]
              md:text-[40px]
              lg:text-[52px]

              leading-[0.95]

              text-[#111111]
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
              {current.title}
            </h2>

            <p
              className="
              mt-3

              text-[#9d6f4f]

              text-[14px]
              lg:text-[15px]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              {current.subtitle}
            </p>

            <p
              className="
              mt-5

              text-[#444444]

              text-[14px]
              lg:text-[15px]

              leading-[1.9]

              max-w-3xl
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
              }}
            >
              {current.description}
            </p>

            {/* PROJECT LIST */}
            <div
              className="
              grid
              md:grid-cols-2

              gap-4

              mt-8
              "
            >
              {current.projects.map((project, index) => (
                <div
                  key={index}
                  className="
                  rounded-[18px]

                  border
                  border-[#e4d7c2]

                  bg-[#f8f1e5]

                  px-4
                  py-4

                  flex
                  items-start
                  gap-3

                  transition-all
                  duration-300
                  "
                >

                  <CheckCircle2
                    size={18}
                    className="text-[#14234b] mt-[2px]"
                  />

                  <p
                    className="
                    text-[14px]

                    leading-[1.7]

                    text-[#1f1f1f]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {project}
                  </p>

                </div>
              ))}
            </div>

            {/* HIGHLIGHTS */}
            <div
              className="
              grid
              md:grid-cols-2

              gap-4

              mt-7
              "
            >
              {current.highlights.map((item, index) => (
                <div
                  key={index}
                  className="
                  rounded-[18px]

                  border
                  border-[#e4d7c2]

                  bg-[#f7efe1]

                  px-4
                  py-4

                  flex
                  items-center
                  gap-3
                  "
                >

                  <div
                    className="
                    w-8
                    h-8

                    rounded-full

                    bg-[#14234b]

                    flex
                    items-center
                    justify-center
                    "
                  >

                    <CheckCircle2
                      size={14}
                      className="text-[#efe3c8]"
                    />

                  </div>

                  <p
                    className="
                    text-[14px]

                    text-[#1f1f1f]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </p>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}