import http from "../httpServices";
import config from "../../config.json";
// import jwtDecode from "jwt-decode";

http.setJwt(getJwt());

export function getJwt() {
  return localStorage.getItem("driver_token");
}
export function loginWithJwt(jwt) {
  localStorage.setItem("driver_token", jwt);
}

export async function driverLogin(email, password) {
  const { data } = await http.post(config.apiUrl + "/driver/login", {
    email: email,
    password: password
  });
  localStorage.setItem("driver_token", data.auth_token);
}

export function logout() {
  localStorage.removeItem("driver_token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("driver_token");
    return jwt;
  } catch (ex) {
    return null;
  }
}

export default {
  driverLogin,
  getCurrentUser,
  logout,
  loginWithJwt,
  getJwt
};
