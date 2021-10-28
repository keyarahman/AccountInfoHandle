import * as types from "./actionType";
import axios from "axios";

const USER_API = "http://localhost:5000/user";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeletd = () => ({
  type: types.DELETE_USER,
});
const userAdded = () => ({
  type: types.ADD_USER,
});
const editSingleUser = (user) => ({
  type: types.EDIT_SINGLE_USER,
  payload: user,
});
const userUpdated = () => ({
  type: types.UPDATE_USER,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(USER_API)
      .then((res) => {
        console.log("responseData", res);
        dispatch(getUsers(res.data));
      })
      .catch((error) => console.log("error", error));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${USER_API}/${id}`)
      .then((res) => {
        console.log("responseData", res);
        dispatch(userDeletd());
        dispatch(loadUsers());
      })
      .catch((error) => console.log("error", error));
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${USER_API}`, user)
      .then((res) => {
        console.log("responseData", res);
        dispatch(userAdded());
        dispatch(loadUsers());
      })
      .catch((error) => console.log("error", error));
  };
};
export const getSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${USER_API}/${id}`)
      .then((res) => {
        console.log("responseData", res);
        dispatch(editSingleUser(res.data));
      })
      .catch((error) => console.log("error", error));
  };
};

export const updateUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${USER_API}/${id}`, user)
      .then((res) => {
        console.log("responseData", res);
        dispatch(userUpdated());
      })
      .catch((error) => console.log("error", error));
  };
};
