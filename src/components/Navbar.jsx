// src/components/Navbar.jsx

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import logo from "../assests/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Plan", href: "#plan" },
    { name: "Location", href: "#location" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <nav
        className="
        max-w-[1720px]
        mx-auto

        h-[82px]

        rounded-[28px]

        bg-[#edf2ff]/90
        backdrop-blur-2xl

        border
        border-white/70

        shadow-[0_10px_40px_rgba(99,102,241,0.10)]

        px-6
        lg:px-8
        "
      >
        <div className="flex items-center justify-between h-full">

          {/* LEFT SIDE */}
          <div className="flex items-center">

            {/* BIG LOGO ONLY */}
            <div
              className="
              w-[74px]
              h-[74px]

              rounded-[24px]

              bg-white

              border
              border-[#dbe3ff]

              shadow-lg

              flex
              items-center
              justify-center
              "
            >
              <img
                src={logo}
                alt="Subham Park"
                className="w-12 h-12 object-contain"
              />
            </div>

          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                text-[13px]

                font-extrabold

                uppercase

                tracking-[0.18em]

                text-[#1b2559]

                hover:text-[#e66bc3]

                transition-all
                duration-300
                "
              >
                {link.name}
              </a>
            ))}

            {/* BUTTON */}
            <a
              href="#contact"
              className="
              ml-2

              px-6
              py-4

              rounded-[20px]

              bg-gradient-to-r
              from-blue-500
              via-[#8b7cff]
              to-pink-500

              text-white

              text-[12px]
              font-black

              uppercase

              tracking-[0.16em]

              flex
              items-center
              gap-2

              hover:scale-105

              transition-all
              duration-300

              shadow-[0_12px_30px_rgba(139,124,255,0.35)]
              "
            >
              Download Brochure

              <ArrowUpRight size={16} />
            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#111c4d]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            className="
            lg:hidden

            mt-4
            pb-6

            flex
            flex-col
            gap-5

            bg-white
            rounded-3xl

            p-6

            shadow-xl
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                text-[#16214a]

                font-bold

                uppercase

                tracking-[0.14em]
                "
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="
              mt-2

              bg-gradient-to-r
              from-blue-500
              via-[#8b7cff]
              to-pink-500

              text-white

              py-4

              rounded-2xl

              font-bold

              uppercase

              tracking-[0.14em]

              flex
              items-center
              justify-center
              gap-2
              "
            >
              Download Brochure
              <ArrowUpRight size={18} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}