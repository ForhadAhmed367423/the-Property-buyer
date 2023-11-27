import { useContext } from "react";
import useAxiosPublic from "../useAxiosPublic ";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useOfferData = () => {
    const secure = useAxiosPublic();
    const {user} = useContext(AuthContext)
    const { refetch, data: offerData = [] } = useQuery({
        queryKey: ['offerlist', user?.email],
        queryFn: async () => {
            const res = await secure.get(`/offerlist?email=${user?.email}`)
            return res.data;
        }
    })
    return [offerData, refetch]
};

export default useOfferData;
