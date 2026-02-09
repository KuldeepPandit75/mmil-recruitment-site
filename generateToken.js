import jwt from "jsonwebtoken";

// TEST SECRET - works immediately
const secret = "mmilrecruitment";

const token = jwt.sign(
  { email: "nandinimishra105@gmail.com" },
  secret,
  { expiresIn: "7d" }
);

console.log("JWT Token:", token);
