import React, { useState, useRef } from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/telephone.png";
import ContactImg2 from "../../assets/img/communication.png";
import ContactImg3 from "../../assets/img/linkedin.png";

// TODO: Replace with your own Formspree form ID (https://formspree.io) or
// any other form backend you prefer (EmailJS, Getform, your own API, etc).
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(formRef.current),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ fname: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  };

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
              <Form ref={formRef} onSubmit={handleSubmit}>
                <label className="font14">First name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  required
                  value={formData.fname}
                  onChange={handleChange}
                  className="font20 extraBold"
                />
                <label className="font14">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="font20 extraBold"
                />
                <label className="font14">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="font20 extraBold"
                />
                <label className="font14">Remark:</label>
                <textarea
                  rows="4"
                  cols="50"
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="font20 extraBold"
                />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput
                  type="submit"
                  onClick={handleSubmit}
                  value={status === "sending" ? "Sending…" : "Send Message"}
                  disabled={status === "sending"}
                  className="pointer animate radius8"
                  style={{ maxWidth: "220px" }}
                />
              </SumbitWrapper>
              {status === "sent" && (
                <StatusMsg className="success">
                  Thanks! Your message has been sent — I'll get back to you soon.
                </StatusMsg>
              )}
              {status === "error" && (
                <StatusMsg className="error">
                  Something went wrong sending your message. Please try
                  emailing me directly instead.
                </StatusMsg>
              )}
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
                    <a href="tel:+61410732787">+61 410 732 787</a>
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
                    <a
                      href="https://www.linkedin.com/in/jatin-hirapara-53916718b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
const StatusMsg = styled.p`
  margin-top: 15px;
  font-size: 14px;
  &.success {
    color: #1a9c4d;
  }
  &.error {
    color: #d64545;
  }
`;
