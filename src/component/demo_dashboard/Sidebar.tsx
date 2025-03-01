import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaHistory, FaChartPie, FaQuestionCircle, FaTicketAlt, FaChartBar } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-gray-200 flex-shrink-0">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">AI Analytics</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/Dashboard"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded hover:bg-gray-700 transition-colors ${
                  isActive ? 'bg-gray-700 text-white' : ''
                }`
              }
              end
            >
              <FaHome className="mr-3" /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="chat-history"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded hover:bg-gray-700 transition-colors ${
                  isActive ? 'bg-gray-700 text-white' : ''
                }`
              }
            >
              <FaHistory className="mr-3" /> Chat History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="escalations"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded hover:bg-gray-700 transition-colors ${
                  isActive ? 'bg-gray-700 text-white' : ''
                }`
              }
            >
              <FaChartPie className="mr-3" /> Escalations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="unhandled-queries"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded hover:bg-gray-700 transition-colors ${
                  isActive ? 'bg-gray-700 text-white' : ''
                }`
              }
            >
              <FaQuestionCircle className="mr-3" /> Unhandled Queries
            </NavLink>
          </li>
          <li>
            <NavLink
              to="ticketing-system"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded hover:bg-gray-700 transition-colors ${
                  isActive ? 'bg-gray-700 text-white' : ''
                }`
              }
            >
              <FaTicketAlt className="mr-3" /> Tickets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="analytics-reports"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 rounded hover:bg-gray-700 transition-colors ${
                  isActive ? 'bg-gray-700 text-white' : ''
                }`
              }
            >
              <FaChartBar className="mr-3" /> Reports
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;