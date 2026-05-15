// src/components/Contact.jsx

import {
  Phone,
  Mail,
  Navigation,
  ArrowUpRight,
  TrainFront,
  Plane,
  Car,
} from "lucide-react";

import locationMap from "../assests/images/location.jpg";

export default function Contact() {
  return (
    <section
      id="location"
      className="relative overflow-hidden py-10 bg-[#f5f1ec]"
    >
      {/* SIDE PATTERN */}
      <div
        className="absolute left-0 top-0 w-[70px] h-full opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#d8cec6 0px,#d8cec6 2px,transparent 2px,transparent 10px)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-5">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-7">

          <div>

            <p
              className="text-[11px] uppercase tracking-[0.35em] text-[#c0886e] mb-2"
              style={{
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              PRIME CONNECTIVITY
            </p>

            <h2
              className="text-[34px] sm:text-[48px] lg:text-[60px] leading-[0.9] tracking-[-2px] text-[#1f1f1f]"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontWeight: 400,
              }}
            >
              LOCATION
              <br />

              <span className="text-[#d69073]">
                ADVANTAGE
              </span>

            </h2>

          </div>

          <p
            className="max-w-[420px] text-[13px] leading-[1.8] text-[#645d57]"
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
            }}
          >
            Subham Park enjoys seamless connectivity to schools,
            hospitals, transport hubs and major city landmarks
            across Jorhat.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 border border-[#ddd2ca] bg-[#faf7f3]">

          {/* LEFT SIDE */}
          <div className="border-r border-[#ddd2ca] p-4 flex flex-col gap-4">

            {/* MAP */}
            <div className="overflow-hidden border border-[#e4d8cf] bg-white">

              <img
                src={locationMap}
                alt="Location Map"
                className="w-full h-[330px] object-cover"
              />

            </div>

            {/* BUTTON */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="
              inline-flex
              items-center
              justify-center
              gap-3

              w-fit

              px-5
              py-3

              bg-[#1f1f1f]
              hover:bg-[#d69073]

              text-white

              transition-all
              duration-300
              "
            >

              <Navigation className="w-4 h-4" />

              <span
                className="uppercase tracking-[0.18em] text-[10px]"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Open Google Map
              </span>

              <ArrowUpRight className="w-4 h-4" />

            </a>

            {/* FORM */}
            <div className="border border-[#e4d8cf] bg-white p-5">

              <p
                className="uppercase tracking-[0.32em] text-[10px] text-[#c0886e] mb-2"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Quick Enquiry
              </p>

              <h3
                className="text-[34px] leading-none text-[#1f1f1f] mb-5"
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontWeight: 400,
                }}
              >
                Book A Visit
              </h3>

              <div className="space-y-3">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                  w-full
                  border
                  border-[#ddd2ca]
                  bg-[#f8f4ef]
                  px-4
                  py-3
                  outline-none
                  text-[14px]
                  "
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="
                  w-full
                  border
                  border-[#ddd2ca]
                  bg-[#f8f4ef]
                  px-4
                  py-3
                  outline-none
                  text-[14px]
                  "
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                />

                <textarea
                  rows="4"
                  placeholder="Write Your Message..."
                  className="
                  w-full
                  border
                  border-[#ddd2ca]
                  bg-[#f8f4ef]
                  px-4
                  py-3
                  outline-none
                  resize-none
                  text-[14px]
                  "
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                />

                <button
                  className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2

                  py-3

                  bg-[#1f1f1f]
                  hover:bg-[#d69073]

                  text-white

                  uppercase
                  tracking-[0.18em]
                  text-[10px]

                  transition-all
                  duration-300
                  "
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                  }}
                >
                  Send Enquiry

                  <ArrowUpRight className="w-4 h-4" />

                </button>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="p-4 bg-[#fcfaf7] flex flex-col justify-between">

            <div>

              {/* TITLE */}
              <div className="mb-4">

                <p
                  className="uppercase tracking-[0.32em] text-[10px] text-[#c0886e] mb-2"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                  }}
                >
                  PRIME LOCATION BENEFITS
                </p>

                <h3
                  className="text-[34px] leading-[0.95] text-[#1f1f1f] mb-3"
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    fontWeight: 400,
                  }}
                >
                  Connected
                  <br />

                  Luxury Living
                </h3>

                <p
                  className="text-[13px] leading-[1.8] text-[#645d57]"
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                >
                  Strategically located near Assam Trunk Road,
                  Subham Park offers excellent connectivity to
                  educational institutes, healthcare centers,
                  shopping destinations and transport facilities.
                </p>

              </div>

              {/* CONNECTIVITY */}
              <div className="grid gap-3 mb-4">

                {/* ROAD */}
                <div className="flex items-start gap-3 border border-[#e4d8cf] bg-[#f8f3ee] p-3">

                  <div className="w-10 h-10 flex items-center justify-center bg-[#f3e5db]">
                    <Car className="w-4 h-4 text-[#d69073]" />
                  </div>

                  <div>

                    <h4
                      className="text-[17px] text-[#1f1f1f]"
                      style={{
                        fontFamily: "'Cinzel Decorative', serif",
                      }}
                    >
                      By Road
                    </h4>

                    <p
                      className="mt-1 text-[13px] leading-[1.7] text-[#655d57]"
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                      }}
                    >
                      Direct access from Assam Trunk Road and
                      nearby ISBT ensures easy city commuting.
                    </p>

                  </div>

                </div>

                {/* TRAIN */}
                <div className="flex items-start gap-3 border border-[#e4d8cf] bg-[#f8f3ee] p-3">

                  <div className="w-10 h-10 flex items-center justify-center bg-[#e8f5f4]">
                    <TrainFront className="w-4 h-4 text-[#56bdb7]" />
                  </div>

                  <div>

                    <h4
                      className="text-[17px] text-[#1f1f1f]"
                      style={{
                        fontFamily: "'Cinzel Decorative', serif",
                      }}
                    >
                      Railway Connectivity
                    </h4>

                    <p
                      className="mt-1 text-[13px] leading-[1.7] text-[#655d57]"
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                      }}
                    >
                      Jorhat Town Railway Station is located
                      nearby for smooth travel convenience.
                    </p>

                  </div>

                </div>

                {/* AIRPORT */}
                <div className="flex items-start gap-3 border border-[#e4d8cf] bg-[#f8f3ee] p-3">

                  <div className="w-10 h-10 flex items-center justify-center bg-[#f3e5db]">
                    <Plane className="w-4 h-4 text-[#d69073]" />
                  </div>

                  <div>

                    <h4
                      className="text-[17px] text-[#1f1f1f]"
                      style={{
                        fontFamily: "'Cinzel Decorative', serif",
                      }}
                    >
                      Airport Access
                    </h4>

                    <p
                      className="mt-1 text-[13px] leading-[1.7] text-[#655d57]"
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                      }}
                    >
                      Jorhat Airport can be reached within a
                      short drive from the project site.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* CONTACT BOX */}
            <div className="grid sm:grid-cols-2 gap-3 mt-4">

              {/* PHONE */}
              <div className="border border-[#e4d8cf] bg-white p-4">

                <div className="flex items-center gap-2">

                  <Phone className="w-4 h-4 text-[#d69073]" />

                  <span
                    className="uppercase tracking-[0.2em] text-[10px] text-[#b58671]"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Call Us
                  </span>

                </div>

                <p
                  className="mt-2 text-[18px] text-[#1f1f1f]"
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                >
                  +91 98765 43210
                </p>

              </div>

              {/* EMAIL */}
              <div className="border border-[#e4d8cf] bg-white p-4">

                <div className="flex items-center gap-2">

                  <Mail className="w-4 h-4 text-[#56bdb7]" />

                  <span
                    className="uppercase tracking-[0.2em] text-[10px] text-[#b58671]"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Email
                  </span>

                </div>

                <p
                  className="mt-2 text-[14px] text-[#1f1f1f] break-all"
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                >
                  sales@subhampark.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}