import React, {Component} from 'react';
import './bootstrap.min.css';
import HeaderComponent from './components/HeaderComponent';
import NewAppointmentComponent from './components/NewAppointment';
import AppointmentsListComponent from './components/AppointmentsList';

class App extends Component {

  state = {
    appointments: [],
  };

  //When application starts
  componentDidMount(){
    const appointmentsLS = localStorage.getItem('appointment');
    if (appointmentsLS) {
      this.setState({
        appointments: JSON.parse(appointmentsLS),
      });
    }
  };

  //When application updates
  componentDidUpdate(){
    localStorage.setItem('appointment', JSON.stringify(this.state.appointments));
  };

  createNewAppointment = data => {
    //Copy current state
    const appointments = [
      ...this.state.appointments,
      data,
    ];
    //Add new state
    this.setState({
      appointments,
    })
  };

  //Deleting appointments from state
  deleteAppointment = id => {
    //Copy current state
    const initialAppointments = [
      ...this.state.appointments,
    ];
    //Use filter to select element
    const appointments = initialAppointments.filter( appointment => appointment.id !== id);
    
    //Update state
    this.setState({
      appointments,
    });
}

  render() {
    return ( 
      <div className='container-fluid'>
        <HeaderComponent
          title='Appointments'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointmentComponent 
              createNewAppointment={this.createNewAppointment}
            />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <AppointmentsListComponent
              appointments = {this.state.appointments}
              deleteAppointment={this.deleteAppointment}
            />
          </div>
        </div>
      </div>
    )
  };

}

export default App;