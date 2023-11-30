
import { useLoaderData } from "react-router-dom";
import Build from "../Tabs/Build";
import HomeBanner from "../HomeBanner/HomeBanner";


const Home = () => {
    const houses = useLoaderData();
    const advertisement = houses.filter(house => house.category === "Advertised")



    return (
        <>
        <HomeBanner/>
            <div className="container max-[425px]:mx-auto mx-auto my-8">
                <h1 className="lg:text-5xl max-[425px]:text-3xl my-20 text-[#C28864] font font-bold text-center">Featured Collections</h1>
                <div className='grid  lg:grid-cols-3 gap-4 md:grid-cols-1  max-[425px]:mx-auto'>
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