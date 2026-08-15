import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import About from "../components/Sections/About";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Contact from "../components/Sections/Contact";
import Services from "../components/Sections/Services";
import Footer from "../components/Sections/Footer";
import Qualification from "../components/Sections/Qualification";
import Pricing from "../components/Sections/Pricing";

export default function Landing() {
  return (
    <div>
      <TopNavbar />
      <Header />
      <About />
      <Services />
      <Qualification />
      
      {/* <Pricing /> */}
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
