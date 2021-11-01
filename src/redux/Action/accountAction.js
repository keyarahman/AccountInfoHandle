import * as types from "../actionType";
import axios from "axios";

const ACCOUNT_API = "https://eazm.co.uk/api/accounts";
const API = "https://eazm.co.uk/api/account";

const getAccounts = (accounts) => ({
  type: types.GET_ACCOUNTS,
  payload: accounts,
});
const get_an_account = (account, transactions) => ({
  type: types.GET_AN_ACCOUNT,
  payload: account,
  transactions: transactions,
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
        dispatch(
          get_an_account(
            res.data.account.account_holder,
            res.data.account.transactions
          )
        );
      })
      .catch((error) => console.log("error", error));
  };
};

const getCurrentDashboard = () => {};
