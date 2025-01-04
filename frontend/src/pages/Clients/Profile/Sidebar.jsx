// Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaCalendar, FaBriefcase, FaHeart, FaFile, FaCog } from 'react-icons/fa';

function Sidebar({ children }) {
  const location = useLocation();
  const menuItems = [
    { icon: FaUser, text: 'Profil', path: '/profile' },
    { icon: FaCalendar, text: 'Rendez-vous', path: '/appointments' },
    //{ icon: FaBriefcase, text: 'Portefeuille', path: '/wallet' },
    { icon: FaHeart, text: 'Favoris', path: '/favorites' },
    //{ icon: FaFile, text: 'Fiches', path: '/files' },
    { icon: FaCog, text: 'Paramètres', path: '/settings' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">Solibook</h1>
        </div>
        <nav>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center p-3 mb-2 rounded-lg ${
                location.pathname === item.path
                  ? 'bg-purple-100 text-purple-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              <item.icon className="mr-3" />
              <span>{item.text}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        {children}  {/* This will render the nested content */}
      </div>
    </div>
  );
}

export default Sidebar;
