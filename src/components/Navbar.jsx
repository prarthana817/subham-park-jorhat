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
    { name: "Gallery", href: "#gallery" },
    { name: "Floor Plans", href: "#planning" },
    { name: "Location", href: "#location" },
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
      flex
      justify-center
      px-3
      pt-3
      "
    >
      <nav
        className={`
        w-full
        max-w-[1240px]

        rounded-[22px]

        border
        border-[#eadfcb]

        transition-all
        duration-300

        ${
          scrolled
            ? "bg-[#f8f5ed]/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            : "bg-[#f8f5ed] shadow-[0_6px_25px_rgba(0,0,0,0.04)]"
        }
        `}
      >
        {/* NAVBAR INNER */}
        <div
          className="
          h-[72px]

          px-4
          lg:px-6

          flex
          items-center
          "
        >
          {/* LOGO */}
          <div className="flex items-center shrink-0">
            <a
              href="#home"
              className="
              flex
              items-center
              justify-center

              w-[72px]
              h-[72px]
              "
            >
              <img
                src={logo}
                alt="Subham Park"
                className="
                w-[72px]
                h-[72px]
                object-contain
                scale-[1.35]
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

            gap-8
            xl:gap-10
            "
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                relative

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
                  fontWeight: 600,
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="
              h-[44px]

              px-6

              rounded-full

              bg-[#162a63]
              hover:bg-[#10214f]

              text-white

              text-[11px]

              uppercase

              tracking-[0.14em]

              flex
              items-center
              gap-2

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

              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
            ml-auto

            lg:hidden

            w-[42px]
            h-[42px]

            rounded-full

            bg-[#162a63]

            text-white

            flex
            items-center
            justify-center
            "
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div
            className="
            lg:hidden

            px-4
            pb-5
            "
          >
            <div
              className="
              rounded-[20px]

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

                  text-[10px]

                  hover:text-[#c79d47]

                  transition-all
                  duration-300
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {link.name}
                </a>
              ))}

              {/* MOBILE CTA */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="
                mt-2

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

                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}