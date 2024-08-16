import { Router } from "express";
import appointmentServiceController from "../controllers/appointmentService-controller.js";

const appointmentServiceRouter = Router();

appointmentServiceRouter
  .route("")
  .get(appointmentServiceController.getAllAppointmentServices)
  .post(appointmentServiceController.createAppointmentService);

appointmentServiceRouter
  .route("/:id")
  .get(appointmentServiceController.getAppointmentServiceById)
  .put(appointmentServiceController.updateAppointmentService)
  .delete(appointmentServiceController.removeAppointmentService);

export default appointmentServiceRouter;
