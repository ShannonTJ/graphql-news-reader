import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Home />
    </Container>
  );
};

export default App;
