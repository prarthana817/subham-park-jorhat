// src/App.jsx

import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Overview from "./components/Overview";
import Project from "./components/Project";
import Amenities from "./components/Amenities";
import Walkthrough from "./components/Walkthrough";
import Gallery from "./components/Gallery";
import Planning from "./components/Planning";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import PopupForm from "./components/PopupForm";
import StickyLeadForm from "./components/StickyLeadForm";

function App() {

  // POPUP STATE
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-x-hidden bg-[#f5f1ec]">

      {/* POPUP FORM */}
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

      {/* WALKTHROUGH */}
      <Walkthrough setOpen={setOpen} />

      {/* GALLERY */}
      <Gallery setOpen={setOpen} />

      {/* FLOOR PLANS */}
      <Planning setOpen={setOpen} />

      {/* LOCATION + CONTACT */}
      <Contact setOpen={setOpen} />

      {/* ABOUT */}
      <Project setOpen={setOpen} />

      {/* STICKY LEAD FORM */}
      <StickyLeadForm setOpen={setOpen} />

      {/* FOOTER */}
      <Footer />

      {/* MOBILE STICKY CTA */}
      <div
        className="
        fixed
        bottom-0
        left-0
        right-0

        z-50

        bg-[#1f1f1f]/95
        backdrop-blur-md

        p-3

        flex
        gap-3

        lg:hidden
        "
      >

        <button
          onClick={() => setOpen(true)}
          className="
          flex-1

          py-3

          bg-[#d79a74]
          hover:bg-[#b87452]

          text-white

          uppercase
          tracking-[0.15em]
          text-[11px]

          transition-all
          duration-300
          "
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 600,
          }}
        >
          Book Visit
        </button>

        <a
          href="tel:+919876543210"
          className="
          flex-1

          py-3

          bg-white

          text-black
          text-center

          uppercase
          tracking-[0.15em]
          text-[11px]

          transition-all
          duration-300
          "
          style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 600,
          }}
        >
          Call Now
        </a>

      </div>

    </div>
  );
}

export default App;