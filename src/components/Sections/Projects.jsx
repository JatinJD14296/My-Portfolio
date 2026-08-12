import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import axios from "axios";
import ProjectBox from "../Elements/ProjectBox";

const GITHUB_USERNAME = "JatinJD14296";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
      )
      .then((response) => {
        // Only show original work, not forked tutorial/bootcamp repos,
        // and skip repos with no description so the grid looks intentional.
        const curated = response.data
          .filter((repo) => !repo.fork && repo.description)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(curated);
        setStatus("ready");
      })
      .catch((error) => {
        console.error("Failed to load GitHub repos:", error);
        setStatus("error");
      });
  }, []);

  const filteredRepos = useMemo(() => {
    if (!search.trim()) return repos;
    const q = search.toLowerCase();
    return repos.filter(
      (repo) =>
        repo.name.toLowerCase().includes(q) ||
        (repo.description && repo.description.toLowerCase().includes(q))
    );
  }, [repos, search]);

  return (
    <Wrapper id="Projects">
      <div className="whiteBg">
        <div className="container text-center">
          <HeaderInfo>
            <h1 className="font40 extraBold">My Awesome Projects</h1>
            <div className="Search-function">
              <input
                className="input-wraper"
                type="search"
                placeholder="Search Project"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </HeaderInfo>

          {status === "loading" && <StatusText>Loading projects…</StatusText>}

          {status === "error" && (
            <StatusText>
              Couldn't load projects from GitHub right now (their public API
              rate limit may have been hit). Please check back shortly, or
              visit{" "}
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                my GitHub profile
              </a>{" "}
              directly.
            </StatusText>
          )}

          {status === "ready" && filteredRepos.length === 0 && (
            <StatusText>No projects match "{search}".</StatusText>
          )}

          <div className="row">
            {filteredRepos.map((repo) => (
              <div
                className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
                key={repo.id}
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-text"
                >
                  <ProjectBox title={repo.name} text={repo.description} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 70px 0;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const StatusText = styled.p`
  padding: 30px 0;
  font-size: 15px;
  color: #707070;
`;
