import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default async function validateToken(token) {
  const userid = jwt.verify(token, process.env.SERVER_SECRET_SIGN);
  const user = User.findById(userid);
  return user;
}
