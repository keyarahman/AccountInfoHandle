import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/Action/userAction";

const AddUser = () => {
  let dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState("");
  let history = useHistory();

  const handleInputchange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !first_name || !last_name || !email || !password || !phone) {
      setError("please fill up all the inputs");
    } else {
      setError("");
      dispatch(
        addUser(
          data.title,
          data.first_name,
          data.last_name,
          data.email,
          data.password,
          data.phone
        )
      );
      history.push("/userList");
    }
  };

  const { title, first_name, last_name, email, password, phone } = data;
  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <Button
          style={{ width: "100px", paddingTop: "" }}
          variant="contained"
          color="secondary"
          onClick={() => history.push("/userList")}
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
            label="Title"
            variant="standard"
            name="title"
            value={title}
            type="text"
            onChange={handleInputchange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
            name="first_name"
            value={first_name}
            type="text"
            onChange={handleInputchange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="standard"
            name="last_name"
            value={last_name}
            type="text"
            onChange={handleInputchange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            value={email}
            type="email"
            onChange={handleInputchange}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            name="password"
            value={password}
            type="password"
            onChange={handleInputchange}
          />
          <br />{" "}
          <TextField
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            name="phone"
            value={phone}
            type="number"
            onChange={handleInputchange}
          />
          <br />
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
