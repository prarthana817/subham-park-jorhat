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
      from-[#f9f4ec]
      via-[#f4e6d4]
      to-[#ead8c4]

      py-5
      lg:py-6

      border-t
      border-[#efe2d3]
      "
    >
      
      <div className="absolute inset-0 bg-white/25" />

      
      <div
        className="
        absolute
        left-0
        top-0
        h-full
        w-[140px]
        opacity-[0.035]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right,#b8a08c 0px,#b8a08c 1px,transparent 1px,transparent 8px)",
        }}
      />

      
      <div className="absolute top-[-120px] left-[5%] w-[280px] h-[280px] rounded-full bg-[#ffffff]/50 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[8%] w-[280px] h-[280px] rounded-full bg-[#f4e4cf]/60 blur-[120px]" />

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
          lg:gap-4
          "
        >
          
          <div className="flex items-center gap-4">

            
            <div className="relative flex items-center justify-center">

              <div
                className="
                absolute
                w-[82px]
                h-[82px]
                rounded-full
                bg-white
                opacity-90
                blur-[34px]
                "
              />

              <img
                src={logo}
                alt="Subham Park"
                className="
                relative
                z-10

                w-[52px]
                sm:w-[58px]
                lg:w-[64px]

                object-contain
                "
              />

            </div>

            
            <div>

              <h2
                className="
                text-[18px]
                sm:text-[20px]
                lg:text-[22px]

                leading-[0.95]

                tracking-[0.04em]

                text-[#2b1b12]
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
                mt-[3px]

                uppercase
                tracking-[0.28em]

                text-[8px]
                sm:text-[9px]

                text-[#8d6c55]
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

          
          <div
            className="
            flex
            flex-col
            sm:flex-row

            items-center
            justify-center

            gap-6
            sm:gap-10
            lg:gap-14

            text-center
            "
          >

          
            <div>

              <h3
                className="
                text-[11px]

                uppercase
                tracking-[0.18em]

                text-[#8d6c55]

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
                text-[12px]
                lg:text-[13px]

                text-[#34231a]

                leading-[1.7]
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

            
            <div>

              <h4
                className="
                text-[11px]

                uppercase
                tracking-[0.18em]

                text-[#8d6c55]

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
                text-[12px]
                lg:text-[13px]

                text-[#34231a]

                leading-[1.7]
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

          
          <div className="text-center lg:text-right">

            <p
              className="
              text-[11px]
              lg:text-[12px]

              text-[#463226]
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