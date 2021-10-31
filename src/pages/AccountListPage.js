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
import { loadAccounts } from "../redux/Action/accountAction";

const drawerWidth = 240;

const AccountListPage = () => {
  const dispatch = useDispatch();
  const { accounts } = useSelector((state) => state.accountData);

  useEffect(() => {
    dispatch(loadAccounts());
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
          sx={{ flex: 1, bgcolor: "#F5F5F5", height: "100%" }}
          noValidate
          autoComplete="off"
        >
          <div>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                paddingTop: "50px",

                alignItems: "flex-start",
              }}
            >
              <Container maxWidth="md">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <h1>Account List</h1>
                </div>

                <TableContainer sx={{}} component={Paper}>
                  <Table sx={{}} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow sx={{ backgroundColor: "white" }}>
                        <TableCell align="center" fontS>
                          Account Number
                        </TableCell>
                        <TableCell align="center">Account Type</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {accounts &&
                        accounts.map((account) => (
                          <TableRow
                            key={account.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell align="center">
                              {account.account_number}
                            </TableCell>
                            <TableCell align="center">
                              {account.account_type}
                            </TableCell>
                            <TableCell align="center">
                              <div>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={() =>
                                    history.push(
                                      `/accountdetails/${account.id}`
                                    )
                                  }
                                  size="small"
                                >
                                  Details
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
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default AccountListPage;
