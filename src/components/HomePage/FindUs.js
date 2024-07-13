import React from "react";
import styled from "styled-components";

function FindUs() {
  return (
    <Wrapper>
      <CarWrapper>
        <CarIcon src="imgs/find-us-car-icon.jpg" />
      </CarWrapper>

      <MainWrapper>
        <Header>FIND US</Header>

        <InfoAndSigninWrapper>
          <InfoWrapper>
            <Address>500 Terry Francine Street San Francisco, CA 94158</Address>

            <Mail>info@mysite.com</Mail>

            <Telefone>Tel: 123-456-7890</Telefone>

            <OpeningHours>OPENING HOURS:</OpeningHours>

            <OpeningHoursWrapper>
              <First>Mon - Fri: 7am - 10pm</First>
              <Second>​​Saturday: 8am - 10pm</Second>
              <Third>​Sunday: 8am - 11pm</Third>
            </OpeningHoursWrapper>
          </InfoWrapper>

          <SigninWrapper>
            <FormWrapper>
              <FormLabel>First Name</FormLabel>
              <Form />
            </FormWrapper>

            <FormWrapper>
              <FormLabel>Last Name</FormLabel>
              <Form />
            </FormWrapper>

            <FormWrapper>
              <FormLabel>Email *</FormLabel>
              <Form />
            </FormWrapper>

            <FormWrapper>
              <FormLabel>Subject</FormLabel>
              <Form />
            </FormWrapper>

            <FormWrapper>
              <FormLabel>Message</FormLabel>
              <FormTextArea />
            </FormWrapper>

            <SubmitWrapper>
              <SubmitBtn>Submit</SubmitBtn>
            </SubmitWrapper>
          </SigninWrapper>
        </InfoAndSigninWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-image: url("imgs/about-us-bg.jpg");
  margin-top: -5px;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const CarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CarIcon = styled.img`
  width: 289px;
  height: 234px;
`;

export const MainWrapper = styled.div`
  background-color: #ffffff;
  width: 662px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;
  /* display: flex; */
  /* justify-content: center; */
  /* border: 3px solid red; */

  @media screen and (max-width: 770px) {
    width: 90%;
  }

  @media screen and (max-width: 660px) {
    width: 80%;
  }
`;

export const Header = styled.p`
  color: #2f2e2e;
  font-size: 34px;
  border-bottom: 3px solid #2f2e2e;
  width: 140px;
  text-align: center;
  padding-bottom: 10px;
  padding-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const InfoAndSigninWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-left: 50px;

  @media screen and (max-width: 770px) {
    /* padding-left: 0px; */
    width: 90%;
  }

  @media screen and (max-width: 660px) {
    flex-direction: column;
    /* justify-content: center; */
    padding-left: 50px;
  }

  @media screen and (max-width: 490px) {
    padding-left: 30px;
  }
`;

export const InfoWrapper = styled.div``;

export const SigninWrapper = styled.div``;

export const Address = styled.p`
  color: #2f2e2e;
  font-size: 17px;
  width: 200px;
`;

export const Mail = styled.p`
  color: #2f2e2e;
  font-size: 17px;
`;

export const Telefone = styled.p`
  color: #2f2e2e;
  font-size: 17px;
  margin-bottom: 30px;
`;

export const OpeningHours = styled.p`
  color: #2f2e2e;
  font-size: 17px;
  margin-bottom: 30px;
`;

export const OpeningHoursWrapper = styled.div`
  /* height: 40px; */
  /* border: 3px solid red; */
`;

export const First = styled.p`
  color: #2f2e2e;
  font-size: 17px;
`;

export const Second = styled.p`
  color: #2f2e2e;
  font-size: 17px;
  margin-top: -7px;
`;

export const Third = styled.p`
  color: #2f2e2e;
  font-size: 17px;
  margin-top: -7px;
`;

export const FormWrapper = styled.div``;

export const FormLabel = styled.p`
  color: #2f2e2e;
  font-size: 17px;
`;

export const Form = styled.input`
  width: 289px;
  height: 30px;
  padding-left: 10px;
  font-size: 17px;

  @media screen and (max-width: 450px) {
    width: 239px;
  }
`;

export const FormTextArea = styled.textarea`
  width: 289px;
  height: 119px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  resize: none;

  @media screen and (max-width: 450px) {
    width: 239px;
  }
`;

export const SubmitWrapper = styled.div``;

export const SubmitBtn = styled.p`
  background-color: #2f2e2e;
  color: #ffffff;
  width: 302px;
  height: 30px;
  text-align: center;
  padding-top: 5px;
  cursor: pointer;

  @media screen and (max-width: 450px) {
    width: 255px;
  }
`;

export default FindUs;
