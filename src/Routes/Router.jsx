import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BuildDetails from "../Pages/Home/Tabs/BuildDetails";
import AllPropertys from "../Pages/AllPropertys/AllPropertys";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/DashComp/Profile";
import Wishlist from "../Pages/Dashboard/DashComp/Wishlist";
import Property from "../Pages/Dashboard/DashComp/Property ";
import Reviews from "../Pages/Dashboard/DashComp/Reviews";
import PrivetRoutes from "./PrivetRoutes";
import MakeOffer from "../Pages/Dashboard/MakeOffer/MakeOffer";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";
import AdminRoute from "./AdminRoute";
import MyAddedProp from "../Pages/Dashboard/Agent/MyAddedProp";
import AgentProfile from "../Pages/Dashboard/Agent/AgentProfile";
import ManageProp from "../Pages/Dashboard/Admin/ManageProp";
import ReqProp from "../Pages/Dashboard/Agent/ReqProp";
import AddNewProp from "../Pages/Dashboard/Agent/AddNewProp";
import MyAddEdit from "../Pages/Dashboard/Agent/MyAddEdit";
// import ErrorPage from "../ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/items')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/details/:id',
        element: <BuildDetails></BuildDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)
      },
      {
        path: '/allproperty',
        element: <PrivetRoutes><AllPropertys></AllPropertys></PrivetRoutes>,
        loader: () => fetch('http://localhost:5000/items')
      },

    ] 
  },
  {
    path: '/dashboard',
    element: <PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
    children: [
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
      {
        path: 'property',
        element: <Property />
      },
      {
        path: 'reviews',
        element: <Reviews />
      },
      {
        path:'wishlist/makeoffer/:id',
        element:<MakeOffer></MakeOffer>,
        loader: ({ params }) => fetch(`http://localhost:5000/ToWishlist/${params.id}`)
      },

      // Admin routes here
       {
        path:'manageUser',
        element:<ManageUser/>
       },
       {
        path:'adminProfile',
        element:<AdminRoute><AdminProfile></AdminProfile></AdminRoute>
       },{
        path:"myAddedProp",
        element:<MyAddedProp/>
       },
       {
         path:'manageProp',
         element:<ManageProp></ManageProp>
       },
         {
          path:'agentProfile',
          element:<AgentProfile/>
         },
         {
          path:'reqProp',
          element:<ReqProp/>
         },
         {
          path:'addNewProp',
          element:<AddNewProp/>
         },
         {
          path:'myAddEdit',
          element:<MyAddEdit/>
         }

    ]
  }


]);
export default router;