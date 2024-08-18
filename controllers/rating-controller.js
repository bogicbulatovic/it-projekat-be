import ratingRepository from "../repositories/rating-repository.js";

async function getAllRatings(request, response) {
  try {
    const all = await ratingRepository.getAll();
    response.status(200).send(all);
  } catch (error) {
    response.status(500).send({ message: "Error fetching ratings", error });
  }
}

async function getRatingById(request, response) {
  try {
    const rating = await ratingRepository.getOne(Number(request.params.id));
    if (rating) {
      response.status(200).send(rating);
    } else {
      response.status(404).send({ message: "Rating not found" });
    }
  } catch (error) {
    response.status(500).send({ message: "Error fetching rating", error });
  }
}

async function createRating(request, response) {
  try {
    const ratingData = request.body;

    // Validate rating value
    if (ratingData.rating < 1 || ratingData.rating > 5) {
      return response
        .status(400)
        .send({ message: "Rating must be between 1 and 5" });
    }

    // Additional validation for patient and dentist IDs could be added here

    const rating = await ratingRepository.create(ratingData);
    if (rating.success) {
      response.status(201).send(rating.result);
    } else {
      response
        .status(400)
        .send({ message: "Error creating rating", error: rating.message });
    }
  } catch (error) {
    response.status(500).send({ message: "Error creating rating", error });
  }
}

async function updateRating(request, response) {
  try {
    const ratingData = request.body;

    // Validate rating value
    if (ratingData.rating && (ratingData.rating < 1 || ratingData.rating > 5)) {
      return response
        .status(400)
        .send({ message: "Rating must be between 1 and 5" });
    }

    const rating = await ratingRepository.update(request.params.id, ratingData);
    if (rating.success) {
      response.status(200).send(rating.result);
    } else {
      response
        .status(404)
        .send({ message: "Rating not found", error: rating.message });
    }
  } catch (error) {
    response.status(500).send({ message: "Error updating rating", error });
  }
}

async function removeRating(request, response) {
  try {
    const rating = await ratingRepository.remove(request.params.id);
    if (rating.success) {
      response.status(200).send({ message: "Rating deleted successfully" });
    } else {
      response
        .status(404)
        .send({ message: "Rating not found", error: rating.message });
    }
  } catch (error) {
    response.status(500).send({ message: "Error deleting rating", error });
  }
}

export default {
  getAllRatings,
  getRatingById,
  createRating,
  updateRating,
  removeRating,
};
