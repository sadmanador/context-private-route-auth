import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Registration from "../components/Home/Registration";
import Login from "../components/Login/Login";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {path:'/login',
            element: <Login></Login>}
        ]
    }
])

export default router;