import { CiLocationOn } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { IoIosPrint } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';



const BuildDetails = () => {

    
    const item = useLoaderData();

    const { image, title, location, agent_name, agent_image, status, price, category } = item;


    return (
        <div className="bg-[#FAF9F8] ">
            <div className="flex justify-between gap-10 mx-8 ">
                <div>
                    <div className="flex my-6 gap-4">
                        <span className="badge px-4 bg-[#C28864] text-white border-none py-1">{category}</span>
                        <span className="badge px-4 bg-[#C28864] text-white border-none py-1">{status}</span>
                    </div>
                    <h1 className="text-4xl font font-bold">{title}</h1>

                    <div className="flex gap-2 items-center font font-semibold my-5">
                        <CiLocationOn />
                        <p>{location}</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font font-bold my-10 text-[#C28864]">{price}</h1>
                    <div className="flex gap-2 items-center justify-end">
                        <FaShareAlt />
                        <button className="">Share</button>
                        <GrFavorite />
                        <button>Favorite</button>
                        <IoIosPrint />
                        <button>Print</button>
                    </div>
                </div>
            </div>
            {/* Swiper section start */}
            <div className="flex justify-between gap-10 container mx-auto">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper w-1/2 rounded-lg"
                >
                    <SwiperSlide><img className="w-full" src={image} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full" src={image} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full" src={image} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full" src={image} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full" src={image} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full" src={image} alt="" /></SwiperSlide>

                </Swiper>

                <div className="w-2/4 bg-[#FFFFFF] p-4 rounded-lg">
                    <h2 className="text-center font-bold font text-lg my-5">Description</h2>
                    <p className="font font-semibold">Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer, full dining room, large living area, 3 spacious bedrooms and plenty of storage. Master bedroom includes both a standard closet and custom closet wall unit.Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood. This home features hardwood floors throughout, brand new bathrooms, newer EIK, modern front-load washer/dryer.</p>
                    <div className="flex justify-center ">
                        <button className="text-center btn ">        <span>Add To Wishlist</span> <GrFavorite /></button>

                    </div>
                </div>
            </div>
            {/* Swiper section ends */}

            <div>
                <div className="hero w-2/4 mx-auto rounded-lg my-10 bg-[#FFFFFF]">

                    <div>
                        <h1 className="text-3xl font font-bold text-center">Agent Details</h1>
                        <div className="hero-content flex-col lg:flex-row-reverse gap-24">
                            <img src={agent_image} className=" w-40  rounded-lg shadow-2xl" />
                            <div>

                                <p className="py-3 font font-semibold">Agent Name: {agent_name}</p>
                                <p className="py-3 font font-semibold">Location: {location}</p>
                                <p className="py-3 font font-semibold">Status: {status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    );
};

export default BuildDetails;