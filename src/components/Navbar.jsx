import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import logo from "../assests/images/logo.png"; // <-- তোমার logo image

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
    <header className="fixed top-0 left-0 w-full z-50 px-3 lg:px-5 pt-3">
      <nav
        className="
        bg-[#5f7564]/95
        backdrop-blur-xl
        rounded-[28px]
        border border-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.15)]
        "
      >
        {/* NAVBAR */}
        <div className="max-w-[1700px] mx-auto px-6 lg:px-10">

          <div className="flex items-center justify-between h-[78px] lg:h-[92px]">

            {/* LOGO */}
            <a
              href="#home"
              className="flex items-center"
            >
              <img
                src={logo}
                alt="Subham Park"
                className="
                h-16
                lg:h-20
                w-auto
                object-contain
                "
              />
            </a>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-10">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                  text-white/95
                  uppercase
                  tracking-[2px]
                  text-[14px]
                  font-semibold
                  hover:text-[#ffd88c]
                  transition-all
                  duration-300
                  "
                >
                  {link.name}
                </a>
              ))}

            </div>

            {/* CTA BUTTON */}
            <div className="hidden lg:flex items-center">

              <a
                href="tel:+919999999999"
                className="
                inline-flex
                items-center
                gap-3
                bg-gradient-to-r
                from-[#d8aa45]
                to-[#c99733]
                hover:scale-105
                text-[#1f2a1f]
                px-8
                py-4
                rounded-[20px]
                font-bold
                uppercase
                tracking-[2px]
                transition-all
                duration-300
                shadow-lg
                "
              >
                Download Brochure ↗
              </a>

            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div className="lg:hidden pb-6 pt-2">

              <div className="flex flex-col gap-5">

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="
                    text-white/90
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
                  href="tel:+919999999999"
                  className="
                  mt-2
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-gradient-to-r
                  from-[#d8aa45]
                  to-[#c99733]
                  text-[#1f2a1f]
                  px-6
                  py-4
                  rounded-2xl
                  font-bold
                  uppercase
                  tracking-[2px]
                  "
                >
                  <Phone size={18} />
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