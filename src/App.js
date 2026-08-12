import React from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Jatin Hirapara — Flutter Developer</title>
        <meta
          name="description"
          content="Jatin Hirapara is a Flutter developer specializing in cross-platform mobile apps. Explore his projects, skills, and experience."
        />
        <meta property="og:title" content="Jatin Hirapara — Flutter Developer" />
        <meta
          property="og:description"
          content="Flutter developer specializing in cross-platform mobile apps. Explore projects, skills, and experience."
        />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Landing />
    </>
  );
}

