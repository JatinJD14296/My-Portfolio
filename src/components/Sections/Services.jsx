import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/jatin-google.jpeg";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg">
        <div className="container"></div>
      </div>
      <div className="whiteBg text-center">
        <div className="container ">
          <HeaderInfo>
            <h1 className="font40 extraBold">My Work History</h1>
            <p className="font13"></p>
          </HeaderInfo>
          <ServiceBoxRow className="flexSpaceCenter">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="flutter"
                title="FLUTTER DEVELOPER"
                tag="3.8 Years"
                subtitle="Troubleshooting · Technical Support · Desktop Computers · Teamwork · Microsoft 365 · Service Desk · Ticketing Systems · IT Projects · Information Technology · Team Management · Problem Solving · Software Management · Databases · Help Desk Support · Communication."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="stock-take"
                title="STOCK TAKER"
                tag="1 Year"
                subtitle="Troubleshooting · Technical Support · Desktop Computers · Microsoft 365 · Service Desk · Ticketing Systems · Team Management · Problem Solving · Software Management · Help Desk Support."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="google"
                title="GDSC LEAD QUT"
                tag="8 Months"
                subtitle="Teamwork · Microsoft 365 · Information Technology · Team Management · Problem Solving · Communication."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold text-left">
                  A few words about my achievements
                </h4>
                <h2 className="font40 extraBold text-left">Achievements</h2>
                <p className="font14 text-left">
                  I am proud to have earned various certifications and
                  achievements throughout my career. I attended the Flutter
                  Bootcamp in Vadodara and actively participated in the
                  International Flutter Hackathon, where I emerged as a winner,
                  ranking 7th worldwide. Moreover, I completed the Introduction
                  to Flutter Development using Dart course from the prestigious
                  App Brewery.
                </p>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  <div style={{ width: "190px" }}>
                    <a href="#contact">
                      {" "}
                      <FullButton title="Contact Me" />
                    </a>
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;