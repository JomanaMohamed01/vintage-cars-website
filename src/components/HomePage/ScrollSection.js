import React from "react";
import styled from "styled-components";

function ScrollSection() {
  return (
    <Wrapper>
      <MainWrapper>
        <Image src="/imgs/jade-and-andy-bg.jpg" />
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  /* position: relative; */
`;

export const MainWrapper = styled.div`
  /* background-image: url("/imgs/jade-and-andy-bg.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-attachment: fixed;
  height: 520px;
  border: 1px solid red; */
  /* position: fixed; */
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  /* position: fixed; */
  /* border: 1px solid transparent; */
`;

export default ScrollSection;