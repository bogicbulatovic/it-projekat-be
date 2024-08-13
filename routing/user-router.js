import { Router } from "express";
import userController from "../controllers/user-controller.js";

const userRouter = Router();

userRouter
  .route("")
  .get(userController.getAllUsers)
  .post(userController.createUser);

userRouter
  .route("/:id")
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.removeUser);

export default userRouter;
