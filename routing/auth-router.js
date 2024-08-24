import { Router } from "express";
import userController from "../controllers/user-controller.js";

const authRouter = Router();

authRouter.route("/login").post(userController.login);
authRouter.route("/register").post(userController.register);

export default authRouter;
