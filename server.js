import express from "express";
import { dbConfig } from "./common/db-config.js";

const app = express();
app.use(express.json());

import cors from "cors";

app.use(cors());

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
