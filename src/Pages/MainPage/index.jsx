import React from "react";
import Intro from "../../Components/Organism/Intro/Intro";
import AboutUs from "../../Components/Organism/AboutUs";
import Token from "../../Components/Organism/Token";
const Main = () => {
  return (
    <div className="main">
      <Intro />
      <AboutUs />
      <Token />
    </div>
  );
};

export default Main;
