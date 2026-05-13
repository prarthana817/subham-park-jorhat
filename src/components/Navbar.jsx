import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Developer", href: "#developer" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-5 lg:px-8">
        
        {/* Navbar Container */}
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#home" className="leading-tight">
            <h1 className="text-2xl font-bold text-slate-900">
              Subham Park
            </h1>
            <p className="text-sm text-green-600 font-medium">
              Jorhat
            </p>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 font-medium hover:text-green-600 transition duration-300"
              >
                {link.name}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-semibold transition duration-300 shadow-md"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-900"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-5 border-t border-slate-200 bg-white">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 font-medium hover:text-green-600 transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-semibold transition"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}