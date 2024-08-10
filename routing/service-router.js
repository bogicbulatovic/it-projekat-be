import { Router } from "express";
import serviceController from "../controllers/service-controller.js";

const serviceRouter = Router();

serviceRouter
  .route("")
  .get(serviceController.getAllServices)
  .post(serviceController.createService);

serviceRouter
  .route("/:id")
  .get(serviceController.getServiceById)
  .put(serviceController.updateService)
  .delete(serviceController.removeService);

export default serviceRouter;
