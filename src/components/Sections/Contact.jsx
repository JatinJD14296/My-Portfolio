import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/telephone.png";
import ContactImg2 from "../../assets/img/communication.png";
import ContactImg3 from "../../assets/img/linkedin.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p>Feel Free To Fill the Below Form</p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font14">First name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="font20 extraBold"
                />
                <label className="font14">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="font20 extraBold"
                />
                <label className="font14">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="font20 extraBold"
                />
                <label className="font14">Remark:</label>
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput
                  type="submit"
                  value="Send Message"
                  className="pointer animate radius8"
                  style={{ maxWidth: "220px" }}
                />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div
                style={{ width: "60%" }}
                className="flexNullCenter flexColumn "
              >
                <ContactImgBox>
                  <img
                    src={ContactImg1}
                    alt="office"
                    className="radius6"
                    width={80}
                  />
                  <h2>Phone Me</h2>
                  <span>
                    <a href="tel:123-456-7890">+61 410 732 787</a>
                  </span>
                </ContactImgBox>
                <ContactImgBox>
                  <img
                    src={ContactImg2}
                    alt="office"
                    className="radius6"
                    width={80}
                  />
                  <h2>Mail Me</h2>
                  <span>
                    <a href="mailto: jatinhirapara.jd@gmail.com">
                      jatinhirapara.jd@gmail.com
                    </a>
                  </span>
                </ContactImgBox>
              </div>
              <div style={{ width: "40%" }}>
                <div style={{ marginTop: "150px" }}>
                  <img
                    src={ContactImg3}
                    alt="office"
                    className="radius6"
                    width={80}
                  />
                  <h2>Follow Me</h2>
                  <span>
                    <a href=" https://www.linkedin.com/in/jatin-hirapara-53916718b/">
                      @jatinhirapara
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin-bottom: 70px;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
