import React from "react";
import styled from "styled-components";
import H2 from "../theme/H2.styled";
import Subtitle1 from "../theme/Subtitle1.styled";
import Body2 from "../theme/Body2.styled";
import { Colors } from "../theme/Theme";
import Button from "../theme/Button.styled";
import BoxImage1 from "../images/Rectangle 223.png";
import BoxImage2 from "../images/Rectangle 224.png";
import BoxImage3 from "../images/Rectangle 225.png";
import Image16 from "../images/image 16.png";
import AppleImage from "../images/kisspng-apple-pay-google-pay-apple-wallet-payment-5b074a74632137 1.png";
import Image17 from "../images/image 17.png";
import Image18 from "../images/image 18.png";
import Image19 from "../images/image 19.png";
import Image20 from "../images/image 20.png";
import Image22 from "../images/image 22.png";
import Image226 from "../images/Rectangle 226.png";
import Image227 from "../images/Rectangle 227.png";
import Image228 from "../images/Rectangle 228.png";

const FeaturesSec = styled.div``;

const FeatursTitle = styled.div`
  height: 14rem;
  width: 45.7rem;
  margin-left: auto;
  margin-right: auto;
  color: ${Colors.Text.TextPrimary};
  text-align: center;
`;

const FeaturesGroups = styled.div`
  display: flex;
  margin-top: 8.1rem;
`;

const FeaturesBox = styled.div`
  position: relative;
  width: 43.1rem;
`;

const BoxImage = styled.div``;

const BoxHeader = styled.div`
  margin-top: -2rem;
  margin-left: 4rem;
  color: ${Colors.Text.TextPrimary};
`;

const BoxParag = styled.div`
  margin-top: 0.5rem;
  margin-left: 4rem;
  max-width: 40rem;
  color: ${Colors.Text.TextSecondary};
`;

const BoxLink = styled.div`
  margin-top: 2.5rem;
  margin-left: 4rem;
`;

const Image16Sec = styled.div`
  position: absolute;
  top: 5rem;
  right: 29rem;
`;

const AppleSec = styled.div`
  position: absolute;
  top: 3.3rem;
  right: 42.3rem;
`;

const Image17Sec = styled.div`
  position: absolute;
  top: -4rem;
  right: 19rem;
`;

const Image18Sec = styled.div`
  position: absolute;
  top: 1rem;
  right: 0.2rem;
`;

const Image19Sec = styled.div`
  position: absolute;
  top: 8rem;
  right: 19rem;
`;

const Image20Sec = styled.div`
  position: absolute;
  top: 20rem;
  right: 11rem;
`;

const Image22Sec = styled.div`
  position: absolute;
  top: 10rem;
  right: 5rem;
`;

const Image226Sec = styled.div`
  position: absolute;
  top: 9rem;
  right: -10.5rem;
`;

const Image227Sec = styled.div`
  position: absolute;
  top: -6rem;
  right: 17rem;
`;

const Image228Sec = styled.div`
  position: absolute;
  top: -13rem;
  right: 0.8rem;
`;

const Features = () => {
  return (
    <FeaturesSec>
      <FeatursTitle>
        <H2>Your eCommerce made simple</H2>
      </FeatursTitle>
      <FeaturesGroups>
        <FeaturesBox>
          <BoxImage>
            <img
              src={BoxImage1}
              alt="Image1"
              style={{ maxWidth: "45rem", height: "100%" }}
            />
          </BoxImage>
          <BoxHeader>
            <Subtitle1>All You Need to Start</Subtitle1>
          </BoxHeader>
          <BoxParag>
            <Body2>
              Add WooCommerce plugin to any WordPress site and set up a new
              store in minutes.
            </Body2>
          </BoxParag>
          <BoxLink>
            <Button style={{ color: `${Colors.Text.TextBlue}` }}>
              Ecommerce for Wordpress ›
            </Button>
          </BoxLink>
          <Image16Sec>
            <img
              src={Image16}
              alt="image16"
              style={{ maxWidth: "26.2rem", height: "100%" }}
            />
          </Image16Sec>
          <AppleSec>
            <img src={AppleImage} alt="Apple" />
          </AppleSec>
        </FeaturesBox>
        <FeaturesBox style={{ margin: "6rem 7rem" }}>
          <BoxImage>
            <img
              src={BoxImage2}
              alt="Image2"
              style={{
                maxWidth: "45rem",
                height: "100%",
              }}
            />
          </BoxImage>
          <BoxHeader>
            <Subtitle1>Customize and Extend</Subtitle1>
          </BoxHeader>
          <BoxParag>
            <Body2>
              From subscriptions to gym classes to luxury cars, WooCommerce is
              fully customizable.
            </Body2>
          </BoxParag>
          <BoxLink>
            <Button style={{ color: `${Colors.Text.TextBlue}` }}>
              Browse Extensions ›
            </Button>
          </BoxLink>
          <Image17Sec>
            <img src={Image17} alt="Image17" />
          </Image17Sec>
          <Image18Sec>
            <img src={Image18} alt="Image18" />
          </Image18Sec>
          <Image19Sec>
            <img src={Image19} alt="Image19" />
          </Image19Sec>
          <Image20Sec>
            <img src={Image20} alt="Image20" />
          </Image20Sec>
          <Image22Sec>
            <img src={Image22} alt="Image22" />
          </Image22Sec>
        </FeaturesBox>
        <FeaturesBox style={{ marginTop: "10rem" }}>
          <BoxImage>
            <img
              src={BoxImage3}
              alt="Image3"
              style={{ maxWidth: "45rem", height: "100%" }}
            />
          </BoxImage>
          <BoxHeader>
            <Subtitle1>Active Community</Subtitle1>
          </BoxHeader>
          <BoxParag>
            <Body2>
              WooCommerce is one of the fastest-growing eCommerce communities.
            </Body2>
          </BoxParag>
          <BoxLink>
            <Button style={{ color: `${Colors.Text.TextBlue}` }}>
              Check our Forums ›
            </Button>
          </BoxLink>
          <Image226Sec>
            <img src={Image226} alt="Image226" />
          </Image226Sec>
          <Image227Sec>
            <img src={Image227} alt="Image227" />
          </Image227Sec>
          <Image228Sec>
            <img src={Image228} alt="Image228" />
          </Image228Sec>
        </FeaturesBox>
      </FeaturesGroups>
    </FeaturesSec>
  );
};

export default Features;
