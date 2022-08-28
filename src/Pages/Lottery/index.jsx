import React from 'react';
import Banner from "../../Components/Organism/Banner";
import Numbers from "../../Components/Organism/Numbers";
import Archive from "../../Components/Organism/Archive";

const Lottery = () => {
    return (
        <div style={{width: "90%", margin: "0 auto ", padding: "10% 0 0"}}>
            <Banner/>
            <Numbers/>
            <Archive/>
        </div>
    );
};

export default Lottery;