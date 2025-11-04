import { createBrowserRouter } from 'react-router-dom';

// layouts
import RootLayout from '../layouts/RootLayout';

// pages
import Home from '../pages/Home';
import About from '../pages/About';
// import ShowHomeSingleData from '../components/homePageComponent/ShowHomeSingleData';

import ShowHomeSingleData from '../pages/ShowHomeSingleData';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <RootLayout />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/singlepage',
                element: <ShowHomeSingleData />
            },

        ]
    }
])