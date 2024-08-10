import { DataSource } from "typeorm";

const dbConfig = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "12345",
  database: "my_dentist",
  entities: [],
});

export { dbConfig };
