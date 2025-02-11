import "./App.css";
import AboutSection from "./components/AboutSection";
import Achievements from "./components/Achievements";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-28 mx-auto px-12 py-4">
        <HeroSection />
        <Achievements/>
        <AboutSection />
        <ProjectSection/>
        <EmailSection/>
      </div>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
}

export default App;
