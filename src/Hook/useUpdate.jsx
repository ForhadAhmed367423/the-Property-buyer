import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUpdate = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: items = [], refetch } = useQuery({
        queryKey: ['item',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/item/:id`)
            return res.data;
        }
        
    })
    return [items,refetch]
};

export default useUpdate;