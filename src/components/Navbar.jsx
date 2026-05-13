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
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <nav
        className="
        max-w-[1700px]
        mx-auto
        bg-white/70
        backdrop-blur-2xl
        border
        border-white/50
        rounded-[30px]
        shadow-[0_10px_40px_rgba(80,120,255,0.12)]
        "
      >
        <div className="px-6 lg:px-10">

          {/* NAVBAR */}
          <div className="flex items-center justify-between h-[88px]">

            {/* LOGO */}
            <a href="#home" className="flex items-center">
              <img
                src={logo}
                alt="Subham Park"
                className="h-20 w-auto object-contain"
              />
            </a>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-12">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                  text-[#1b2559]
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

            {/* BUTTON */}
            <div className="hidden lg:flex">

              <a
                href="#contact"
                className="
                bg-gradient-to-r
                from-blue-500
                via-[#7b8cff]
                to-pink-400
                hover:scale-105
                text-white
                uppercase
                tracking-[2px]
                font-bold
                text-[14px]
                px-8
                py-5
                rounded-[20px]
                transition-all
                duration-300
                shadow-[0_10px_30px_rgba(99,102,241,0.35)]
                "
              >
                Download Brochure ↗
              </a>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#1b2559]"
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
                    className="
                    text-[#1b2559]
                    uppercase
                    tracking-[2px]
                    text-sm
                    font-semibold
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
                  to-pink-400
                  text-white
                  uppercase
                  tracking-[2px]
                  font-bold
                  text-center
                  px-6
                  py-4
                  rounded-2xl
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