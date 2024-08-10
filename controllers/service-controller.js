import serviceRepository from "../repositories/service-repository.js";

async function getAllServices(request, response) {
  const all = await serviceRepository.getAll();
  response.send(all);
}

async function getServiceById(request, response) {
  const service = await serviceRepository.getOne(Number(request.params.id));
  response.send(service);
}

async function createService(request, response) {
  const service = await serviceRepository.create(request.body);
  response.send(service);
}

async function updateService(request, response) {
  const service = await serviceRepository.update(
    request.params.id,
    request.body
  );

  response.send(service);
}

async function removeService(request, response) {
  const service = await serviceRepository.remove(request.params.id);
  response.send(service);
}

export default {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  removeService,
};
