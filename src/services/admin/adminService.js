import http from "../httpServices";
import config from "../../config.json";

export function register(user) {
  return http.post(config.apiUrl + "/admin/register", {
    name: user.name,
    email: user.email,
    password: user.password,
    password_confirmation: user.password
  });
}
