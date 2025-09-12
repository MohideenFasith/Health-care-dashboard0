import React from 'react';

function Sidebar() {
  return (
    <div className="w-64 bg-blue-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Healthcare</h2>
      <ul>
        <li className="mb-2 hover:bg-blue-700 p-2 rounded">Dashboard</li>
        <li className="mb-2 hover:bg-blue-700 p-2 rounded">Reports</li>
        <li className="mb-2 hover:bg-blue-700 p-2 rounded">Patients</li>
        <li className="mb-2 hover:bg-blue-700 p-2 rounded">Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
