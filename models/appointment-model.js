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
    patient_id: {
      type: "int",
      nullable: false,
    },
    dentist_id: {
      type: "int",
      nullable: false,
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
});
