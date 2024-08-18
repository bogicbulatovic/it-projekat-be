import { dbConfig } from "../common/db-config.js";
import AppointmentService from "../models/appointment-service-model.js";

const appointmentServiceRepository = dbConfig.getRepository(AppointmentService);

async function getAll() {
  try {
    const result = await appointmentServiceRepository.find({
      relations: ["appointment", "service"], // Include relations to fetch associated data
    });
    return result;
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: err.message,
    };
  }
}

async function getOne(id) {
  try {
    const result = await appointmentServiceRepository.findOne({
      where: { id },
      relations: ["appointment", "service"], // Include relations to fetch associated data
    });
    return result;
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: err.message,
    };
  }
}

async function create(appointmentService) {
  try {
    // Ensure that the related entities exist before inserting
    const result = await appointmentServiceRepository.save(appointmentService); // Use save instead of insert to handle relations
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
    const existingRecord = await appointmentServiceRepository.findOne({
      where: { id },
    });
    if (!existingRecord) {
      return { success: false, message: "Record not found" };
    }

    // Update properties
    Object.assign(existingRecord, appointmentService);

    const result = await appointmentServiceRepository.save(existingRecord); // Use save to handle updates and relations
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
