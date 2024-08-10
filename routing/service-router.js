import { Router } from "express";
import serviceController from "../controllers/service-controller.js";

const serviceRouter = Router();

serviceRouter.route("").get(serviceController.getAllServices);

export default serviceRouter;
