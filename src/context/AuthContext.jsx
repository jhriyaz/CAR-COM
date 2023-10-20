import PropTypes from "prop-types";
import {HelmetProvider } from 'react-helmet-async';
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider,GithubAuthProvider ,TwitterAuthProvider , signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";

export const AuthInfo = createContext(null);
const googleProvider=new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const AuthContext = ({ children }) => {
  let [user,setUser]=useState(null)
  let [loading,setLoading]=useState(true)
  let[cartItems,setCartItems]=useState(0)


const signInWithGoogle=()=>{

 return signInWithPopup(auth, googleProvider)
};
const signInWithGithub=()=>{

  return signInWithPopup(auth, gitProvider)
 };
const signInWithTwitter=()=>{

  return signInWithPopup(auth, twitterProvider)
 };
 const logOut=()=>{
  setLoading(true)
  return signOut(auth)
 }
let register=(email,password)=>{
  
  return createUserWithEmailAndPassword(auth, email, password)
}
let logIn=(email,password)=>{

  return signInWithEmailAndPassword(auth, email, password)
}
let updateProf=name=>{

  return updateProfile(auth.currentUser, {
    displayName: name
  })
}

useEffect(()=>{
const unSubscribe=onAuthStateChanged(auth,currentUser=>{
  setUser(currentUser)
  setLoading(false)

 
})
return ()=>{

  unSubscribe()
 
}
},[])

  return (<HelmetProvider>
    <AuthInfo.Provider value={{signInWithGoogle,signInWithGithub,signInWithTwitter,register,user,logOut,updateProf,loading,logIn,setLoading ,cartItems,setCartItems}}>{children}</AuthInfo.Provider>
  </HelmetProvider>)
};

AuthContext.propTypes = {
  children: PropTypes.node,
};
export default AuthContext;
