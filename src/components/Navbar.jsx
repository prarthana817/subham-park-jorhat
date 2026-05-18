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
    <header className="fixed top-0 left-0 w-full z-50 px-2 pt-2">
      <nav
        className="
        max-w-[1500px]
        mx-auto
        h-[78px]

        rounded-[18px]

        bg-[#f5eee9]/92
        backdrop-blur-xl

        border
        border-[#ead9cf]

        shadow-[0_8px_24px_rgba(198,162,143,0.12)]

        px-4
        lg:px-5
        "
      >
        <div className="flex items-center justify-between h-full">

          {/* LEFT */}
          <div className="flex items-center shrink-0">

            <div
              className="
              w-[68px]
              h-[68px]

              rounded-[18px]

              bg-white

              border
              border-[#ead8ce]

              shadow-[0_6px_16px_rgba(0,0,0,0.05)]

              flex
              items-center
              justify-center

              overflow-hidden
              "
            >
              <img
                src={logo}
                alt="Subham Park"
                className="w-[58px] h-[58px] object-contain scale-[1.35]"
              />
            </div>

          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                text-[11px]

                uppercase

                tracking-[0.18em]

                text-[#1c2340]

                hover:text-[#d69073]

                transition-all
                duration-300

                whitespace-nowrap
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                {link.name}
              </a>
            ))}

            {/* BUTTON */}
            <a
              href="#contact"
              className="
              ml-1

              px-4
              py-[11px]

              rounded-[14px]

              bg-gradient-to-r
              from-[#d69073]
              to-[#c6a28f]

              text-white

              text-[10px]

              uppercase

              tracking-[0.15em]

              flex
              items-center
              gap-2

              hover:scale-[1.02]

              transition-all
              duration-300

              shadow-[0_8px_18px_rgba(214,144,115,0.22)]

              whitespace-nowrap
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 400,
              }}
            >
              Download Brochure

              <ArrowUpRight size={14} />
            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#1c2340]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            className="
            lg:hidden

            mt-2

            rounded-[20px]

            bg-[#f8f2ed]

            border
            border-[#ead8ce]

            p-4

            shadow-[0_10px_25px_rgba(0,0,0,0.08)]

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
                text-[#1c2340]

                uppercase

                tracking-[0.14em]

                text-[13px]

                hover:text-[#d69073]

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

              bg-gradient-to-r
              from-[#d69073]
              to-[#c6a28f]

              text-white

              py-3

              rounded-[16px]

              uppercase

              text-[11px]

              tracking-[0.14em]

              flex
              items-center
              justify-center
              gap-2

              shadow-[0_10px_20px_rgba(214,144,115,0.22)]
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 400,
              }}
            >
              Download Brochure

              <ArrowUpRight size={15} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}