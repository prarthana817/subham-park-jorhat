// src/components/Contact.jsx

import {
  Phone,
  Mail,
  Navigation,
  ArrowUpRight,
  TrainFront,
  Plane,
  Car,
  School,
  Hospital,
  ShoppingBag,
  Building2,
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
        className="absolute left-0 top-0 w-[60px] h-full opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#d8cec6 0px,#d8cec6 2px,transparent 2px,transparent 10px)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-5">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">

          <div>

            <p
              className="text-[10px] uppercase tracking-[0.35em] text-cyan-600 mb-2"
              style={{
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              PRIME CONNECTIVITY
            </p>

            <h2
              className="text-[34px] sm:text-[48px] lg:text-[58px] leading-[0.9] tracking-[-2px] text-[#1f1f1f]"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontWeight: 400,
              }}
            >
              LOCATION
              <br />

              <span className="text-cyan-600">
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
            Excellent connectivity to hospitals, schools,
            shopping hubs and transport facilities across Jorhat.
          </p>

        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] border border-[#ddd2ca] bg-[#faf7f3]">

          {/* LEFT */}
          <div className="border-r border-[#ddd2ca] p-3 flex flex-col gap-3">

            {/* MAP */}
            <div className="overflow-hidden border border-[#e4d8cf] bg-white">

              <img
                src={locationMap}
                alt="Location Map"
                className="w-full h-[470px] object-cover"
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
              gap-2

              w-fit

              px-5
              py-3

              bg-[#1f1f1f]
              hover:bg-cyan-600

              text-white

              transition-all
              duration-300
              "
            >

              <Navigation className="w-4 h-4 text-cyan-300" />

              <span
                className="uppercase tracking-[0.16em] text-[10px]"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Open Google Map
              </span>

              <ArrowUpRight className="w-4 h-4 text-cyan-300" />

            </a>

          </div>

          {/* RIGHT */}
          <div className="p-3 flex flex-col gap-3 bg-[#fcfaf7]">

            {/* TOP */}
            <div className="border border-[#e4d8cf] bg-white p-4">

              <p
                className="uppercase tracking-[0.28em] text-[10px] text-cyan-600 mb-2"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                LOCATION BENEFITS
              </p>

              <h3
                className="text-[32px] leading-[0.95] text-[#1f1f1f] mb-3"
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontWeight: 400,
                }}
              >
                Connected
                <br />
                Urban Living
              </h3>

              <p
                className="text-[13px] leading-[1.8] text-[#645d57]"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                }}
              >
                Strategically located with smooth access
                to essential city facilities and transport.
              </p>

            </div>

            {/* CONNECTIVITY */}
            <div className="grid gap-3">

              <div className="flex gap-3 border border-[#e4d8cf] bg-white p-3">

                <div className="min-w-[46px] h-[46px] flex items-center justify-center bg-cyan-50">
                  <Car className="w-4 h-4 text-cyan-600" />
                </div>

                <div>

                  <h4
                    className="text-[17px] text-[#1f1f1f]"
                    style={{
                      fontFamily: "'Cinzel Decorative', serif",
                    }}
                  >
                    Road Connectivity
                  </h4>

                  <p
                    className="mt-1 text-[12px] leading-[1.7] text-[#655d57]"
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    Direct access to Assam Trunk Road.
                  </p>

                </div>

              </div>

              <div className="flex gap-3 border border-[#e4d8cf] bg-white p-3">

                <div className="min-w-[46px] h-[46px] flex items-center justify-center bg-cyan-50">
                  <TrainFront className="w-4 h-4 text-cyan-600" />
                </div>

                <div>

                  <h4
                    className="text-[17px] text-[#1f1f1f]"
                    style={{
                      fontFamily: "'Cinzel Decorative', serif",
                    }}
                  >
                    Railway Access
                  </h4>

                  <p
                    className="mt-1 text-[12px] leading-[1.7] text-[#655d57]"
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    Nearby Jorhat Railway Station.
                  </p>

                </div>

              </div>

              <div className="flex gap-3 border border-[#e4d8cf] bg-white p-3">

                <div className="min-w-[46px] h-[46px] flex items-center justify-center bg-cyan-50">
                  <Plane className="w-4 h-4 text-cyan-600" />
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
                    className="mt-1 text-[12px] leading-[1.7] text-[#655d57]"
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    Quick access to Jorhat Airport.
                  </p>

                </div>

              </div>

            </div>

            {/* FACILITIES */}
            <div className="grid sm:grid-cols-2 gap-3">

              <div className="border border-[#e4d8cf] bg-white p-3 flex gap-3">

                <School className="w-4 h-4 text-cyan-600 mt-1" />

                <div>

                  <h5
                    className="text-[15px] text-[#1f1f1f] mb-1"
                    style={{
                      fontFamily: "'Cinzel Decorative', serif",
                    }}
                  >
                    Education
                  </h5>

                  <p
                    className="text-[12px] leading-[1.7] text-[#655d57]"
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    Schools & colleges nearby.
                  </p>

                </div>

              </div>

              <div className="border border-[#e4d8cf] bg-white p-3 flex gap-3">

                <Hospital className="w-4 h-4 text-cyan-600 mt-1" />

                <div>

                  <h5
                    className="text-[15px] text-[#1f1f1f] mb-1"
                    style={{
                      fontFamily: "'Cinzel Decorative', serif",
                    }}
                  >
                    Hospitals
                  </h5>

                  <p
                    className="text-[12px] leading-[1.7] text-[#655d57]"
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    Healthcare facilities nearby.
                  </p>

                </div>

              </div>

              <div className="border border-[#e4d8cf] bg-white p-3 flex gap-3">

                <ShoppingBag className="w-4 h-4 text-cyan-600 mt-1" />

                <div>

                  <h5
                    className="text-[15px] text-[#1f1f1f] mb-1"
                    style={{
                      fontFamily: "'Cinzel Decorative', serif",
                    }}
                  >
                    Shopping
                  </h5>

                  <p
                    className="text-[12px] leading-[1.7] text-[#655d57]"
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    Markets & malls nearby.
                  </p>

                </div>

              </div>

              <div className="border border-[#e4d8cf] bg-white p-3 flex gap-3">

                <Building2 className="w-4 h-4 text-cyan-600 mt-1" />

                <div>

                  <h5
                    className="text-[15px] text-[#1f1f1f] mb-1"
                    style={{
                      fontFamily: "'Cinzel Decorative', serif",
                    }}
                  >
                    Essentials
                  </h5>

                  <p
                    className="text-[12px] leading-[1.7] text-[#655d57]"
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    Banks & daily services nearby.
                  </p>

                </div>

              </div>

            </div>

            {/* CONTACT */}
            <div className="grid sm:grid-cols-2 gap-3">

              <div className="border border-[#e4d8cf] bg-white p-3">

                <div className="flex items-center gap-2">

                  <Phone className="w-4 h-4 text-cyan-600" />

                  <span
                    className="uppercase tracking-[0.18em] text-[10px] text-[#7a746e]"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Call Us
                  </span>

                </div>

                <p
                  className="mt-2 text-[17px] text-[#1f1f1f]"
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                >
                  +91 98765 43210
                </p>

              </div>

              <div className="border border-[#e4d8cf] bg-white p-3">

                <div className="flex items-center gap-2">

                  <Mail className="w-4 h-4 text-cyan-600" />

                  <span
                    className="uppercase tracking-[0.18em] text-[10px] text-[#7a746e]"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Email
                  </span>

                </div>

                <p
                  className="mt-2 text-[13px] text-[#1f1f1f] break-all"
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