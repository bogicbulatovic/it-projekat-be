import { Router } from "express";
import ratingController from "../controllers/rating-controller.js";

const ratingRouter = Router();

// Ruta za dobijanje svih ocena (GET) i kreiranje nove ocene (POST)
ratingRouter
  .route("/")
  .get(ratingController.getAllRatings) // Dohvati sve ocene
  .post(ratingController.createRating); // Kreiraj novu ocenu

// Ruta za rad sa specifičnom ocenom po ID-u (GET, PUT, DELETE)
ratingRouter
  .route("/:id")
  .get(ratingController.getRatingById) // Dohvati ocenu po ID-u
  .put(ratingController.updateRating) // Ažuriraj ocenu po ID-u
  .delete(ratingController.removeRating); // Obriši ocenu po ID-u

export default ratingRouter;
