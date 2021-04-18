import axios from "axios";
import store from "../store";
import { LOGOUT } from "../actions/types";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 intercept any error responses from api
 and check if token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout user if token has expired
**/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
