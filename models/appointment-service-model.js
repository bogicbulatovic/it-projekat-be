import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "AppointmentService", // Name of the entity
  tableName: "appointment_services", // Name of the database table
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    appointment_id: {
      type: "int",
      nullable: false,
    },
    service_id: {
      type: "int",
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
