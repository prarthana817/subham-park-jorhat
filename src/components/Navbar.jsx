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

      pt-2
      "
    >
      <nav
        className="
        max-w-[1900px]
        mx-auto

        h-[60px]
        lg:h-[64px]

        rounded-[0px]
        lg:rounded-[0px]

        bg-gradient-to-r
        from-[#7d4328]
        via-[#9b5a39]
        to-[#7b4429]

        shadow-[0_8px_24px_rgba(74,35,18,0.28)]

        backdrop-blur-xl

        px-3
        lg:px-5
        "
      >
        <div className="flex items-center justify-between h-full">

          {/* LEFT */}
          <div className="flex items-center shrink-0">

            <a
              href="#home"
              className="
              flex
              items-center
              justify-center

              w-[74px]
              h-[74px]

              transition-all
              duration-300

              hover:bg-white/10
              rounded-full
              "
            >
              <img
                src={logo}
                alt="Subham Park"
                className="
                w-[72px]
                h-[72px]

                object-contain
                scale-[1.55]
                "
              />
            </a>

          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                text-[10px]

                uppercase

                tracking-[0.18em]

                text-[#fff4ec]

                hover:text-[#ffe0cf]

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

            {/* BUTTON */}
            <a
              href="#contact"
              className="
              ml-2

              px-5
              py-[11px]

              rounded-[14px]

              bg-white

              text-[#8b4c2d]

              text-[10px]

              uppercase

              tracking-[0.16em]

              flex
              items-center
              gap-4

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
            from-[#8f4b2b]
            to-[#6f371d]

            border
            border-white/10

            p-4

            shadow-[0_14px_35px_rgba(0,0,0,0.28)]

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
                text-[#fff5ef]

                uppercase

                tracking-[0.14em]

                text-[12px]

                hover:text-[#ffe0cf]

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

              text-[#8b4c2d]

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