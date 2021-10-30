import React, { useState, UseEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useHistory } from "react-router";

const RegisterPage = () => {
  let history = useHistory();
  const [data, setData] = useState({
    userName: "",
    email: "",
    description: "",
    password: "",
  });
  const { userName, email, description, password } = data;

  const [error, setError] = useState("");
  const handleInputchange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!userName || !email || !description || !password) {
      setError("please fill up all the inputs");
    } else {
      setError("");
      //   dispatch(addUser(data));
      history.push("/login");
    }
  };

  return (
    <div>
      <Container style={{ width: "100%", height: "100%" }}>
        <Box
          sx={{
            bgcolor: "white",
            height: "70vh",
            width: "450px",
            marginTop: "100px",
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
                  label="User Name"
                  variant="standard"
                  name="userName"
                  value={userName}
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
                  label="Description"
                  variant="standard"
                  name="description"
                  value={description}
                  type="description"
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
