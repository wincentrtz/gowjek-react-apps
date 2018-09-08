import http from "../httpServices";
import config from "../../config.json";

export function register(user) {
  return http.post(config.apiUrl + "/driver/register", {
    name: user.name,
    email: user.email,
    phone: user.phone,
    vehicle: user.vehicle,
    password: user.password,
    password_confirmation: user.password
  });
}
