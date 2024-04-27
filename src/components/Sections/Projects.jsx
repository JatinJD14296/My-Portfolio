import React from "react";
import styled from "styled-components";
import axios from "axios";

import { useState, useEffect } from "react";
import ProjectBox from "../Elements/ProjectBox";

export default function Projects() {
  const [userData, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/JatinJD14296/repos")
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },[]);

  return (
    <Wrapper id="Projects ">
      <div className="whiteBg">
        <div className="container text-center">
          <HeaderInfo>
            <h1 className="font40 extraBold">My Awesome Projects</h1>
              <div className="Search-function">
              <input 
              className="input-wraper"
                type="search" 
                placeholder="Search Project"
                />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            <p className="font13"></p>
          </HeaderInfo>
          <div className="row">
            {userData.map((data) => {
              return (
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <a href={data.html_url} target="_blank" className="home-text">
                    {/* <GitHubLanguageChart repoName={data.name}/> */}
                    <ProjectBox title={data.name} text={data.description} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding:70px 0;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
