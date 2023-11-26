import { useLoaderData } from "react-router-dom";

const MakeOffer = () => {
    const item = useLoaderData();
    console.log(item)
    return (
        <div>
            <h1> offer page</h1>
            {/* title, location, agent_name, agent_image, status, price, category image,*/}
        </div>
    );
};

export default MakeOffer;