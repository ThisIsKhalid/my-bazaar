import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;