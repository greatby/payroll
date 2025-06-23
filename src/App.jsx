import Footer from "./components/footer";
import CallToActionSection from "./components/hero";
import Navbar from "./components/navbar";
import SuiteCards from "./components/suiteCards";
import TestimonialAccordion from "./components/testimonialAccordian";
import VerticalCarousel from "./components/verticalCarousel";

export default function App() {
  return (
    <div className="bg-[#f5f5f5]">
      <Navbar/>
      <CallToActionSection/>
      <VerticalCarousel />
      <SuiteCards/>
      <TestimonialAccordion />
      <Footer/>
    </div>
  );
}
