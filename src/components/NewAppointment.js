import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const initialState = {
    appointment: {
        petName: '',
        owner: '',
        appointmentDate: '',
        appointmentTime: '',
        symptoms: '',
    },
    error: false,
}

class NewAppointmentComponent extends Component {
    
    state = {
        ...initialState,
    };

    //Handle when users type on inputs field
    handleChange = e => {
        //Modifying state to set form fields value
        this.setState({
            appointment: {
                ...this.state.appointment,
                [e.target.name]: e.target.value,
            },
        })
    }

    //Handle when users submit form
    handleSubmit = e => {
        e.preventDefault();

        //Getting state value
        const {
            petName,
            owner,
            appointmentDate,
            appointmentTime,
            symptoms
        } = this.state.appointment;

        //Validating state value

        if (petName === '' || owner === '' || appointmentDate === '' || appointmentTime === '' || symptoms === '') {
            this.setState({
                error: true,
            });
            return;
        }

        //Generate uuid boject
        const newAppointment = {
            ...this.state.appointment,
        };
        newAppointment.id = uuid();
        
        //Add appointment to App's state
        this.props.createNewAppointment(newAppointment)

        //Put in the state the initial state
        this.setState({
            ...initialState,
        });
    }

    render() { 

        const {error} = this.state;

        return (
            <div className="card mt-16 py-16">
                <div className="card-body">
                    <h2 className="card-title text-center mb-16">
                        Fill the form to arrange a new appointment
                    </h2>
                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
                    
                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Pet name
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    id="petName"
                                    type="text"
                                    className="form-control"
                                    placeholder="Pet name"
                                    name="petName"
                                    onChange={
                                        this.handleChange
                                    }
                                    value={this.state.appointment.petName}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Owner name
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Owner name"
                                    name="owner"
                                    onChange={
                                        this.handleChange
                                    }
                                    value={this.state.appointment.owner}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="appointmentDate"
                                    onChange={
                                        this.handleChange
                                    }
                                    value={this.state.appointment.appointmentDate}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="appointmentTime"
                                    onChange={
                                        this.handleChange
                                    }
                                    value={this.state.appointment.appointmentTime}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Symptoms
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="symptoms"
                                    placeholder="Describe your pet's symptoms"
                                    onChange={
                                        this.handleChange
                                    }
                                    value={this.state.appointment.symptoms}
                                ></textarea>
                            </div>
                        </div>
                        <input type="submit" className="py-8 mt-8 btn btn-success btn-block" value="Send" />
                    </form>
                </div>
            </div>
        );
    }
}

NewAppointmentComponent.propTypes = {
    createNewAppointment: PropTypes.func.isRequired,
};

export default NewAppointmentComponent;