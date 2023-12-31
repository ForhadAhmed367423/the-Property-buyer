
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import AllUserHook from "../../../Hook/AllUserHook";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { GrUserAdmin } from "react-icons/gr";
import { MdSupportAgent } from "react-icons/md";
import { CgDanger } from "react-icons/cg";






const ManageUser = () => {

    const axiosSecure = useAxiosSecure();
    // const { data: user = [],refetch } = useQuery({
    //     queryKey: ['user'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/user')
    //         return res.data;
    //     }

    // })
    const [users, refetch] = AllUserHook();
    console.log(users)



    const handleDeleteUser = man => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/user/${man._id}`)
                refetch()

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }



    const handleAdmin = man => {
        console.log(man, "handle admin")
        axiosSecure.patch(`/user/admin/${man._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${man.name} Is An Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    const handleAgent = man => {
        console.log(man, "handle Agent")
        axiosSecure.patch(`/user/agent/${man._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${man.name} Is An Agent Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="w-3/4 my-7 ml-[300px] pr-8 pl-20">

            <div >
                <div className="flex mb-6">
                    <p className="text-4xl">TOTAL USers: {users.length}</p>

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
                                    <th>M.Admin</th>
                                    <th>M.Agent</th>
                                    <th>Fraud</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users.map((man, index) => (<tr key={man._id} className="hover text-center">
                                        <th>{index + 1}</th>
                                        <td>{man.name}</td>
                                        <td>{man.email}</td>
                                        <td>{man._id}</td>
                                        <td>

                                            {man.role === 'admin' ? 'Admin' :
                                                <button onClick={() => handleAdmin(man)} className=" my-4 btn bg-[#BC8664] text-white  font text-lg hover:bg-[#a1633d]"> <GrUserAdmin /> </button>}
                                        </td>
                                        <td>

                                            {man.role === 'agent' ? 'Agent' :
                                                <button onClick={() => handleAgent(man)} className=" my-4 btn bg-[#BC8664] text-white  font text-lg hover:bg-[#a1633d]"> <MdSupportAgent /> </button>}
                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteUser(man)} className=" my-4 btn hover:bg-red-700 bg-red-600 text-white text-2xl  font"> <CgDanger /> </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteUser(man)} className=" my-4 btn hover:bg-red-700 bg-red-600 text-white  font"> <FaRegTrashCan></FaRegTrashCan> </button>
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