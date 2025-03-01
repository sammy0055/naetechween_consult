import React, { useState } from 'react';
import { motion } from 'framer-motion';

const chatData = [
  { chatId: 1, date: '2023-10-15 10:30', userId: 'U123', channel: 'Web Chat', priority: 'High', escalation: 'Yes' },
  { chatId: 2, date: '2023-10-15 12:45', userId: 'U124', channel: 'WhatsApp', priority: 'Medium', escalation: 'No' },
  { chatId: 3, date: '2023-10-15 14:15', userId: 'U125', channel: 'Email', priority: 'Low', escalation: 'Yes' },
];

const priorities = ['All', 'High', 'Medium', 'Low'];

const ChatHistoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const filteredData = chatData.filter((chat) => {
    const matchesSearch =
      chat.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.channel.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = selectedPriority === 'All' || chat.priority === selectedPriority;
    return matchesSearch && matchesPriority;
  });

  const itemsPerPage = 10;
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-100">Chat History</h2>
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          placeholder="Search by User ID or Channel"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 bg-gray-700 text-white rounded"
        />
        <select
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(e.target.value)}
          className="p-2 bg-gray-700 text-white rounded"
        >
          {priorities.map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))}
        </select>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400">
            <th className="p-3">Date/Time</th>
            <th className="p-3">User ID</th>
            <th className="p-3">Channel</th>
            <th className="p-3">Priority</th>
            <th className="p-3">Escalation</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((chat) => (
            <motion.tr
              key={chat.chatId}
              whileHover={{ backgroundColor: '#374151' }}
              className="border-t border-gray-700"
            >
              <td className="p-3">{chat.date}</td>
              <td className="p-3">{chat.userId}</td>
              <td className="p-3">{chat.channel}</td>
              <td className="p-3">{chat.priority}</td>
              <td className="p-3">{chat.escalation}</td>
              <td className="p-3">
                <button onClick={() => setSelectedChat(chat.chatId)} className="text-blue-400 hover:text-blue-300 mr-4">
                  View
                </button>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  Open
                </a>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-600"
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
      {selectedChat !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={() => setSelectedChat(null)}
        >
          <div className="bg-gray-800 p-6 rounded-xl max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4">Chat Transcript for Chat ID: {selectedChat}</h3>
            <p>User: Hello, I need help!</p>
            <p>Chatbot: How can I assist you today?</p>
            <button
              onClick={() => setSelectedChat(null)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default ChatHistoryPage;