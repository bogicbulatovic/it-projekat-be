import { Router } from "express";
import userController from "../controllers/user-controller.js";
import adminMiddleware from "../middleware/admin-middleware.js";

const userRouter = Router();

userRouter
  .route("")
  .get(adminMiddleware, userController.getAllUsers)
  .post(adminMiddleware, userController.createUser);

userRouter
  .route("/:id")
  .get(adminMiddleware, userController.getUserById)
  .put(adminMiddleware, userController.updateUser)
  .delete(adminMiddleware, userController.removeUser);

export default userRouter;
