// src/components/Contact.jsx

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  School,
  Hospital,
  ShoppingBag,
  Building2,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      relative
      overflow-hidden
      py-14

      bg-gradient-to-br
      from-[#d79a74]
      via-[#b87452]
      to-[#7a4b35]
      "
    >

      {/* TOP GLOW */}
      <div className="absolute top-[-140px] right-[-120px] w-[340px] h-[340px] rounded-full bg-[#f3c2a4]/25 blur-[130px]" />

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-[-160px] left-[-140px] w-[360px] h-[360px] rounded-full bg-[#5c3424]/35 blur-[130px]" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* SIDE PATTERN */}
      <div
        className="absolute left-0 top-0 w-[70px] h-full opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,rgba(255,255,255,0.3) 0px,rgba(255,255,255,0.3) 2px,transparent 2px,transparent 10px)",
        }}
      />

      <div className="relative z-10 max-w-[1250px] mx-auto px-4 lg:px-5">

        {/* HEADER */}
        <div className="mb-8 text-left">

          <p
            className="text-[11px] uppercase tracking-[0.35em] text-[#dffaf7] mb-3"
            style={{
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            CONTACT US
          </p>

          <h2
            className="text-[34px] sm:text-[48px] lg:text-[60px] leading-[0.92] tracking-[-2px] text-white"
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontWeight: 400,
            }}
          >
            Book A
            <br />

            <span className="text-[#f7f1e8]">
              Site Visit
            </span>

          </h2>

          <p
            className="max-w-[700px] ml-auto mt-4 text-[14px] leading-[1.9] text-white/80"
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
            }}
          >
            Experience elegant urban living at Subham Park with
            premium residences, modern amenities and excellent
            connectivity across Jorhat.
          </p>

        </div>

        {/* MAIN GRID */}
        <div
          className="
          grid
          lg:grid-cols-2

          border
          border-[#ffffff20]

          bg-[#fdfbf8]

          overflow-hidden

          shadow-[0_35px_90px_rgba(0,0,0,0.22)]
          "
        >

          {/* LEFT SIDE — FORM */}
          <div className="p-5 lg:p-7 bg-white border-r border-[#e4d8cf]">

            <p
              className="uppercase tracking-[0.32em] text-[10px] text-[#56bdb7] mb-2"
              style={{
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              QUICK ENQUIRY
            </p>

            <h3
              className="text-[34px] leading-none text-[#1f1f1f] mb-6"
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontWeight: 400,
              }}
            >
              Get In Touch
            </h3>

            <div className="space-y-4">

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

              <input
                type="email"
                placeholder="Email Address"
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
                rows="5"
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
                hover:bg-[#56bdb7]

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

          {/* RIGHT SIDE — CONTENT */}
          <div className="p-5 lg:p-7 bg-[#fcfaf7] flex flex-col justify-between">

            <div>

              <p
                className="uppercase tracking-[0.32em] text-[10px] text-[#56bdb7] mb-2"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                LOCATION ADVANTAGES
              </p>

              <h3
                className="text-[34px] leading-[0.95] text-[#1f1f1f] mb-4"
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
                className="text-[14px] leading-[1.9] text-[#645d57] mb-6"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                }}
              >
                Strategically located near major city landmarks,
                Subham Park offers excellent access to schools,
                hospitals, shopping destinations and transport hubs.
              </p>

              {/* FACILITIES */}
              <div className="grid sm:grid-cols-2 gap-3">

                <div className="border border-[#e4d8cf] bg-white p-4 flex items-start gap-3">

                  <div className="w-10 h-10 flex items-center justify-center bg-[#e8f5f4]">

                    <School className="w-5 h-5 text-[#56bdb7]" />

                  </div>

                  <div>

                    <h4
                      className="text-[16px] text-[#1f1f1f] mb-1"
                      style={{
                        fontFamily: "'Cinzel Decorative', serif",
                      }}
                    >
                      Education
                    </h4>

                    <p
                      className="text-[12px] leading-[1.7] text-[#655d57]"
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                      }}
                    >
                      Nearby schools and colleges ensure excellent educational access.
                    </p>

                  </div>

                </div>

                <div className="border border-[#e4d8cf] bg-white p-4 flex items-start gap-3">

                  <div className="w-10 h-10 flex items-center justify-center bg-[#e8f5f4]">

                    <Hospital className="w-5 h-5 text-[#56bdb7]" />

                  </div>

                  <div>

                    <h4
                      className="text-[16px] text-[#1f1f1f] mb-1"
                      style={{
                        fontFamily: "'Cinzel Decorative', serif",
                      }}
                    >
                      Hospitals
                    </h4>

                    <p
                      className="text-[12px] leading-[1.7] text-[#655d57]"
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                      }}
                    >
                      Quick access to healthcare centers and emergency services.
                    </p>

                  </div>

                </div>

                <div className="border border-[#e4d8cf] bg-white p-4 flex items-start gap-3">

                  <div className="w-10 h-10 flex items-center justify-center bg-[#e8f5f4]">

                    <ShoppingBag className="w-5 h-5 text-[#56bdb7]" />

                  </div>

                  <div>

                    <h4
                      className="text-[16px] text-[#1f1f1f] mb-1"
                      style={{
                        fontFamily: "'Cinzel Decorative', serif",
                      }}
                    >
                      Shopping
                    </h4>

                    <p
                      className="text-[12px] leading-[1.7] text-[#655d57]"
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                      }}
                    >
                      Markets, malls and retail destinations are located nearby.
                    </p>

                  </div>

                </div>

                <div className="border border-[#e4d8cf] bg-white p-4 flex items-start gap-3">

                  <div className="w-10 h-10 flex items-center justify-center bg-[#e8f5f4]">

                    <Building2 className="w-5 h-5 text-[#56bdb7]" />

                  </div>

                  <div>

                    <h4
                      className="text-[16px] text-[#1f1f1f] mb-1"
                      style={{
                        fontFamily: "'Cinzel Decorative', serif",
                      }}
                    >
                      City Access
                    </h4>

                    <p
                      className="text-[12px] leading-[1.7] text-[#655d57]"
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                      }}
                    >
                      Seamless connectivity to key business and commercial zones.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* CONTACT INFO */}
            <div className="grid sm:grid-cols-3 gap-3 mt-6">

              <div className="border border-[#e4d8cf] bg-white p-4">

                <div className="flex items-center gap-2">

                  <Phone className="w-4 h-4 text-[#56bdb7]" />

                  <span
                    className="uppercase tracking-[0.2em] text-[10px] text-[#8d8178]"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Call
                  </span>

                </div>

                <p
                  className="mt-2 text-[15px] text-[#1f1f1f]"
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                >
                  +91 98765 43210
                </p>

              </div>

              <div className="border border-[#e4d8cf] bg-white p-4">

                <div className="flex items-center gap-2">

                  <Mail className="w-4 h-4 text-[#56bdb7]" />

                  <span
                    className="uppercase tracking-[0.2em] text-[10px] text-[#8d8178]"
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

              <div className="border border-[#e4d8cf] bg-white p-4">

                <div className="flex items-center gap-2">

                  <MapPin className="w-4 h-4 text-[#56bdb7]" />

                  <span
                    className="uppercase tracking-[0.2em] text-[10px] text-[#8d8178]"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Address
                  </span>

                </div>

                <p
                  className="mt-2 text-[13px] text-[#1f1f1f]"
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                >
                  Assam Trunk Road, Jorhat
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}