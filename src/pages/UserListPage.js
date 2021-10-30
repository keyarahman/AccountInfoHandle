import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers, deleteUser } from "../redux/action";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
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
import Container from "@mui/material/Container";
import { AccountBox, Group, AccountBalance } from "@mui/icons-material";

const drawerWidth = 240;

const UserListPage = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userData);
  console.log(users);

  const handleDelete = (id) => {
    if (window.confirm("are you sure wanted to delete the user?")) {
      dispatch(deleteUser(id));
    }
  };

  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  let history = useHistory();

  const handleOnClick = (i) => {
    if (i === 0) {
      history.push("/adminDashboard");
    }
    if (i === 1) {
      history.push("/userList");
    }
    if (i === 2) {
      history.push("/accountList");
    }
  };
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
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Admin Dashboard
            </Typography>
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
          <List style={{ marginTop: "20px" }}>
            {["Profile", "Users", "Accounts"].map((text, index) => (
              <ListItem button key={index} onClick={() => handleOnClick(index)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <AccountBox /> : <Group />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="container"
          sx={{ flex: 1, bgcolor: "#F5F5F5", height: "100%", width: "100%" }}
          noValidate
          autoComplete="off"
        >
          <div>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                marginTop: "100px",
                alignItems: "flex-start",
              }}
            ></div>
            <Container maxWidth="md">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  padding: ".1rem",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => history.push("/addUser")}
                >
                  Add user
                </Button>
              </div>

              <TableContainer sx={{}} component={Paper}>
                <Table sx={{}} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "white" }}>
                      <TableCell align="center">Title</TableCell>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Phone</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users &&
                      users.map((user) => (
                        <TableRow
                          key={user.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {user.title}
                          </TableCell>
                          <TableCell align="center">
                            {user.name} {user.last_name}
                          </TableCell>

                          <TableCell align="center">{user.phone}</TableCell>
                          <TableCell align="center">{user.email}</TableCell>
                          <TableCell align="center">
                            <div>
                              <Button
                                variant="contained"
                                onClick={() =>
                                  history.push(`/editUser/${user.id}`)
                                }
                                size="small"
                                color="primary"
                                style={{ marginRight: "10px" }}
                              >
                                Edit
                              </Button>

                              <Button
                                variant="contained"
                                color="error"
                                onClick={() => handleDelete(user.id)}
                                size="small"
                              >
                                Delete
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default UserListPage;
