import "./Banner.css"
const Banner = () => {
    const componentStyles = {
        outline: 'none',
        // other styles here
    };
    return (
        <div className="bg-[#F9F8F3] flex justify-center items-center max-[425px]:justify-center max-[425px]:container">
            <div className="join my-24 ">
                <div>
                    <div className="">
                        <input style={componentStyles} className="input input-bordered font join-item max-[425px]:w-[100px]" placeholder="Search by location" />
                    </div>
                </div>
                <select style={componentStyles} className="select select-bordered font  join-item max-[425px]:hidden">
                    <option disabled selected>Property Type</option>
                    <option>Commercial</option>
                    <option>Office</option>
                    <option>Residential</option>
                    <option>Shop</option>
                    <option>Apartment</option>
                    <option>  Studios</option>
                </select>
                <select style={componentStyles} className="select select-bordered join-item   font max-[425px]:hidden">
                    <option disabled selected>Sell or Rent</option>
                    <option>For Rent</option>
                    <option>For Sale</option>

                </select>
                <select style={componentStyles} className="select select-bordered join-item  font max-[425px]:w-[100px]">
                    <option disabled selected>Property Status</option>
                    <option>Listing</option>
                    <option>Active</option>
                    <option>Open</option>

                </select>
                <div className="indicator">
                    <button className="px-4 text-white font join-item bg-[#BC8664]">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;