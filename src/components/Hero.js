import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Colors } from "../theme/Theme";
import H1 from "../theme/H1.styled";
import Body1 from "../theme/Body1.styled";
import Button from "../theme/Button.styled";
import Lead2 from "../theme/Lead2.styled";
import FeatureImg from "../images/featured-image.png";
import VectorImg from "../images/Vector.png";

const HeroSec = styled.div`
  width: 100%;
  background: url(${VectorImg}),
    linear-gradient(
      180deg,
      #e5efff 0%,
      rgba(229, 239, 255, 0.262661) 83.7%,
      rgba(229, 239, 255, 0) 100%
    );
  background-repeat: no-repeat, no-repeat;
  background-position: top right, right;
`;

const HeroBt = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeroText = styled.div``;

const HeroFeature = styled.div`
  height: 82.9rem;
  width: 102.7rem;
  margin-top: 10rem;
  margin-left: 4.3rem;
  overflow: hidden;
`;

const HeroHeader = styled.div`
  height: 28.5rem;
  width: 81.8rem;
  margin-left: 22rem;
  margin-top: 18.6rem;
  color: ${Colors.Text.TextPrimary};
`;

const HeroParag = styled.div`
  height: 5rem;
  width: 71.6rem;
  margin-left: 22rem;
  margin-top: 2.9rem;
  color: ${Colors.Text.TextSecondary};
`;

const HeroButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 47.8rem;
  margin-top: 3.1rem;
  margin-left: 22rem;

  span {
    ${Lead2};
    color: ${Colors.Text.TextBlue};
  }
`;

const Hero = () => {
  return (
    <HeroSec>
      <Navbar />
      <HeroBt>
        <HeroText>
          <HeroHeader>
            <H1>Building exactly the eCommerce website you want.</H1>
          </HeroHeader>
          <HeroParag>
            <Body1>
              WooCommerce is a customizable, open-source eCommerce platform
              built on WordPress. Get started quickly and make your way.
            </Body1>
          </HeroParag>
          <HeroButtons>
            <Button var="containedPrimary" size="lg">
              Start a New Store
            </Button>
            <Button
              style={{
                color: `${Colors.Text.TextSecondary}`,
              }}
            >
              or <span>Customize & Extend ›</span>
            </Button>
          </HeroButtons>
        </HeroText>
        <HeroFeature>
          <img
            src={FeatureImg}
            alt="feature"
            style={{ width: "102.8rem", height: "82.9rem" }}
          />
        </HeroFeature>
      </HeroBt>
    </HeroSec>
  );
};

export default Hero;
