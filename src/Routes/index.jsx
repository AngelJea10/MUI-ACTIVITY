import LoginPage from '../Page/Login';
import SignUpForm from '../Page/SignUp';
import Dashboard from '../Page/Dashboard';

const routes = [
    {
        path:"/",
        element: <LoginPage/>
    },
    {
        path:"/signup",
        element: <SignUpForm/>
    },
    {
        path:"/dashboard",
        element: <Dashboard/>,
        children: [
            {
                index: true,
                element: <div>Main</div>
            },
            {
                path: "users",
                element: <div>Users</div>
            },
            {
                path: "reports",
                element: <div>Reports</div>
            },
            {
                path: "settings",
                element: <div>Settings</div>
            }

        ]
    }
];

export default routes;
