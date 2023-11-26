import { useContext } from "react";
import useAxiosPublic from "../useAxiosPublic ";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useWishData = () => {
    const secure = useAxiosPublic();
    const {user} = useContext(AuthContext)
    const { refetch, data: wishData = [] } = useQuery({
        queryKey: ['addToWishlist', user?.email],
        queryFn: async () => {
            const res = await secure.get(`/addToWishlist?email=${user?.email}`)
            return res.data;
        }
    })
    return [wishData, refetch]
};

export default useWishData;
