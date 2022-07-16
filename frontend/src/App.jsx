import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Container from "@mui/material/Container";
import { formLabelClasses } from "@mui/material";
import Landingpage from "./Components/Landingpage/Landingpage";
import Login from "./Components/Login/Login";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/Register/Register";
import Nutrition from "./Components/Nutrition/Nutrition";
import Activity from "./Components/Activity/Activity"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app" >
      <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Landingpage> </Landingpage>} />
            <Route path="/activity" element={<Activity></Activity>}/>
            <Route path="/exercise" />
            <Route path="/nutrition" element={<Nutrition></Nutrition>} />
            <Route path="/sleep" />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
