import http from "../httpServices";
import config from "../../config.json";

export function register(user) {
  return http.post(config.apiUrl + "/user/register", {
    name: user.name,
    email: user.email,
    phone: user.phone,
    password: user.password,
    password_confirmation: user.password
  });
}
