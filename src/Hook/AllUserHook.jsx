import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const AllUserHook = () => {
    const axiosSecure = useAxiosSecure();
    const { data: user = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user')
            return res.data;
        }
        
    })
    return [user,refetch]
};

export default AllUserHook;