import { Router } from "express";
import ratingController from "../controllers/rating-controller.js";

const ratingRouter = Router();

ratingRouter
  .route("")
  .get(ratingController.getAllRatings)
  .post(ratingController.createRating);

ratingRouter
  .route("/:id")
  .get(ratingController.getRatingById)
  .put(ratingController.updateRating)
  .delete(ratingController.removeRating);

export default ratingRouter;
