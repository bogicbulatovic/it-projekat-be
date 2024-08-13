import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "User", // Name of the entity
  tableName: "users", // Name of the database table
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
      length: 20,
      nullable: false,
    },
    email: {
      type: "varchar",
      length: 50,
      nullable: false,
      unique: true,
      default: "patient",
    },
    password: {
      type: "varchar",
      length: 255,
      nullable: false,
      select: false,
    },
    role: {
      type: "enum",
      enum: ["admin", "dentist", "patient"],
      nullable: false,
    },
    created_at: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    updated_at: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
      onUpdate: "CURRENT_TIMESTAMP",
    },
  },
});
