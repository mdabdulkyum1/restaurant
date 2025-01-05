import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import { auth } from './../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  
  

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  }
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  const logOut = () => {
    return signOut(auth);
  }
  

  useEffect(()=>{
    
    const unsubscribe = onAuthStateChanged(auth, currentUser=> {
      console.log("User >>>>",currentUser);
      setUser(currentUser)




      setLoading(false);
    })

    return ()=> { unsubscribe() }

  },[])
  
  
  
    const userInfo = {
      user, 
      loading,
      setUser,
      googleLogin,
      createUser,
      loginUser,
      logOut
    };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.element
}

export default AuthProvider;

