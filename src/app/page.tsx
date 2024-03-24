import Footer from "@/components/Footer";
import React from "react";
import Jumbotron from "./components/Jumbotron";
import IntroLastSection from "./components/IntroLastSection";
import InvestorSection from "./components/InvestorSection";
import TestiSection from "./components/TestiSection";
import IntroSection from "./components/IntroSection";

const Home: React.FC = () => {
  return (
    <>
      <Jumbotron />
      <IntroSection />
      <InvestorSection />
      <IntroLastSection />
      <TestiSection />
      <Footer />
    </>
  );
};

export default Home;
