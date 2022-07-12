import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Container from "@mui/material/Container";
import { formLabelClasses } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Container sx={{ backgroundColor: "blue", flexGrow: 1 }} maxWidth={true}>
        {" "}
        inside my container{" "}
      </Container>
    </>
  );
}

export default App;
