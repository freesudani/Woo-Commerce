import React from "react";
import styled from "styled-components";
import CTA from "./components/CTA";
import Develop from "./components/Develop";
import Features from "./components/Features";
import Hero from "./components/Hero";
import People from "./components/People";
import Testimonials from "./components/Testimonials";

const AppSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <AppSec>
      <Hero />
      <Features />
      <Develop />
      <Testimonials />
      <People />
      <CTA />
    </AppSec>
  );
};

export default App;
