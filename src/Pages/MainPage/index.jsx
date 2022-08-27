import React from "react";
import Intro from "../../Components/Organism/Intro/Intro";
import AboutUs from "../../Components/Organism/AboutUs";
import Token from "../../Components/Organism/Token";
import AboutToken from "../../Components/Organism/AboutToken/AboutToken";
import Nfts from "../../Components/Organism/NFTS";
import Community from "../../Components/Organism/Community";

const Main = () => {
    return (
        <div className="main">
            <Intro/>
            <AboutUs/>
            <Token/>
            <AboutToken/>
            <Nfts/>
            <Community/>
        </div>
    );
};

export default Main;
