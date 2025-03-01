import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const pieData = {
  labels: ['Sales', 'Operations', 'Logistics', 'Subscriptions', 'Others'],
  datasets: [
    {
      data: [30, 25, 20, 15, 10],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      borderWidth: 0,
    },
  ],
};

const barData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Escalations',
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: '#36A2EB',
      borderRadius: 4,
    },
  ],
};

const chartOptions = {
  plugins: {
    legend: { labels: { color: '#ffffff' } },
    tooltip: { backgroundColor: '#374151', titleColor: '#ffffff', bodyColor: '#ffffff' },
  },
  scales: {
    x: { ticks: { color: '#ffffff' } },
    y: { ticks: { color: '#ffffff' } },
  },
};

const escalatedChatData = [
  { date: '2023-10-15', userId: 'U123', channel: 'Web Chat', department: 'Sales', priority: 'High' },
  { date: '2023-10-15', userId: 'U125', channel: 'Email', department: 'Operations', priority: 'Low' },
];

const EscalationsPage: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-100">Escalations</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-200">By Department</h3>
          <Pie data={pieData} options={chartOptions} />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-200">Over Time</h3>
          <Bar data={barData} options={chartOptions} />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-4 text-gray-200">Escalated Chats</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="p-3">Date</th>
              <th className="p-3">User ID</th>
              <th className="p-3">Channel</th>
              <th className="p-3">Department</th>
              <th className="p-3">Priority</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {escalatedChatData.map((chat, index) => (
              <motion.tr
                key={index}
                whileHover={{ backgroundColor: '#374151' }}
                className="border-t border-gray-700"
              >
                <td className="p-3">{chat.date}</td>
                <td className="p-3">{chat.userId}</td>
                <td className="p-3">{chat.channel}</td>
                <td className="p-3">{chat.department}</td>
                <td className="p-3">{chat.priority}</td>
                <td className="p-3">
                  <button className="text-blue-400 hover:text-blue-300 mr-4">View</button>
                  <a href="#" className="text-blue-400 hover:text-blue-300">Open</a>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
};

export default EscalationsPage;