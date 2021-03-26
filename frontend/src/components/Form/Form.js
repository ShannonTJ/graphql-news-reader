import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
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

  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Drink</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={drinkData.username}
          onChange={(e) =>
            setDrinkData({ ...drinkData, username: e.target.value })
          }
        />
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
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setDrinkData({ ...drinkData, selectedFile: base64 })
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
