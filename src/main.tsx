import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Projects from './route/project/index.tsx';
import { PrivacyPolicy } from './route/privacyPolicy/index.tsx';
import LandingPage from './route/section_3/index.tsx';
import { DashboardDemo } from './route/dashboardDemo/index.tsx';
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
        path: '/section_3',
        element: <App />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
