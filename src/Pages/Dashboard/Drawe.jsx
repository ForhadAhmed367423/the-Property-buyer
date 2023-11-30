import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { RiHomeOfficeLine } from "react-icons/ri";
import { MdOutlineRateReview } from "react-icons/md";
import { HiHomeModern } from "react-icons/hi2";
import { FaUsersGear } from "react-icons/fa6";
import useAdmin from "../../Hook/useAdmin";
import useAgent from "../../Hook/useAgent";
import { MdAddHomeWork } from "react-icons/md";







const Drawe = () => {
    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();
    return (
        <div className="fixed">
            <div className="drawer drawer-open lg:w-[300px] min-h-screen ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                </div>
                <div className="drawer-side bg-[#BC8664] rounded-lg ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay fixed"></label>
                    <ul className="flex flex-col  p-4 w-80 min-h-full text-base-content ">
                        {/* Sidebar content here */}
                        {
                            isAdmin ?
                                <>
                                    <h2 className="text-center text-2xl font font-bold mb-6 text-white">Admin Dashboard</h2>
                                    <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><NavLink className="flex items-center gap-2 active" to={'adminProfile'}><CgProfile /><span>Admin Profile</span></NavLink ></li>
                                    <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'manageProp'} className="flex items-center gap-2"><GoHeart /><span>Manage Properties</span></Link></li>
                                    <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'manageUser'} className="flex items-center gap-2"><FaUsersGear /><span>Manage Users</span></Link></li>
                                    <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'manageReviews'} className="flex items-center gap-2"><MdOutlineRateReview /><span>Manage reviews</span></Link></li>
                                </>
                                :

                                <>
                                 {   isAgent ?
                                    <>
                                        <h2 className="text-center text-2xl font font-bold mb-6 text-white">Agent Dashboard</h2>
                                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><NavLink className="flex items-center gap-2 active" to={'agentProfile'}><CgProfile /><span>Agent Profile</span></NavLink ></li>
                                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'myAddedProp'} className="flex items-center gap-2"><GoHeart /><span>My added properties</span></Link></li>
                                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'myAddedProp'} className="flex items-center gap-2"><RiHomeOfficeLine /><span>My sold properties</span></Link></li>
                                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'reqProp'} className="flex items-center gap-2"><MdOutlineRateReview /><span>Requested properties</span></Link></li>
                                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'addNewProp'} className="flex items-center gap-2"><MdAddHomeWork /><span>Add properties</span></Link></li>
                                    </>:
                                    <>
                                        <h2 className="text-center text-2xl font font-bold mb-6 text-white">User Dashboard</h2>
                                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><NavLink className="flex items-center gap-2 active" to={'profile'}><CgProfile /><span>My Profile</span></NavLink ></li>
                                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'wishlist'} className="flex items-center gap-2"><GoHeart /><span>Wishlist</span></Link></li>
                                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'property'} className="flex items-center gap-2"><RiHomeOfficeLine /><span>Property bought</span></Link></li>
                                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'reviews'} className="flex items-center gap-2"><MdOutlineRateReview /><span>My reviews</span></Link></li>
                                    </>
                                    }
                                </>
                        }



                        {/* sheard links */}
                        <div className="divider"></div>

                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><NavLink className="flex items-center gap-2 " to={'/'}>< RiHomeOfficeLine /><span>Home</span></NavLink ></li>
                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><NavLink className="flex items-center gap-2 " to={'/allproperty'}><HiHomeModern /><span>All Property</span></NavLink ></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Drawe;