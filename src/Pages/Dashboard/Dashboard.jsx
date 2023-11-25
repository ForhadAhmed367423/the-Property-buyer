import { Outlet } from "react-router-dom";
import Drawe from "./Drawe";

const Dashboard = () => {
    return (

        <div className="flex gap-10">
            <Drawe></Drawe>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;