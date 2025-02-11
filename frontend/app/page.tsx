import React from "react";
import Home from "./home/page";
import About from "./about/page";
import Metrics from "./metrics/page";
import Skills from "./skills/page";
import ChallPage from "./challpage/page";
import Section from "./section/page";
import Testimonials from "./testimonials/page";
import Started from "./started/page";
import Career from "./career/page";
import Footer from "./footer/page";
const HomePage = () => {
  return (
    <div>
      <Home />
      <Metrics />
      <Skills />
      <ChallPage />
      <Section />
      <Testimonials />
      <Started />
      <Career />
      <Footer />
    </div>
  );
};

export default HomePage;
