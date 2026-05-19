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

        rounded-[22px]

        bg-gradient-to-r
        from-[#7d4328]
        via-[#9b5a39]
        to-[#7b4429]

        border
        border-[#c08a6b]/30

        shadow-[0_10px_30px_rgba(74,35,18,0.35)]

        backdrop-blur-xl

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
              h-[72px]

              rounded-[18px]

              bg-white/10

              border
              border-white/10

              flex
              items-center
              justify-center

              overflow-hidden

              shadow-[0_0_35px_rgba(255,255,255,0.10)]
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

                text-[#fff4ec]

                hover:text-[#ffe0cf]

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

              bg-white

              text-[#8b4c2d]

              text-[10px]

              uppercase

              tracking-[0.15em]

              flex
              items-center
              gap-5

              hover:scale-[1.02]

              transition-all
              duration-300

              shadow-[0_10px_24px_rgba(255,255,255,0.16)]

              whitespace-nowrap
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

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
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

            bg-gradient-to-br
            from-[#8f4b2b]
            to-[#6f371d]

            border
            border-white/10

            p-4

            shadow-[0_14px_35px_rgba(0,0,0,0.28)]

            flex
            flex-col
            gap-5
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

                text-[13px]

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

              rounded-[16px]

              uppercase

              text-[11px]

              tracking-[0.14em]

              flex
              items-center
              justify-center
              gap-2

              shadow-[0_10px_20px_rgba(255,255,255,0.14)]
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 600,
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