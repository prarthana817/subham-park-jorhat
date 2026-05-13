import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Amenities", href: "#amenities" },
    { name: "Walkthrough Video", href: "#video" },
    { name: "Gallery", href: "#gallery" },
    { name: "Plan", href: "#plan" },
    { name: "Location", href: "#location" },
    { name: "About Us", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 lg:px-6 pt-5">

      {/* NAVBAR */}
      <nav
        className="
        max-w-[1700px]
        mx-auto
        bg-white/55
        backdrop-blur-2xl
        border
        border-white/40
        rounded-[30px]
        shadow-[0_10px_50px_rgba(99,102,241,0.12)]
        "
      >

        <div className="px-5 lg:px-10">

          {/* NAVBAR CONTAINER */}
          <div className="flex items-center justify-between h-[92px]">

            {/* LOGO */}
            <a
              href="#home"
              className="
              flex
              items-center
              justify-center
              w-[96px]
              h-[96px]
              rounded-[24px]
              bg-white/70
              backdrop-blur-xl
              border
              border-white/50
              shadow-lg
              "
            >
              <img
                src={logo}
                alt="Subham Park"
                className="
                h-16
                w-auto
                object-contain
                "
              />
            </a>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-12">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                  text-[#16214a]
                  uppercase
                  tracking-[2px]
                  text-[14px]
                  font-semibold
                  hover:text-pink-500
                  transition-all
                  duration-300
                  "
                >
                  {link.name}
                </a>
              ))}

            </div>

            {/* CTA BUTTON */}
            <div className="hidden lg:flex">

              <a
                href="#contact"
                className="
                bg-gradient-to-r
                from-blue-500
                via-[#7b8cff]
                to-pink-400
                text-white
                uppercase
                tracking-[2px]
                font-bold
                text-[14px]
                px-8
                py-5
                rounded-[20px]
                shadow-[0_10px_35px_rgba(99,102,241,0.35)]
                hover:scale-105
                transition-all
                duration-300
                "
              >
                Download Brochure ↗
              </a>

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
              lg:hidden
              text-[#16214a]
              "
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div className="lg:hidden pb-6">

              <div className="flex flex-col gap-5 pt-2">

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="
                    text-[#16214a]
                    uppercase
                    tracking-[2px]
                    text-sm
                    font-semibold
                    "
                  >
                    {link.name}
                  </a>
                ))}

                {/* MOBILE BUTTON */}
                <a
                  href="#contact"
                  className="
                  mt-2
                  bg-gradient-to-r
                  from-blue-500
                  via-[#7b8cff]
                  to-pink-400
                  text-white
                  uppercase
                  tracking-[2px]
                  font-bold
                  text-center
                  px-6
                  py-4
                  rounded-2xl
                  shadow-lg
                  "
                >
                  Download Brochure
                </a>

              </div>

            </div>
          )}

        </div>

      </nav>

    </header>
  );
}