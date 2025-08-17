import ClientsTypeSection from "@/components/ClientsTypeSection";
import Hero from "../components/Hero";
import About from "./about/page";
import Benefits from "./benefits/page";
import Testimonial from "./testimonial/page";
import ClientsResultsSection from "@/components/ClientsResultsSection";
import ClientsOfferSection from "@/components/ClientsOfferSection";
import ClientsSafetySection from "@/components/ClientsSafetySection";
import Contact from "./contact/page";
import ClientsQuestionsSection from "@/components/ClientsQuestionsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <Testimonial />
      <ClientsTypeSection />
      <ClientsResultsSection />
      <ClientsOfferSection />
      <ClientsSafetySection />
      <Contact />
      <ClientsQuestionsSection />
    </>
  );
};

export default Home;
