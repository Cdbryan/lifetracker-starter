import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Container from '@mui/material/Container';

function App() {
  const [count, setCount] = useState(0);

  return( 
  <>
    <Navbar></Navbar>
    <Container  sx={{backgroundColor:"blue" , flexGrow: 1}} maxWidth={false} > inside my container </Container>
    
  </>
  );
}

export default App;
