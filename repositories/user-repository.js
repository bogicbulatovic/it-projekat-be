import { dbConfig } from "../common/db-config.js";
import User from "../models/user-model.js";

const userRepository = dbConfig.getRepository(User);

async function getAll() {
  try {
    const result = await userRepository.find(); // SELECT * FROM users
    return result;
  } catch (err) {
    console.error(err);
  }
}

async function getOne(id) {
  try {
    const result = await userRepository.findOneBy({ id }); // SELECT * FROM users WHERE id = X
    return result;
  } catch (err) {
    console.error(err);
  }
}

async function create(user) {
  try {
    const result = await userRepository.insert(user); // INSERT INTO users...
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

async function update(id, user) {
  try {
    const result = await userRepository.update({ id }, user); // UPDATE users SET ... WHERE id = X
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
    const result = await userRepository.delete({ id }); // DELETE FROM users WHERE id = X
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
