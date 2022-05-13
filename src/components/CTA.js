import React from "react";
import styled from "styled-components";
import { Colors } from "../theme/Theme";
import Subtitle3 from "../theme/Subtitle3.styled";
import Button from "../theme/Button.styled";
import Ellipse35 from "../images/Ellipse 35.png";

const CTASec = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  background-color: #5f37ef;
  height: 26.1rem;
  width: 100%;
  margin-top: -0.2rem;
  position: relative;
`;

const CTAParag = styled.div`
  width: 85.5rem;
  height: 10.5rem;
  color: ${Colors.Text.TextWhite};
  margin-left: 47rem;
`;
const CTABt = styled.div`
  margin-left: 6.7rem;
`;

const Elli35 = styled.div`
  position: absolute;
  left: 168.7rem;
  top: 19.4rem;
`;

const CTA = () => {
  return (
    <CTASec>
      <CTAParag>
        <Subtitle3>
          WooCommerce - the most customizable eCommerce platform for building
          your online business.
        </Subtitle3>
      </CTAParag>
      <CTABt>
        <Button size="notsm" var="outlined">
          GET STARTED
        </Button>
      </CTABt>
      <Elli35>
        <img src={Ellipse35} alt="Ellipse35" style={{ width: "8.9rem" }} />
      </Elli35>
    </CTASec>
  );
};

export default CTA;
