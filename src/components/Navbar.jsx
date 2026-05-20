// src/components/Navbar.jsx

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import logo from "../assests/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Amenities", href: "#amenities" },
    { name: "Walkthrough Video", href: "#walkthrough" },
    { name: "Gallery", href: "#gallery" },
    { name: "Floor Plans", href: "#planning" },
    { name: "Location", href: "#contact" },
    { name: "Contact", href: "#contact" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50

      pt-3
      px-3
      lg:px-5
      "
    >
      <nav
        className="
        max-w-[1700px]
        mx-auto

        h-[64px]

        rounded-[22px]

        bg-gradient-to-r
        from-[#b8734f]
        via-[#cf8c67]
        to-[#b56f4c]

        shadow-[0_10px_30px_rgba(181,111,76,0.18)]

        backdrop-blur-xl

        px-5
        lg:px-7
        "
      >
        <div className="flex items-center justify-between h-full">

          {/* LEFT */}
          <div className="flex items-center shrink-0 pr-5">

            <a
              href="#home"
              className="
              flex
              items-center
              justify-center

              w-[82px]
              h-[82px]

              rounded-full

              hover:bg-white/10

              transition-all
              duration-300
              "
            >
              <img
                src={logo}
                alt="Subham Park"
                className="
                w-[82px]
                h-[82px]

                object-contain
                scale-[1.55]
                "
              />
            </a>

          </div>

          {/* DESKTOP MENU */}
          <div
            className="
            hidden
            lg:flex

            items-center
            justify-center

            flex-1

            gap-5
            xl:gap-7
            "
          >

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                text-[10px]

                uppercase

                tracking-[0.18em]

                text-[#fff8f3]

                hover:text-white

                transition-all
                duration-300

                whitespace-nowrap
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 500,
                }}
              >
                {link.name}
              </a>
            ))}

          </div>

          {/* BUTTON */}
          <div className="hidden lg:flex items-center pl-5">

            <a
              href="#contact"
              className="
              px-5
              py-[11px]

              rounded-[14px]

              bg-white/95

              text-[#a15f3f]

              text-[10px]

              uppercase

              tracking-[0.16em]

              flex
              items-center
              gap-3

              hover:bg-white
              hover:scale-[1.02]

              transition-all
              duration-300

              whitespace-nowrap
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              Download Brochure

              <ArrowUpRight size={13} />
            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            className="
            lg:hidden

            mt-2

            rounded-[18px]

            bg-gradient-to-br
            from-[#c57f59]
            to-[#ab6846]

            border
            border-white/10

            p-4

            shadow-[0_14px_35px_rgba(0,0,0,0.20)]

            flex
            flex-col
            gap-4
            "
          >

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                text-[#fffaf6]

                uppercase

                tracking-[0.14em]

                text-[12px]

                hover:text-white

                transition
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="
              mt-1

              bg-white

              text-[#9b5d3e]

              py-3

              rounded-[14px]

              uppercase

              text-[10px]

              tracking-[0.14em]

              flex
              items-center
              justify-center
              gap-2
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 600,
              }}
            >
              Download Brochure

              <ArrowUpRight size={14} />
            </a>

          </div>
        )}

      </nav>
    </header>
  );
}