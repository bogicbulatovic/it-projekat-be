import { dbConfig } from "../common/db-config.js";
import Rating from "../models/rating-model.js";

const ratingRepository = dbConfig.getRepository(Rating);

async function getAll() {
  try {
    const result = await ratingRepository.find(); // same as SELECT * FROM ratings
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getOne(id) {
  try {
    const result = await ratingRepository.findOneBy({ id }); // SELECT * FROM ratings WHERE ID = X
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function create(rating) {
  try {
    const result = await ratingRepository.insert(rating); // INSERT INTO services...
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

async function update(id, rating) {
  try {
    const result = await ratingRepository.update({ id }, rating);
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
    const result = await ratingRepository.delete({ id });
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
