import React from 'react';

function UserInfo({ userData }) {
  if (!userData) {
    return <div>Loading...</div>;
  }

  const name = userData.name || 'N/A'; // Use full name if available

  return (
    <div className="flex items-center mb-6">
      <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-white text-3xl">
        {name ? name[0] : '?'} {/* Display the first letter of the name */}
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">
          {name} {/* Display the full name */}
        </h3>
        <p className="text-gray-500">{userData.email || 'N/A'}</p>
      </div>
    </div>
  );
}

export default UserInfo;
