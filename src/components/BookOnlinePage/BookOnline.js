import React from "react";
import styled from "styled-components";

function BookOnline() {
  return (
    <Wrapper>
      <MainWrapper>
        <Header>BOOK ONLINE</Header>

        <StyleRideWrapper>
          <ImageWrapper>
            <Image src="/imgs/book-online-car.jpg" />
          </ImageWrapper>

          <TextWrapper>
            <HeaderTwo>Style My Ride</HeaderTwo>
            <Link>Read More</Link>
            <Timing>1 hr</Timing>
            <Cost>50$</Cost>
            <BookingBtn>BOOK NOW</BookingBtn>
          </TextWrapper>
        </StyleRideWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div``;

export const MainWrapper = styled.div``;

export const Header = styled.p`
  color: #2f2e2e;
  font-size: 34px;
  border-bottom: 3px solid #2f2e2e;
  width: 220px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 40px;
  padding-bottom: 30px;
`;

export const StyleRideWrapper = styled.div`
  border: 1px solid #cccccc;
  width: 940px;
  height: 325px;
  margin-left: auto;
  margin-right: auto;
  display: flex;

  @media screen and (max-width: 1024px) {
    width: 650px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 320px;
    height: auto;
  }
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  width: 470px;
  height: 325px;

  @media screen and (max-width: 1024px) {
    width: 320px;
  }
`;

export const TextWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HeaderTwo = styled.p`
  color: #2f2e2e;
  font-size: 24px;
`;

export const Link = styled.p`
  color: #2f2e2e;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  margin-top: -5px;
`;

export const Timing = styled.p`
  color: #2f2e2e;
  font-size: 16px;
`;

export const Cost = styled.p`
  color: #2f2e2e;
  font-size: 16px;
`;

export const BookingBtn = styled.p`
  color: #ffffff;
  background-color: #2f2e2e;
  padding: 11px 16px;
`;

export default BookOnline;
