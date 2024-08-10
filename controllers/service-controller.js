import serviceRepository from "../repositories/service-repository.js";

async function getAllServices(request, response) {
  const all = await serviceRepository.getAll();
  response.send(all);
}

export default { getAllServices };
