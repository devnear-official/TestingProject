import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { LogoStrip, KeyFeatures, WhyStats, WhyGrid, Glance, Brochure, Integrations, Reliability, Clients, FinalCta, AppDownload } from "@/components/Sections";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><LogoStrip /><KeyFeatures /><WhyStats /><Testimonials /><WhyGrid /><Glance />
        <Brochure /><Integrations /><Reliability /><Clients /><Pricing /><Faq /><FinalCta /><AppDownload />
      </main>
      <Footer />
    </>
  );
}
