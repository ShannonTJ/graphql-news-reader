import React from "react";
import { FaBeer } from "react-icons/fa";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          DrinksApp
        </Typography>
        <FaBeer />
      </AppBar>
    </Container>
  );
};

export default App;
