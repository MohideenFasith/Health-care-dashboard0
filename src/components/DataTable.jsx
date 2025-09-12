import React from 'react';

const data = [
  { id: 1, name: 'John Doe', age: 45, department: 'Cardiology', status: 'Stable' },
  { id: 2, name: 'Jane Smith', age: 39, department: 'Neurology', status: 'Critical' },
  { id: 3, name: 'David Johnson', age: 29, department: 'Orthopedics', status: 'Recovering' },
  { id: 4, name: 'Emily Davis', age: 50, department: 'Pediatrics', status: 'Stable' },
];

function DataTable() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h3 className="text-lg mb-4">Patient Records</h3>
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Age</th>
            <th className="p-2">Department</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((patient) => (
            <tr key={patient.id} className="border-t hover:bg-gray-100 dark:hover:bg-gray-700">
              <td className="p-2">{patient.name}</td>
              <td className="p-2">{patient.age}</td>
              <td className="p-2">{patient.department}</td>
              <td className="p-2">{patient.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
