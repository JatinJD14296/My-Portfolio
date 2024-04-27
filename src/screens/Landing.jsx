import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import About from "../components/Sections/About";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Contact from "../components/Sections/Contact";
import Services from "../components/Sections/Services";
import Chart from "../components/Sections/Chart";
import Footer from "../components/Sections/Footer";
import Pricing from "../components/Sections/Pricing";
import Qualification from "../components/Sections/Qualification";
import NewsArticles from "../components/Sections/News";

export default function Landing() {
  return (
    <div>
      <TopNavbar />
      <Header />
      <About />
      <Services />
      <Chart
        labels={[
          "HTML",
          "CSS",
          "DART",
          "FLUTTER",
          "PYTHON",
          "REACT",
          "JAVASCRIPT",
        ]}
        value1={[65, 59, 90, 81, 56, 55, 40]}
        value2={[28, 48, 40, 19, 96, 27, 80]}
      />
      <Qualification />
      <Projects />
      <Blog />
      <NewsArticles />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
