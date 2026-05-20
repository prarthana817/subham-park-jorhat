// src/components/Contact.jsx

import { MapPin } from "lucide-react";

import locationImg from "../assests/images/location.jpg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      relative
      overflow-hidden

      py-12
      lg:py-16

      bg-[#f6f0e4]
      "
    >
      
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      
      <div className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] bg-[#2143b5]/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 lg:px-5">

        
        <div
          className="
          grid
          lg:grid-cols-2

          rounded-[28px]

          overflow-hidden

          border
          border-[#e8dcc8]

          bg-[#fbf8f2]

          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          "
        >

          
          <div
            className="
            p-6
            md:p-8
            lg:p-10

            flex
            flex-col
            justify-between
            "
          >

            <div>

              <p
                className="
                uppercase
                tracking-[0.30em]

                text-[10px]

                text-[#c9a14a]

                mb-4
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                PREMIUM LIVING
              </p>

              <h2
                className="
                text-[#111111]

                text-[38px]
                md:text-[52px]
                lg:text-[60px]

                leading-[0.94]
                tracking-[-2px]
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                }}
              >
                Your Dream Home
                <br />

                <span className="text-[#d1a54d]">
                  Awaits You
                </span>
              </h2>

              <p
                className="
                mt-5

                max-w-[560px]

                text-[15px]
                lg:text-[17px]

                leading-[1.9]

                text-[#5f6674]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
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

            
            <div
              className="
              mt-7

              rounded-[22px]

              overflow-hidden

              border
              border-[#e7dccb]

              bg-[#f4ecdf]

              shadow-[0_10px_30px_rgba(0,0,0,0.04)]
              "
            >

              
              <div className="relative h-[180px] md:h-[210px]">

                <img
                  src={locationImg}
                  alt="Location"
                  className="
                  w-full
                  h-full

                  object-cover
                  "
                />

                <div
                  className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/45
                  via-black/10
                  to-transparent
                  "
                />

                <div
                  className="
                  absolute
                  bottom-4
                  left-4

                  flex
                  items-center
                  gap-2

                  px-4
                  py-2

                  rounded-full

                  bg-white/90

                  backdrop-blur-md
                  "
                >

                  <MapPin className="w-4 h-4 text-[#2143b5]" />

                  <p
                    className="
                    text-[11px]

                    uppercase
                    tracking-[0.14em]

                    text-[#111111]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Prime Jorhat Location
                  </p>

                </div>

              </div>

            </div>

          </div>

          
          <div
            className="
            p-6
            md:p-8
            lg:p-10

            bg-[#fffaf2]

            border-t
            lg:border-t-0

            lg:border-l

            border-[#e8dcc8]
            "
          >

            <h3
              className="
              text-[#111111]

              text-[30px]
              lg:text-[38px]

              leading-[0.95]

              mb-2
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              <span className="text-[#d1a54d]">
                Book
              </span>{" "}
              Site Visit
            </h3>

            <p
              className="
              text-[15px]

              text-[#6d7482]

              mb-6
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              Our team will contact you shortly
            </p>

            
            <div className="grid md:grid-cols-2 gap-4">

              <div>

                <label
                  className="
                  block

                  mb-2

                  text-[10px]

                  uppercase
                  tracking-[0.16em]

                  text-[#5f6674]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
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
                  border-[#e6dac8]

                  bg-[#f8f2e8]

                  text-[#111111]

                  outline-none

                  placeholder:text-[#8f96a3]

                  focus:border-[#2143b5]
                  transition-all
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

                  text-[#5f6674]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
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
                  border-[#e6dac8]

                  bg-[#f8f2e8]

                  text-[#111111]

                  outline-none

                  placeholder:text-[#8f96a3]

                  focus:border-[#2143b5]
                  transition-all
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

                text-[#5f6674]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
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
                border-[#e6dac8]

                bg-[#f8f2e8]

                text-[#111111]

                outline-none

                placeholder:text-[#8f96a3]

                focus:border-[#2143b5]
                transition-all
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

                text-[#5f6674]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
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
                border-[#e6dac8]

                bg-[#f8f2e8]

                text-[#111111]

                outline-none

                focus:border-[#2143b5]
                transition-all
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

              h-[56px]

              rounded-[14px]

              bg-[#14234b]
              hover:bg-[#0f1c3d]

              text-white

              uppercase
              tracking-[0.14em]

              text-[11px]

              transition-all
              duration-300

              hover:-translate-y-[2px]

              shadow-[0_14px_34px_rgba(20,35,75,0.18)]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
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

              text-[#7b8390]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
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