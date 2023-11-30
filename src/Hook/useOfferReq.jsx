import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useOfferReq = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: offers = [] } = useQuery({
        queryKey: ['offers'],
        queryFn: async () => {
            const res = await axiosSecure.get("/offers")
            return res.data;
        }
    })
    return [offers, refetch]
};

export default useOfferReq;