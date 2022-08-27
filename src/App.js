import "./App.css";
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Moleculas/Header";
import Main from "./Pages/MainPage";
import React from "react";
import Footer from "./Components/Moleculas/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route element={<Main/>} path="/"/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
