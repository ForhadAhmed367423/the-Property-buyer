
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Build from "../Tabs/Build";


const Home = () => {
    const houses = useLoaderData();
    const advertisement = houses.filter(house => house.category === "Advertised")



    return (
       <>
        <Banner></Banner>
        <div className="container mx-auto my-6 ">
            <h1 className="text-5xl my-10 text-[#C28864] font font-bold text-center">Featured Collections</h1>
        <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-1'>
                            {
                                advertisement.map(house => <Build
                                    key={house._id}
                                    house={house}
                                ></Build>)
                            }
                        </div>
        </div>

       </>

    );
};

export default Home;