import React from "react";
import styled from "styled-components";
import Navbar from "../components/OurWork/Navbar";
import OurWork from "../components/OurWork/OurWork";

function OurWorkCompound() {
  return (
    <Wrapper>
      <Navbar />
      <OurWork />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`;

export default OurWorkCompound;