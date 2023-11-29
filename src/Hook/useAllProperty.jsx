import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllProperty = () => {
    const axiosSecure = useAxiosSecure();
    const { data: items = [], refetch } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axiosSecure.get("/items")
            return res.data;
        }
        
    })
    return [items,refetch]
};

export default useAllProperty;