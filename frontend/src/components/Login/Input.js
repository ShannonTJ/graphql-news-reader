import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = (props) => {
  const {
    half,
    name,
    label,
    handleChange,
    autoFocus,
    type,
    handleShowPassword,
  } = { props };
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        onChange={handleChange}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password" && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? <FaRegEye /> : <FaRegEyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
        xs={6}
        variant="outlined"
        required
        fullWidth
      />
    </Grid>
  );
};

export default Input;
