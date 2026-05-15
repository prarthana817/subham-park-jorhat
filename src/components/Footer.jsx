// src/components/Footer.jsx

import { motion } from "framer-motion";
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
      className="
      relative
      overflow-hidden

      bg-[#0d0d0d]

      pt-14
      pb-8
      "
    >

      {/* PREMIUM BLUR */}
      <div className="absolute top-[-120px] left-[10%] w-[260px] h-[260px] rounded-full bg-[#d69073]/10 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[10%] w-[260px] h-[260px] rounded-full bg-[#56bdb7]/10 blur-[120px]" />

      {/* ANIMATED BG LOGO */}
      <motion.img
        src={logo}
        alt="logo"
        animate={{
          rotate: [0, 4, -4, 0],
          scale: [1, 1.04, 1],
          opacity: [0.16, 0.24, 0.16],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute

        left-1/2
        top-1/2

        -translate-x-1/2
        -translate-y-1/2

        w-[260px]
        lg:w-[340px]

        opacity-[0.20]

        blur-[0.3px]

        mix-blend-screen

        pointer-events-none
        select-none
        "
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 lg:px-6">

        {/* TOP */}
        <div
          className="
          grid
          lg:grid-cols-[1fr_0.8fr_0.7fr]

          gap-10

          border-b
          border-white/20

          pb-10
          "
        >

          {/* LEFT */}
          <div>

            <img
              src={logo}
              alt="Subham Park"
              className="
              w-[110px]
              "
            />

            <h2
              className="
              mt-6

              text-[34px]
              lg:text-[42px]

              leading-[0.95]

              text-white
              "
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontWeight: 400,
              }}
            >
              PREMIUM
              <br />

              LIVING
            </h2>

            <p
              className="
              mt-5

              max-w-[420px]

              text-[14px]
              leading-[1.9]

              text-[#cbc3bc]
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 300,
              }}
            >
              Luxury residences crafted with elegant
              architecture, premium amenities and peaceful
              lifestyle experiences in Jorhat.
            </p>

          </div>

          {/* CENTER */}
          <div>

            <p
              className="
              uppercase

              tracking-[0.28em]

              text-[11px]

              text-[#d69073]

              mb-6
              "
              style={{
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Quick Links
            </p>

            <div className="flex flex-col gap-4">

              {[
                "Home",
                "About",
                "Amenities",
                "Gallery",
                "Plans",
                "Contact",
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 6 }}
                  className="
                  flex
                  items-center
                  gap-3

                  text-[#e9e1db]
                  hover:text-[#d69073]

                  transition-all
                  duration-300
                  "
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                >

                  <ArrowUpRight className="w-4 h-4" />

                  {item}

                </motion.a>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <p
              className="
              uppercase

              tracking-[0.28em]

              text-[11px]

              text-[#d69073]

              mb-6
              "
              style={{
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              Contact Info
            </p>

            <div className="flex flex-col gap-6">

              {/* PHONE */}
              <div className="flex items-start gap-4">

                <div
                  className="
                  w-11
                  h-11

                  flex
                  items-center
                  justify-center

                  bg-white/5

                  border
                  border-white/10
                  "
                >
                  <Phone className="w-4 h-4 text-[#56bdb7]" />
                </div>

                <div>

                  <p
                    className="
                    text-[11px]
                    uppercase
                    tracking-[0.2em]

                    text-[#a3958a]
                    "
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Phone
                  </p>

                  <h4
                    className="
                    mt-1

                    text-[18px]

                    text-white
                    "
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    +91 98765 43210
                  </h4>

                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">

                <div
                  className="
                  w-11
                  h-11

                  flex
                  items-center
                  justify-center

                  bg-white/5

                  border
                  border-white/10
                  "
                >
                  <Mail className="w-4 h-4 text-[#d69073]" />
                </div>

                <div>

                  <p
                    className="
                    text-[11px]
                    uppercase
                    tracking-[0.2em]

                    text-[#a3958a]
                    "
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Email
                  </p>

                  <h4
                    className="
                    mt-1

                    text-[18px]

                    text-white
                    break-all
                    "
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    sales@subhampark.com
                  </h4>

                </div>

              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-4">

                <div
                  className="
                  w-11
                  h-11

                  flex
                  items-center
                  justify-center

                  bg-white/5

                  border
                  border-white/10
                  "
                >
                  <MapPin className="w-4 h-4 text-[#56bdb7]" />
                </div>

                <div>

                  <p
                    className="
                    text-[11px]
                    uppercase
                    tracking-[0.2em]

                    text-[#a3958a]
                    "
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Address
                  </p>

                  <h4
                    className="
                    mt-1

                    text-[18px]

                    leading-[1.6]

                    text-white
                    "
                    style={{
                      fontFamily: "'Josefin Sans', sans-serif",
                    }}
                  >
                    Assam Trunk Road,
                    Jorhat, Assam
                  </h4>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
          pt-6

          flex
          flex-col
          lg:flex-row

          items-center
          justify-between

          gap-4
          "
        >

          <p
            className="
            text-[13px]

            text-[#9d938c]
            "
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
            }}
          >
            © 2026 Subham Park. All Rights Reserved.
          </p>

          <p
            className="
            text-[13px]

            text-[#cba58f]
            "
            style={{
              fontFamily: "'Josefin Sans', sans-serif",
            }}
          >
            Designed for elegant luxury living.
          </p>

        </div>

      </div>

    </footer>
  );
}