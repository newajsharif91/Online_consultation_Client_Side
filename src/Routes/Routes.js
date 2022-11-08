import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Home from "../Sheared/Home/Home";
import Login from "../Sheared/Login/Login";
import Main from "../Sheared/Main/Main";
import NotFound from "../Sheared/NotFound/NotFound";
import Signup from "../Sheared/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
                
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            }
            

        ],
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])
