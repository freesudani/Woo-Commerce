import React from "react";
import styled from "styled-components";
import { Colors } from "../theme/Theme";
import Guarantee from "./Guarantee";
import Safe from "./Safe";
import Support from "./Support";
import Body4 from "../theme/Body4.styled";
import Body5 from "../theme/Body5.styled";
import FooterLogo from "./FooterLogo";
import { Data } from "../data/FooterData";
import Subtitle4 from "../theme/Subtitle4.styled";
import Body6 from "../theme/Body6.styled";
import FaceBook from "./Facebook";
import Twitter from "./Twitter";
import Spotify from "./Spotify";
import Instagram from "./Instagram";
import Automattic from "../images/image 25.png";

const FooterSec = styled.div`
  width: 100%;
`;

const FooterTop = styled.div`
  width: 100%;
  height: 74.1rem;
  background: ${Colors.Brand.PrimaryMain};
`;

const Offers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 122.6rem;
  padding-top: 4.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const Group14 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Group15 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Group16 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GroupText = styled.div`
  color: ${Colors.Text.TextWhite};
  margin-left: 1.5rem;
`;

const Logo = styled.div`
  margin-top: 13.5rem;
  display: flex;
  justify-content: center;
`;

const Divider = styled.div`
  width: 148rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5.6rem;
  border: 1px solid #9a7dff;
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  width: 148rem;
  height: 6.8rem;
  background: ${Colors.Text.TextWhite};
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 11rem;
  width: 110.6rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3.4rem;
  color: ${Colors.Text.TextWhite};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnHeader = styled.div`
  text-transform: uppercase;
`;

const ColumnBranch = styled.div`
  margin-top: -2.3rem;
  cursor: pointer;
`;

const SocialMedia = styled.div`
  width: 21rem;
  padding-top: 2.6rem;
  display: flex;
  justify-content: space-between;
`;

const SocialBt = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const CopyRight = styled.div`
  padding-top: 2.6rem;
  color: ${Colors.Text.TextPrimary};
`;

const AutoImage = styled.div`
  padding-top: 2.6rem;
`;

const Footer = () => {
  return (
    <FooterSec>
      <FooterTop>
        <Offers>
          <Group14>
            <Guarantee />
            <GroupText>
              <Body5>
                30 day{" "}
                <span style={{ fontWeight: "700" }}>money back guarantee</span>
              </Body5>
            </GroupText>
          </Group14>
          <Group15>
            <Support />
            <GroupText>
              <Body4>
                Support{" "}
                <span style={{ fontWeight: "400" }}>
                  teams across the world
                </span>
              </Body4>
            </GroupText>
          </Group15>
          <Group16>
            <Safe />
            <GroupText>
              <Body4>
                Safe & Secure{" "}
                <span style={{ fontWeight: "400" }}>online payment</span>
              </Body4>
            </GroupText>
          </Group16>
        </Offers>
        <Logo>
          <FooterLogo />
        </Logo>
        <Divider />
        <Columns>
          {Data.map((item, i) => {
            return (
              <Column key={i}>
                <ColumnHeader>
                  <Subtitle4>{item.title}</Subtitle4>
                </ColumnHeader>
                {item.Links.map((link, i) => {
                  return (
                    <ColumnBranch key={i}>
                      <Body6>{link}</Body6>
                    </ColumnBranch>
                  );
                })}
              </Column>
            );
          })}
        </Columns>
      </FooterTop>
      <FooterBottom>
        <SocialMedia>
          <SocialBt>
            <Twitter />
          </SocialBt>
          <SocialBt>
            <FaceBook />
          </SocialBt>
          <SocialBt>
            <Spotify />
          </SocialBt>
          <SocialBt>
            <Instagram />
          </SocialBt>
        </SocialMedia>
        <CopyRight>
          <Body6>
            COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS PRIVACY POLICY
          </Body6>
        </CopyRight>
        <AutoImage>
          <img src={Automattic} alt="Automattic" />
        </AutoImage>
      </FooterBottom>
    </FooterSec>
  );
};

export default Footer;
