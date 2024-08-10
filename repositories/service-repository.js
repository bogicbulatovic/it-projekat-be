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

export default { getAll };
