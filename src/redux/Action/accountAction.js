import * as types from "../actionType";
import axios from "axios";

const ACCOUNT_API =
  "http://ec2-3-9-177-139.eu-west-2.compute.amazonaws.com/api/accounts";
const API =
  "http://ec2-3-9-177-139.eu-west-2.compute.amazonaws.com/api/account";

const getAccounts = (accounts) => ({
  type: types.GET_ACCOUNTS,
  payload: accounts,
});
const get_an_account = (account) => ({
  type: types.GET_AN_ACCOUNT,
  payload: account,
});

export const loadAccounts = () => {
  let token = localStorage.getItem("userToken");
  console.log(token);
  return function (dispatch) {
    try {
      axios
        .get(ACCOUNT_API, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("responseData", res);
          dispatch(getAccounts(res.data));
        })
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log("error in getting order data : ", error);
    }
  };
};

export const getAnAccount = (id) => {
  return function (dispatch) {
    let token = localStorage.getItem("userToken");
    axios
      .get(`${API}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("responseData", res.data.account.transactions);
        dispatch(get_an_account(res.data.account.transactions));
      })
      .catch((error) => console.log("error", error));
  };
};
