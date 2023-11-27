import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useWishData = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext)
    const { refetch, data: wishData = [] } = useQuery({
        queryKey: ['addToWishlist', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/addToWishlist?email=${user?.email}`)
            return res.data;
        }
    })
    return [wishData, refetch]
};

export default useWishData;
