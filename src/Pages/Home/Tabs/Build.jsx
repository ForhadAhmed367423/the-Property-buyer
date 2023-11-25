import { GrFavorite } from "react-icons/gr";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Build = ({ house }) => {
    const { _id, image, title, location, agent_name, agent_image, status, price, category } = house;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <motion.div
                    className="box"
                    whileHover={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}>
                    <img className="relative " src={image} alt="Shoes" />
                </motion.div>
            </figure>
            <div className="flex items-center  absolute top-[165px] left-3 gap-64">
                <img src={agent_image} className="rounded-full h-16 w-16" alt="" />
                <button className="text-2xl text-white"> <GrFavorite /> </button>

            </div>
            <div className="absolute right-[15px] top-[15px]">
                <span className="badge px-4 bg-[#C28864] text-white border-none py-1">{category}</span>

            </div>
            <div className="card-body">
                <h2 className="hover:text-[#C28864]  card-title">{title}</h2>
                <p className="font text-lg font-semibold">{agent_name}</p>
                <div className="flex justify-between gap-3 mt-2">
                    <span className="badge border-[#C28864] w-[107px]">{status}</span>
                    <p>{location}</p>
                </div>
                <div className="card-actions ">
                    <p className="text-[#C28864] font font-bold text-lg">{price}</p>
                </div>
                <div className="card-actions justify-center mt-4 ">
                    <Link to={`/details/${_id}`} ><button className="primaryBtn btn-wide">Details</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default Build;