import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import AboutUs from "./components/AboutUs";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import ProjectLocation from "./components/ProjectLocation";
import Footer from "./components/Footer";
import Planning from "./components/Planning";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* PREMIUM STATS SECTION */}
      <StatsBar />

      <AboutUs />

      <Amenities />

      <Gallery />

      <Planning />

      <ContactForm />

      <ProjectLocation />

      <Footer />
    </>
  );
}

export default App;