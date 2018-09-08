import http from "../httpServices";
import config from "../../config.json";
// import jwtDecode from "jwt-decode";

http.setJwt(getJwt());

export function getJwt() {
  return localStorage.getItem("user_token");
}
export function loginWithJwt(jwt) {
  localStorage.setItem("user_token", jwt);
}

export async function userLogin(email, password) {
  const { data } = await http.post(config.apiUrl + "/user/login", {
    email: email,
    password: password
  });
  localStorage.setItem("user_token", data.auth_token);
}

export function logout() {
  localStorage.removeItem("user_token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("user_token");
    return jwt;
  } catch (ex) {
    return null;
  }
}

export default {
  userLogin,
  getCurrentUser,
  logout,
  loginWithJwt,
  getJwt
};
