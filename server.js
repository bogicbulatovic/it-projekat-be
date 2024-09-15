import express from "express";
import serviceRouter from "./routing/service-router.js";
import ratingRouter from "./routing/rating-router.js";
import userRouter from "./routing/user-router.js";
import appointmentRouter from "./routing/appointment-router.js";
import appointmentServiceRouter from "./routing/appointmentService-router.js";
import authRouter from "./routing/auth-router.js";

import { dbConfig } from "./common/db-config.js";

const app = express();
app.use(express.json());

import cors from "cors";
import userController from "./controllers/user-controller.js";

app.use(cors());

app.use(express.urlencoded({ extended: true }));
// Routers
app.use("/", authRouter);
app.use("/services", serviceRouter);
app.use("/ratings", ratingRouter);
app.use("/users", userRouter);
app.use("/appointments", appointmentRouter);
app.use("/appointment-services", appointmentServiceRouter);

app.post("/upload-profile-img", userController.uploadProfileImg);
// Serve static files from the uploads folder
app.use("/uploads", express.static("uploads"));

// Error-handling middleware
app.use((err, req, res, next) => {
  if (err) {
    console.error(err.stack); // Log the error stack trace for debugging

    // Set response status code and send the error message
    res.status(500).json({
      message: err.message || "Internal Server Error",
      stack: process.env.NODE_ENV === "development" ? err.stack : {}, // Only show stack in development
    });
  }
});

dbConfig
  .initialize()
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log("Aww snap!", err);
  });

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
