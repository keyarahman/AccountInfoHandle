import React, { useState, UseEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useHistory } from "react-router";
import { SIGN_UP } from "../../redux/actionType";
import { signUp } from "../../redux/Action/userAction";
import { useSelector, useDispatch } from "react-redux";

const RegisterPage = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
  });
  const { title, first_name, last_name, email, password, phone } = data;

  const [error, setError] = useState("");
  const handleInputchange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!title || !first_name || !last_name || !email || !password || !phone) {
      setError("please fill up all the inputs");
    } else {
      setError("");
      dispatch(
        signUp(title, first_name, last_name, email, password, phone, () => {
          history.push("/");
        })
      );
      // history.push("/Dashboard");
    }
  };
  return (
    <div>
      <Container style={{ width: "100%", height: "100%" }}>
        <Box
          sx={{
            bgcolor: "white",
            height: "80vh",
            width: "450px",
            marginTop: "50px",
            marginLeft: "350px",
            boxShadow: ".2px .2px .2px .5px",
          }}
        >
          <div style={{ padding: "20px" }}>
            <h3>Sign Up</h3>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleRegisterSubmit}
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
                  type="text"
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

                <br />
                <TextField
                  id="standard-basic"
                  label="Phone"
                  variant="standard"
                  name="phone"
                  value={phone}
                  type="number"
                  onChange={handleInputchange}
                />

                <br />

                <Button
                  style={{ width: "255px", paddingTop: "10px" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default RegisterPage;
