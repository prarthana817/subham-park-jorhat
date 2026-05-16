import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import ProjectOverview from "./components/ProjectOverview";
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

      {/* PROJECT OVERVIEW */}
      <ProjectOverview />

      {/* AMENITIES */}
      <Amenities />

      {/* WALKTHROUGH */}
      <Walkthrough />

      {/* GALLERY */}
      <Gallery />

      {/* FLOOR PLAN */}
      <Planning />

      {/* LOCATION & CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;