import React from "react";
import styled from "styled-components";
import H2 from "../theme/H2.styled";
import Body1 from "../theme/Body1.styled";
import PeopleImage from "../images/image 24.png";
import Rectangle235 from "../images/Rectangle 235.png";
import Ellipse34 from "../images/Ellipse 34.png";
import Ellipse36 from "../images/Ellipse 36.png";
import Ellipse32 from "../images/Ellipse 32.png";
import Group13 from "../images/Group 13.png";
import Group5 from "../images/Group 5.png";

const PeopleSec = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const PeopleHeader = styled.div`
  margin-top: 30rem;
`;

const PeopleParag = styled.div`
  margin-top: 1.1rem;
  width: 66.1rem;
  text-align: center;
`;

const PeopleImg = styled.div``;

const Rect235 = styled.div`
  position: absolute;
  top: 65rem;
  z-index: -1;
`;

const Elli36 = styled.div`
  position: absolute;
  left: 10rem;
  top: 65rem;
`;

const Elli32 = styled.div`
  position: absolute;
  left: 19.4rem;
  top: 75rem;
`;

const Elli34 = styled.div`
  position: absolute;
  left: 161.4rem;
  top: 60rem;
`;

const Gr13 = styled.div`
  position: absolute;
  left: 8.3rem;
  top: 82rem;
  z-index: -1;
`;

const Gr5 = styled.div`
  position: absolute;
  left: 130.38rem;
  top: 70rem;
  z-index: -1;
`;

const People = () => {
  return (
    <PeopleSec>
      <PeopleHeader>
        <H2>Supported by real people</H2>
      </PeopleHeader>
      <PeopleParag>
        <Body1>
          Our team of Happiness Engineers works remotely from 58 countries
          providing customer support across multiple time zones.
        </Body1>
      </PeopleParag>
      <PeopleImg>
        <img src={PeopleImage} alt="people" />
      </PeopleImg>
      <Elli36>
        <img src={Ellipse36} alt="Ellipse36" style={{ width: "6.1rem" }} />
      </Elli36>
      <Elli32>
        <img src={Ellipse32} alt="Ellipse32" style={{ width: "3.6rem" }} />
      </Elli32>
      <Elli34>
        <img src={Ellipse34} alt="Ellipse34" style={{ width: "4.3rem" }} />
      </Elli34>
      <Gr13>
        <img src={Group13} alt="Group13" />
      </Gr13>
      <Gr5>
        <img src={Group5} alt="Group5" />
      </Gr5>

      <Rect235>
        <img src={Rectangle235} alt="Rectangle235" />
      </Rect235>
    </PeopleSec>
  );
};

export default People;
