import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Rating", // Name of the entity
  tableName: "ratings", // Name of the database table
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
    rating: {
      type: "int",
      nullable: true,
      default: null,
    },
    comment: {
      type: "text",
      nullable: true,
      default: null,
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
