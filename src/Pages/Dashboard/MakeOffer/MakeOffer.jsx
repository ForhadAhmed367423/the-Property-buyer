import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProviders";

const MakeOffer = () => {
    
useEffect(() => {
    document.title= "T.B.P| Make Offer";
  }, []);
    const { user } = useContext(AuthContext);
    const item = useLoaderData();
    const { agent_image, agent_name, title, image, location, wishedEmail } = item;
    console.log(item)

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        console.log(form);
        const image = form.image.value;
        const name = form.name.value;
        const agent_name = form.agent_name.value;
        const agent_image = form.agent_image.value;
        const location = form.location.value;
        const user_email = form.user_email.value;
        const price = form.price.value;
        const date = form.date.value;
        const userName = form.user_name.value;
        const status = 'pending'

        const propertyData = { image, name, agent_name, agent_image, location, user_email, price, date, userName, status };
        console.log(propertyData);

        fetch("https://assignment12-category-0010-server.vercel.app/makeoffer", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(propertyData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Offer added successfully.",
                        icon: "success",
                        confirmButtonText: "cool",
                    });
                }
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });

    }


    return (
        <div className="w-3/4  my-7 ml-[350px]">
            <div className="w-3/4 mx-auto">
                <h2 className="text-[60px] font text-center text-[#BC8664] mb-5  font-medium mb-[10px]">
                    Make a Offer
                </h2>
                <p className="text-[#000] text-center text-[18px] font-normal mb-[38px]">
                    Make your dream successful
                </p>
                <div className="bg-[#F6EEE1]  rounded-[10px] py-[60px] px-[60px]">
                    <form onSubmit={handleSubmit}>
                        <div className="flex gap-[50px] mb-8">
                            <div className="mb-[20px]">
                                <h6 className="text-[#000] text-[20px] font-normal mb-2">
                                    Image
                                </h6>
                                <input
                                    className="rounded-[10px] w-[300px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                    type="url"
                                    placeholder="image"
                                    name="image"
                                    defaultValue={image}
                                    readOnly
                                />
                            </div>

                            <div className="mb-[20px]">
                                <h6 className="text-[#000] text-[20px] font-normal mb-2 ">
                                    Title
                                </h6>
                                <input
                                    className="rounded-[10px] w-[300px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                    type="text"
                                    placeholder="name"
                                    name="name"
                                    defaultValue={title}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="flex gap-[50px] mb-8">

                            <div>
                                <h6 className="text-[#000] text-[20px] font-normal mb-2">
                                    Agent Name
                                </h6>
                                <input
                                    className="rounded-[10px] w-[300px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                    type="text"
                                    placeholder="Author Name"
                                    defaultValue={agent_name}
                                    name="agent_name" readOnly
                                />
                            </div>
                            <div >
                                <h6 className="text-[#000] text-[20px] font-normal mb-2">
                                    User Email
                                </h6>
                                <input
                                    className="rounded-[10px] w-[300px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                    placeholder="Salary Range "
                                    type="email"
                                    name="user_email"
                                    defaultValue={wishedEmail}
                                    readOnly
                                />
                                <input
                                    className="rounded-[10px] w-[300px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                    placeholder="Salary Range "
                                    type="email"
                                    name="user_name"
                                    defaultValue={user.displayName}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="flex gap-[50px] mb-8">

                            <div>
                                <h6 className="text-[#000] text-[20px] font-normal mb-2">
                                    Agent Image
                                </h6>
                                <input
                                    className="rounded-[10px] w-[300px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                    type="text"
                                    placeholder="Author image"
                                    name="agent_image" readOnly
                                    defaultValue={agent_image}
                                />
                            </div>
                            <div >
                                <h6 className="text-[#000] text-[20px] font-normal mb-2">
                                    Location
                                </h6>
                                <input
                                    className="rounded-[10px] w-[300px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                    placeholder="Salary Range "
                                    type="text"
                                    name="location"
                                    defaultValue={location}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="flex gap-[50px] mb-8">
                            <div className="">
                                <h6 className="text-[#000] text-[20px] font-normal mb-2">
                                    Property Posting Date
                                </h6>
                                <input
                                    className="rounded-[10px] w-[300px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                    type="date"
                                    name="date"

                                />
                            </div>
                            <div className="mb-8">
                                <h6 className="text-[#000] text-[20px] font-normal mb-2">
                                    Price range
                                </h6>
                                <input
                                    className="rounded-[10px] w-[300px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                    placeholder="Salary Range "
                                    type="number"
                                    name="price"
                                    required
                                />
                            </div>

                        </div>





                        <div className="flex justify-center">
                            <button className="px-8 py-4 rounded-[30px] bg-[#BC8664] text-white font-semibold text-[18px]">
                                Make a offer
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default MakeOffer;