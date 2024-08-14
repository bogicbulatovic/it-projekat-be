import ratingRepository from "../repositories/rating-repository.js";

async function getAllRatings(request, response) {
  const all = await ratingRepository.getAll();
  response.send(all);
}

async function getRatingById(request, response) {
  const rating = await ratingRepository.getOne(Number(request.params.id));
  response.send(rating);
}

async function createRating(request, response) {
  try {
    const ratingData = request.body;
    if (ratingData.rating < 1 || ratingData.rating > 5) {
      return response
        .status(400)
        .send({ message: "Rating must be between 1 and 5" });
    }
    const rating = await ratingRepository.create(ratingData);
    response.status(201).send(rating);
  } catch (error) {
    response.status(500).send({ message: "Error creating rating", error });
  }
}

async function updateRating(request, response) {
  const rating = await ratingRepository.update(request.params.id, request.body);

  response.send(rating);
}

async function removeRating(request, response) {
  const rating = await ratingRepository.remove(request.params.id);
  response.send(rating);
}

export default {
  getAllRatings,
  getRatingById,
  createRating,
  updateRating,
  removeRating,
};
