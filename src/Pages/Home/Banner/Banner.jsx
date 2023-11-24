import "./Banner.css"
const Banner = () => {
    const componentStyles = {
        outline: 'none',
        // other styles here
    };
    return (
        <div className="bg-[#F9F8F3] flex justify-center items-center ">
            <div className="join my-24 ">
                <div>
                    <div className="">
                        <input style={componentStyles} className="input input-bordered font join-item " placeholder="Search by location" />
                    </div>
                </div>
                <select style={componentStyles} className="select select-bordered font  join-item">
                    <option disabled selected>Property Type</option>
                    <option>Commercial</option>
                    <option>Office</option>
                    <option>Residential</option>
                    <option>Shop</option>
                    <option>Apartment</option>
                    <option>  Studios</option>
                </select>
                <select style={componentStyles} className="select select-bordered join-item  font">
                    <option disabled selected>Sell or Rent</option>
                    <option>For Rent</option>
                    <option>For Sale</option>

                </select>
                <select style={componentStyles} className="select select-bordered join-item  font ">
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