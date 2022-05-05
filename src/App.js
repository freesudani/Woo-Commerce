import React from "react";
import styled from "styled-components";
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
    </AppSec>
  );
};

export default App;
