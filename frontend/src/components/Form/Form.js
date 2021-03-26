import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";

const Form = () => {
  const [drinkData, setDrinkData] = useState({
    name: "",
    type: "",
    brewery: "",
    selectedFile: "",
    comments: "",
    username: "",
  });
  const classes = useStyles();

  const handleSubmit = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Drink</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={drinkData.username}
          onChange={(e) => setDrinkData({ username: e.target.value })}
        />
      </form>
    </Paper>
  );
};

export default Form;
