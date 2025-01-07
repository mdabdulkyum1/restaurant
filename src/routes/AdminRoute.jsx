import PropTypes from 'prop-types'
import useAuth from './../hooks/GetAuthInfo/useAuth';
import { Navigate } from 'react-router-dom';

function AdminRoute({children}) {

    const {user, loading} = useAuth();
    
    

    if(loading){
        return <h1>loading....</h1>
    }

    if(user?.email){
        return children
    }

    return <Navigate to="/login"></Navigate>
}

AdminRoute.propTypes = {
    children: PropTypes.any
}

export default AdminRoute
