import React from 'react';
import { motion } from 'framer-motion';

const ticketSummary = {
  open: 15,
  inProgress: 8,
  resolved: 120,
  unresolved: 5,
};

const ticketData = [
  { id: 'T001', status: 'Resolved', priority: 'High', agent: 'John D.', created: '2023-10-15', resolutionTime: '2h 30m' },
  { id: 'T002', status: 'Open', priority: 'Medium', agent: 'Jane S.', created: '2023-10-15', resolutionTime: '-' },
  { id: 'T003', status: 'In Progress', priority: 'Low', agent: 'Mike R.', created: '2023-10-15', resolutionTime: '-' },
];

const TicketingSystem: React.FC = () => {
  return (
    <section id="ticketing-system" className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-100">Ticketing System</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {Object.entries(ticketSummary).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-medium text-gray-200 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <p className="text-3xl font-bold text-white">{value}</p>
            </motion.div>
          ))}
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400">
                <th className="p-3">Ticket ID</th>
                <th className="p-3">Status</th>
                <th className="p-3">Priority</th>
                <th className="p-3">Agent</th>
                <th className="p-3">Created</th>
                <th className="p-3">Resolution Time</th>
              </tr>
            </thead>
            <tbody>
              {ticketData.map((ticket, index) => (
                <motion.tr
                  key={index}
                  whileHover={{ backgroundColor: '#374151' }}
                  className="border-t border-gray-700"
                >
                  <td className="p-3">{ticket.id}</td>
                  <td className="p-3">{ticket.status}</td>
                  <td className="p-3">{ticket.priority}</td>
                  <td className="p-3">{ticket.agent}</td>
                  <td className="p-3">{ticket.created}</td>
                  <td className="p-3">{ticket.resolutionTime}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
};

export default TicketingSystem;