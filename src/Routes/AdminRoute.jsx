import { useContext } from "react";
import useAdmin from "../Hook/useAdmin";
import { AuthContext } from "../providers/AuthProviders";
import { HashLoader } from "react-spinners";
import { Navigate } from "react-router-dom";

const AdminRoute = (children) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loading } = useContext(AuthContext);
    if (loading || isAdminLoading) {
        return <div className="flex justify-center items-center py-[200px]">
            <HashLoader color="#ebb836" />
        </div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>

};

export default AdminRoute;