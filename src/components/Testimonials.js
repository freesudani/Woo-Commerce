import React from "react";
import styled from "styled-components";
import H2 from "../theme/H2.styled";
import { Colors } from "../theme/Theme";
import Body3 from "../theme/Body3.styled";
import CommaImage from "../images/”.png";
import Ellipse15 from "../images/Ellipse 15.png";
import Ellipse26 from "../images/Ellipse 26.png";
import Ellipse27 from "../images/Ellipse 27.png";
import Ellipse28 from "../images/Ellipse 28.png";
import Ellipse29 from "../images/Ellipse 29.png";
import Ellipse30 from "../images/Ellipse 30.png";
import bgGradient from "../images/Group 5.png";
import Group6 from "../images/Group 6.png";
import ArrowLeft from "../images/Union (2).png";
import ArrowRight from "../images/Union (3).png";
import Button from "../theme/Button.styled";

const TestiSec = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.8rem;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(236, 240, 253, 0) 0%,
    rgba(236, 240, 253, 0.53) 14.32%,
    #ecf0fd 45.83%,
    rgba(236, 240, 253, 0.43) 84.33%,
    rgba(236, 240, 253, 0) 100%
  );
`;

const Elli15 = styled.div`
  position: absolute;
  top: 22.3rem;
  left: 39.1rem;
`;

const Elli26 = styled.div`
  position: absolute;
  top: 78rem;
  left: 25.6rem;
`;

const Elli27 = styled.div`
  position: absolute;
  top: 43.8rem;
  left: 10.2rem;
`;

const Elli28 = styled.div`
  position: absolute;
  top: 46.6rem;
  left: 153.3rem;
`;

const Elli29 = styled.div`
  position: absolute;
  top: 20.9rem;
  left: 137.8rem;
`;

const Elli30 = styled.div`
  position: absolute;
  top: 84.4rem;
  left: 143.5rem;
`;

const Bggr = styled.div`
  position: absolute;
  top: 68.82rem;
  left: 47.38rem;
  width: 213.76px;
  height: 472.16px;
`;

const Gr6 = styled.div`
  position: absolute;
  top: 40.7rem;
  left: 98rem;
`;

const TestiHeader = styled.div`
  margin-top: 13.8rem;
  width: 52rem;
  text-align: center;
  color: ${Colors.Text.TextPrimary};
`;

const ParagSq = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.2rem;

  width: 73rem;
  height: 39.1rem;
  background-color: ${Colors.Text.TextWhite};
  box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 20px;
  background-image: url(${CommaImage});
  background-repeat: no-repeat;
  background-position-y: 2.8rem;
  background-position-x: center;
  z-index: 3;
`;

const ParagSq2 = styled.div`
  margin-top: -34rem;
  width: 67.8rem;
  height: 36.3rem;
  background-color: ${Colors.Text.TextWhite};
  box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 20px;
  z-index: 2;
`;

const ParagSq3 = styled.div`
  margin-top: -31rem;
  width: 61.8rem;
  height: 33.1rem;
  background-color: ${Colors.Text.TextWhite};
  border-radius: 20px;
  z-index: 1;
`;

const TestiParag = styled.div`
  text-align: center;
  margin-top: 5.6rem;
  width: 56.6rem;
  height: 19.8rem;
  color: ${Colors.Text.TextSecondary};
`;

const ButtongGroup = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 10rem;
  left: 112.4rem;
  top: 86.6rem;
`;

const Testimonials = () => {
  return (
    <TestiSec>
      <Elli15>
        <img src={Ellipse15} alt="El15" />
      </Elli15>
      <Elli26>
        <img src={Ellipse26} alt="El26" />
      </Elli26>
      <Elli27>
        <img src={Ellipse27} alt="El27" />
      </Elli27>
      <Elli28>
        <img src={Ellipse28} alt="El28" />
      </Elli28>
      <Elli29>
        <img src={Ellipse29} alt="El29" />
      </Elli29>
      <Elli30>
        <img src={Ellipse30} alt="El30" />
      </Elli30>
      <Bggr>
        <img src={bgGradient} alt="bggradiaent" />
      </Bggr>
      <Gr6>
        <img src={Group6} alt="Group6" />
      </Gr6>
      <TestiHeader>
        <H2>Trusted by Agencies & Store Owners</H2>
      </TestiHeader>
      <ParagSq>
        <TestiParag>
          <Body3>
            No other eCommerce platform allows people to start for free and grow
            their store as their business grows. More importantly, WooCommerce
            doesn't charge you a portion of your profits as your business grows!
          </Body3>
        </TestiParag>
      </ParagSq>
      <ParagSq2 />
      <ParagSq3 />
      <ButtongGroup>
        <Button>
          <img src={ArrowRight} alt="ARight" />
        </Button>
        <Button>
          <img src={ArrowLeft} alt="ALeft" />
        </Button>
      </ButtongGroup>
    </TestiSec>
  );
};

export default Testimonials;
