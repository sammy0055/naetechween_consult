import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Projects from './route/project/index.tsx';
import { PrivacyPolicy } from './route/privacyPolicy/index.tsx';
import LandingPage from './route/section_3/index.tsx';
import Dashboard from './route/dashboard/index.tsx';
import OverviewPage from './component/demo_dashboard/OverviewPage.tsx';
import ChatHistoryPage from './component/demo_dashboard/ChatHistoryPage.tsx';
import EscalationsPage from './component/demo_dashboard/EscalationsPage.tsx';
import UnhandledQueriesPage from './component/demo_dashboard/UnhandledQueriesPage.tsx';
import TicketingSystemPage from './component/demo_dashboard/TicketingSystemPage.tsx';
import AnalyticsReportsPage from './component/demo_dashboard/AnalyticsReportsPage.tsx';
import DashboardDemo from './route/dashboardDemo/index.tsx';
// DashboardDemo
const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/DashboardDemo',
        element: <DashboardDemo />,
    },
    {
        path: '/projects',
        element: <Projects />,
    },
    {
        path: '/privacy_policy',
        element: <PrivacyPolicy />,
    },
    {
        path: '/',
        element: <Dashboard />,
        children: [
          { path: 'Dashboard', element: <OverviewPage /> },
          { path: 'chat-history', element: <ChatHistoryPage /> },
          { path: 'escalations', element: <EscalationsPage /> },
          { path: 'unhandled-queries', element: <UnhandledQueriesPage /> },
          { path: 'ticketing-system', element: <TicketingSystemPage /> },
          { path: 'analytics-reports', element: <AnalyticsReportsPage /> },
        ],
      },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
