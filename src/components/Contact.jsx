// src/components/Contact.jsx;

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      relative
      overflow-hidden
      py-12
      lg:py-16
      bg-[#0d1b46]
      "
    >
      {/* DEEP NAVY BACKGROUND */}
      <div className="absolute inset-0 bg-[#0d1b46]" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 lg:px-5">
        <div
          className="
          grid
          lg:grid-cols-2

          rounded-[30px]

          overflow-hidden

          border
          border-[#d8c79d]

          bg-[#f8f5ee]

          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
          "
        >
          {/* LEFT SIDE */}
          <div
            className="
            p-6
            md:p-8
            lg:p-10

            flex
            flex-col
            justify-between

            bg-[#fcfaf5]
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

  max-w-[520px]

  text-[15px]
  lg:text-[16px]

  leading-[1.85]

  tracking-[-0.01em]

  text-[#5f6674]

  text-justify

  break-words
  "
  style={{
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    textAlignLast: "left",
  }}
>
  Discover a thoughtfully crafted lifestyle
  designed for modern families where elegant
  architecture, premium amenities and serene
  surroundings come together seamlessly.
  Enjoy effortless connectivity, open green
  spaces and carefully planned residences that
  elevate comfort, convenience and everyday
  living while creating a refined address in
  the heart of Jorhat.
</p>
            </div>

            {/* ADDRESS */}
<div
  className="
  mt-7

  rounded-[18px]

  border
  border-[#e7dccb]

  bg-[#f8f1e4]

  p-5

  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
  "
>
  <p
    className="
    text-[11px]

    uppercase

    tracking-[0.22em]

    text-[#c9a14a]

    mb-2
    "
    style={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
    }}
  >
    LOCATION
  </p>

  <p
    className="
    text-[15px]

    leading-[1.8]

    text-[#111111]
    "
    style={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
    }}
  >
    1, Sonari Gaon,
    Jorhat 
  </p>
</div>
          </div>
          {/* RIGHT SIDE */}
          <div
            className="
            p-6
            md:p-8
            lg:p-10

            bg-[#f4eee0]

            border-t
            lg:border-t-0

            lg:border-l

            border-[#e1d2b3]
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

                  text-[#5f6674]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  FULL NAME
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
                  border-[#dbc8a2]

                  bg-[#fffaf2]

                  text-[#111111]

                  outline-none

                  placeholder:text-[#8f96a3]

                  focus:border-[#14234b]

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
                  PHONE NUMBER
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
                  border-[#dbc8a2]

                  bg-[#fffaf2]

                  text-[#111111]

                  outline-none

                  placeholder:text-[#8f96a3]

                  focus:border-[#14234b]

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
                EMAIL ADDRESS
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
                border-[#dbc8a2]

                bg-[#fffaf2]

                text-[#111111]

                outline-none

                placeholder:text-[#8f96a3]

                focus:border-[#14234b]

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
                PREFERRED UNIT TYPE
              </label>

              <select
                className="
                w-full
                h-[54px]

                px-4

                rounded-[14px]

                border
                border-[#dbc8a2]

                bg-[#fffaf2]

                text-[#111111]

                outline-none

                focus:border-[#14234b]

                transition-all
                "
              >
                <option>Select Configuration</option>
                <option>2 BHK Smart — 800 sq.ft</option>
                <option>2.5 BHK — 1096 sq.ft</option>
                <option>3 BHK — 1339 sq.ft & 1530 sq.ft</option>
                <option>3.5 BHK — 1684 sq.ft</option>
              </select>
            </div>

            {/* BUTTON */}
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

              shadow-[0_14px_34px_rgba(20,35,75,0.20)]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
              }}
            >
              BOOK SITE VISIT
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