import appointmentRepository from "../repositories/appointment-repository.js";

async function getAllAppointments(request, response) {
  try {
    const all = await appointmentRepository.getAll();
    response.send(all);
  } catch (error) {
    response
      .status(500)
      .send({ message: "Error retrieving appointments", error });
  }
}

async function getAppointmentById(request, response) {
  try {
    const appointment = await appointmentRepository.getOne(
      Number(request.params.id)
    );
    if (!appointment) {
      return response.status(404).send({ message: "Appointment not found" });
    }
    response.send(appointment);
  } catch (error) {
    response
      .status(500)
      .send({ message: "Error retrieving appointment", error });
  }
}

async function createAppointment(request, response) {
  try {
    const appointment = await appointmentRepository.create(request.body);
    response.status(201).send(appointment);
  } catch (error) {
    response.status(500).send({ message: "Error creating appointment", error });
  }
}

async function updateAppointment(request, response) {
  try {
    const appointment = await appointmentRepository.update(
      Number(request.params.id),
      request.body
    );
    if (!appointment.success) {
      return response.status(404).send({ message: "Appointment not found" });
    }
    response.send(appointment);
  } catch (error) {
    response.status(500).send({ message: "Error updating appointment", error });
  }
}

async function removeAppointment(request, response) {
  try {
    const appointment = await appointmentRepository.remove(
      Number(request.params.id)
    );
    if (!appointment.success) {
      return response.status(404).send({ message: "Appointment not found" });
    }
    response.send({ message: "Appointment removed successfully" });
  } catch (error) {
    response.status(500).send({ message: "Error deleting appointment", error });
  }
}

export default {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  removeAppointment,
};
