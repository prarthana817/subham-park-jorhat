// src/components/Navbar.jsx

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "../assests/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      px-3
      pt-2
      lg:px-5
      "
    >
      <nav
        className={`
        max-w-[1700px]
        mx-auto

        h-[68px]

        rounded-[24px]

        border
        border-[#eadfcb]

        transition-all
        duration-300

        ${
          scrolled
            ? "bg-[#f8f5ed] shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            : "bg-[#f8f5ed] shadow-[0_6px_25px_rgba(0,0,0,0.04)]"
        }

        px-5
        lg:px-7
        `}
      >
        <div className="flex items-center justify-between h-full">
          {/* LEFT */}
          <div className="flex items-center shrink-0 pr-4">
            <a
              href="#home"
              className="
              flex
              items-center
              justify-center

              w-[82px]
              h-[82px]

              rounded-full

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
                text-[11px]

                uppercase

                tracking-[0.14em]

                text-[#171717]

                hover:text-[#c79d47]

                transition-all
                duration-300

                whitespace-nowrap
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* BUTTON */}
          <div className="hidden lg:flex items-center pl-4">
            <a
              href="#contact"
              className="
              h-[44px]

              px-6

              rounded-full

              bg-[#162a63]
              hover:bg-[#10214f]

              text-white

              text-[10px]

              uppercase

              tracking-[0.16em]

              flex
              items-center
              gap-2.5

              hover:-translate-y-[2px]

              shadow-[0_10px_25px_rgba(22,42,99,0.24)]

              transition-all
              duration-300

              whitespace-nowrap
              "
              style={{
                fontFamily: "'Inter', sans-serif",
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
            className="
            lg:hidden

            text-[#171717]
            "
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            className="
            lg:hidden

            mt-3

            rounded-[22px]

            bg-[#f8f5ed]

            border
            border-[#eadfcb]

            p-5

            shadow-[0_15px_40px_rgba(0,0,0,0.08)]

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
                text-[#171717]

                uppercase

                tracking-[0.14em]

                text-[11px]

                hover:text-[#c79d47]

                transition
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                }}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="
              mt-1

              bg-[#162a63]
              hover:bg-[#10214f]

              text-white

              h-[46px]

              rounded-full

              uppercase

              text-[10px]

              tracking-[0.14em]

              flex
              items-center
              justify-center
              gap-2

              transition-all
              duration-300
              "
              style={{
                fontFamily: "'Inter', sans-serif",
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