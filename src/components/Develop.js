import React from "react";
import styled from "styled-components";
import { Colors } from "../theme/Theme";
import Subtitle2 from "../theme/Subtitle2.styled";
import Body2 from "../theme/Body2.styled";
import Button from "../theme/Button.styled";
import W from "../images/w.png";
import Ellipse31 from "../images/Ellipse 31.png";
import Ellipse32 from "../images/Ellipse 32.png";
import Ellipse33 from "../images/Ellipse 33.png";
import Ellipse34 from "../images/Ellipse 34.png";
import Rectangle233 from "../images/Rectangle 233.png";
import Rectangle236 from "../images/Rectangle 236.png";
import Group7 from "../images/Group 7.png";
import Group8 from "../images/Group 8.png";

const DevelopSec = styled.div`
  margin-top: 10.3rem;
  position: relative;
  width: 100%;
  height: 130rem;
  background: #7854f7;
  z-index: -1;

  ::after {
    content: "";
    border-top-left-radius: 95% 100%;
    border-top-right-radius: 95% 100%;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #fff;
    height: 5%;
    z-index: -1;
  }

  ::before {
    content: "";
    border-bottom-left-radius: 95% 100%;
    border-bottom-right-radius: 95% 100%;
    position: absolute;
    top: 0;
    width: 100%;
    background: #fff;
    height: 5%;
    z-index: -1;
  }
`;

const Wimage = styled.div`
  position: absolute;
  right: 0;
  z-index: -1;
`;

const Ellipse31Image = styled.div`
  position: absolute;
  top: 23.7rem;
  left: 17.2rem;
  z-index: -1;
`;

const Ellipse32Image = styled.div`
  position: absolute;
  top: 21.7rem;
  left: 12.7rem;
  z-index: -1;
`;

const Ellipse33Image = styled.div`
  position: absolute;
  top: 68.4rem;
  left: 123.6rem;
  z-index: -1;
`;

const Ellipse34Image = styled.div`
  position: absolute;
  top: 70.6rem;
  left: 144.1rem;
  z-index: -1;
`;

const Groupe7Image = styled.div`
  position: absolute;
  top: 37.6rem;
  left: 25rem;
  z-index: -1;
`;

const Groupe8Image = styled.div`
  position: absolute;
  top: 90.2rem;
  left: 128.5rem;
  z-index: -1;
`;

const Dev1 = styled.div`
  display: flex;
  margin-left: 34.5rem;
  color: ${Colors.Text.TextWhite};
`;

const DevImage1 = styled.div``;

const DevText1 = styled.div`
  margin-left: 7rem;
  margin-top: 16rem;
`;

const DevHeader1 = styled.div``;

const DevParag1 = styled.div`
  margin-top: 1.3rem;
  width: 48rem;
`;

const DevBt1 = styled.div`
  margin-top: 3.9rem;
`;

const Dev2 = styled.div`
  display: flex;
  margin-top: 5.5rem;
  color: ${Colors.Text.TextWhite};
`;

const DevImage2 = styled.div``;

const DevText2 = styled.div`
  margin-left: 62rem;
  margin-top: 6.2rem;
`;

const DevHeader2 = styled.div``;

const DevParag2 = styled.div`
  margin-top: 1.3rem;
  width: 48rem;
`;

const DevBt2 = styled.div`
  margin-top: 3.9rem;
`;

const Develop = () => {
  return (
    <DevelopSec>
      <Wimage>
        <img src={W} alt="W" />
      </Wimage>
      <Ellipse31Image>
        <img src={Ellipse31} alt="Elli31" />
      </Ellipse31Image>
      <Ellipse32Image>
        <img src={Ellipse32} alt="Elli32" />
      </Ellipse32Image>
      <Ellipse33Image>
        <img src={Ellipse33} alt="Elli33" />
      </Ellipse33Image>
      <Ellipse34Image>
        <img src={Ellipse34} alt="Elli34" />
      </Ellipse34Image>
      <Groupe7Image>
        <img src={Group7} alt="Group7" />
      </Groupe7Image>
      <Groupe8Image>
        <img src={Group8} alt="Group8" />
      </Groupe8Image>
      <Dev1>
        <DevImage1>
          <img src={Rectangle236} alt="Rec236" />
        </DevImage1>
        <DevText1>
          <DevHeader1>
            <Subtitle2>
              Develop
              <br /> Without Limits
            </Subtitle2>
          </DevHeader1>
          <DevParag1>
            <Body2>
              WooCommerce is developer friendly, too. Built with a REST API,
              WooCommerce is scalable and can integrate with virtually any
              service. Design a complex store from scratch, extend a store for a
              client, or simply add a single product to a WordPress site—your
              store, your way.
            </Body2>
          </DevParag1>
          <DevBt1>
            <Button var="containedSecondary" size="md">
              Read the Documentation
            </Button>
          </DevBt1>
        </DevText1>
      </Dev1>
      <Dev2>
        <DevText2>
          <DevHeader2>
            <Subtitle2>
              Know our
              <br /> Global Community
            </Subtitle2>
          </DevHeader2>
          <DevParag2>
            <Body2>
              WooCommerce is one of the fastest-growing eCommerce communities.
              We’re proud that the helpfulness of the community and a wealth of
              online resources are frequently cited as reasons our users love
              it. There are 80+ meetups worldwide!
            </Body2>
          </DevParag2>
          <DevBt2>
            <Button var="containedSecondary" size="md">
              Read the Documentation
            </Button>
          </DevBt2>
        </DevText2>
        <DevImage2>
          <img src={Rectangle233} alt="Rec233" />
        </DevImage2>
      </Dev2>
    </DevelopSec>
  );
};

export default Develop;
