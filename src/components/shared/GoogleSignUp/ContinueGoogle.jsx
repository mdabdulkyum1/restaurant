import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/GetAuthInfo/useAuth";
import { useNavigate } from 'react-router-dom';

const ContinueGoogle = () => {
    const {googleLogin} = useAuth();
    
    const navigate = useNavigate();


    const handelGoogleLogin = () => {
        googleLogin()
        .then((result) => {
            const user = result.user;
           if(user.email){
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