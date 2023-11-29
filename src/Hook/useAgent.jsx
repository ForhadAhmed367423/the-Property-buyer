import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAgent = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data: isAgent, isPending: isAgentLoading } = useQuery({
        queryKey: [user?.email, 'isAgent'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/agent/${user.email}`)
            console.log(res.data?.agent)
            return res.data?.agent;
        }
    })
    return [isAgent, isAgentLoading]

};

export default useAgent;