import React from 'react';
import Navbar from './Navbar';
import SearchBar from './components/SearchBar';
import AppDownload from './components/AppDownload';
import Appointments from './components/Appointments';
import '../../../public/CSS/Clients/Home.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-100">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-center leading-tight">
            Réservez des prestations de beauté et de bien-être près de chez vous
          </h1>
          
          <SearchBar />
          
          <div className="space-y-8 text-center">
            <Appointments />
            <AppDownload />
          </div>
        </div>
      </main>
    </div>
  );
}
