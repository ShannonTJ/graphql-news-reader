import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

import { useSelector } from "react-redux";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const updatedDrink = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem("profile"));

  const [drinkData, setDrinkData] = useState({
    name: "",
    type: "",
    brewery: "",
    selectedFile: "",
    comments: "",
  });

  useEffect(() => {
    if (updatedDrink) {
      setDrinkData(updatedDrink);
    }
  }, [updatedDrink]);

  const handleSubmit = (event) => {
    event.preventDefault();

    //update the post if it already exists
    if (currentId) {
      dispatch(
        updatePost(currentId, {
          ...drinkData,
          username: user?.result?.username,
        })
      );
    } else {
      dispatch(
        createPost({
          ...drinkData,
          username: user?.result?.username,
        })
      );
    }
    //clear data from form
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setDrinkData({
      name: "",
      type: "",
      brewery: "",
      selectedFile: "",
      comments: "",
    });
  };

  if (!user?.result?.username) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please sign in to create and like posts.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Drink
        </Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={drinkData.name}
          onChange={(e) => setDrinkData({ ...drinkData, name: e.target.value })}
        />
        <TextField
          name="type"
          variant="outlined"
          label="Type"
          fullWidth
          value={drinkData.type}
          onChange={(e) => setDrinkData({ ...drinkData, type: e.target.value })}
        />
        <TextField
          name="brewery"
          variant="outlined"
          label="Brewery"
          fullWidth
          value={drinkData.brewery}
          onChange={(e) =>
            setDrinkData({ ...drinkData, brewery: e.target.value })
          }
        />
        <TextField
          name="comments"
          variant="outlined"
          label="Comments"
          fullWidth
          value={drinkData.comments}
          onChange={(e) =>
            setDrinkData({ ...drinkData, comments: e.target.value })
          }
        />
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ defaultPic }) =>
              setDrinkData({ ...drinkData, selectedFile: defaultPic })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
