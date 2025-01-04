import React from 'react';
import clsx from 'clsx';

const AppointmentCard = ({ appointment, onClick, isSelected }) => {
  return (
    <div
      className={clsx(
        'flex gap-3 bg-white p-3 rounded-lg cursor-pointer mb-3 border-2 transition-all',
        isSelected ? 'border-indigo-500' : 'border-transparent'
      )}
      onClick={onClick}
    >
      <img
        src={appointment.salon.image || '/default-salon.jpg'}
        alt={appointment.salon.name}
        className="w-20 h-20 rounded-md object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-1 text-sm">
          {appointment.salon.name}
        </h3>
        <div className="text-gray-500 text-xs">
          <div>
            {new Date(appointment.appointment_dat).toLocaleDateString('fr-FR', {
              weekday: 'short',
              day: 'numeric',
              month: 'long',
            })} à {new Date(appointment.appointment_dat).toLocaleTimeString('fr-FR', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
          <div className="mt-1 font-medium">{appointment.service.price} MAD</div>
        </div>
        {appointment.status === 'canceled' && (
          <div className="text-indigo-500 text-xs mt-2 cursor-pointer">
            Reprendre rendez-vous
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;
