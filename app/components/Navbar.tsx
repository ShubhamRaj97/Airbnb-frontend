'use client';  // This tells Next.js that this is a Client Component

import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(''); // Store profile image URL

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">🏠 Airbnb</h1>
          </div>

          {/* Search Bar Section */}
          <div className="flex-grow mx-10">
            <input
              type="text"
              className="w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white border-none rounded-full px-4 py-2 text-center"
              placeholder="Search"
            />
          </div>

          {/* Profile Icon Section */}
          <div className="relative flex items-center space-x-4">
            {/* Profile Circle with Toggle */}
            <div
              onClick={toggleDropdown}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer"
            >
              <img
                src={profileImage ? profileImage : '/path/to/default-image.png'}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <a
                  href="#profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Your Profile
                </a>
                <a
                  href="#settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#logout"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
