import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAxiosSecure from "../../../Hook/useAxiosSecure";


const SocialLog = () => {
    const  {googleSignIn}= useContext(AuthContext);
    const navigate = useNavigate();
    const axiosSecure= useAxiosSecure();

    const handleGoogle = ()=>{
            googleSignIn()
            .then(res=>{
                console.log(res)
                navigate('/')
                const userInfo={
                    email: res.user?.email,
                    name: res.user?.displayName
                }
                axiosSecure.post('/user',userInfo)
                .then(response=>{
                    console.log(response.data)
                })
            })
    }
    return (
        <div className="flex justify-center mb-6">
            <button onClick={handleGoogle} className="btn w-[320px] mx-auto primaryBtn flex items-center"><span className="text-lg"><FaGoogle/> </span> <span>Google Login</span> </button>
        </div>
    );
};

export default SocialLog;