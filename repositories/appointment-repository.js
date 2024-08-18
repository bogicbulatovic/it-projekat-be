import { dbConfig } from "../common/db-config.js";
import Appointment from "../models/appointment-model.js";

const appointmentRepository = dbConfig.getRepository(Appointment);

async function getAll() {
  try {
    const result = await appointmentRepository.find({
      relations: ["patient", "dentist"], // Pridruži pacijenta i zubara terminima
    });
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getOne(id) {
  try {
    const result = await appointmentRepository.findOne({
      where: { id },
      relations: ["patient", "dentist"], // Pridruži pacijenta i zubara za pojedinačni termin
    });
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function create(appointment) {
  try {
    const result = await appointmentRepository.insert(appointment);
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
