import React from "react";
import styled from "styled-components";

function AboutUs() {
  return (
    <Wrapper>
      <MainWrapper>
        <Header>ABOUT US</Header>

        <TextOne>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </TextOne>

        <TextTwo>
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide.
        </TextTwo>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-image: url("/imgs/about-us-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: auto;
  padding-bottom: 60px;
  padding-top: 60px;

  @media screen and (max-width: 768px) {
    background-attachment: scroll;
    background-size: cover;
    background-position: center;
  }
`;

export const MainWrapper = styled.div`
  width: 662px;
  height: auto;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 50px;
  /* border: 3px solid red; */
  /* position: relative;
  top: 100px; */

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Header = styled.p`
  color: #2f2e2e;
  font-size: 34px;
  border-bottom: 3px solid #2f2e2e;
  padding-bottom: 30px;
  width: 170px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const TextOne = styled.p`
  color: #2f2e2e;
  font-size: 17px;
  width: 467px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  line-height: 28px;

  @media screen and (max-width: 590px) {
    width: 90%;
  }
`;

export const TextTwo = styled.p`
  color: #2f2e2e;
  font-size: 17px;
  width: 467px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  line-height: 28px;
  margin-top: 30px;

  @media screen and (max-width: 590px) {
    width: 90%;
  }
`;

export default AboutUs;
