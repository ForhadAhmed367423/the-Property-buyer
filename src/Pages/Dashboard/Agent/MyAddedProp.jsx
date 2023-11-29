
const MyAddedProp = () => {
    return (
        <div className="w-3/4 ml-[300px] my-7 pl-20 ">
            <h1 className="text-5xl font font-bold text-center text-[#BC8664] mb-10">My Added Properties</h1>

            {/* <div>
            {
                offerData.map(offer=>(<div key={offer._id} className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Property Name</th>
                      <th>Location</th>
                      <th>Agent Name</th>
                      <th>Offered Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr className="hover">
                      <th> </th>
                      <td>{offer.name}</td>
                      <td>{offer.location}</td>
                      <td>{offer.agent_name}</td>
                      <td>{offer.price}</td>
                      <td>{offer?.status}</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>))
            }
           
            </div> */}
        </div>
    );
};

export default MyAddedProp;