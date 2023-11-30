import useOfferData from "../../../Hook/useOfferData";

const Property = () => {
  const [offerData] = useOfferData();
  console.log(offerData)

  return (
    <div className="w-3/4 ml-[300px] my-7 pl-20 ">
      <h1 className="text-4xl font font-bold text-[#BC8664] text-center mb-14">My Added Properties</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>property title</th>
                            <th>Property Location</th>
                            <th>Agent Name</th>
                            <th>offered Price</th>
                            <th>Status</th>
                            <th>Pay</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            offerData.map(item => 
                              <tr className="hover" key={item._id}>
                              <td>{item.name}</td>
                              <td>{item.location}</td>
                              <td>{item.agent_name}</td>
                              <td>${item.price} </td>
                              <td>{item?.status}</td>
                              <td>{
                                item.status === 'Accepted' ? 
                                <button className="btn btn-xs bg-blue-500">Pay</button>:
                                "  "
                              }
                              </td>
                            </tr> )
                        }

                    </tbody>


                </table>
            </div>
        </div>
  );
};

export default Property;

