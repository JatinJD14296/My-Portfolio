import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";


export default function Blog() {
  
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container text-center">
          <HeaderInfo>
            <h1 className="font40 extraBold">My Blog Stories</h1>
            <p className="font13">
              A few articles I've written on Flutter, Dart, and AI tooling.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a
                href="https://medium.com/google-developer-experts/faster-flutter-web-app-9d50eb0b6954"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BlogBox
                  imgs='https://miro.medium.com/v2/resize:fit:828/format:webp/1*aEO3narhR66G1dl_-h56Ug.png'
                  title="The One Trick Every Flutter Web Dev Needs to Know"
                  text="Do you feel that your Flutter Web App is a bit slow to load? It may take forever to load your web app. It’s a common issue with web apps or websites made in Flutter. How about we try to fix this issue?"
                  tag="Flutter & Dart"
                  author="Abhishek Doshi"
                />
              </a>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a
                href="https://medium.com/google-developer-experts/using-gemini-1-5-pro-to-create-video-trailers-1fff6fc768c8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BlogBox
                  imgs='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jqmHgcYUcgbcMCgc.jpg'
                  title="Using Gemini 1.5 Pro to create video trailers"
                  text="Taking advantage of the Gemini's multi-modal input to create trailers for any videos."
                  tag="AI"
                />
              </a>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a
                href="https://medium.com/@jatinjd.fjs/flutter-experience-7990c95988a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BlogBox
                  imgs='https://miro.medium.com/v2/resize:fit:828/format:webp/1*oYhuKa-VJaWf4Ollc-xn_A.png'
                  title="Flutter Experience"
                  text="Today I am so excited for writing my First article on medium. I just share my Flutter Experience."
                  tag="Flutter"
                  author="Jatin Hirapara"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*
        The testimonial slider below (TestimonialSlider.jsx) previously
        contained fabricated quotes attributed to fake/mismatched names
        (including a misquoted Ralph Waldo Emerson line). Presenting made-up
        client feedback is misleading, so this section is disabled until
        it's replaced with real testimonials from actual clients/collaborators.
        See TestimonialSlider.jsx to add genuine quotes back in.
      */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
