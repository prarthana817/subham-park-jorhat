// src/App.jsx

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

function App() {
  return (
    <div className="overflow-hidden bg-[#f5f1ec]">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* STATS */}
      <StatsBar />

      {/* OVERVIEW */}
      <Overview />

      {/* AMENITIES */}
      <Amenities />

      {/* WALKTHROUGH */}
      <Walkthrough />

      {/* GALLERY */}
      <Gallery />

      {/* FLOOR PLANS */}
      <Planning />

      {/* LOCATION + CONTACT */}
      <Contact />

      {/* ABOUT */}
      <Project />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;