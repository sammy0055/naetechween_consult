import React from 'react';
import { motion } from 'framer-motion';

const AnalyticsReports: React.FC = () => {
  return (
    <section id="analytics-reports" className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-100">Analytics & Reports</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-medium mb-4 text-gray-200">Pre-built Reports</h3>
          <p className="text-gray-300">
            Escalation trends: 12% weekly average<br />
            Ticket resolution funnel: 1,245 chats → 150 tickets → 120 resolved
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-medium mb-4 text-gray-200">Custom Reports</h3>
          <p className="text-gray-300">Select metrics and time frame to generate custom insights.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Create Report
          </button>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-medium mb-4 text-gray-200">AI Insights</h3>
          <p className="text-gray-300">
            "25% of unhandled queries relate to subscription cancellations."
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AnalyticsReports;