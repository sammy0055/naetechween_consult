import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Projects from './route/project/index.tsx';
import { PrivacyPolicy } from './route/privacyPolicy/index.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/projects',
        element: <Projects />,
    },
    {
        path: '/privacy_policy',
        element: <PrivacyPolicy />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
