import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";



const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="w-3/4 my-7 ml-[300px]">
                <h1 className="text-5xl font font-bold text-center text-[#BC8664]">My Profile</h1>
            <div className="flex justify-center items-center">

                <div className="bg-[#FFFFFF] w-2/4 my-10 px-10 py-5 rounded-lg border-2 hover:border-dotted border-[#BC8664]">
                    <div className="flex justify-center items-center">
                    <>
                    {
                    user?.photoURL? 
                    <img className="h-48 w-48 rounded-full border-[#BC8664] border-4 mb-6" src={user?.photoURL} alt="" /> : 
                    <img className="h-48 w-48 rounded-full border-[#BC8664] border-4 mb-6" src="https://i.ibb.co/yQXz1G6/user.png" alt="" />

                    }
                    </>
                    </div>
                    <div className="mt-4 text-center">
                    <h1 className="font-semibold font text-xl">Name :
                       <span className="font-bold"> {
                            user?.displayName
                        }</span>
                    </h1>
                    <p className="font-semibold font text-xl ">Email : <span className="link link-hover">{user?.email}</span> </p>                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;