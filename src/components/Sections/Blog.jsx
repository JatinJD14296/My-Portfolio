import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import TestimonialSlider from "../Elements/TestimonialSlider";


export default function Blog() {
  
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container text-center">
          <HeaderInfo>
            <h1 className="font40 extraBold">My Blog Stories</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a
                href="https://medium.com/google-developer-experts/faster-flutter-web-app-9d50eb0b6954"
                target="_blank"
              >
                <BlogBox
                  imgs='https://miro.medium.com/v2/resize:fit:828/format:webp/1*aEO3narhR66G1dl_-h56Ug.png'
                  title="The One Trick Every Flutter Web Dev Needs to Know"
                  text="Do you feel that your Flutter Web App is a bit slow to load? It may take forever to load your web app. It’s a common issue with web apps or websites made in Flutter. How about we try to fix this issue?"
                  tag="Flutter & Dart"
                  author="Abhishek Doshi, 2 Weeks ago"
                />
              </a>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a
                href="https://medium.com/google-developer-experts/using-gemini-1-5-pro-to-create-video-trailers-1fff6fc768c8"
                target="_blank"
              >
                <BlogBox
                  imgs='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jqmHgcYUcgbcMCgc.jpg'
                  title="Using Gemini 1.5 Pro to create video trailers"
                  text="Taking advantage of the Gemini's multi-modal input to create trailers for any videos."
                  tag="AI"
                  author="Luke Skywalker, 2 days ago"
                />
              </a>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a
                href="https://medium.com/@jatinjd.fjs/flutter-experience-7990c95988a"
                target="_blank"
              >
                <BlogBox
                  imgs='https://miro.medium.com/v2/resize:fit:828/format:webp/1*oYhuKa-VJaWf4Ollc-xn_A.png'
                  title="Flutter Experience"
                  text="Today I am so excited for writing my First article on medium. I just share my Flutter Experience."
                  tag="Flutter"
                  author="Jatin Hirapara, 2 Years ago"
                />
              </a>
            </div>
          </div>
          {/* <div className="row textCenter" style={{ margin: "50px 0" }}>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a
                href="https://medium.com/flutter/flutter-and-dart-at-google-cloud-next-b4921946d0d1"
                target="_blank"
              >
                <BlogBox
                  imgs={Blogone}
                  title="Flutter and Dart at Google Cloud Next"
                  text="In case you missed it, the Flutter team attended Google Cloud Next for the first time this past week."
                  tag="company"
                  author="Luke Skywalker, 2 days ago"
                />
              </a>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a
                href="https://medium.com/flutter/flutter-and-dart-at-google-cloud-next-b4921946d0d1"
                target="_blank"
              >
                <BlogBox
                  imgs={Blogone}
                  title="Flutter and Dart at Google Cloud Next"
                  text="In case you missed it, the Flutter team attended Google Cloud Next for the first time this past week."
                  tag="company"
                  author="Luke Skywalker, 2 days ago"
                />
              </a>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a
                href="https://medium.com/flutter/flutter-and-dart-at-google-cloud-next-b4921946d0d1"
                target="_blank"
              >
                <BlogBox
                  imgs={Blogone}
                  title="Flutter and Dart at Google Cloud Next"
                  text="In case you missed it, the Flutter team attended Google Cloud Next for the first time this past week."
                  tag="company"
                  author="Luke Skywalker, 2 days ago"
                />
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What My Client Says?</h1>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
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
