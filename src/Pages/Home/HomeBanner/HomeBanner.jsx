
const HomeBanner = () => {
    return (
        <div className="container mx-auto relative mt-8">
            <img className="rounded-2xl lg:h-[500px]" src="https://i.ibb.co/TvJPTYP/home-Banner.jpg" alt="" />
            <div className="absolute top-1/4 ml-8 ">
                <h1 className="font text-5xl  text-white mb-8 ">Sell Your Home With <br/>Confidence</h1>
                <p className="text-white text-base font mb-5 text-base">Are you curious about the precise value of your home or its <br/> potential selling price? Benefit from our extensive expertise in<br/> the luxury home market.</p>
                <button className="btn text-white px-12 hover:bg-[#BF7C53] btn-outline">Book Now</button>
            </div>
        </div>
    );
};

export default HomeBanner; 