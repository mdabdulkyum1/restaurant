import { useQuery } from "@tanstack/react-query";
import useAuth from "../GetAuthInfo/useAuth";
import useAxiosSecure from "../AxiosSecure/useAxiosSecure";

const useCart = () => {

    const axiosSecure = useAxiosSecure();

    const {user} = useAuth();

    const {data: carts = [], refetch} = useQuery({
        queryKey: ["carts", user?.email],
        queryFn: async()=> {
            const {data} = await axiosSecure(`/carts?email=${user.email}`);
            return data;
        }
    })

    return {carts, refetch}
};

export default useCart;