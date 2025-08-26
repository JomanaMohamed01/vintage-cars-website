import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { PersonCircle } from "@styled-icons/ionicons-solid/PersonCircle";
import { Menu } from "@styled-icons/feather/Menu";
import { useState } from "react";
import { Close } from "@styled-icons/evaicons-solid/Close";

function Navbar() {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(true);
    setTimeout(() => setMenuOpen(true), 10); // allow render before animating
  };
  const handleClose = () => {
    setMenuOpen(false);
    setTimeout(() => setMenuVisible(false), 300); // match transition duration
  };
  const handleMenuItemClick = () => {
    setMenuOpen(false);
    setTimeout(() => setMenuVisible(false), 300);
    history.push("/");
  };

  return (
    <Wrapper>
      <MainWrapper>
        <ItemsWrapper>
          <ItemOne onClick={() => history.push("/")}>HOME</ItemOne>
          <Item onClick={() => history.push("/")}>SERVICES</Item>
          <Item onClick={() => history.push("/")}>OUR WORK</Item>
          <Item onClick={() => history.push("/")}>ABOUT US</Item>
          <Item onClick={() => history.push("/")}>CONTACT</Item>
          <Item onClick={() => history.push("/")}>BOOK ONLINE</Item>
          <LoginWrapper>
            <ProfileIcon />
            <Item>Log In</Item>
          </LoginWrapper>
        </ItemsWrapper>
        <MenuIconWrapper onClick={handleMenuClick}>
          <MenuIcon />
        </MenuIconWrapper>
      </MainWrapper>
      {menuVisible && (
        <Overlay $open={menuOpen}>
          <MobileMenu $open={menuOpen}>
            <CloseButton onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
            <MobileMenuItem onClick={handleMenuItemClick}>HOME</MobileMenuItem>
            <MobileMenuItem onClick={handleMenuItemClick}>SERVICES</MobileMenuItem>
            <MobileMenuItem onClick={handleMenuItemClick}>OUR WORK</MobileMenuItem>
            <MobileMenuItem onClick={handleMenuItemClick}>ABOUT US</MobileMenuItem>
            <MobileMenuItem onClick={handleMenuItemClick}>CONTACT</MobileMenuItem>
            <MobileMenuItem onClick={handleMenuItemClick}>BOOK ONLINE</MobileMenuItem>
          </MobileMenu>
        </Overlay>
      )}
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

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  opacity: ${props => (props.$open ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: ${props => (props.$open ? 'auto' : 'none')};
`;

export const MobileMenu = styled.div`
  background: #232323;
  width: 80vw;
  max-width: 320px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 24px 24px 24px;
  position: relative;
  box-shadow: -2px 0 8px rgba(0,0,0,0.2);
  transform: translateX(${props => (props.$open ? '0' : '100%')});
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  z-index: 1100;
`;

export const CloseIcon = styled(Close)`
  width: 32px;
  height: 32px;
`;

export const MobileMenuItem = styled.div`
  color: #fff;
  font-size: 20px;
  padding: 16px 0;
  width: 100%;
  border-bottom: 1px solid #333;
  cursor: pointer;
  text-align: left;
  &:last-child {
    border-bottom: none;
  }
`;

export default Navbar;
