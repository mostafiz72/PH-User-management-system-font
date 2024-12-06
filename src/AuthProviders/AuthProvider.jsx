import React, { createContext, useEffect, useState } from 'react'
import { app } from '../Firebase/firebase.config';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
const auth = getAuth(app);
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

export default function AuthProvider( { children } ) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);
  const [ userEmail, setUserEmail ] = useState("");
  console.log(user, userEmail);
  

  /// signUp with google functionality starting ------------------------------

   const signUpWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
   }

   /// SingOut user functionality starting ------------------------------

   const signOutUser = () => {
     setLoading(true);
    return signOut(auth);
   }

   const authInfo= {
    user,
    setUser,
    loading,
    setLoading,
    signUpWithGoogle,
    signOutUser,
    userEmail,
    setUserEmail,
    dark,
    setDark
   }


   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentuser)=>{
      setUser(currentuser)
      setLoading(false);
    })
    return ()=>{
      setUser(unsubscribe);
    }
   }, [])

  return (
    <>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </>
  )
}
