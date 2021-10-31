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
import { getAnAccount } from "../redux/Action/accountAction";
import { useHistory, useParams } from "react-router-dom";
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

const AccountDetails = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    dispatch(getAnAccount(id));
  }, []);

  const { account } = useSelector((state) => state.accountData);
  console.log(account);

  const handleOnClick = (i) => {
    if (i === 0) {
      history.push("/Dashboard");
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
          sx={{ flex: 1, bgcolor: "#F5F5F5", height: "100vh" }}
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
            >
              <Container maxWidth="md">
                <div>
                  <h1>Account Holder</h1>
                  <TableContainer sx={{}} component={Paper}>
                    <Table sx={{}} size="small">
                      <TableBody>
                        <p>Name:{account.id}</p>
                        <p>Account Number: {account.account_number}</p>
                        <p>Account Type: {account.account_type}</p>
                        <h1>Email: {account.name}</h1>
                        <p>Phone: {account.phone} </p>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",

                    padding: "1rem",
                  }}
                >
                  <h1>Account Statement</h1>
                </div>

                <TableContainer sx={{}} component={Paper}>
                  <Table sx={{}} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow sx={{ backgroundColor: "white" }}>
                        <TableCell align="center">Date</TableCell>

                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Amount</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {account.transactions &&
                        account.transactions.map((statement) => (
                          <TableRow
                            key={statement.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell align="center">
                              {statement.date}
                            </TableCell>
                            <TableCell align="center">
                              {statement.status}
                            </TableCell>
                            <TableCell align="center">
                              {"\u00A3"}
                              {statement.amount}
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

export default AccountDetails;
