import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useOfferReq from "../../../Hook/useOfferReq";

const ReqProp = () => {
    const axiosSecure = useAxiosSecure();
    const [offers, refetch] = useOfferReq();
    console.log(offers)
    const handleReqAccept = itemInfo => {
        axiosSecure.patch(`/offers/accept/${ itemInfo._id }`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title:"Your Request has been accepted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    const handleReqDelete = itemInfo => {
        axiosSecure.patch(`/offers/reject/${ itemInfo._id }`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title:"Your Request has been Rejected",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className="w-3/4 ml-[300px] my-7 pl-20 ">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>property title</th>
                            <th>Property Location</th>
                            <th>Buyer email</th>
                            <th>Buyer Name</th>
                            <th>offered price</th>
                            <th>Accept</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            offers.map(item => <tr key={item._id} >

                                <td>
                                    {item.name}

                                </td>

                                <td>{item.location}</td>

                                <td>
                                    {item.user_email}
                                </td>
                                <td>{item.userName}</td>


                                <td>{item.price}</td>
                                <td>{item.status}</td>
                                <th>
                                    <button onClick={()=>handleReqAccept(item)} className="btn bg-green-400 hover:bg-green-500  btn-xs">Accept</button>
                                </th>
                                <th>
                                    <button onClick={()=>handleReqDelete(item)} className="btn bg-red-600 text-white hover:bg-red-700 btn-xs">Reject</button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ReqProp;