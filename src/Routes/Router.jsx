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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        element: <AllPropertys></AllPropertys>,
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
      }

    ]
  }


]);
export default router;