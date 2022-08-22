import "./App.css";
import { Route, Routes } from "react-router";
import Header from "./Components/Moleculas/Header";
import Intro from "./Components/Organism/Intro/Intro";
import Main from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Main />} path="/"></Route>
        {/* <Route></Route>
        <Route></Route>
        <Route></Route> */}
      </Routes>
    </div>
  );
}

export default App;
