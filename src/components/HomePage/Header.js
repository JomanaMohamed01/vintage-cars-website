import React from "react";
import styled from "styled-components";
import { Tools } from "@styled-icons/entypo/Tools";
import { Facebook } from "@styled-icons/simple-icons/Facebook";
import { Pinterest } from "@styled-icons/bootstrap/Pinterest";
import { InstagramWithCircle } from "@styled-icons/entypo-social/InstagramWithCircle";

function Header() {
  return (
    <Wrapper>
      <MainWrapper>
        <TextWrapper>
          <ToolsIcon />
          <BigHeader>JADE & ANDY</BigHeader>
          <SmallHeader>VINTAGE CAR SPECIALIST</SmallHeader>
        </TextWrapper>

        <SocialBarWrapper>
          <FacebookIcon />
          <PinterestIcon />
          <InstagramIcon />
        </SocialBarWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-image: url("/imgs/about-us-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 888px;
  padding-top: 130px;
  padding-bottom: 150px;

  @media screen and (max-width: 550px) {
    /* height: 431px; */
    padding-top: 50px;
    /* padding-bottom: 100px; */
  }
`;

export const MainWrapper = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* height: 600px; */
`;

export const ToolsIcon = styled(Tools)`
  color: #ffffff;
  width: 139px;
  height: 139px;
  border: 3px solid #ffffff;
  border-radius: 100px;
  padding: 20px;
  margin-bottom: -60px;

  @media screen and (max-width: 550px) {
    width: 110px;
    height: 110px;
    margin-bottom: -50px;
  }
`;

export const BigHeader = styled.p`
  color: #ffffff;
  font-size: 68px;
  margin-bottom: -20px;

  @media screen and (max-width: 550px) {
    font-size: 51px;
    margin-bottom: -20px;
  }
`;

export const SmallHeader = styled.p`
  color: #ffffff;
  font-size: 19px;
  letter-spacing: 2px;

  @media screen and (max-width: 550px) {
    font-size: 13px;
  }
`;

export const SocialBarWrapper = styled.div`
  /* border: 3px solid red; */
  width: 150px;
  display: flex;
  justify-content: space-between;
  margin-top: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const FacebookIcon = styled(Facebook)`
  color: #ffffff;
  width: 40px;
  height: 40px;
`;

export const PinterestIcon = styled(Pinterest)`
  color: #ffffff;
  width: 40px;
  height: 40px;
`;

export const InstagramIcon = styled(InstagramWithCircle)`
  color: #ffffff;
  width: 40px;
  height: 40px;
`;

export default Header;
