import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useOfferData = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext)
    const { refetch, data: offerData = [] } = useQuery({
        queryKey: ['offerlist', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/offerlist?email=${user?.email}`)
            return res.data;
        }
    })
    return [offerData, refetch]
};

export default useOfferData;
