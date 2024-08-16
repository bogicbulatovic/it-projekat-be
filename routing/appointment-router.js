import { Router } from "express";
import appointmentController from "../controllers/appointment-controller.js";

const appointmentRouter = Router();

appointmentRouter
  .route("")
  .get(appointmentController.getAllAppointments)
  .post(appointmentController.createAppointment);

appointmentRouter
  .route("/:id")
  .get(appointmentController.getAppointmentById)
  .put(appointmentController.updateAppointment)
  .delete(appointmentController.removeAppointment);

export default appointmentRouter;
