import { Outlet } from "react-router-dom";
import Drawe from "./Drawe";
import { useEffect } from "react";

const Dashboard = () => {
    
useEffect(() => {
    document.title= "T.B.P| Dashboard";
  }, []);
    return (

        <div className="flex  gap-10 bg-[#FAF9F8] min-h-screen">
            <Drawe></Drawe>
            <Outlet></Outlet>

        </div>
    );
};

export default Dashboard;