import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import decode from "jwt-decode";

import { useDispatch } from "react-redux";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    //check for JWT
    if (token) {
      const decodedToken = decode(token);

      //check for JWT expiry and logout if expired
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <FaBeer className={classes.image} height="60" />
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          kanpai
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.username}
              src={user.result.imageUrl}
            >
              {user.result.username.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.username}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Log out
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
          >
            Log in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
