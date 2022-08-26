import React from "react";
import Intro from "../../Components/Organism/Intro/Intro";
import AboutUs from "../../Components/Organism/AboutUs";
import Token from "../../Components/Organism/Token";
import AboutToken from "../../Components/Organism/AboutToken/AboutToken";
import Nfts from "../../Components/Organism/NFTS";
import Slider from "../../Components/Atoms/Slider";
const Main = () => {
  return (
    <div className="main">
      <Intro />
      <AboutUs />
      <Token />
      <AboutToken />
      <Nfts />
    </div>
  );
};

export default Main;
