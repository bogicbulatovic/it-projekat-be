import appointmentRepository from "../repositories/appointment-repository.js";

async function getAllAppointments(request, response) {
  const all = await appointmentRepository.getAll();
  response.send(all);
}

async function getAppointmentById(request, response) {
  const appointment = await appointmentRepository.getOne(
    Number(request.params.id)
  );
  response.send(appointment);
}

async function createAppointment(request, response) {
  const appointment = await appointmentRepository.create(request.body);
  response.send(appointment);
}

async function updateAppointment(request, response) {
  const appointment = await appointmentRepository.update(
    request.params.id,
    request.body
  );

  response.send(appointment);
}

async function removeAppointment(request, response) {
  const appointment = await appointmentRepository.remove(request.params.id);
  response.send(appointment);
}

export default {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  removeAppointment,
};
