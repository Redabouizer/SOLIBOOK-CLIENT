import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentsList from './Appointments/AppointmentsList';
import AppointmentDetails from './Appointments/AppointmentDetails';
import '../../../../public/CSS/Clients/Profil/Appointments.css';
import Swal from 'sweetalert2';
import { getTokenWithExpiration } from "../../Auth/Session";
import appConfig from "../../../config/appConfig";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authToken = getTokenWithExpiration("token");

    if (!authToken) {
      Swal.fire({
        title: 'Authentication Required',
        text: 'Please log in to access your profile.',
        icon: 'warning',
      });
      setLoading(false);
      return;
    }

    axios.get(`${appConfig.baseurlAPI}/profile`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    })
      .then(response => {
        const userId = response.data.data.id;

        return axios.get(`${appConfig.baseurlAPI}/appointments/${userId}`, {
          headers: { 'Authorization': `Bearer ${authToken}` }
        });
      })
      .then(response => {
        if (response.data.success) {
          console.log("Fetched appointments:", response.data.data);
          setAppointments(response.data.data);
        } else {
          console.error("Error: No appointments found");
          Swal.fire({
            title: 'No Appointments Found',
            text: 'You have no appointments scheduled.',
            icon: 'info',
          });
        }
        setLoading(false);
      })
      .catch(error => {
        Swal.fire({
          title: 'Error',
          text: `Failed to fetch data: ${error.response ? error.response.data.message : error.message}`,
          icon: 'error',
        });
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Rendez-vous</h1>
        <div className="flex gap-8">
          <AppointmentsList
            appointments={appointments}
            onSelectAppointment={setSelectedAppointment}
            selectedAppointmentId={selectedAppointment?.appointment_id}
          />
          {selectedAppointment && (
            <AppointmentDetails appointment={selectedAppointment} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Appointments;
