import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import FlowSection from "./sections/FlowSection";
import FeaturedProjectSection from "./sections/FeaturedProjectSection";
import AiProjectsSection from "./sections/AiProjectsSection";
import TechnicalHighlightsSection from "./sections/TechnicalHighlightsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FlowSection />
        <FeaturedProjectSection />
        <AiProjectsSection />
        <TechnicalHighlightsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
