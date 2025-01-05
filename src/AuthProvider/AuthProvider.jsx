import PropTypes from 'prop-types'
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  
  
  
  
  
  
  
  
  
    const userInfo = {};
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.element
}

export default AuthProvider;

