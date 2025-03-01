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

const Escalations: React.FC = () => {
  return (
    <section id="escalations" className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-100">Escalations</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-medium mb-4 text-gray-200">By Department</h3>
          <Pie data={pieData} options={chartOptions} />
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-medium mb-4 text-gray-200">Over Time</h3>
          <Bar data={barData} options={chartOptions} />
        </div>
      </motion.div>
    </section>
  );
};

export default Escalations;