import React, { useState, UseEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Login } from "../../redux/Action/userAction";

const drawerWidth = 240;
const LogInPage = () => {
  let dispatch = useDispatch();
  const { loginError } = useSelector((state) => state.authData);

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
        Login(
          data.email,
          data.password,
          () => {
            setError("");
            history.push("/");
          },
          () => {
            setError("Invalid email or password");
          }
        )
      );
    }
  };

  const handleRegButton = () => {
    history.push("/register");
  };
  const handleLoginButton = () => {
    history.push("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div"></Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
          }}
        >
          <Button
            style={{ width: "110px", padding: "10px" }}
            variant="outlined"
            color="primary"
            onClick={handleLoginButton}
          >
            LOGIN
          </Button>
          <Button
            style={{
              width: "110px",
              marginTop: "10px",
              padding: "10px",
            }}
            variant="outlined"
            color="primary"
            onClick={handleRegButton}
          >
            SignUp
          </Button>
        </div>
      </Drawer>

      <Box
        sx={{
          bgcolor: "white",
          height: "60vh",
          width: "450px",
          marginTop: "150px",
          marginLeft: "340px",
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
              {/* {loginError && (
                <h5 style={{ color: "red", marginLeft: "80px" }}>
                  {loginError}
                </h5>
              )} */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px",
                  marginLeft: "80px",
                  width: "300px",
                  alignItems: "baseline",
                }}
              >
                <p> Do you have an account?</p>
                <h4 style={{ color: "#0000FF" }} onClick={handleRegButton}>
                  {" "}
                  Sign Up
                </h4>
              </div>
            </Box>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default LogInPage;
