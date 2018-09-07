import http from "../httpServices";
import config from "../../config.json";
// import jwtDecode from "jwt-decode";

http.setJwt(getJwt());

export function getJwt() {
  return localStorage.getItem("token");
}
export function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export async function adminLogin(email, password) {
  const { data } = await http.post(config.apiUrl + "/admin/login", {
    email: email,
    password: password
  });
  localStorage.setItem("token", data.auth_token);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwt;
  } catch (ex) {
    return null;
  }
}

export default {
  adminLogin,
  getCurrentUser,
  logout,
  loginWithJwt,
  getJwt
};
