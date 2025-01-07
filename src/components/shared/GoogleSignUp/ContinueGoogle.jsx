import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/GetAuthInfo/useAuth";
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from "../../../hooks/AxiosPublic/useAxiosPublic";
import Swal from 'sweetalert2'

const ContinueGoogle = () => {
    const {googleLogin} = useAuth();
    
    const navigate = useNavigate();

    const axiosPublic = useAxiosPublic();

    const handelGoogleLogin = () => {
        googleLogin()
        .then( async(result) => {
            const user = result.user;
            const userInfo = {
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL,
                role: "customer"
            }

        
            if(user?.email){

            const {data} = await axiosPublic.post(`/users`, userInfo);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            
            }
            navigate('/')
           }
          }).catch((error) => {
              console.log(error);;
          });
    }

    return (
            <button onClick={handelGoogleLogin} className="p-3 bg-gray-100 rounded-full shadow-lg">
                <FaGoogle className="text-red-500" size={24} />
              </button>
        
    );
};

export default ContinueGoogle;