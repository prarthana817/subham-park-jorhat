// src/components/Footer.jsx

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import logo from "../assests/images/logo.png";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
      relative
      overflow-hidden

      bg-gradient-to-br
      from-[#8f4b2b]
      via-[#a85b35]
      to-[#6f371d]

      py-8
      "
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#3b1d10]/40" />

      {/* GLOW */}
      <div className="absolute top-[-120px] left-[10%] w-[320px] h-[320px] rounded-full bg-[#ffffff]/10 blur-[130px]" />

      <div className="absolute bottom-[-120px] right-[10%] w-[320px] h-[320px] rounded-full bg-[#ffcfb4]/10 blur-[120px]" />

      <div className="relative z-10 max-w-[1450px] mx-auto px-5 lg:px-7">

        {/* TOP */}
        <div
          className="
          grid
          lg:grid-cols-[1fr_1fr_0.8fr]

          items-center

          gap-6

          border-b
          border-white/10

          pb-6
          "
        >

          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* LOGO WRAP */}
            <div
              className="
              relative

              flex
              items-center
              justify-center
              "
            >

              {/* WHITE GLOW */}
              <div
                className="
                absolute

                w-[120px]
                h-[120px]

                rounded-full

                bg-white/10

                blur-[35px]
                "
              />

              <img
                src={logo}
                alt="Subham Park"
                className="relative z-10 w-[92px] lg:w-[105px]"
              />

            </div>

            <div>

              <h2
                className="
                text-[42px]
                lg:text-[52px]

                leading-[0.9]

                text-white
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                Subham
                <br />
                Park
              </h2>

              <p
                className="
                mt-1

                uppercase

                tracking-[0.32em]

                text-[12px]

                text-[#ffe7d8]
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Jorhat
              </p>

            </div>

          </div>

          {/* CENTER */}
          <div className="text-center">

            <h3
              className="
              text-[20px]

              text-[#fff0e6]

              mb-2
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              Site Address
            </h3>

            <p
              className="
              text-[14px]
              leading-[1.8]

              text-[#fff6f0]
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 300,
              }}
            >
              Assam Trunk Road, Jorhat, Assam - 785001
            </p>

            <p
              className="
              mt-3

              text-[13px]

              text-[#ffe8da]
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 500,
              }}
            >
              RERA No. — 2026-2027
            </p>

          </div>

          {/* RIGHT */}
          <div className="lg:text-right">

            <h2
              className="
              text-[46px]
              lg:text-[58px]

              leading-[0.88]

              text-[#fff3eb]
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
                fontStyle: "italic",
              }}
            >
              Luxury
              <br />
              Living
            </h2>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
          pt-5

          flex
          flex-col
          lg:flex-row

          items-center
          justify-between

          gap-5
          "
        >

          {/* CONTACT */}
          <div className="flex flex-wrap items-center gap-3">

            <div
              className="
              flex
              items-center
              gap-3

              px-5
              py-3

              rounded-[18px]

              bg-white/10
              border
              border-white/10
              "
            >

              <Phone className="w-4 h-4 text-[#ffe3d3]" />

              <span
                className="text-[#fff6f0] text-[13px]"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                +91 98765 43210
              </span>

            </div>

            <div
              className="
              flex
              items-center
              gap-3

              px-5
              py-3

              rounded-[18px]

              bg-white/10
              border
              border-white/10
              "
            >

              <Mail className="w-4 h-4 text-[#ffe3d3]" />

              <span
                className="text-[#fff6f0] text-[13px]"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                sales@subhampark.com
              </span>

            </div>

            <div
              className="
              flex
              items-center
              gap-3

              px-5
              py-3

              rounded-[18px]

              bg-white/10
              border
              border-white/10
              "
            >

              <MapPin className="w-4 h-4 text-[#ffe3d3]" />

              <span
                className="text-[#fff6f0] text-[13px]"
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                Jorhat, Assam
              </span>

            </div>

          </div>

          {/* LINKS */}
          <div className="flex items-center gap-5 flex-wrap justify-center">

            {[
              "Home",
              "About",
              "Gallery",
              "Plans",
              "Contact",
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="
                flex
                items-center
                gap-2

                text-[#fff0e7]
                hover:text-white

                transition-all
                duration-300
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >

                <ArrowUpRight className="w-4 h-4" />

                {item}

              </a>
            ))}

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-5 text-center">

          <p
            className="
            text-[13px]

            text-[#ffe8da]
            "
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontWeight: 300,
            }}
          >
            © 2026 Subham Park. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}