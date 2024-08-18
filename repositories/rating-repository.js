import { dbConfig } from "../common/db-config.js";
import Rating from "../models/rating-model.js";

const ratingRepository = dbConfig.getRepository(Rating);

async function getAll() {
  try {
    // Fetch all ratings including related patient and dentist data
    const result = await ratingRepository.find({
      relations: ["patient", "dentist"],
    }); // SELECT * FROM ratings with JOIN on patient and dentist
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function getOne(id) {
  try {
    // Fetch a single rating by ID, including related patient and dentist data
    const result = await ratingRepository.findOne({
      where: { id },
      relations: ["patient", "dentist"],
    }); // SELECT * FROM ratings WHERE ID = X with JOIN on patient and dentist
    return result;
  } catch (err) {
    console.log(err);
  }
}

async function create(rating) {
  try {
    // Save the rating, including relationships
    const result = await ratingRepository.save(rating); // INSERT INTO ratings...
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
    // Update the rating by ID, including relationships
    const existingRating = await ratingRepository.findOneBy({ id });

    if (existingRating) {
      const result = await ratingRepository.save({
        ...existingRating,
        ...rating,
      });
      return {
        success: true,
        result,
      };
    } else {
      return {
        success: false,
        message: "Rating not found",
      };
    }
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  }
}

async function remove(id) {
  try {
    // Remove the rating by ID
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
