import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BuildDetails from "../Pages/Home/Tabs/BuildDetails";
import AllPropertys from "../Pages/AllPropertys/AllPropertys";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/DashComp/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>,
          loader: ()=>fetch('http://localhost:8085/items')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/details/:id',
          element:<BuildDetails></BuildDetails>,
          loader:({params})=>fetch(`http://localhost:8085/items/${params.id}`)
        },
        {
          path:'/allproperty',
          element:<AllPropertys></AllPropertys>,
          loader: ()=>fetch('http://localhost:8085/items')
        },
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>,
          children: [
            {
              path: 'profile',
              element: <Profile />
            }
            // Add more nested routes as needed
          ]
        }
    

      ]
    },
  ]);
  export default router;