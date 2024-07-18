import React from "react";
import styled from "styled-components";
import Navbar from "../components/OurWork/Navbar";
import OurWork from "../components/OurWork/OurWork";
import Footer from "../components/OurWork/Footer";

function OurWorkCompound() {
  return (
    <Wrapper>
      <Navbar />
      <OurWork />
      <Footer />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`;

export default OurWorkCompound;