import React from 'react';

const AppointmentDetails = ({ appointment }) => {
  const getStatusButton = () => {
    switch (appointment.status) {
      case 'confirmed':
        return <button className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-800">Confirmé</button>;
      case 'canceled':
        return <button className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-red-100 text-red-800">Annulé</button>;
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 bg-white rounded-xl overflow-hidden shadow-sm">
      <div className="relative h-48">
        <img 
          src={appointment.salon.image || '/default-salon.jpg'} 
          alt={appointment.salon.name} 
          className="w-full h-full object-cover"
        />
        <h2 className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent text-white text-2xl">
          {appointment.salon.name}
        </h2>
      </div>

      <div className="p-6">
        <div className="text-lg font-semibold text-gray-900 mb-1">
          {new Date(appointment.appointment_dat).toLocaleDateString('fr-FR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })} à {new Date(appointment.appointment_dat).toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>

        <div className="text-gray-500 text-sm mb-6">
          Durée: {appointment.service.duration} minutes
        </div>

        {getStatusButton()}

        <div className="mt-6 space-y-4 border-t border-gray-100 pt-6">
          <div className="flex gap-3 pb-4 border-b border-gray-100">
            <span className="text-xl">📅</span>
            <div>
              <h3 className="font-medium">Remarques</h3>
              <p className="text-sm text-gray-600">{appointment.service?.description || 'Aucune remarque pour ce rendez-vous.'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
