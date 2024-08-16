import appointmentServiceRepository from "../repositories/appointmentService-repository.js";

async function getAllAppointmentServices(request, response) {
  const all = await appointmentServiceRepository.getAll();
  response.send(all);
}

async function getAppointmentServiceById(request, response) {
  const appointmentService = await appointmentServiceRepository.getOne(
    Number(request.params.id)
  );
  response.send(appointmentService);
}

async function createAppointmentService(request, response) {
  const appointmentService = await appointmentServiceRepository.create(
    request.body
  );
  response.send(appointmentService);
}

async function updateAppointmentService(request, response) {
  const appointmentService = await appointmentServiceRepository.update(
    request.params.id,
    request.body
  );

  response.send(appointmentService);
}

async function removeAppointmentService(request, response) {
  const appointmentService = await appointmentServiceRepository.remove(
    request.params.id
  );
  response.send(appointmentService);
}

export default {
  getAllAppointmentServices,
  getAppointmentServiceById,
  createAppointmentService,
  updateAppointmentService,
  removeAppointmentService,
};
