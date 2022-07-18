import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Logo/Logo";
import "./Navbar.css";

export default function Navbar({user}) {
  return (
    <nav className="Navbar">
      <div className="content">
        <Logo className="logo"></Logo>
        <ul className="links">
          <li>
            <a href="/activity">Activity</a>
          </li>
          <li>
            <a href="/exercise">Exercise</a>
          </li>
          <li>
            <a href="/nutrition">Nutrition</a>
          </li>
          <li>
            <a href="/sleep">Sleep</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li className="btn secondary">
            <a href="/register">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>

    // if(user != null)
    // {
    //   <li className="btn secondary">
    //         //add in a on click handler that logs out the user when they hit this button 
    //         <a href="/">Logout</a>
    //   </li>
    // }

    // <Box >
    //   <AppBar  position="static">
    //     <Toolbar >
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
    //       <Logo className="logo"></Logo>
    //       </Typography>
    //       <a href="/activity"><Button color="inherit" > Activity </Button></a>
    //       <a href="/exercise"><Button color="inherit" > Exercise </Button></a>
    //       <a href="/nutrition"><Button color="inherit" > Nutrition </Button></a>
    //       <a href="/sleep"><Button color="inherit" > Sleep </Button></a>
    //       <a href="/login"><Button color="inherit" > Login </Button></a>
    //       <a href="/register"><Button color="inherit"> Sign Up</Button></a>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
}
