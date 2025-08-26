import React from "react";
import styled from "styled-components";
import { Facebook } from "@styled-icons/fa-brands/Facebook";
import { Pinterest } from "@styled-icons/bootstrap/Pinterest";
import { InstagramWithCircle } from "@styled-icons/entypo-social/InstagramWithCircle";

function Footer() {
  return (
    <Wrapper>
      <MainWrapper>
        <IconsWrapper>
          <FacebookIcon />
          <PinterestIcon />
          <InstagramIcon />
        </IconsWrapper>

        <TextWrapper>
          <Authorisation>
            © 2035 by Jade & Andy. Powered and secured by <Link>Jomana A. Mohamed</Link>
          </Authorisation>
        </TextWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #2f2e2e;
  height: 162px;
`;

export const MainWrapper = styled.div``;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 114px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
`;

export const FacebookIcon = styled(Facebook)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const PinterestIcon = styled(Pinterest)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const InstagramIcon = styled(InstagramWithCircle)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Authorisation = styled.p`
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: context-menu;
  width: 100%;

  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
`;

export const Link = styled.p`
  text-decoration: underline;
  cursor: pointer;
  margin-left: 4px;
`;

export default Footer;
