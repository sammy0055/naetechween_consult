import React, { useEffect, useMemo } from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { FaComments, FaArrowUp, FaClock, FaQuestion } from 'react-icons/fa';
import { useStats } from '../../hooks/stats';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
);

const metrics = [
    {
        title: 'Total Chats',
        value: '1,245',
        trend: '↑ 3%',
        icon: <FaComments />,
        color: 'bg-blue-500',
    },
    {
        title: 'Escalation Rate',
        value: '12%',
        trend: '↓ 1%',
        icon: <FaArrowUp />,
        color: 'bg-orange-500',
    },
    {
        title: 'Avg. Resolution Time',
        value: '2.5h',
        trend: '↑ 0.2h',
        icon: <FaClock />,
        color: 'bg-purple-500',
    },
    {
        title: 'Unhandled Queries',
        value: '45',
        trend: '↓ 5',
        icon: <FaQuestion />,
        color: 'bg-red-500',
    },
];

const resolutionTimeData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Resolution Time (hrs)',
            data: [2.3, 2.4, 2.5, 2.6, 2.5, 2.4, 2.5],
            borderColor: '#A855F7',
            backgroundColor: 'rgba(168, 85, 247, 0.2)',
        },
    ],
};

const chartOptions = {
    scales: {
        x: { ticks: { color: '#ffffff' } },
        y: { ticks: { color: '#ffffff' } },
    },
    plugins: { legend: { labels: { color: '#ffffff' } } },
};

const OverviewPage: React.FC = () => {
    const { getStats, stats } = useStats();
    useEffect(() => {
        getStats().catch((error) => console.error(error));
    }, []);

    const barData = useMemo(() => {
        return {
            labels: Object.keys(stats),
            datasets: [
                {
                    label: 'Query Categories',
                    data: Object.values(stats)?.map((item) => item.total),
                    backgroundColor: '#10B981',
                },
            ],
        };
    }, [stats]);

    const lineData = useMemo(() => {
        return {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Chat Volume',
                    data: Object.values(stats)?.map((item) => item.total),
                    borderColor: '#3B82F6',
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                },
            ],
        };
    }, [stats]);

    const pieData = useMemo(() => {
        return {
            labels: Object.keys(stats).map((key) => key.toLowerCase()),
            datasets: [
                {
                    data: Object.values(stats)?.map((item) => item.escalations),
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF',
                        '#0065EE',
                    ],
                },
            ],
        };
    }, [stats]);
    return (
        <div className="text-white">
            <h1 className="text-2xl font-bold mb-6">Overview</h1>

            {/* Key Metrics */}
            <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {metrics.map((metric, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg shadow ${metric.color}`}
                    >
                        <div className="flex items-center">
                            <span className="text-2xl mr-3">{metric.icon}</span>
                            <div>
                                <p className="text-sm text-gray-200">
                                    {metric.title}
                                </p>
                                <p className="text-xl font-semibold text-white">
                                    {metric.value}
                                </p>
                                {metric.trend && (
                                    <p className="text-sm text-gray-300">
                                        {metric.trend}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Trends */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-700 p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">Chat Volume</h2>
                    <div style={{ height: '300px' }}>
                        <Line data={lineData} options={chartOptions} />
                    </div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">
                        Resolution Time Trend
                    </h2>
                    <div style={{ height: '300px' }}>
                        <Line
                            data={resolutionTimeData}
                            options={chartOptions}
                        />
                    </div>
                </div>
            </div>

            {/* Distributions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-700 p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">
                        Escalation Distribution
                    </h2>
                    <div style={{ height: '300px' }}>
                        <Pie data={pieData} options={chartOptions} />
                    </div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">
                        Query Categories
                    </h2>
                    <div style={{ height: '300px' }}>
                        <Bar data={barData} options={chartOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewPage;
