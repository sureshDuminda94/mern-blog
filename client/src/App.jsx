import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";

import SignUp from "./pages/SignUp";
import Project from "./pages/Project";
import Signin from "./pages/SignIn";
import DashBord from "./pages/DashBord"
import Header from "./component/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/SignIn" element={<Signin />} />
        <Route path="/SignUP" element={<SignUp />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/DashBord" element={<DashBord />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
