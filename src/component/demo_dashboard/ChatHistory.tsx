import React, { useState } from 'react';
import { motion } from 'framer-motion';

const chatData = [
  { date: '2023-10-15 10:30', userId: 'U123', channel: 'Web Chat', priority: 'High', escalation: 'Yes' },
  { date: '2023-10-15 12:45', userId: 'U124', channel: 'WhatsApp', priority: 'Medium', escalation: 'No' },
  { date: '2023-10-15 14:15', userId: 'U125', channel: 'Email', priority: 'Low', escalation: 'Yes' },
];

const ChatHistory: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  return (
    <section id="chat-history" className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-100">Chat History</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-xl shadow-lg"
      >
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
            {chatData.map((chat, index) => (
              <motion.tr
                key={index}
                whileHover={{ backgroundColor: '#374151' }}
                className="border-t border-gray-700"
              >
                <td className="p-3">{chat.date}</td>
                <td className="p-3">{chat.userId}</td>
                <td className="p-3">{chat.channel}</td>
                <td className="p-3">{chat.priority}</td>
                <td className="p-3">{chat.escalation}</td>
                <td className="p-3">
                  <button
                    onClick={() => setSelectedChat(index)}
                    className="text-blue-400 hover:text-blue-300 mr-4"
                  >
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
      </motion.div>
      {selectedChat !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={() => setSelectedChat(null)}
        >
          <div className="bg-gray-800 p-6 rounded-xl max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4">Chat Transcript</h3>
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
    </section>
  );
};

export default ChatHistory;