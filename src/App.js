import React, {useEffect} from "react";
import "./App.css";
import {Route, Routes, useLocation} from "react-router-dom";
import Header from "./Components/Moleculas/Header";
import Main from "./Pages/MainPage";
import Footer from "./Components/Moleculas/Footer";
import Lottery from "./Pages/Lottery";
import Shop from "./Pages/Shop";
import Admin from "./Pages/Admin";

function App() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({
            behavior: "smooth",
            top: "0",
        });
    }, [location.pathname]);
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route element={<Main/>} path="/"/>
                <Route element={<Lottery/>} path="/lottery"/>
                <Route element={<Shop/>} path="/shop"/>
                <Route element={<Admin/>} path="/admin"/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
