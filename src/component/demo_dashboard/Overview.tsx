import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'Total Chats', value: '1,245', trend: '↑ 3%', color: 'bg-blue-600' },
  { label: 'Escalation Rate', value: '12%', trend: '↓ 1%', color: 'bg-orange-600' },
  { label: 'Avg. Resolution Time', value: '2.5h', trend: '↑ 0.2h', color: 'bg-purple-600' },
  { label: 'Unhandled Queries', value: '45', trend: '↓ 5', color: 'bg-red-600' },
];

const Overview: React.FC = () => {
  return (
    <section id="overview" className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-100">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`${metric.color} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
          >
            <h3 className="text-lg font-medium text-gray-200">{metric.label}</h3>
            <p className="text-3xl font-bold text-white">{metric.value}</p>
            <p className={`text-sm ${metric.trend.includes('↑') ? 'text-green-400' : 'text-red-400'}`}>
              {metric.trend}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Overview;