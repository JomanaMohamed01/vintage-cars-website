import React from "react";
import styled from "styled-components";
import Navbar from "../components/BookOnlinePage/Navbar";
import BookOnline from "../components/BookOnlinePage/BookOnline";

function BookOnlineCompound() {
  return (
    <Wrapper>
      <Navbar />
      <BookOnline />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`;

export default BookOnlineCompound;