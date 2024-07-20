import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { PersonCircle } from "@styled-icons/ionicons-solid/PersonCircle";
import { Menu } from "@styled-icons/feather/Menu";

function Navbar() {
  const history = useHistory();

  return (
    <Wrapper>
      <MainWrapper>
        <ItemsWrapper>
          <Item onClick={() => history.push("/")}>HOME</Item>
          <ItemOne onClick={() => history.push("/ServicesPageCompound")}>
            SERVICES
          </ItemOne>
          <Item onClick={() => history.push("/OurWorkCompound")}>OUR WORK</Item>
          <Item onClick={() => history.push("/AboutUsCompound")}>ABOUT US</Item>
          <Item onClick={() => history.push("/ContactCompound")}>CONTACT</Item>
          <Item onClick={() => history.push("/BookOnlineCompound")}>
            BOOK ONLINE
          </Item>
          <LoginWrapper>
            <ProfileIcon />
            <Item>Log In</Item>
          </LoginWrapper>
        </ItemsWrapper>

        <MenuIconWrapper>
          <MenuIcon />
        </MenuIconWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #2f2e2e;
`;

export const MainWrapper = styled.div`
  @media screen and (max-width: 660px) {
    height: 89px;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 900px;

  @media screen and (max-width: 1024px) {
    width: 800px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  @media screen and (max-width: 660px) {
    display: none;
  }
`;

export const ItemOne = styled.p`
  color: #b0aaa9;
  font-size: 15px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }
`;

export const Item = styled.p`
  color: #ffffff;
  font-size: 15px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 3px solid red; */
  width: 100px;
`;

export const ProfileIcon = styled(PersonCircle)`
  color: #ffffff;
  width: 35px;
  height: 35px;
`;

export const MenuIconWrapper = styled.div`
  display: none;

  @media screen and (max-width: 660px) {
    display: initial;
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;
    padding-top: 17px;
  }
`;

export const MenuIcon = styled(Menu)`
  color: #ffffff;
  width: 50px;
  height: 50px;
`;

export default Navbar;
