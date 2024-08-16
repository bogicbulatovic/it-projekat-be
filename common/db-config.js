import { DataSource } from "typeorm";
import Service from "../models/service-model.js";
import Rating from "../models/rating-model.js";
import User from "../models/user-model.js";
import Appointment from "../models/appointment-model.js";
import AppointmentService from "../models/appointment-service-model.js";

const dbConfig = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "12345",
  database: "my_dentist",
  entities: [Service, Rating, User, Appointment, AppointmentService],
});

export { dbConfig };
