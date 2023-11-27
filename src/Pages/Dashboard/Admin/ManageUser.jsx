import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { FaRegTrashCan, FaUsersGear } from "react-icons/fa6";


const ManageUser = () => {
    const handleDeleteUser= ()=>{

    }
    const axiosSecure = useAxiosSecure();
    const { data: user = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user')
            return res.data
        }
    })
    return (
        <div className="w-3/4 my-7 ml-[300px] pr-8 pl-20">

            <div >
                <div className="flex justify-between">
                <p className="text-4xl">ALL USers</p>
                <p className="text-4xl">TOTAL USers: {user.length}</p>
                </div>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-center">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Id</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    user.map((man,index)=> (<tr key={man._id} className="hover text-center">
                                    <th>{index+1}</th>
                                    <td>{man.name}</td>
                                    <td>{man.email}</td>
                                    <td>{man._id}</td>
                                    <td>

                                    <button onClick={()=>handleDeleteUser(user)} className=" my-4 btn bg-[#BC8664] text-white  font text-lg hover:bg-[#a1633d]"> <FaUsersGear/> </button>
                                    </td>
                                    <td>
                                    <button onClick={()=>handleDeleteUser(user)} className=" my-4 btn hover:bg-red-700 bg-red-600 text-white  font"> <FaRegTrashCan></FaRegTrashCan> </button>
                                    </td>
                                </tr>))
                                }
                                
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageUser;