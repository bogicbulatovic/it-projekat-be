import { dbConfig } from "../common/db-config.js";
import Appointment from "../models/appointment-model.js";

const appointmentRepository = dbConfig.getRepository(Appointment);

async function getAll() {
  try {
    const result = await appointmentRepository.find(); // same as SELECT * FROM appointments
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getOne(id) {
  try {
    const result = await appointmentRepository.findOneBy({ id }); // SELECT * FROM appointments WHERE ID = X
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function create(appointment) {
  try {
    const result = await appointmentRepository.insert(appointment); // INSERT INTO appointments...
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

async function update(id, appointment) {
  try {
    const result = await appointmentRepository.update({ id }, appointment);
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
    const result = await appointmentRepository.delete({ id });
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
