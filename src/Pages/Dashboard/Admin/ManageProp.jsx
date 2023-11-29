import useAllProperty from "../../../Hook/useAllProperty";

const ManageProp = () => {
    const [items] = useAllProperty();
    console.log(items)
    return (
        <div className="w-3/4 ml-[300px] my-7 pl-20 ">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Title</th>
                            <th>Location</th>
                            <th>Agent Image</th>
                            <th>Agent Name</th>
                            <th>Price Range</th>
                            <th>Verify</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            items.map(item => <tr key={item._id} >

                                <td>
                                    {item.title}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{item.category}</span>
                                </td>

                                <td>{item.location}</td>

                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.agent_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.agent_name}</td>

                                
                                <td>Max Price {item.Max_price} - Min Price {item.Min_Price}</td>
                                <th>
                                    <button className="btn bg-green-400 hover:bg-green-500  btn-xs">Verify</button>
                                </th>
                                <th>
                                    <button className="btn bg-red-600 text-white hover:bg-red-700 btn-xs">Reject</button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageProp;