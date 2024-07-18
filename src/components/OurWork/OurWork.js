import React from "react";
import styled from "styled-components";

function OurWork() {
  return (
    <Wrapper>
      <MainWrapper>
        <Header>OUR WORK</Header>

        <Text>A collection of cars we've renovated with passion</Text>

        <ImagesWrapper>
          <Image src="/imgs/car-slide-1.jpg" />

          <Image src="/imgs/car-slide-2.jpg" />

          <Image src="/imgs/car-slide-3.jpg" />

          <Image src="/imgs/car-slide-4.jpg" />

          <Image src="/imgs/car-slide-5.jpg" />

          <Image src="/imgs/car-slide-6.jpg" />
        </ImagesWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div``;

export const MainWrapper = styled.div`
  margin-bottom: 100px;
`;

export const Header = styled.p`
  color: #2f2e2e;
  font-size: 34px;
  border-bottom: 3px solid #2f2e2e;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 29px;
  }
`;

export const Text = styled.p`
  color: #2f2e2e;
  font-size: 20px;
  text-align: center;

  @media screen and (max-width: 500px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 70px;
  width: 100%;

  @media screen and (max-width: 500px) {
    margin-top: 50px;
  }
`;

export const Image = styled.img`
  width: 417px;
  height: 319.5px;
  margin-top: -4px;

  @media screen and (max-width: 500px) {
    width: 300px;
    height: 225px;
  }
`;

export default OurWork;