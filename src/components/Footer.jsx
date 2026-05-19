// src/components/Footer.jsx

import logo from "../assests/images/logo.png";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
      relative
      overflow-hidden

      bg-gradient-to-r
      from-[#fff1e4]
      via-[#ffbf8a]
      to-[#f08a42]

      py-4
      lg:py-5

      border-t
      border-[#f2a56f]
      "
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/10" />

      {/* LEFT LINES */}
      <div
        className="
        absolute
        left-0
        top-0
        h-full
        w-[140px]
        opacity-[0.06]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#b96535 0px,#b96535 1px,transparent 1px,transparent 8px)",
        }}
      />

      {/* GLOW */}
      <div className="absolute top-[-120px] left-[5%] w-[320px] h-[320px] rounded-full bg-[#ff9b52]/35 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[8%] w-[320px] h-[320px] rounded-full bg-[#ff7b22]/25 blur-[120px]" />

      <div
        className="
        relative
        z-10

        max-w-[1500px]
        mx-auto

        px-4
        lg:px-6
        "
      >
        <div
          className="
          flex
          flex-col
          lg:flex-row

          items-center
          justify-between

          gap-6
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* LOGO */}
            <div className="relative flex items-center justify-center">

              <div
                className="
                absolute
                w-[95px]
                h-[95px]
                rounded-full
                bg-white
                opacity-90
                blur-[38px]
                "
              />

              <img
                src={logo}
                alt="Subham Park"
                className="
                relative
                z-10

                w-[58px]
                lg:w-[68px]

                object-contain
                "
              />

            </div>

            {/* BRAND */}
            <div>

              <h2
                className="
                text-[20px]
                lg:text-[24px]

                leading-[0.95]

                tracking-[0.04em]

                text-[#3b2417]
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                }}
              >
                SUBHAM PARK
              </h2>

              <p
                className="
                mt-[2px]

                uppercase
                tracking-[0.3em]

                text-[9px]

                text-[#8e4419]
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 700,
                }}
              >
                JORHAT
              </p>

            </div>

          </div>

          {/* CENTER */}
          <div
            className="
            flex
            flex-col
            sm:flex-row

            items-center
            justify-center

            gap-8
            lg:gap-14

            text-center
            "
          >

            {/* SITE ADDRESS */}
            <div>

              <h3
                className="
                text-[13px]

                uppercase
                tracking-[0.18em]

                text-[#94481e]

                mb-2
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 700,
                }}
              >
                Site Address
              </h3>

              <p
                className="
                text-[13px]
                lg:text-[14px]

                text-[#3d2719]

                leading-[1.8]
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 600,
                }}
              >
                Assam Trunk Road,
                <br />
                Jorhat, Assam - 785001
              </p>

            </div>

            {/* RERA */}
            <div>

              <h4
                className="
                text-[13px]

                uppercase
                tracking-[0.18em]

                text-[#94481e]

                mb-2
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 700,
                }}
              >
                RERA Number
              </h4>

              <p
                className="
                text-[13px]
                lg:text-[14px]

                text-[#3d2719]

                leading-[1.8]
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 600,
                }}
              >
                RERAA BO 167
                <br />
                of 2024-2025
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="text-center lg:text-right">

            <p
              className="
              text-[12px]
              lg:text-[13px]

              text-[#42291a]
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              © 2025 Subham Group. All rights reserved.
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
}