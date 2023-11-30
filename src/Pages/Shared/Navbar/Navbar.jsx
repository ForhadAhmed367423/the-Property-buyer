import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "../../../../public/logo (2).png"
import { useContext } from "react";
import { AuthContext, auth } from "../../../providers/AuthProviders";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut(auth);
  }
    const navItem = <>
        <li><Link className="hub  font">Home</Link></li>

        <li><Link to={'/allproperty'} className="hub font">All properties</Link></li>
        <li><Link to={'/dashboard'} className="hub font">Dashboard</Link></li>
    </>
    return (
        <div className=" max-[425px]:w-[380px] max-[425px]:mx-auto">
            <div className="navbar    bg-[#FFFFFF]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {
                            navItem
                            
                        }
                        <button onClick={handleLogOut} className=" primaryBtn font" >logout</button>
                        </ul>
                    </div>
                    <img src={logo} className="lg:h-[90px] lg:w-[200px]  max-[425px]:h-[60px] max-[425px]:w-[120px]" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex justify-center gap-10 items-center px-1">
                        {
                            navItem

                        }
                    </ul>
                </div>
                <div className="navbar-end">
                   
                    {
                        user ? <>
                        <img src={user?.photoURL} className="hover:border-2 hover:border-[#BC8664] cursor-pointer  h-[50px] w-[50px] rounded-full mr-4 max-[425px]:w-[30px] max-[425px]:h-[30px]" alt="" />
                        <p className="font lg:font-bold max-[425px]:text-base  lg:mr-3 max-[425px]:hidden">{user?.displayName}</p>
                        <button onClick={handleLogOut} className="mr-6 primaryBtn font max-[425px]:hidden" >logout</button>
                        </> :
                        <>
                        <Link to={'/login'} className="mr-6 primaryBtn font">Login</Link>
                        <Link to={'/signup'} className="mr-6 primaryBtn font">Sign Up</Link>
                        </>
                        
                     }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;