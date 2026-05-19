// src/components/Contact.jsx

import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      relative
      overflow-hidden

      py-10
      lg:py-12

      bg-gradient-to-br
      from-[#d79a74]
      via-[#b87452]
      to-[#7a4b35]
      "
    >
      {/* BG */}
      <div className="absolute inset-0 bg-black/20" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4">

        {/* MAIN */}
        <div
          className="
          grid
          lg:grid-cols-[0.95fr_0.85fr]

          rounded-[26px]

          overflow-hidden

          border
          border-[#ffffff15]

          bg-[#111111]/15

          backdrop-blur-xl

          shadow-[0_20px_60px_rgba(0,0,0,0.22)]
          "
        >

          {/* LEFT */}
          <div
            className="
            p-5
            lg:p-7

            flex
            flex-col
            justify-between

            min-h-[520px]
            "
          >

            <div>

              <p
                className="
                uppercase
                tracking-[0.34em]

                text-[10px]

                text-[#ffe2d1]

                mb-4
                "
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 600,
                }}
              >
                PREMIUM LIVING
              </p>

              <h2
                className="
                text-white

                text-[46px]
                md:text-[58px]
                lg:text-[68px]

                leading-[0.92]
                tracking-[-2px]
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                }}
              >
                Your Dream
                <br />

                <span className="text-[#ffe2d1]">
                  Home
                </span>

                <br />

                Awaits You
              </h2>

              <p
                className="
                mt-5

                max-w-[520px]

                text-[14px]
                lg:text-[15px]

                leading-[1.9]

                text-white/80
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Talk to our team today. We'll walk you through
                unit selection, pricing, site visits and every
                important detail.
              </p>

            </div>

            {/* WHATSAPP */}
            <div
              className="
              mt-6

              flex
              items-center
              gap-4

              rounded-[20px]

              border
              border-[#ffffff12]

              bg-white/5

              p-4
              "
            >

              <div
                className="
                w-12
                h-12

                rounded-[14px]

                bg-[#ffffff10]

                flex
                items-center
                justify-center
                "
              >
                <Phone className="w-5 h-5 text-[#ffe2d1]" />
              </div>

              <div>

                <p
                  className="
                  uppercase
                  tracking-[0.18em]

                  text-[10px]

                  text-white/50

                  mb-1
                  "
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Whatsapp
                </p>

                <h3
                  className="
                  text-[24px]
                  lg:text-[30px]

                  text-white

                  leading-none
                  "
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                  }}
                >
                  Chat With Us Now
                </h3>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div
            className="
            p-5
            lg:p-7

            bg-black/10

            border-l
            border-[#ffffff10]
            "
          >

            <h3
              className="
              text-white

              text-[34px]
              lg:text-[42px]

              leading-[0.95]

              mb-1
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              Book Site Visit
            </h3>

            <p
              className="
              text-[13px]

              text-white/65

              mb-6
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              Our team will reach out within 24 hours
            </p>

            {/* FORM */}
            <div className="grid md:grid-cols-2 gap-4">

              <div>

                <label
                  className="
                  block

                  mb-2

                  text-[10px]

                  uppercase
                  tracking-[0.16em]

                  text-white/70
                  "
                >
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="
                  w-full

                  h-[56px]

                  px-4

                  rounded-[14px]

                  border
                  border-[#ffffff15]

                  bg-white/5

                  text-white

                  outline-none

                  placeholder:text-white/30
                  "
                />

              </div>

              <div>

                <label
                  className="
                  block

                  mb-2

                  text-[10px]

                  uppercase
                  tracking-[0.16em]

                  text-white/70
                  "
                >
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="+91..."
                  className="
                  w-full

                  h-[56px]

                  px-4

                  rounded-[14px]

                  border
                  border-[#ffffff15]

                  bg-white/5

                  text-white

                  outline-none

                  placeholder:text-white/30
                  "
                />

              </div>

            </div>

            <div className="mt-4">

              <label
                className="
                block

                mb-2

                text-[10px]

                uppercase
                tracking-[0.16em]

                text-white/70
                "
              >
                Email Address
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                className="
                w-full

                h-[56px]

                px-4

                rounded-[14px]

                border
                border-[#ffffff15]

                bg-white/5

                text-white

                outline-none

                placeholder:text-white/30
                "
              />

            </div>

            <div className="mt-4">

              <label
                className="
                block

                mb-2

                text-[10px]

                uppercase
                tracking-[0.16em]

                text-white/70
                "
              >
                Preferred Unit Type
              </label>

              <select
                className="
                w-full

                h-[56px]

                px-4

                rounded-[14px]

                border
                border-[#ffffff15]

                bg-white/5

                text-white

                outline-none
                "
              >
                <option>2 BHK Smart — 800 sq.ft</option>
                <option>3 BHK Premium — 1200 sq.ft</option>
                <option>Luxury Penthouse</option>
              </select>

            </div>

            <button
              className="
              mt-6

              w-full

              h-[60px]

              rounded-[16px]

              bg-[#ffe2d1]
              hover:bg-white

              text-[#111111]

              uppercase
              tracking-[0.14em]

              text-[12px]

              transition-all
              duration-300
              "
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
              }}
            >
              Book Site Visit
            </button>

            <p
              className="
              mt-5

              text-center

              text-[12px]

              text-white/45
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              Your information is secure. We never share your data.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}