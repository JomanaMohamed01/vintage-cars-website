import React from "react";
import styled from "styled-components";
import Navbar from "../components/ContactPage/Navbar";
import Contact from "../components/ContactPage/Contact";
import Footer from "../components/ContactPage/Footer";

function ContactCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Contact />
      <Footer />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`;

export default ContactCompound;