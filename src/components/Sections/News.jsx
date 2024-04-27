import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const API_KEY = "8229e384a6dd48f2abef14d5f9ec0558";

async function getHeadline() {
  const url =
    "https://newsapi.org/v2/top-headlines/sources?category=science&apiKey=" +
    API_KEY;
  const res = await fetch(url);
  const data = await res.json();
  console.log("---------------" + data);
  //   console.log(res.json());

  return data.sources.map((val) => ({
    title: val.name,
    url: val.url,
  }));
}

export default function NewsArticles() {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    (async () => {
      setHeadlines(await getHeadline());
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Wrapper id="News">
      <div className="container ">
          <h3 className="mb-5 text-center font40 extraBold">Science News</h3>
        <div className="flexSpaceCenter">  
          {headlines.map((val) => (
            <div className="news-data">
              <a href={val.url} target="_blank">
                <h1> {val.title} </h1>
              </a>
              </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding:70px 0;
`;
