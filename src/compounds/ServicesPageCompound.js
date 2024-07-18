import React from "react";
import styled from "styled-components";
import Navbar from "../components/ServicesPage/Navbar";
import Services from "../components/ServicesPage/Services";

function ServicesPageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Services />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`;

export default ServicesPageCompound;