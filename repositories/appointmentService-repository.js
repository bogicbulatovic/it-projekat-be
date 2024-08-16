import { dbConfig } from "../common/db-config.js";
import AppointmentService from "../models/appointment-service-model.js";

const appointmentServiceRepository = dbConfig.getRepository(AppointmentService);

async function getAll() {
  try {
    const result = await appointmentServiceRepository.find(); // same as SELECT * FROM appointmentServices
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getOne(id) {
  try {
    const result = await appointmentServiceRepository.findOneBy({ id }); // SELECT * FROM appointmentServices WHERE ID = X
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function create(appointmentService) {
  try {
    const result = await appointmentServiceRepository.insert(
      appointmentService
    ); // INSERT INTO services...
    return {
      success: true,
      result,
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
}

async function update(id, appointmentService) {
  try {
    const result = await appointmentServiceRepository.update(
      { id },
      appointmentService
    );
    return {
      success: true,
      result,
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
}

async function remove(id) {
  try {
    const result = await appointmentServiceRepository.delete({ id });
    return {
      success: true,
      result,
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
}

export default { getAll, getOne, create, update, remove };
