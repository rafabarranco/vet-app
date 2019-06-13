import React from 'react';
import AppointmentComponent from './Appointment';
import PropTypes  from 'prop-types';

const AppointmentsListComponent = ({appointments, deleteAppointment}) => {

    const message = Object.keys(appointments).length === 0 ? 'There is no appointments to display' : 'Manage the appointments';

    return (
        <div className="card mt-8 py-16">
            <div className="card-body">
                <h2 className="card-title text-center">
                    {message}
                </h2>
                <div className="lista-citas">
                    {appointments.map( appointment => (
                        <AppointmentComponent
                            key={appointment.id}
                            appointment={appointment}
                            deleteAppointment={deleteAppointment}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};

AppointmentsListComponent.propTypes = {
    appointments: PropTypes.array.isRequired,
    deleteAppointment: PropTypes.func.isRequired,
};

export default AppointmentsListComponent;