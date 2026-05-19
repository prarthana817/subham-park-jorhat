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
          lg:grid-cols-2

          rounded-[24px]

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

            min-h-[100%]
            "
          >

            <div>

              <p
                className="
                uppercase
                tracking-[0.30em]

                text-[10px]

                text-[#ffe2d1]

                mb-3
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

                text-[44px]
                md:text-[54px]
                lg:text-[62px]

                leading-[0.92]
                tracking-[-2px]
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                }}
              >
                Your Dream Home
                <br />

                <span className="text-[#ffe2d1]">
                  Awaits You
                </span>
              </h2>

              <p
                className="
                mt-4

                max-w-[560px]

                text-[15px]
                lg:text-[16px]

                leading-[1.95]

                text-white/80
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Discover a thoughtfully crafted lifestyle designed for
                modern families with elegant architecture, premium
                amenities, seamless connectivity and beautifully planned
                living spaces that bring comfort, sophistication and
                everyday convenience together.
              </p>

            </div>

            {/* CONTACT BOX */}
            <div
              className="
              mt-5

              flex
              items-center
              gap-4

              rounded-[18px]

              border
              border-[#ffffff12]

              bg-white/5

              p-4
              "
            >

              <div
                className="
                w-11
                h-11

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
                  tracking-[0.16em]

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
                  text-[18px]
                  lg:text-[22px]

                  text-white

                  leading-none
                  "
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                  }}
                >
                  +91 98765 43210
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

            border-t
            lg:border-t-0

            lg:border-l

            border-[#ffffff10]
            "
          >

            <h3
              className="
              text-white

              text-[32px]
              lg:text-[40px]

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
              text-[14px]

              text-white/65

              mb-5
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              Our team will contact you shortly
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

                  h-[54px]

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

                  h-[54px]

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

                h-[54px]

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

                h-[54px]

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
              mt-5

              w-full

              h-[56px]

              rounded-[14px]

              bg-[#ffe2d1]
              hover:bg-white

              text-[#111111]

              uppercase
              tracking-[0.14em]

              text-[11px]

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
              mt-4

              text-center

              text-[12px]

              text-white/45
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            >
              Your information is secure and protected.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}