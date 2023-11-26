import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { RiHomeOfficeLine } from "react-icons/ri";
import { MdOutlineRateReview  } from "react-icons/md";




const Drawe = () => {
    return (
        <div className="fixed">
            <div className="drawer drawer-open lg:w-[300px] min-h-screen ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay fixed"></label>
                    <ul className="flex flex-col cursor-pointer p-4 w-80 min-h-full bg-[#BC8664] rounded-lg text-base-content ">
                        <h2 className="text-center text-2xl font font-bold mb-6 text-white">Dashboard</h2>
                        {/* Sidebar content here */}
                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><NavLink  className="flex items-center gap-2 active" to={'profile'}><CgProfile/><span>My Profile</span></NavLink ></li>
                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'wishlist'} className="flex items-center gap-2"><GoHeart/><span>Wishlist</span></Link></li>
                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'property'} className="flex items-center gap-2"><RiHomeOfficeLine/><span>Property bought</span></Link></li>
                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'reviews'} className="flex items-center gap-2"><MdOutlineRateReview /><span>My reviews</span></Link></li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Drawe;