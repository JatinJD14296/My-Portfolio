import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, action}) {
  return (
    <Wrapper>
      {/* <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
        <img className="radius8" src={img} alt="projects"></img>
      </ImgBtn> */}
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`;
