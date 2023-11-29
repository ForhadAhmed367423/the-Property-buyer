import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useProfile = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: oneUser = [], refetch } = useQuery({
        queryKey: ['oneUser',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/oneUser?email=${user?.email}`)
            return res.data;
        }
        
    })
    return [oneUser,refetch]
};

export default useProfile;