import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Analytics from "@/components/sections/Analytics";
import Success from "@/components/sections/Success";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ContactUs from "@/components/sections/Contact";



import Integrations from "@/components/sections/Partners";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Features/>
      <Integrations/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </main>
  );
}