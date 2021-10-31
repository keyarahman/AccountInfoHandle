import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/Action/userAction";

const EditUser = () => {
  let dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    first_name: "",
    last_name: "",
    phone: "",
  });
  const [error, setError] = useState("");
  let history = useHistory();
  let { id } = useParams();
  const { user } = useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      console.log(user);
      setData({
        ...user,
        title: user.title,
        first_name: user.name,
        last_name: user.last_name,
        phone: user.phone,
      });
    }
  }, [user]);
  const handleInputchange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!title || !first_name || !last_name || !phone) {
      setError("please fill up all the inputs");
    } else {
      setError("");
      dispatch(
        updateUser(
          data.title,
          data.first_name,
          data.last_name,
          data.phone,
          user.id
        )
      );
      history.push("/userList");
    }
  };

  const { title, first_name, last_name, phone } = data;
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
        <h1>Edit User</h1>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleUpdate}
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
            label="Phone"
            variant="standard"
            name="phone"
            value={phone}
            type="text"
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
            Update
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default EditUser;
