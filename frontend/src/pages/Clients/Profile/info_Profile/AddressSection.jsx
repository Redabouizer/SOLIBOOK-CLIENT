import React, { useState } from 'react';
import { FaHome, FaBriefcase, FaPlus } from 'react-icons/fa';

function AddressSection() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [address, setAddress] = useState({ home: '', work: '' });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle address submission logic here
    console.log('New Address:', address);
    setShowAddForm(false); // Hide form after submission
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
      <h3 className="text-xl font-semibold mb-4">Mes adresses</h3>

      {/* Display Add Address form when showAddForm is true */}
      {showAddForm ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="home" className="block text-sm font-medium text-gray-700">
              Adresse Accueil
            </label>
            <input
              id="home"
              name="home"
              type="text"
              value={address.home}
              onChange={handleAddressChange}
              className="mt-1 p-2 border rounded-lg w-full"
              placeholder="Entrez l'adresse d'accueil"
              required
            />
          </div>

          <div>
            <label htmlFor="work" className="block text-sm font-medium text-gray-700">
              Adresse Professionnelle
            </label>
            <input
              id="work"
              name="work"
              type="text"
              value={address.work}
              onChange={handleAddressChange}
              className="mt-1 p-2 border rounded-lg w-full"
              placeholder="Entrez l'adresse professionnelle"
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Ajouter
            </button>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Annuler
            </button>
          </div>
        </form>
      ) : (
        // Display button to add address if form isn't showing
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center justify-center w-full p-3 border rounded-lg text-purple-600 hover:bg-purple-50"
        >
          <FaPlus className="mr-2" />
          <span>Ajouter une adresse</span>
        </button>
      )}
    </div>
  );
}

export default AddressSection;
