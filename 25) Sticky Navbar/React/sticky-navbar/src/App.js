import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Content />
    </React.Fragment>
  );
}

export default App;
