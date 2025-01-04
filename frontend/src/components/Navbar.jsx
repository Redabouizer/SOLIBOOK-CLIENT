import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import "../../public/CSS/Navbar.css";


// Simple Button component
const Button = ({ children, variant = 'default', className = '', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost: 'text-gray-600 hover:bg-gray-100',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default function Navbar() {
  const [user, setUser] = useState({});
  const baseURL = 'http://127.0.0.1:8000/api';
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Dashboard';
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    } else {
      fetchUser(token);
    }
  }, [navigate]);

  const fetchUser = async (token) => {
    try {
      const response = await fetch(`${baseURL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        console.error('Failed to fetch user data.');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${baseURL}/logout`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        localStorage.removeItem('token');
        navigate('/');
      } else {
        console.error('Logout failed.');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <header className="relative z-50">
      <div className="header-gradient absolute inset-0 -z-10" />
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tight">
            Solibook
          </a>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-base font-medium">
              Pour les professionnels
            </Button>
            <Button variant="outline" className="gap-2 flex items-center">
              Menu
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
            <div className="flex items-center ml-4">
              {user.name ? (
                <>
                  <span className="text-sm font-medium">Hi, {user.name}</span>
                  <Button
                    variant="outline"
                    className="ml-2 text-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <span className="text-sm text-gray-500">Loading...</span>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
