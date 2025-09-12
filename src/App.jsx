import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StatsCard from './components/StatsCard';
import LineChartCard from './components/LineChartCard';
import PieChartCard from './components/PieChartCard';
import DataTable from './components/DataTable';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-gray-800 min-h-screen"}>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatsCard title="Patients" value="1,234" />
            <StatsCard title="Appointments" value="456" />
            <StatsCard title="Revenue" value="$78K" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <LineChartCard />
            <PieChartCard />
          </div>
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default App;
