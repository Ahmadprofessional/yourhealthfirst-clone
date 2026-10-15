import type { Metadata } from "next";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";

  return {
    title: "YourHealthFirst Clinic | Harley Street, London — Health & Aesthetics",
    description:
      "Award-winning clinic at 2 Wimpole Street, London W1G 0EB. Specialising in aesthetic medicine, anti-wrinkle injections, dermal fillers, hair loss & skin rejuvenation.",
    alternates: {
      canonical: `${baseUrl}/${locale}`,
    },
  };
}

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
