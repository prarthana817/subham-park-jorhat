import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import AboutUs from "./components/AboutUs";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Planning from "./components/Planning";
import ProjectOverview from "./components/ProjectOverview";
import Walkthrough from "./components/Walkthrough";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden bg-[#f5f1ec]">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* STATS */}
      <StatsBar />

      {/* ABOUT */}
      <AboutUs />

      {/* AMENITIES */}
      <Amenities />

      {/* GALLERY */}
      <Gallery />

      {/* MASTER PLAN */}
      <Planning />

      {/* PROJECT OVERVIEW */}
      <ProjectOverview />

      <Walkthrough />

      {/* CONTACT */}
      <ContactForm />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;