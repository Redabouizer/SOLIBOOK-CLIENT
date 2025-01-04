import React from 'react';
import AppointmentCard from './AppointmentCard';

const AppointmentsList = ({ appointments, onSelectAppointment, selectedAppointmentId }) => {
  if (appointments.length === 0) {
    return (
      <div className="appointment-section mb-8">
        <h2 className="text-base font-semibold text-gray-900 mb-4">Rendez-vous à venir</h2>
        <div className="no-appointments bg-white rounded-lg p-6 text-center">
          <div className="empty-icon text-3xl mb-4">📅</div>
          <h3 className="font-semibold text-gray-900 mb-2">Aucun rendez-vous à venir</h3>
          <p className="text-sm text-gray-500 mb-4">
            Vos rendez-vous à venir s'afficheront ici lorsque vous effectuez une réservation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="appointment-section mb-8">
      <h2 className="text-base font-semibold text-gray-900 mb-4">Rendez-vous à venir ({appointments.length})</h2>
      <div className="appointments-grid grid grid-cols-1 gap-3">
        {appointments.map((appointment, index) => (
          <AppointmentCard
            key={appointment.id || `${appointment.date}-${index}`}  // Fallback key if id is undefined
            appointment={appointment}
            onClick={() => onSelectAppointment(appointment)}
            isSelected={appointment.id === selectedAppointmentId}
          />
        ))}
      </div>
    </div>
  );
};

export default AppointmentsList;
