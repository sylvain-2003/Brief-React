import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Articles from './components/Pages/Articles/articles.tsx';
import Contact from './components/Pages/Contact/contact.tsx';
import About from './components/Pages/About/about.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/Articles",
        element: <Articles />,
    },
    {
        path: "/Contact",
        element: <Contact />,
    },
    {
        path: "/About",
        element: <About />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)