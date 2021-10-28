import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";

const AddUser = () => {
  let dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    details: "",
  });
  const [error, setError] = useState("");
  let history = useHistory();

  const handleInputchange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !details) {
      setError("please fill up all the inputs");
    } else {
      setError("");
      dispatch(addUser(data));
      history.push("/");
    }
  };

  const { name, details } = data;
  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <Button
          style={{ width: "100px", paddingTop: "10px" }}
          variant="contained"
          color="secondary"
          onClick={() => history.push("/")}
        >
          Go Back
        </Button>
      </div>

      <div style={{}}>
        <h1>Add User</h1>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            name="name"
            value={name}
            type="text"
            onChange={handleInputchange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Details"
            variant="standard"
            name="details"
            value={details}
            type="text"
            onChange={handleInputchange}
          />

          <br />

          <Button
            style={{ width: "100px", paddingTop: "10px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default AddUser;
