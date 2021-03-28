import React, { useState } from "react";

import Input from "./Input";
import { FaLock } from "react-icons/fa";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";

import useStyles from "./styles";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();

  const isSignup = true;
  const handleSubmit = () => {};
  const handleChange = () => {};

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <FaLock />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign up" : "Sign in"}</Typography>
        <form
          className={classes.form}
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign up" : "Sign in"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
