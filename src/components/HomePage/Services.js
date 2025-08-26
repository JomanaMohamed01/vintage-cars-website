import React from "react";
import styled from "styled-components";
import { WrenchScrewdriver } from "@styled-icons/fluentui-system-regular/WrenchScrewdriver";
import { Tags } from "@styled-icons/bootstrap/Tags";
import { PaintBucket } from "@styled-icons/bootstrap/PaintBucket";

function Services() {
  return (
    <Wrapper>
      <MainWrapper>
        <Header>SERVICES</Header>

        <ServicesWrapper>
          <ServiceWrapper>
            <WrenchScrewdriverIcon />
            <ServiceHeader>REPAIRS</ServiceHeader>
            <ServiceText>
              General Repairs, Specialist Repairs & Vintage Parts
            </ServiceText>
          </ServiceWrapper>

          <ServiceWrapper>
            <TagsIcon />
            <ServiceHeader>UPHOLSTERY</ServiceHeader>
            <ServiceText>
              A Range of Fabrics, Including Vintage Leathers, & Wide Variety of
              Colors
            </ServiceText>
          </ServiceWrapper>

          <ServiceWrapper>
            <PaintBucketIcon />
            <ServiceHeader>PAINTWORK</ServiceHeader>
            <ServiceText>
              Spray paint, Custom Stencilling & Variety of Custom Made Artwork
            </ServiceText>
          </ServiceWrapper>
        </ServicesWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-image: url("/imgs/services-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: auto;
  border: 1px solid transparent;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const MainWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 60px;
`;

export const Header = styled.p`
  color: #ffffff;
  font-size: 34px;
  border-bottom: 3px solid #ffffff;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  width: 140px;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  /* border: 3px solid red; */
  width: 800px;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const WrenchScrewdriverIcon = styled(WrenchScrewdriver)`
  color: #ffffff;
  width: 100px;
  height: 100px;
  border: 3px solid #ffffff;
  padding: 20px;
  border-radius: 150px;
`;

export const TagsIcon = styled(Tags)`
  color: #ffffff;
  width: 100px;
  height: 100px;
  border: 3px solid #ffffff;
  padding: 20px;
  border-radius: 150px;
`;

export const PaintBucketIcon = styled(PaintBucket)`
  color: #ffffff;
  width: 100px;
  height: 100px;
  border: 3px solid #ffffff;
  padding: 20px;
  border-radius: 150px;
`;

export const ServiceHeader = styled.p`
  color: #ffffff;
  font-size: 20px;
`;

export const ServiceText = styled.p`
  color: #ffffff;
  font-size: 17px;
  width: 160px;
  text-align: center;
`;

export default Services;
