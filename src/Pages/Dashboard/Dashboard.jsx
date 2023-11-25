import { Outlet } from "react-router-dom";
import Drawe from "./Drawe";

const Dashboard = () => {
    return (

        <div className="flex gap-10 bg-[#FAF9F8]">
            <Drawe></Drawe>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;