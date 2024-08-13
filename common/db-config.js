import { DataSource } from "typeorm";
import Service from "../models/service-model.js";
import User from "../models/user-model.js";

const dbConfig = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "12345",
  database: "my_dentist",
  entities: [Service, User],
});

export { dbConfig };
