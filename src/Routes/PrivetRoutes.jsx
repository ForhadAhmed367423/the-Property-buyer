import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../providers/AuthProviders";


const PrivetRoutes = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center py-[200px]">
             <HashLoader color="#ebb836" />
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivetRoutes;