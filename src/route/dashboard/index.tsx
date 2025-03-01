// components/Dashboard.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../component/demo_dashboard/Sidebar';

const Dashboard: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-900 text-white">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
