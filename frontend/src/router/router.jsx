import { createBrowserRouter } from 'react-router-dom';

// layouts
import RootLayout from '../layouts/RootLayout';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout />,
        children:[
            {
                index: true,
                element: <h1>Home</h1>
            },
            {
                path: '/about',
                element: <h1>About</h1>
            },
            {
                path: '/contact',
                element: <h1>Contact</h1>
            },

        ]
    }
])