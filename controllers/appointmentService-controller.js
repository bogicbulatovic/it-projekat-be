import appointmentServiceRepository from "../repositories/appointmentService-repository.js";

async function getAllAppointmentServices(request, response) {
  try {
    const all = await appointmentServiceRepository.getAll();
    response.status(200).send(all);
  } catch (error) {
    response.status(500).send({
      message: "Error fetching appointment services",
      error: error.message,
    });
  }
}

async function getAppointmentServiceById(request, response) {
  try {
    const appointmentService = await appointmentServiceRepository.getOne(
      Number(request.params.id)
    );
    if (appointmentService) {
      response.status(200).send(appointmentService);
    } else {
      response.status(404).send({ message: "Appointment Service not found" });
    }
  } catch (error) {
    response.status(500).send({
      message: "Error fetching appointment service",
      error: error.message,
    });
  }
}

async function createAppointmentService(request, response) {
  try {
    const appointmentServiceData = request.body;

    // Basic validation to check if required fields are present
    if (
      !appointmentServiceData.appointment_id ||
      !appointmentServiceData.service_id
    ) {
      return response.status(400).send({
        message: "Missing required fields: appointment_id and service_id",
      });
    }

    const appointmentService = await appointmentServiceRepository.create(
      appointmentServiceData
    );
    response.status(201).send(appointmentService);
  } catch (error) {
    response.status(500).send({
      message: "Error creating appointment service",
      error: error.message,
    });
  }
}

async function updateAppointmentService(request, response) {
  try {
    const appointmentServiceData = request.body;
    const updatedAppointmentService = await appointmentServiceRepository.update(
      Number(request.params.id),
      appointmentServiceData
    );

    if (updatedAppointmentService.success) {
      response.status(200).send(updatedAppointmentService.result);
    } else {
      response.status(404).send({ message: "Appointment Service not found" });
    }
  } catch (error) {
    response.status(500).send({
      message: "Error updating appointment service",
      error: error.message,
    });
  }
}

async function removeAppointmentService(request, response) {
  try {
    const result = await appointmentServiceRepository.remove(
      Number(request.params.id)
    );

    if (result.success) {
      response
        .status(200)
        .send({ message: "Appointment Service successfully deleted" });
    } else {
      response.status(404).send({ message: "Appointment Service not found" });
    }
  } catch (error) {
    response.status(500).send({
      message: "Error removing appointment service",
      error: error.message,
    });
  }
}

export default {
  getAllAppointmentServices,
  getAppointmentServiceById,
  createAppointmentService,
  updateAppointmentService,
  removeAppointmentService,
};
