import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <Box className="Navbar" sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <a href="/activity"><Button color="inherit" > Activity </Button></a>
          <a href="/exercise"><Button color="inherit" > Exercise </Button></a>
          <a href="/nutrition"><Button color="inherit" > Nutrition </Button></a>
          <a href="/sleep"><Button color="inherit" > Sleep </Button></a>
          <a href="/login"><Button color="inherit" > Login </Button></a>
          <a href="/register"><Button color="inherit"> Sign Up</Button></a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}