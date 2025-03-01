import AnalyticsReports from '../../component/demo_dashboard/AnalyticsReports';
import ChatHistory from '../../component/demo_dashboard/ChatHistory';
import Escalations from '../../component/demo_dashboard/Escalations';
import Overview from '../../component/demo_dashboard/Overview';
import Sidebar from '../../component/demo_dashboard/SidebarD';
import TicketingSystem from '../../component/demo_dashboard/TicketingSystem';
import UnhandledQueries from '../../component/demo_dashboard/UnhandledQueries';

const DashboardDemo: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-900 text-white">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto">
                <Overview />
                <ChatHistory />
                <Escalations />
                <UnhandledQueries />
                <TicketingSystem />
                <AnalyticsReports />
            </main>
        </div>
    );
};

export default DashboardDemo;
