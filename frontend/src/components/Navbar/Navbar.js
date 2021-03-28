import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { FaBeer } from "react-icons/fa";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <FaBeer className={classes.image} height="60" />
      <Typography className={classes.heading} variant="h2" align="center">
        DrinksApp
      </Typography>
    </AppBar>
  );
};

export default Navbar;
