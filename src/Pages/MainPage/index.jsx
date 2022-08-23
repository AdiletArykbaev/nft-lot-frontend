import React from "react";
import Intro from "../../Components/Organism/Intro/Intro";
import AboutUs from "../../Components/Organism/AboutUs";
import Token from "../../Components/Organism/Token";
import AboutToken from "../../Components/Organism/AboutToken/AboutToken";
const Main = () => {
  return (
    <div className="main">
      <Intro />
      <AboutUs />
      <Token />
      <AboutToken />
    </div>
  );
};

export default Main;
