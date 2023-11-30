import { Link } from "react-router-dom";
import useMyAddedProo from "../../../Hook/useMyAddedProo";

const MyAddedProp = () => {
  const  [items] = useMyAddedProo(); 
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
                            <th>Agent email</th>
                            <th>Agent Name</th>
                            <th>offered price</th>
                            <th>Category</th>
                            <th>Update</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            items.map(item => <tr key={item._id} >

                                <td>
                                    {item.title}

                                </td>

                                <td>{item.location}</td>

                                <td>
                                {item.user_email}
                                </td>
                                <td>{item.agent_name}</td>


                                <td>${item.Max_price} - ${item.Min_Price}</td>

                                <td>{item.category}</td>


                                <td>
                                  <Link to={`myAddEdit/${item._id}`}>
                                  <button className="btn btn-xs">Update</button>
                                  </Link>
                                  
                                  </td>
                                
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyAddedProp;