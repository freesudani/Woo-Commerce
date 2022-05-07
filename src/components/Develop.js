import React from "react";
import styled from "styled-components";
import Rectangle233 from "../images/Rectangle 233.png";
/* import Rectangle234 from "../images/Rectangle 234.png"; */
import Rectangle236 from "../images/Rectangle 236.png";
import Subtitle2 from "../theme/Subtitle2.styled";
import Body2 from "../theme/Body2.styled";
import Button from "../theme/Button.styled";

const DevelopSec = styled.div`
  margin-top: 10.3rem;
  width: 100%;
  background-color: #7854f7;
`;

const Dev1 = styled.div`
  display: flex;
  margin-left: 34.5rem;
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
