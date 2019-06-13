import React from 'react';
import PropTypes from 'prop-types';

const AppointmentComponent = ({appointment, deleteAppointment}) => (
    <div className="media mt-8">
        <div className="media-body">
            <h3 className="mt-0">
                {appointment.petName}
            </h3>
            <p className="card-text">
                <span>Owner: </span>{appointment.owner}
            </p>
            <p className="card-text">
            <span>Date: </span>{appointment.appointmentDate}
            </p>
            <p className="card-text">
                <span>Time: </span>{appointment.appointmentTime}
            </p>
            <p className="card-text">
                <span>Symptoms: </span>
            </p>
            <p className="card-text">
                {appointment.symptoms}
            </p>
            <div className="btn btn-danger" onClick={() => deleteAppointment(appointment.id)}>
                Delete &times;
            </div>
        </div>
    </div>
);

AppointmentComponent.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired,
};

export default AppointmentComponent;