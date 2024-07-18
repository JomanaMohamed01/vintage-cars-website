import React from "react";
import styled from "styled-components";
import Navbar from "../components/ServicesPage/Navbar";
import Services from "../components/ServicesPage/Services";
import Footer from "../components/ServicesPage/Footer";

function ServicesPageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Services />
      <Footer />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`;

export default ServicesPageCompound;