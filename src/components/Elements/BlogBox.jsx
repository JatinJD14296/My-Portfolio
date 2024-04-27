import React from "react";
import styled from "styled-components";

export default function BlogBox({imgs, tag, title, text, action, author }) {
  return (
    <WrapperBtn className="animate pointer bottom-margin" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg radius8 shadow">
      <div className="flexCenter">
      <img src={imgs} alt="office" className="radius6 mobile-blog" width={350} style={{ padding: "0px 0 20px 0"}}/>
      </div>
        <h3 className="font20 extraBold">{title}</h3>
        <p className="font13" style={{ padding: "20px 0" }}>
          {text}
        </p>
        <p className="font13 extraBold">{author}</p>
        <div className="flex">
          <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
        </div>
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;
