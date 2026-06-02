import React from "react";
import { Link } from "react-router-dom";
import { Download, Home } from "lucide-react";
import logo from "../assests/images/logo_3.png";
import background from "../assests/images/gallery-1.jpg";
import brochurePdf from "../assests/Brochure SONARIGAON.pdf";

export default function ThankYou() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      
      {/* Background Image with stretch and bottom alignment */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: `url(${background})`,
          backgroundPosition: "bottom center", 
          backgroundSize: "100% 100%" 
        }}
      />

      {/* Main Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black/70" />

      {/* Top Left Logo */}
      <div className="absolute top-[42px] left-8 z-20">
        <div className="relative">
          <div className="absolute inset-0 bg-white blur-2xl opacity-20 rounded-full" />
          <img src={logo} alt="Logo" className="relative w-28 h-28 object-contain z-10" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center text-white">
        <h1 className="text-4xl md:text-6xl leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Thank You For <br />
          <span className="text-[#c9a14a] italic">Choosing Subham Park,jorhat</span>
        </h1>

        <p className="mt-6 text-white/90 text-lg max-w-xl mx-auto">
          Thank you for choosing Subham Park, Jorhat. We have successfully received your request and sincerely appreciate your interest in our project. Our sales team will contact you shortly.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={brochurePdf}
            download="Brochure_SONARIGAON.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#c9a14a] text-black font-semibold hover:bg-white transition-all duration-300"
          >
            <Download size={18} />
            Download Brochure
          </a>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}