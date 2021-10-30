import React, { useState, UseEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { Login } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";

const LogInPage = () => {
  let dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;

  const [error, setError] = useState("");
  let history = useHistory();
  const handleInputchange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("please fill up all the inputs");
    } else {
      setError("");
      dispatch(
        Login(data.email, data.password, () => {
          history.push("/adminDashboard");
        })
      );
      // history.push("/adminDashboard");
    }
  };

  const handleButton = () => {
    history.push("/register");
  };
  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          bgcolor: "white",
          height: "60vh",
          width: "450px",
          marginTop: "100px",
          marginLeft: "350px",
          boxShadow: ".2px .2px .2px .5px",
        }}
      >
        <div style={{ padding: "20px" }}>
          <h3>Log In</h3>
          {error && <h3 style={{ color: "red" }}>{error}</h3>}
          <div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleLogIn}
            >
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

              <Button
                style={{ width: "257px", paddingTop: "10px" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                LogIn
              </Button>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px",
                  marginLeft: "80px",
                  alignItems: "baseline",
                }}
              >
                <p> Do you have an account?</p>
                <h4 style={{ color: "#0000FF" }} onClick={handleButton}>
                  {" "}
                  Sign Up
                </h4>
              </div>
            </Box>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default LogInPage;
