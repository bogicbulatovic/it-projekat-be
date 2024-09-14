import { Router } from "express";
import appointmentController from "../controllers/appointment-controller.js";
import authMiddleware from "../middleware/auth-middleware.js";

const appointmentRouter = Router();

appointmentRouter.use(authMiddleware);

// Ruta za dobijanje svih termina i kreiranje novog termina
appointmentRouter
  .route("")
  .get(appointmentController.getAllAppointments)
  .post(appointmentController.createAppointment);

// Ruta za rad sa specifičnim terminom (dobijanje, ažuriranje, brisanje)
appointmentRouter
  .route("/:id")
  .get(appointmentController.getAppointmentById)
  .put(appointmentController.updateAppointment)
  .delete(appointmentController.removeAppointment);

export default appointmentRouter;
