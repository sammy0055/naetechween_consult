import React from 'react';
import { motion } from 'framer-motion';

const unhandledData = [
  { date: '2023-10-15', query: 'How do I reset my password?', sentiment: 'negative', outcome: 'Escalated' },
  { date: '2023-10-15', query: 'Pricing details?', sentiment: 'neutral', outcome: 'Abandoned' },
  { date: '2023-10-15', query: 'Shipment status?', sentiment: 'positive', outcome: 'Escalated' },
];

const UnhandledQueries: React.FC = () => {
  return (
    <section id="unhandled-queries" className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-100">Unhandled Queries</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="p-3">Date</th>
              <th className="p-3">Query Snippet</th>
              <th className="p-3">Sentiment</th>
              <th className="p-3">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {unhandledData.map((query, index) => (
              <motion.tr
                key={index}
                whileHover={{ backgroundColor: '#374151' }}
                className="border-t border-gray-700"
              >
                <td className="p-3">{query.date}</td>
                <td className="p-3">{query.query}</td>
                <td className="p-3">
                  <svg
                    className={`w-4 h-4 inline ${
                      query.sentiment === 'negative'
                        ? 'text-red-500'
                        : query.sentiment === 'neutral'
                        ? 'text-yellow-500'
                        : 'text-green-500'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="10" />
                  </svg>
                </td>
                <td className="p-3">{query.outcome}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default UnhandledQueries;