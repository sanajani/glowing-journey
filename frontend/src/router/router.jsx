import { createBrowserRouter } from 'react-router-dom';

// layouts
import RootLayout from '../layouts/RootLayout';

// pages
import Home from '../pages/Home';
import About from '../pages/About';
import SingleHome from '../pages/SingleHome';
import PropertyGallery from '../components/ui/image/PropertyGallery';
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import AuthLayout from '../layouts/AuthLayout';

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
                path: 'about',
                element: <About />
            },
            {
                path: 'singlepage',
                element: <SingleHome />
            },
            {
                path: 'propertyGallery', // I will add id to retrive images we need id
                element: <PropertyGallery />
            }

        ]
    },
    {
        path:'/auth',
        element: <AuthLayout />,
        children: [
            {
                path:'login',
                element: <Login />
            },
            {
                path:'signup',
                element:<Signup/>
            }
        ]
    }
])