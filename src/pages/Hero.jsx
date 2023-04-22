import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SphereScene from "../components/Shpere";

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: center;

  justify-content: space-between;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <SphereScene />
      </Container>
    </Section>
  );
};
export default Hero;
