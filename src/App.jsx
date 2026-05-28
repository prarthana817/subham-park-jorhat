// src/App.jsx

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Overview from "./components/Overview";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Planning from "./components/Planning";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Footer from "./components/Footer";

import PopupForm from "./components/PopupForm";
import StickyLeadForm from "./components/StickyLeadForm";
import Preloader from "./components/Preloader";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* PRELOADER */}
      <Preloader />

      <div className="overflow-x-hidden bg-[#f5f1ec]">
        
        {/* POPUP */}
        <PopupForm open={open} setOpen={setOpen} />

        {/* NAVBAR */}
        <Navbar setOpen={setOpen} />

        {/* HERO */}
        <Hero setOpen={setOpen} />

        {/* STATS */}
        <StatsBar />

        {/* OVERVIEW */}
        <Overview setOpen={setOpen} />

        {/* AMENITIES */}
        <Amenities setOpen={setOpen} />

        {/* GALLERY */}
        <Gallery setOpen={setOpen} />

        {/* PLANNING */}
        <Planning setOpen={setOpen} />

        {/* LOCATION */}
        <Location setOpen={setOpen} />

        {/* CONTACT */}
        <Contact setOpen={setOpen} />

        {/* PROJECT */}
        <Project setOpen={setOpen} />

        {/* STICKY FORM */}
        <StickyLeadForm setOpen={setOpen} />

        {/* FOOTER */}
        <Footer />

        {/* MOBILE CTA */}
        <div
          className="
          fixed
          bottom-0
          left-0
          right-0
          z-50
          bg-[#14234b]/95
          backdrop-blur-md
          px-3
          py-3
          flex
          gap-3
          lg:hidden
          "
        >
          <button
            onClick={() => setOpen(true)}
            className="
            flex-1
            h-[48px]
            rounded-full
            bg-[#d1a54d]
            hover:bg-[#be9339]
            text-[#111111]
            uppercase
            tracking-[0.14em]
            text-[10px]
            transition-all
            duration-300
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
          >
            Book Visit
          </button>

          <a
            href="tel:+919876543210"
            className="
            flex-1
            h-[48px]
            rounded-full
            border
            border-white/15
            bg-white/10
            text-white
            flex
            items-center
            justify-center
            uppercase
            tracking-[0.14em]
            text-[10px]
            transition-all
            duration-300
            "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
          >
            Call Now
          </a>
        </div>
      </div>
    </>
  );
}

export default App;