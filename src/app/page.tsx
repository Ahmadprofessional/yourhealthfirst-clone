import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import PromiseCards from "@/components/PromiseCards";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FaqAccordion from "@/components/FaqAccordion";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Testimonials />
      <AboutUs />
      <PromiseCards />
      <Services />
      <WhyChooseUs />
      <FaqAccordion />
      <BookingSection />
      <Footer />
    </div>
  );
}
