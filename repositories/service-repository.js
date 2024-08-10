import { dbConfig } from "../common/db-config.js";
import Service from "../models/service-model.js";

const serviceRepository = dbConfig.getRepository(Service);

async function getAll() {
  try {
    const result = await serviceRepository.find(); // same as SELECT * FROM services
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getOne(id) {
  try {
    const result = await serviceRepository.findOneBy({ id }); // SELECT * FROM services WHERE ID = X
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function create(service) {
  try {
    const result = await serviceRepository.insert(service); // INSERT INTO services...
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

async function update(id, service) {
  try {
    const result = await serviceRepository.update({ id }, service);
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
    const result = await serviceRepository.delete({ id });
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
