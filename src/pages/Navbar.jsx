import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
`;
const ListItem = styled.li`
  padding: 8px;
  font-size: 16px;
  font-weight: 500;
  color: white;

  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, supported by most browsers */

  ${({ isLink }) =>
    isLink ? "cursor: pointer;" : "font-size: 22px; cursor:none;"}

  @media only screen and (max-width: 768px) {
    font-size: 12px;

    ${({ isLink }) =>
      isLink ? "cursor: pointer;" : "font-size: 22px; cursor:none;"}
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <List>
            <ListItem>SOME1HING</ListItem>
          </List>
        </Links>
        <List>
          <ListItem isLink={true}>
            <a
              target="_blank"
              href="https://www.github.com/SOME-1HING"
              style={{ color: "white", textDecoration: "none" }}
            >
              Github
            </a>
          </ListItem>
          <ListItem isLink={true}>
            <a
              target="_blank"
              href="https://www.t.me/TheSOME1HING"
              style={{ color: "white", textDecoration: "none" }}
            >
              Telegram
            </a>
          </ListItem>
        </List>
      </Container>
    </Section>
  );
};

export default Navbar;
