import React from 'react';

function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Navbar;
