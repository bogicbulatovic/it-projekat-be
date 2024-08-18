import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Appointment", // Name of the entity
  tableName: "appointments", // Name of the database table
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    total_price: {
      type: "decimal",
      precision: 10,
      scale: 2,
      nullable: false,
    },
    created_at: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    date: {
      type: "timestamp",
      nullable: false,
    },
    updated_at: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
      onUpdate: "CURRENT_TIMESTAMP",
    },
  },
  relations: {
    patient: {
      type: "many-to-one",
      target: "User",
      joinColumn: {
        name: "patient_id",
      },
      nullable: false,
      onDelete: "CASCADE",
    },
    dentist: {
      type: "many-to-one",
      target: "User",
      joinColumn: {
        name: "dentist_id",
      },
      nullable: false,
      onDelete: "CASCADE",
    },
  },
});
