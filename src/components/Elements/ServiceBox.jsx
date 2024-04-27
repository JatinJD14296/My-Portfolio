import React from "react";
import styled from "styled-components";
// Assets
import FlutterLogo from "../../assets/svg/Services/FlutterLogo";
import StockTake from "../../assets/svg/Services/StockTake";
import Google from "../../assets/svg/Services/Google";

export default function ServiceBox({ icon, title, subtitle, tag }) {
  let getIcon;

  switch (icon) {
    case "flutter":
      getIcon = <FlutterLogo />;
      break;
    case "stock-take":
      getIcon = <StockTake />;
      break;
    case "google":
      getIcon = <Google />;
      break;
    default:
      getIcon = <FlutterLogo />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn text-center">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <div className="flexCenter">
        <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
      </div>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
