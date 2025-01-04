import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Solibook</a>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-full bg-white/90 text-black hover:bg-white/95 transition">
            Pour les professionnels
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;