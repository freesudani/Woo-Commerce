import React from "react";
import styled from "styled-components";
import Features from "./components/Features";
import Hero from "./components/Hero";

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
    </AppSec>
  );
};

export default App;
