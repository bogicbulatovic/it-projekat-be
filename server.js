import express from "express";
import serviceRouter from "./routing/service-router.js";
import userRouter from "./routing/user-router.js";

import { dbConfig } from "./common/db-config.js";

const app = express();
app.use(express.json());

import cors from "cors";

app.use(cors());

// Routers
app.use("/services", serviceRouter);
app.use("/users", userRouter);

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
