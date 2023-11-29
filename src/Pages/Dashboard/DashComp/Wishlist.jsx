import { Link } from "react-router-dom";
import useWishData from "../../../Hook/useWishData";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../useAxiosPublic ";




const Wishlist = () => {
    

    const [wishData,refetch]= useWishData();

    console.log(wishData)
    const axiosPublic = useAxiosPublic();

    const handleDeleteWish= wish =>{
        console.log(wish)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then (async(result) => {
            if (result.isConfirmed) {
              const res = await axiosPublic.delete(`/ToWishlist/${wish._id}`)
              console.log(res.data)
              refetch();
              Swal.fire({
                title: "Deleted!",
                text:  `${wish.title} has been deleted`,
                icon: "success"
              });
            }
          });
    }
    console.log(wishData)

    return (
        <div className="w-3/4 my-7 ml-[300px]">
            <h1 className="text-5xl font font-bold text-center text-[#BC8664]">Wishlist</h1>
        {
            wishData.map(wish=>( <div className="w-4/5 mx-auto my-4" key={wish._id}>
                <div className=" rounded-lg bg-base-200 ">
                    <div className="flex px-4   items-center  flex-col gap-10 lg:flex-row ">
                        <img src={wish.image} className="max-w-sm rounded-lg shadow-2xl w-full" />
                        <div className="w-full">
                            <h1 className="text-4xl w-[350px]  text-[#BC8664] font font-bold mt-2">{wish.title}</h1>
                            <div className="">
                            <p className=" mt-3">{wish.location}</p>
                                <div className="flex gap-2 items-center  mt-2">
                                    <div>
                                    <img src={wish.agent_image} className="w-[70px] h-[65px] rounded-full border-2 border-[#BC8664]" alt="" />
                                    </div>
                                    <div>
                                    <p className="text-base font font-bold ">Agent Name: <span>{wish.agent_name}</span></p>
                                    <p className="text-[13px] font font-bold ">Wished Email: <span>{wish.wishedEmail}</span></p>
                                    </div>
                                </div>

                            </div>
                            
                                <div className=" flex gap-4">
                                <Link to={`makeoffer/${wish._id} `} className=" my-4 primaryBtn font"><span className="flex gap-2 items-center"><MdLocalOffer/>Make A Offer</span> </Link>
                                <button onClick={()=>handleDeleteWish(wish)} className=" my-4 primaryBtn font"> <span className="flex gap-2 items-center"><FaRegTrashCan></FaRegTrashCan>Remove</span> </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>))
        }
           
        </div>
    );
};

export default Wishlist;