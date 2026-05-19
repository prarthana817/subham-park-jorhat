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
      py-16 lg:py-20

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

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-5">

        {/* HEADER */}
        <div className="mb-10 lg:mb-12">

          <p
            className="
            text-[11px]
            uppercase
            tracking-[0.35em]
            text-[#dffaf7]
            mb-4
            "
            style={{
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            CONTACT US
          </p>

          <div
            className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-6
            "
          >

            <h2
              className="
              text-[42px]
              sm:text-[52px]
              lg:text-[64px]

              leading-[0.9]
              tracking-[-2px]

              text-white
              "
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
              className="
              max-w-[620px]

              text-[15px]
              lg:text-[16px]

              leading-[1.9]

              text-white/80
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              Experience elegant urban living at Subham Park with
              premium residences, modern amenities and excellent
              connectivity across Jorhat.
            </p>

          </div>

        </div>

        {/* MAIN GRID */}
        <div
          className="
          grid
          lg:grid-cols-2

          rounded-[28px]

          border
          border-[#ffffff20]

          bg-[#fdfbf8]

          overflow-hidden

          shadow-[0_35px_90px_rgba(0,0,0,0.22)]
          "
        >

          {/* LEFT SIDE — FORM */}
          <div
            className="
            p-6
            lg:p-8

            bg-white

            border-r
            border-[#e4d8cf]
            "
          >

            <p
              className="
              uppercase
              tracking-[0.32em]

              text-[10px]

              text-[#56bdb7]

              mb-3
              "
              style={{
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              QUICK ENQUIRY
            </p>

            <h3
              className="
              text-[38px]
              lg:text-[48px]

              leading-[0.92]

              text-[#1f1f1f]

              mb-8
              "
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
                border-[#ead9cf]

                bg-[#faf7f3]

                rounded-[14px]

                px-5
                py-4

                outline-none

                text-[14px]

                transition-all
                duration-300

                focus:border-[#d79a74]
                focus:bg-white
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
                border-[#ead9cf]

                bg-[#faf7f3]

                rounded-[14px]

                px-5
                py-4

                outline-none

                text-[14px]

                transition-all
                duration-300

                focus:border-[#d79a74]
                focus:bg-white
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
                border-[#ead9cf]

                bg-[#faf7f3]

                rounded-[14px]

                px-5
                py-4

                outline-none

                text-[14px]

                transition-all
                duration-300

                focus:border-[#d79a74]
                focus:bg-white
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
                border-[#ead9cf]

                bg-[#faf7f3]

                rounded-[14px]

                px-5
                py-4

                outline-none
                resize-none

                text-[14px]

                transition-all
                duration-300

                focus:border-[#d79a74]
                focus:bg-white
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

                py-4

                rounded-[14px]

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

          {/* RIGHT SIDE */}
          <div
            className="
            p-6
            lg:p-8

            bg-[#fcfaf7]

            flex
            flex-col
            justify-between
            "
          >

            <div>

              <p
                className="
                uppercase
                tracking-[0.32em]

                text-[10px]

                text-[#56bdb7]

                mb-3
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                LOCATION ADVANTAGES
              </p>

              <h3
                className="
                text-[38px]
                lg:text-[48px]

                leading-[0.92]

                text-[#1f1f1f]

                mb-5
                "
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
                className="
                text-[15px]

                leading-[1.9]

                text-[#645d57]

                mb-8
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                }}
              >
                Strategically located near major city landmarks,
                Subham Park offers excellent access to schools,
                hospitals, shopping destinations and transport hubs.
              </p>

              {/* FACILITIES */}
              <div className="grid sm:grid-cols-2 gap-4">

                {[
                  {
                    icon: School,
                    title: "Education",
                    text: "Nearby schools and colleges ensure excellent educational access.",
                  },
                  {
                    icon: Hospital,
                    title: "Hospitals",
                    text: "Quick access to healthcare centers and emergency services.",
                  },
                  {
                    icon: ShoppingBag,
                    title: "Shopping",
                    text: "Markets, malls and retail destinations are located nearby.",
                  },
                  {
                    icon: Building2,
                    title: "City Access",
                    text: "Seamless connectivity to key business and commercial zones.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={i}
                      className="
                      border
                      border-[#ead9cf]

                      bg-white

                      rounded-[18px]

                      p-5

                      flex
                      items-start
                      gap-4
                      "
                    >

                      <div
                        className="
                        w-11
                        h-11

                        shrink-0

                        rounded-full

                        flex
                        items-center
                        justify-center

                        bg-[#e8f5f4]
                        "
                      >
                        <Icon className="w-5 h-5 text-[#56bdb7]" />
                      </div>

                      <div>

                        <h4
                          className="
                          text-[18px]
                          text-[#1f1f1f]
                          mb-2
                          "
                          style={{
                            fontFamily: "'Cinzel Decorative', serif",
                          }}
                        >
                          {item.title}
                        </h4>

                        <p
                          className="
                          text-[13px]
                          leading-[1.8]
                          text-[#655d57]
                          "
                          style={{
                            fontFamily: "'Josefin Sans', sans-serif",
                          }}
                        >
                          {item.text}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

            {/* CONTACT INFO */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">

              {[
                {
                  icon: Phone,
                  label: "Call",
                  value: "+91 98765 43210",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "sales@subhampark.com",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "Assam Trunk Road, Jorhat",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="
                    border
                    border-[#ead9cf]

                    bg-white

                    rounded-[18px]

                    p-5
                    "
                  >

                    <div className="flex items-center gap-2">

                      <Icon className="w-4 h-4 text-[#56bdb7]" />

                      <span
                        className="
                        uppercase
                        tracking-[0.2em]

                        text-[10px]

                        text-[#8d8178]
                        "
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                        }}
                      >
                        {item.label}
                      </span>

                    </div>

                    <p
                      className="
                      mt-3

                      text-[14px]

                      leading-[1.7]

                      text-[#1f1f1f]
                      "
                      style={{
                        fontFamily: "'Josefin Sans', sans-serif",
                      }}
                    >
                      {item.value}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}