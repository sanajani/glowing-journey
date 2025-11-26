import { createBrowserRouter } from 'react-router-dom';

// layouts
import RootLayout from '../layouts/RootLayout';

// pages
import Home from '../pages/Home';
import About from '../pages/About';
import SingleHome from '../pages/SingleHome';
import PropertyGallery from '../components/ui/image/PropertyGallery';
import Login from '../auth/Login';
import Singup from '../auth/Signup';
import AuthLayout from '../layouts/AuthLayout';
import ShowHouseForm from '../pages/ShowHouseForm';
import AdminLayout from '../layouts/AdminLayout';

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
                element:<Singup/>

            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children:[
            {
                path: 'newpost',
                element: <ShowHouseForm />
            },
            {
                path: 'profile',
                element: <h1 className=''>Profile</h1>
            },
            {
                path: 'seepost',
                element: <h1>See posts</h1>
            },
            {
                path: 'logout',
                element: <h1>logout</h1>
            }

        ]
    }
])
