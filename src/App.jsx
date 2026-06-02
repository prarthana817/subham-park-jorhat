import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import ThankYou from "./components/thankyou";

import PopupForm from "./components/PopupForm";
import StickyLeadForm from "./components/StickyLeadForm";
import Preloader from "./components/Preloader";

function App() {
  const [open, setOpen] = useState(false);
  const [galleryPopupOpen, setGalleryPopupOpen] = useState(false);
  const [hideMobileCTA, setHideMobileCTA] = useState(false);

  useEffect(() => {
    let observer = null;
    let retryTimer = null;

    const initObserver = () => {
      const footer = document.getElementById("footer");
      if (!footer) {
        retryTimer = window.setTimeout(initObserver, 100);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          setHideMobileCTA(entry.isIntersecting);
        },
        {
          root: null,
          threshold: 0,
        }
      );

      observer.observe(footer);
    };

    initObserver();

    return () => {
      if (observer) observer.disconnect();
      if (retryTimer) window.clearTimeout(retryTimer);
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* Main Landing Page Route */}
        <Route
          path="/"
          element={
            <>
              <Preloader />
              <div className="overflow-x-hidden bg-[#f5f1ec]">
                <PopupForm open={open} setOpen={setOpen} />
                <Navbar setOpen={setOpen} galleryPopupOpen={galleryPopupOpen} />
                <Hero setOpen={setOpen} />
                <StatsBar />
                <Overview setOpen={setOpen} />
                <Amenities setOpen={setOpen} />
                <Gallery setOpen={setOpen} setGalleryPopupOpen={setGalleryPopupOpen} />
                <Planning setOpen={setOpen} />
                <Location setOpen={setOpen} />
                <Contact setOpen={setOpen} />
                <Project setOpen={setOpen} galleryPopupOpen={galleryPopupOpen} />
                <StickyLeadForm setOpen={setOpen} galleryPopupOpen={galleryPopupOpen} />
                <Footer />

                {/* MOBILE CTA */}
{!galleryPopupOpen && (
  <div
    className={`fixed bottom-0 left-0 right-0 z-50 bg-[#14234b]/95 backdrop-blur-md px-3 py-3 flex gap-3 lg:hidden transition-all duration-500 ${
      hideMobileCTA
        ? "opacity-0 invisible pointer-events-none translate-y-4"
        : "opacity-100 visible translate-y-0"
    }`}
  >
    <button
      onClick={() => setOpen(true)}
      className="flex-1 h-[48px] rounded-full bg-[#d1a54d] hover:bg-[#be9339] text-[#111111] uppercase tracking-[0.14em] text-[10px] transition-all duration-300"
      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
    >
      Book Visit
    </button>

    <a
      href="tel:+919876543210"
      className="flex-1 h-[48px] rounded-full border border-white/15 bg-white/10 text-white flex items-center justify-center uppercase tracking-[0.14em] text-[10px] transition-all duration-300"
      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
    >
      Call Now
    </a>
  </div>
)}              </div>
            </>
          }
        />

        <Route
          path="/thank-you"
          element={<ThankYou />}
        />
      </Routes>
    </Router>
  );
}

export default App;