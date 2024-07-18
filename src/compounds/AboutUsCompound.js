import React from "react";
import styled from "styled-components";
import Navbar from "../components/AboutUs/Navbar";
import AboutUs from "../components/AboutUs/AboutUs";

function AboutUsCompound() {
  return (
    <Wrapper>
      <Navbar />
      <AboutUs />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`;

export default AboutUsCompound;