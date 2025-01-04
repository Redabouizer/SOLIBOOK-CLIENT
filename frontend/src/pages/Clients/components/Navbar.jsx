'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="../../../../../public/logo_2.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Search Bar */}
          <div className="flex flex-1 mx-8 max-w-2xl">
            <div className="relative flex items-center w-full">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border-0 rounded-md leading-5 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 sm:text-sm"
                placeholder="Search for a service or venue"
              />
              <span className="ml-3 text-sm text-gray-600 whitespace-nowrap">in Bangalore</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <a href="/businesses" className="text-gray-700 hover:text-gray-900 text-sm font-normal">
              For Businesses
            </a>
            <a href="/login" className="text-gray-700 hover:text-gray-900 text-sm font-normal">
              Login
            </a>
            <a
              href="/signup"
              className="text-sm font-normal text-gray-700 hover:text-gray-900"
            >
              Sign Up
            </a>
            
            {/* Menu Button */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <a href="/login" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                      Se connecter
                    </a>
                    
                    <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                      Other
                    </div>
                    
                    <a href="/businesses" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                      For businesses
                    </a>
                    <a href="/app" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                      Téléchargez l'app
                    </a>
                    <a href="/help" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                      Centre d'aide
                    </a>
                    <button className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                      <span className="uppercase text-xs mr-1">FR</span> français
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

