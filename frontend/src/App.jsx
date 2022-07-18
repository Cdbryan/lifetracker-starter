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
import apiClient from "../services/apiClient";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("")

  React.useEffect(() => {
    const fetchAuthUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
    };

    const token = localStorage.getItem("token");
    if (token) {
      console.log("token: ", token)
      apiClient.setToken(token);
      fetchAuthUser();
    }
  }, []);

  return (
    <div className="app" >
      <BrowserRouter>
        <Navbar user={user}></Navbar>
          <Routes>
            <Route path="/" element={<Landingpage > </Landingpage>} />
            <Route path="/activity" element={<Activity user={user}></Activity>}/>
            <Route path="/exercise" />
            <Route path="/exercise/create"  />
            <Route path="/nutrition" element={<Nutrition user={user}></Nutrition>} />
            <Route path="/sleep" />
            <Route path="/login" element={<Login setUser={setUser}></Login>} />
            <Route path="/register" element={<Register setUser={setUser}></Register>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
