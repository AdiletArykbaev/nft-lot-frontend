import React from 'react';

const InfoIcons = ({data}) => {
    return (
        <>
            {data && data.map((el) => (
                <div>
                    <img src={el} alt=""/>
                </div>
            ))}
        </>
    );
};

export default InfoIcons;