import React from 'react';
import { FaHome, FaHistory, FaChartPie, FaQuestionCircle, FaTicketAlt, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Sidebar: React.FC = () => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: <FaHome /> },
    { id: 'chat-history', label: 'Chat History', icon: <FaHistory /> },
    { id: 'escalations', label: 'Escalations', icon: <FaChartPie /> },
    { id: 'unhandled-queries', label: 'Unhandled Queries', icon: <FaQuestionCircle /> },
    { id: 'ticketing-system', label: 'Ticketing System', icon: <FaTicketAlt /> },
    { id: 'analytics-reports', label: 'Analytics & Reports', icon: <FaChartBar /> },
  ];

  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-gray-800 p-6 shadow-lg"
    >
      <h1 className="text-2xl font-bold mb-8 text-blue-300">AI Analytics</h1>
      <nav>
        <ul>
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.05, backgroundColor: '#374151' }}
              className="mb-4 rounded-md"
            >
              <a
                href={`#${item.id}`}
                className="flex items-center p-2 text-gray-200 hover:text-blue-400 transition-colors duration-300"
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;