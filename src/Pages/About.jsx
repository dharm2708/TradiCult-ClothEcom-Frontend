import React from "react";
import WelcomeAbout from "../components/WelcomeAbout";
import { AboutData } from "../API/aboutData";
import { useState } from "react";
import { AboutVision } from "../API/aboutVision";
import "../styles/about.css";

const About = () => {
  const [aboutData, setAboutData] = useState(AboutData);
  const [aboutVision, setAboutVision] = useState(AboutVision);
  return (
    <>
      <WelcomeAbout aboutData={aboutData} aboutVision={aboutVision} />
    </>
  );
};

export default About;
