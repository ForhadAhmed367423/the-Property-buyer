
const HomeBanner = () => {
    return (
        <div className=" max-[425px]:w-full  relative lg:mt-8">
            <img className="rounded-2xl lg:h-[500px] max-[425px]:h-[300px] max-[425px]:w-full" src="https://i.ibb.co/TvJPTYP/home-Banner.jpg" alt="" />
            <div className="absolute top-1/4 max-[425px]:top-2.5 ml-8 ">
                <h1 className="font text-5xl max-[425px]:text-2xl text-white lg:mb-8 ">Sell Your Home With <br/>Confidence</h1>
                <p className="text-white text-base font lg:mb-5 max-[425px]:w-4/6">Are you curious about the precise value of your home or its <br/> potential selling price? Benefit from our extensive expertise in<br/> the luxury home market.</p>
                <button className="btn text-white px-12 hover:bg-[#BF7C53] btn-outline">Book Now</button>
            </div>
        </div>
    );
};

export default HomeBanner; 