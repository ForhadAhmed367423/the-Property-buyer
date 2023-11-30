import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center ">
            <div className="flex flex-col items-center justify-center">
                <img className="w-[600px] h-[500px]" src="https://i.ibb.co/D5HQSWh/9-SKB1a-SUCp.gif" alt="" />

                <div className="my-10 text-center">
                    <Link to={'/'}
                    
                    >
                     <button className="primaryBtn">Back to Home</button>    
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;