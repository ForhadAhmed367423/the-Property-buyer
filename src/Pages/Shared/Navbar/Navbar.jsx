import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "../../../../public/logo (2).png"

const Navbar = () => {
    const navItem = <>
        <li><Link className="hub  font">Home</Link></li>

        <li><Link className="hub font">All properties</Link></li>
        <li><Link className="hub font">Dashboard</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-[#FFFFFF]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {
                            navItem
                        }

                        </ul>
                    </div>
                    <img src={logo} className="h-[90px] w-[200px]" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex justify-center gap-10 items-center px-1">
                        {
                            navItem
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="mr-6 primaryBtn font">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;