import React from "react";
import styled from "styled-components";

const Header = () => (
  <HeaderWrapper>
    <Nav>
      <Title>Global Trade Monitor</Title>
      <NavLinks>
        <a href="#introduction">Introduction</a>
        <a href="#analysis">Analysis</a>
        <a href="#market">Impact</a>
        <a href="#industries">Industries</a>
        <a href="#sources">Sources</a>
      </NavLinks>
    </Nav>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background: #2b2d42;
  color: white;
  margin-bottom: 40px;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const NavLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin-left: 30px;
    &:hover {
      color: #d90429;
    }
  }
`;

export default Header;
