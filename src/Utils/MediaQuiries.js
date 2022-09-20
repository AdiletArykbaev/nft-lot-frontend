import React from "react";
import Responsive from "react-responsive";

export const Min769 = (props) => (
    <Responsive {...props} minWidth={769}/>
);

export const Max768 = (props) => (
    <Responsive {...props} maxWidth={768}/>
);