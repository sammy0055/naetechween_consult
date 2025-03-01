import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnalyticsReportsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('prebuilt');

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-100">Analytics & Reports</h2>
      <div className="mb-4">
        <button
          onClick={() => setActiveTab('prebuilt')}
          className={`mr-4 p-2 ${activeTab === 'prebuilt' ? 'bg-blue-600' : 'bg-gray-700'} text-white rounded`}
        >
          Pre-built Reports
        </button>
        <button
          onClick={() => setActiveTab('custom')}
          className={`mr-4 p-2 ${activeTab === 'custom' ? 'bg-blue-600' : 'bg-gray-700'} text-white rounded`}
        >
          Custom Reports
        </button>
        <button
          onClick={() => setActiveTab('ai')}
          className={`p-2 ${activeTab === 'ai' ? 'bg-blue-600' : 'bg-gray-700'} text-white rounded`}
        >
          AI Insights
        </button>
      </div>
      {activeTab === 'prebuilt' && (
        <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-medium mb-4 text-gray-200">Pre-built Reports</h3>
          <p className="text-gray-300">Escalation trends, ticket resolution funnel, etc.</p>
          {/* Add charts like funnel or heatmap here */}
        </div>
      )}
      {activeTab === 'custom' && (
        <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-medium mb-4 text-gray-200">Custom Reports</h3>
          <p className="text-gray-300">Select metrics and time frame to generate custom reports.</p>
          {/* Add form for custom report generation */}
        </div>
      )}
      {activeTab === 'ai' && (
        <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-medium mb-4 text-gray-200">AI Insights</h3>
          <p className="text-gray-300">ML-driven suggestions and insights.</p>
          {/* Add AI-generated insights */}
        </div>
      )}
    </motion.section>
  );
};

export default AnalyticsReportsPage;