import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as types from "../redux/actionType";
import { AccountBox, Group, AccountBalance } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import profileImage from "../Images/images.png";
import { useDispatch, useSelector } from "react-redux";
const drawerWidth = 240;

const Dashboard = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState(null);

  const handleOnClick = (i) => {
    if (i == 0) {
      history.push("/Dashboard");
    }
    if (i == 1) {
      history.push("/userList");
    }
    if (i == 2) {
      history.push("/accountList");
    }
  };
  const handleClick = (i) => {
    if (i == 0) {
      history.push("/Dashboard");
    } else {
      history.push(`/personalAccount/${profileData.id}`);
    }
  };
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    let profile_ls = localStorage.getItem("profile");
    console.log(profile_ls);
    if (profile_ls) {
      profile_ls = JSON.parse(profile_ls);
      console.log(profile_ls);
      setProfileData(profile_ls);
    }
  }, []);

  if (!profileData) return null;
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          {profileData.role === "Admin" ? (
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                {profileData.name} Dashboard
              </Typography>
            </Toolbar>
          ) : (
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                {profileData.name} Dashboard
              </Typography>
            </Toolbar>
          )}
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
          {profileData.role == "Admin" ? (
            <List style={{ marginTop: "20px" }}>
              {["Profile", "Users", "Accounts"].map((text, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => handleOnClick(index)}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <AccountBox /> : <Group />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          ) : (
            <List style={{ marginTop: "20px" }}>
              {["Profile", "Accounts"].map((text, index) => (
                <ListItem button key={index} onClick={() => handleClick(index)}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <AccountBox /> : <Group />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          )}
        </Drawer>
        <Box
          component="container"
          sx={{ flex: 1, bgcolor: "#F5F5F5", height: "100vh" }}
          noValidate
          autoComplete="off"
        >
          <div
            style={{
              width: "1000px",
              height: "500px",
              backgroundColor: "white",
              margin: "100px",
              boxShadow: "0.1px 0.1px 1px ",
              flexDirection: "row",
              display: "flex",
            }}
          >
            <div style={{ margin: "30px", paddingTop: "30px" }}>
              <img
                style={{
                  width: "200px",
                  height: "200px",
                }}
                src={profileImage}
              />
            </div>

            <div
              style={{
                marginTop: "60px",
                padding: "20px",
                display: "flex",
                gap: "30px",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "30px",
                  width: "100%",
                }}
              >
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="First Name"
                  value={profileData.name}
                  style={{ flex: 1 }}
                ></TextField>

                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Last Name"
                  value={profileData.last_name}
                  style={{ flex: 1 }}
                />
              </div>

              <TextField
                disabled
                id="outlined-disabled"
                label="Phone Num"
                value={profileData.phone}
                style={{ width: "100%" }}
              />
              <TextField
                disabled
                id="outlined-disabled"
                label="Email"
                value={profileData.email}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
