
import { useEffect } from "react";
import Banner from "../Banner/Banner";
import BasicTabs from "../Tabs/Build";
import Aos from "aos";
import 'aos/dist/aos.css'
const Home = () => {
    useEffect(()=>{
        Aos.init();
    })
    
    return (
        <>
            <Banner></Banner>
            <div className="container mx-auto">
            <BasicTabs></BasicTabs>
            </div>
            




        </>

    );
};

export default Home;