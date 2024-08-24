import { expressjwt } from "express-jwt";

const authMiddleware = expressjwt({
  secret: "secret",
  algorithms: ["HS256"],
  requestProperty: "userData",
});

export default authMiddleware;
