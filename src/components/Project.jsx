// src/components/ProjectOverview.jsx

import {
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Landmark,
} from "lucide-react";
import { useState } from "react";

const projectData = {
  ongoing: {
    title: "Ongoing Projects",
    subtitle: "Premium developments currently shaping modern lifestyles.",

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

    icon: <Building2 size={28} />,
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

    icon: <Landmark size={28} />,
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

    icon: <BriefcaseBusiness size={28} />,
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

      py-20
      lg:py-24

      bg-[#f5f1ec]
      "
    >
      {/* GRID BACKGROUND */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.06]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* LEFT LINES */}

      <div
        className="
        absolute
        left-0
        top-0
        h-full
        w-[260px]
        opacity-[0.06]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, #c58b6d 0px, #c58b6d 1px, transparent 1px, transparent 8px)",
        }}
      />

      {/* GLOW */}

      <div className="absolute top-[-180px] right-[-150px] w-[500px] h-[500px] rounded-full bg-[#c58b6d]/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

        {/* HEADING */}

        <div className="text-center mb-14">

          <p
            className="
            uppercase
            tracking-[0.35em]

            text-[11px]
            lg:text-[12px]

            text-[#c58b6d]

            mb-5
            "
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
            }}
          >
            PROJECT OVERVIEW
          </p>

          <h2
            className="leading-[0.92]"
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontWeight: 400,
            }}
          >

            <span
              className="
              block

              text-[46px]
              sm:text-[72px]
              lg:text-[88px]

              text-[#1f1f1f]
              "
            >
              Our Landmark
            </span>

            <span
              className="
              block

              text-[44px]
              sm:text-[68px]
              lg:text-[84px]

              text-[#c58b6d]
              "
            >
              Developments
            </span>

          </h2>

          <p
            className="
            max-w-4xl
            mx-auto

            mt-6

            text-[15px]
            lg:text-[17px]

            leading-[1.9]

            text-[#5f5a55]
            "
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
            }}
          >
            Explore Subham Group’s premium residential and commercial
            developments across Assam and Northeast India — thoughtfully
            crafted with elegant architecture, modern infrastructure and
            refined urban lifestyles.
          </p>

        </div>

        {/* TOP BUTTONS */}

        <div
          className="
          flex
          flex-wrap
          justify-center

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
                  overflow-hidden

                  min-w-[240px]

                  px-6
                  py-5

                  border
                  border-[#ddd2ca]

                  flex
                  items-center
                  justify-center
                  gap-4

                  transition-all
                  duration-300

                  ${
                    active === key
                      ? "bg-[#c58b6d] text-white border-[#c58b6d]"
                      : "bg-transparent text-[#1f1f1f] hover:bg-[#f8f4ef]"
                  }
                `}
              >

                {/* GRID INSIDE BUTTON */}

                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "28px 28px",
                  }}
                />

                <div className="relative z-10 flex items-center gap-4">

                  <div
                    className={`
                    w-[52px]
                    h-[52px]

                    flex
                    items-center
                    justify-center

                    ${
                      active === key
                        ? "bg-[#ffffff20]"
                        : "bg-[#f1e5dc]"
                    }
                    `}
                  >
                    {item.icon}
                  </div>

                  <div>

                    <h3
                      className="
                      text-[18px]
                      leading-[1.3]
                      text-left
                      "
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      {item.title}
                    </h3>

                  </div>

                </div>

              </button>
            );
          })}

        </div>

        {/* CONTENT */}

        <div
          className="
          relative
          overflow-hidden

          border
          border-[#e4d8cf]

          bg-white

          shadow-[0_20px_60px_rgba(0,0,0,0.08)]

          p-7
          lg:p-10
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
                linear-gradient(#000000 1px, transparent 1px),
                linear-gradient(90deg, #000000 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10">

            <h2
              className="
              text-[42px]
              lg:text-[70px]

              leading-[0.95]

              text-[#1f1f1f]
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              {current.title}
            </h2>

            <p
              className="
              mt-4

              text-[#c58b6d]

              text-[18px]
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              {current.subtitle}
            </p>

            <p
              className="
              mt-7

              text-[#5f5a55]

              leading-[2]

              max-w-4xl

              text-[16px]
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
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

              mt-10
              "
            >

              {current.projects.map((project, index) => (
                <div
                  key={index}
                  className="
                  border
                  border-[#e4d8cf]

                  bg-[#fbf8f5]

                  px-5
                  py-4

                  flex
                  items-start
                  gap-3

                  hover:border-[#c58b6d]

                  transition-all
                  duration-300
                  "
                >

                  <CheckCircle2
                    size={20}
                    className="text-[#c58b6d] mt-[2px]"
                  />

                  <p
                    className="
                    text-[15px]
                    leading-[1.7]

                    text-[#1f1f1f]
                    "
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
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

              mt-8
              "
            >

              {current.highlights.map((item, index) => (
                <div
                  key={index}
                  className="
                  border
                  border-[#e4d8cf]

                  bg-[#f8f4ef]

                  px-5
                  py-5

                  flex
                  items-center
                  gap-4
                  "
                >

                  <div
                    className="
                    w-8
                    h-8

                    rounded-full

                    border-2
                    border-[#c58b6d]

                    flex
                    items-center
                    justify-center
                    "
                  >

                    <CheckCircle2
                      size={16}
                      className="text-[#c58b6d]"
                    />

                  </div>

                  <p
                    className="
                    text-[15px]

                    text-[#1f1f1f]
                    "
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    {item}
                  </p>

                </div>
              ))}

            </div>

            {/* BUTTON */}

            <button
              className="
              mt-10

              bg-[#c58b6d]
              hover:bg-[#d89d7d]

              text-white

              px-8
              py-5

              uppercase
              tracking-[0.18em]

              text-[13px]

              flex
              items-center
              gap-3

              transition-all
              duration-300
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              Explore Projects

              <ChevronRight size={18} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}