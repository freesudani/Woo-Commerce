import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import Button from "../theme/Button.styled";

const NavSec = styled.div`
  height: 4.7rem;
  max-width: 181rem;
  margin-top: 3.7rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.div``;

const Navigation = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 6rem;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 3.8rem;

  &:not(:first-child) {
    margin-left: 0;
  }
`;

const LogIn = styled.div`
  margin-left: 60rem;
`;

const GetStarted = styled.div`
  margin-left: 3.8rem;
`;
const SearchIcon = styled.div`
  margin-left: 3rem;
`;

const Navbar = () => {
  return (
    <NavSec>
      <LogoIcon>
        <Logo />
      </LogoIcon>
      <Navigation>
        <NavItem>
          <Button size="sm">Sell</Button>
        </NavItem>
        <NavItem>
          <Button size="sm">Marketplace</Button>
        </NavItem>
        <NavItem>
          <Button size="sm">Sell</Button>
        </NavItem>
        <NavItem>
          <Button size="sm">Develop</Button>
        </NavItem>
        <NavItem>
          <Button size="sm">Resources</Button>
        </NavItem>
      </Navigation>
      <LogIn>
        <Button size="sm">Log In</Button>
      </LogIn>
      <GetStarted>
        <Button size="sm" var="containedPrimary">
          Get Started
        </Button>
      </GetStarted>
      <SearchIcon>
        <Button>
          <Search />
        </Button>
      </SearchIcon>
    </NavSec>
  );
};

export default Navbar;
