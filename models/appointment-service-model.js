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
  relations: {
    appointment: {
      type: "many-to-one",
      target: "Appointment", // Referencing the Appointment entity
      joinColumn: {
        name: "appointment_id", // Foreign key in this table
      },
      onDelete: "CASCADE", // When an Appointment is deleted, delete related AppointmentService records
    },
    service: {
      type: "many-to-one",
      target: "Service", // Referencing the Service entity
      joinColumn: {
        name: "service_id", // Foreign key in this table
      },
      onDelete: "CASCADE", // When a Service is deleted, delete related AppointmentService records
    },
  },
});
