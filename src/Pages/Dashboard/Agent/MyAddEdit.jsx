import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProviders";
import { useContext } from "react";
import useMyAddedProo from "../../../Hook/useMyAddedProo";
import { useParams } from "react-router-dom";

const MyAddEdit = () => {
    const [items] = useMyAddedProo();
    console.log(items)
    const updateId = useParams();
    const updateItem = items.filter(item => item._id === updateId.id)
    console.log("updated item :", updateItem)

    const componentStyles = {
        outline: 'none',
        // other styles here
    };
    const { user } = useContext(AuthContext);
    const handleEdit = (event) => {
        event.preventDefault();

        const form = event.target;
        console.log(form);
        const image = form.image.value;
        const title = form.title.value;
        const agent_name = form.agent_name.value;
        const agent_image = form.agent_image.value;
        const location = form.location.value;
        const user_email = form.user_email.value;
        const Max_price = form.Max_price.value;
        const Min_Price = form.Min_Price.value;
        const category = form.category.value;

        const propertyData = { image, title, agent_name, agent_image, location, user_email, Max_price, Min_Price, category };
        console.log(propertyData);

        fetch(`https://assignment12-category-0010-server.vercel.app/item/${updateItem[0]._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(propertyData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Property Update successfully.",
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
                    <form onSubmit={handleEdit}>
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
                                    defaultValue={updateItem[0].image}

                                />
                            </div>

                            <div className="mb-[20px]">
                                <h6 className="text-[#000] text-[20px] font-normal mb-2 ">
                                    Title
                                </h6>
                                <input
                                    className="rounded-[10px] w-[300px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                    type="text"
                                    placeholder="title"
                                    name="title"
                                    defaultValue={updateItem[0].title}

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
                                    placeholder="Agent Name"
                                    name="agent_name"
                                    defaultValue={user.displayName}

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
                                    defaultValue={user.email}
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
                                    placeholder="Agent image"
                                    name="agent_image"
                                    defaultValue={user.photoURL}


                                />
                            </div>
                            <div >
                                <h6 className="text-[#000] text-[20px] font-normal mb-2">
                                    Location
                                </h6>
                                <input
                                    className="rounded-[10px] w-[300px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                    placeholder="Location "
                                    type="text"
                                    name="location"
                                    defaultValue={updateItem[0].location}

                                />
                            </div>
                        </div>

                        <div className="flex gap-[50px] mb-8">
                            <div className="mb-8">
                                <h6 className="text-[#000] text-[20px] font-normal mb-2">
                                    Max Price
                                </h6>
                                <input
                                    className="rounded-[10px] w-[300px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                    placeholder="Salary Range "
                                    type="number"
                                    name="Max_price"
                                    defaultValue={updateItem[0].Max_price}
                                    required
                                />
                            </div>
                            <div className="mb-8">
                                <h6 className="text-[#000] text-[20px] font-normal mb-2">
                                    Min Price
                                </h6>
                                <input
                                    className="rounded-[10px] w-[300px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                    placeholder="Salary Range "
                                    type="number"
                                    name="Min_Price"
                                    defaultValue={updateItem[0].Min_Price}


                                />
                            </div>

                        </div>
                        <div className="mb-8">
                            <h6 className="text-[#000] text-[20px] font-normal mb-2">
                                Category
                            </h6>
                            {/* <input
                                    className="rounded-[10px] w-[300px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                    placeholder="Category "
                                    type="text"
                                    name="category"
                                    
                                /> */}

                            <select style={componentStyles} className="select select-bordered font  "
                                name="category"
                                defaultValue={updateItem[0].category}
                            >
                                <option disabled selected>Property Type</option>
                                <option>Sale</option>
                                <option>Residential</option>
                                <option>Condos</option>
                                <option>Rent</option>
                                <option>Commercial</option>
                                <option>  Shop</option>
                                <option>  Apartment</option>
                                <option>  Advertised</option>
                            </select>
                        </div>





                        <div className="flex justify-center">
                            <button className="px-8 py-4 rounded-[30px] bg-[#BC8664] text-white font-semibold text-[18px]">
                                Update Property
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default MyAddEdit;