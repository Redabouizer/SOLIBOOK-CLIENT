import React from 'react';

function UserDetails({ userData }) {
  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-4">
      {/* Loop through userData and display relevant fields */}
      {Object.entries(userData).map(([key, value]) => (
        // Display known user details
        (key !== 'name' && key !== 'email' && key !== 'created_at' && key !== 'updated_at') ? null : (
          <div key={key} className="border-b pb-4">
            <div className="text-sm text-gray-600 mb-1">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
            <div>{value || 'N/A'}</div>
          </div>
        )
      ))}
    </div>
  );
}

export default UserDetails;
