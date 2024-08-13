import userRepository from "../repositories/user-repository.js";

async function getAllUsers(request, response) {
  const allUsers = await userRepository.getAll();
  response.send(allUsers);
}

async function getUserById(request, response) {
  const user = await userRepository.getOne(Number(request.params.id));
  response.send(user);
}

async function createUser(request, response) {
  const user = await userRepository.create(request.body);
  response.send(user);
}

async function updateUser(request, response) {
  const updatedUser = await userRepository.update(
    request.params.id,
    request.body
  );
  response.send(updatedUser);
}

async function removeUser(request, response) {
  const deletedUser = await userRepository.remove(request.params.id);
  response.send(deletedUser);
}

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  removeUser,
};
