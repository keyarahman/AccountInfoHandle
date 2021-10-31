import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers, deleteUser } from "../redux/Action/userAction";
import { useHistory } from "react-router-dom";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userData);
  let history = useHistory();
  const handleDelete = (id) => {
    if (window.confirm("are you sure wanted to delete the user?")) {
      dispatch(deleteUser(id));
    }
  };

  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  return (
    <div>
      <div
        style={{
          marginTop: "100px",
          marginLeft: "650px",
          paddingBottom: "5px",
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

      <TableContainer
        sx={{ width: "900px", marginLeft: "200px" }}
        component={Paper}
      >
        <Table
          sx={{
            width: "900px",
            height: "200px",
          }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "green" }}>
              <TableCell>Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Details</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell align="center">{user.name}</TableCell>
                  <TableCell align="center">{user.details}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined  button group"
                    >
                      <Button
                        style={{ marginRight: "4px" }}
                        color="secondary"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        onClick={() => history.push(`/editUser/${user.id}`)}
                        color="primary"
                      >
                        Edit
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserDashboard;
